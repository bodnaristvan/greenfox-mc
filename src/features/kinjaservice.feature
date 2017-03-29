Feature: Kinjaservice
	As a developer i expect to get Post models from the service

Scenario: Get a post from the API
When I request the post "12345"
Then the result is a Post model instance
