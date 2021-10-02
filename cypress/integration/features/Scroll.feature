Feature: Scroll the page and load more products

  Scenario: Load more products

    Given user perform Scroll to the bottom of the page
    When user click the Load more product button
    Then more products are displayed on the page