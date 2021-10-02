Feature: Navigate to Product page

  Scenario: Landing EN User not logged

    Given user is at "https://www.tundra.com/search?q=*"
    When user check a product from Product component
    Then Products names, images and Sign up link are displayed, Product price and Add to cart is not show

  Scenario: Landing EN User logged

    Given user perform Scroll to the bottom of the page
    When user click the Load more product button
    Then Products names, images, prices  and Add to Cart button are displayed