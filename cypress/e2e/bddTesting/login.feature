Feature: Login to Conduit Application

    This feature file tests the login to Application

    Background: Login to application
        Given Saurabh is a writer and has access to the conduit application

    Scenario: Login with correct credentials
        When Saurabh uses the credentials as "saurabh@fake.com" and "fake"
        Then Saurabh gets access to the application