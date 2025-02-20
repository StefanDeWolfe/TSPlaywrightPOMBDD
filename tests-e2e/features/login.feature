Feature: Login
As a user I want to be able to login

Scenario Outline: Login as a standard user
    Given The user navigates to the login page
    When The user enters in <username> and <password>
    Then The <webPage> is displayed
Examples: 
| username | password | webPage |
| standard_user | secret_sauce | Products |