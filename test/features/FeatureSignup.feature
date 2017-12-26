Feature: As a User I am able to input incorrect message, input email is already subscribed to list Mojo

  Scenario: Should input incorrect email and want to get error message
    When I go to 'home' page
    When I click 'signup' element
    Then I should see 'Sign_up_for_your_remortgage_reminder' element on page
    When I input into 'your_email' field the value 'marina.com'
    Then I should see 'Please_enter_a_valid_email_address' element on page

  Scenario: Should input email is already subscribed to list Mojo
    When I input into 'your_email' field the value 'marina@belgradeteam.com'
    When I input into 'your_name' field the value 'Marina'
    When I input into 'mortgage_end_day' field the value '01012018'
    When I click 'yes_optionbutton' element
    When I press 'ENTER' button
    Then I should see 'error_message' element on page
    When I click 'Click_here_to_update_your_profile' element
    Then I should see 'Email_Sent' element on page


