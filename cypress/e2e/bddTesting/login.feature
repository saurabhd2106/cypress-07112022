Feature: Login to Conduit Application

    This feature file tests the login to Application

    Background: Login to application
        Given Saurabh is a writer and has access to the conduit application

    Scenario: Login with correct credentials
        When Saurabh uses the credentials as "saurabh@fake.com" and "fake"
        Then Saurabh gets access to the application
    
    Scenario: Login with correct credentials as list
        When Saurabh uses the credentials as
            | saurabh@uptut.com |
            | admin@123         |
        Then Saurabh gets access to the application

    Scenario: Login with correct credentials as list
        When Saurabh uses the credentials as map
            | useremail    | saurabh@uptut.com |
            | userpassword | admin@123         |
        Then Saurabh gets access to the application

    Scenario: Login with correct credentials as list
        When Saurabh uses the credentials as vertical map
            | useremail         | userpassword |
            | saurabh@uptut.com | admin@123    |
        Then Saurabh gets access to the application

    Scenario Outline: Login with correct credentials as list
        When Saurabh uses the credentials as vertical map
            | useremail   | userpassword   |
            | <useremail> | <userpassword> |

        Then Saurabh gets access to the application

        Examples:
            | useremail         | userpassword |
            | saurabh@uptut.com | admin@123    |
            | saurabh@uptut.com | admin@123    |