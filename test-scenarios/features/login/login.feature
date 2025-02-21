@login
Feature: Login
As a user I want to be able to login with valid 
credentials and fail to login without them.

@valid_creds
Scenario Outline: Login as a standard user
    Given The user navigates to the login page
    When The user enters in "<username>" and "<password>"
    Then The Products page is displayed
Examples: 
| username | password |
| standard_user | secret_sauce |

Scenario Outline: The user fails to login
    Given The user navigates to the login page
    When The user enters in <username> and <password>
    Then The <errorMessage> error is displayed
Examples: 
| username | password | errorMessage |  
| locked_out_user | secret_sauce | lockedout |