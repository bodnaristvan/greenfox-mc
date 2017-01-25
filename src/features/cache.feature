Feature: Cache service

  As a user I want to be able to get, set and increment
  a value in a cache service

  Scenario: I request a non existing key from cache
  Given There's no such key as "testkey"
  When I request the key "testkey"
  Then I get a null response

  Scenario: I request a existing key from cache
  Given I set cache key "testkey" to "666"
  When I request the key "testkey"
  Then I get a "666" response

  Scenario: I increment an existing key in cache
  Given I set cache key "testkey" to "666"
  Given I increment cache key "testkey" by "1"
  When I request the key "testkey"
  Then I get a "667" response

  Scenario: I increment a non-existing key in cache
  Given There's no such key as "testkey"
  Given I increment cache key "testkey" by "1"
  When I request the key "testkey"
  Then I get a "1" response

  Scenario: I increment an existing non-numeric key in cache
  Given I set cache key "testkey" to "test"
  Given I increment cache key "testkey" by "1"
  When I request the key "testkey"
  Then I get an error response
