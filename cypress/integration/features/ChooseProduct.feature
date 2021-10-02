Feature: Selecting Products in Product component

  Scenario: Any product User logged

    Given user logged in Tundra
    When user click on a product from Product component
    Then the Selected Product Information is displayed
    And quantity and pricing options are visible

  Scenario: Any product User not logged

    Given user not logged in Tundra
    When user click on a product from Product component
    Then the Selected Product Information is displayed
    And Sign up section is displayed