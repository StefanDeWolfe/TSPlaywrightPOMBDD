@login-gui
Feature: Login
As a user I want to be able to login with valid 
credentials and fail to login without them.

@valid_creds
Scenario Outline: Login as a standard user
    Given The user navigates to the login page
    When The user enters "<username>" and "<password>"
    Then The Products page is displayed
Examples: 
    | username | password |
    | standard_user | secret_sauce |
    | problem_user | secret_sauce |
    | performance_glitch_user | secret_sauce |

@invalid_creds
Scenario Outline: The user fails to login
    Given The user navigates to the login page
    When The user enters "<username>" and "<password>"
    Then The Login page is displayed
    Then The "<errorMessage>" error is displayed
Examples: 
    | username | password | errorMessage |  
    | locked_out_user | secret_sauce | lockedout |
    | bad_user_name | secret_sauce | badUsernamePassword |
    | standard_user | bad_password | badUsernamePassword |