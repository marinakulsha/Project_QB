Feature: As a User I should go to 'careers' page

  Scenario: Go to 'careers' page and see some elements

    When I go to 'home' page
    When I click 'careers_link' element
    Then I should see 'mojo_icon' element on page
    Then I should see 'Central_Operations' element on page
    Then I should see 'Customer_Services' element on page
    Then I should see 'Digital_UX_Design' element on page
    Then I should see 'IT_Infrastructure' element on page
    Then I should see 'Marketing_Comms' element on page
    Then I should see 'Product_Management' element on page
    Then I should see 'Software_Engineering' element on page

