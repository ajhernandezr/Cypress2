Feature: Adding products to cart from

  Scenario: Add to cart

    Given user logged in Tundra
    When user check a product from Product component
    And select the default quantity for that product
    And then user add the product to the cart
    Then the Product added to cart! message is displayed

  Scenario Outline: Any product Negative case

    Given user logged in Tundra
    When user check a product from Product component
    And select invalid <quantity> for that product
    And select invalid <quantity> for that product

    Then a message indicating the minimum is displayed
    Examples:
      | quantity |
      | 0        |
      | ?        |

  Scenario: Product with Options

    Given user logged in Tundra
    When user check a product from Product component
    And click on select options
    Then the Selected Product Information is displayed
    And quantity and pricing options are visible