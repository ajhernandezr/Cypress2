Feature: User Login

  Scenario: User login with correct credentials

    Given user is at "https://www.tundra.com/search?q=*"
    When user click the Login button
    And enter the credentials
    Then user initials are displayed on the page