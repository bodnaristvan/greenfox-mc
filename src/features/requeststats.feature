Feature: Request Stats service
  As a sysadmin I want to be able to
  see request statistics

  Scenario: Recalculate the requests
    Given the system get an Incoming request
    When the system recalculate the requests
    Then I see "1" for "totalIncomingRequests" in the statistics
