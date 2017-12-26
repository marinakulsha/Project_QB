Feature: As a User I should go to 'FAQ' page and see some elements on page

  Scenario: Go to 'FAQ' page and see some elements

    When I go to 'home' page
    When I click 'FAQ_link' element
    Then I should see 'Frequently_Asked_Questions' element on page
    Then I should see 'FAQ_image' element on page
    Then I should see 'Who_are_Mojo_Mortgages' element on page
    Then I should see 'When_will_you_be_launching' element on page
    Then I should see 'Why_do_you_only_mention_remortgaging' element on page
    Then I should see 'Who_are_your_partners_Blenheim_Chalcot' element on page
    Then I should see 'How_can_I_contact_you' element on page
    Then I should see 'Why_should_I_sign_up_now’ element on page
    When I click 'arrow_up' element
    Then I should check 'div' element is not visible
    When I click 'arrow_down' element
    Then I should see 'div' element on page

