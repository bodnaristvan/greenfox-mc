Feature: Request recalculator service
  As a developer I want to be able to
  recalculate the number of requests in
  the cache based on the data in the database

  Scenario: Recalculate the number of requests
    Given the cache is not empty
    And I add a request to the store
    When I call the recalculate service
    Then I see "1" request in the cache
