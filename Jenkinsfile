pipeline {
    agent any

  tools {nodejs "node17"}

    // environment {
    //     CHROME_BIN = '/bin/google-chrome'
    // }

    stages {
        stage('Dependencies') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/ajhernandezr/Cypress2.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Unit test'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run cy:runTest'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
         post {
            always {
                  sh 'npm run report:generate'
                  publishHTML([allowMissing:true, alwaysLinkToLastBuild: true, keepAll: false, reportDir:'', reportFiles: 'output.html', reportName: 'Cypress Report', reportTitles: ''])
         }
    }
  }
