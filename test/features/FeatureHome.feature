Feature: As a User I should go to 'home' page, find some elements on page and use Acquisition tools

  Scenario: Should go to 'home' page and see some elements
    When I go to 'home' page
    Then I should see 'main_title' element on page
    When I click 'gotit' element
    # When I click 'signup' element    
    # Then I should see 'home_image' element on page
    When I click 'CTA_meet' element
    Then I should see 'title_mortgage_advizer' element on page
    # When I scroll the page to 'get_remortgage_reminder' element
    Then I should see 'get_remortgage_reminder' element on page
    Then I should see 'Get_your_free_Mortgage_Personality' element on page
    Then I should see 'A_better_way_to_remortgage' element on page
    Then I should see 'your_journey' element on page
    Then I should see 'your_profile' element on page
    Then I should see 'your_tools' element on page
    Then I should see 'your_mortgage' element on page
    Then I should see 'Company' element on page
    Then I should see 'Information' element on page
    Then I should see 'Legal' element on page
    Then I should see 'Careers' element on page
    Then I should see 'Contact Us' element on page
    Then I should see 'Press' element on page
    When I scroll the page to 'about_footer' element
    When I click 'about_footer' element
    Then I should get 'Meet Dynamo_title' title
    When I scroll the page to 'FAQs_footer' element
    When I click 'FAQs_footer' element
    Then I should get 'FAQs_title' title
    When I scroll the page to 'Privacy_Policy' element
    When I click 'Privacy_Policy' element
    Then I should get 'Privacy_Policy_title' title
    When I click 'logo' element



  @Monthly_saver
  Scenario: Should click the 'Letstarted’ button and get mortgage personality - Monthly Saver
   
    When I scroll the page to 'Letstarted' element
    When I click 'Letstarted' element
    Then I should see 'Your_mindset_window' element on page
    #When I click 'back' element
    #When I click 'Letstarted' element
    Then I should see 'question_1' element on page
    When I click 'worried' element
    Then I should see 'question_2' element on page
    When I click 'moving in the next 2 years' element
    Then I should see 'question_3' element on page
    When I click 'No_plans' element
    Then I should see 'question_4' element on page
    When I click 'a_period_of_unemployment' element
    Then I should see 'question_5' element on page
    When I click 'going_part-time' element
    Then I should see 'question_6' element on page
    When I click 'money_is_tight' element
    Then I should see 'question_7' element on page
    When I click 'getting_married' element
    Then I should see 'question_8' element on page
    When I click 'A_lot_of_debt' element
    Then I should see 'question_9' element on page
    When I click 'significant amount in savings' element
    Then I should see 'question_10' element on page
    When I click 'no_thanks' element
    Then I should see 'monthly_saver' element on page
    When I click 'See_results' element
    Then I should see 'Want_to_lower_your_monthly_repayments?' element on page
    When I scroll the page to 'Finding_introductory_period' element
    When I click 'Finding_introductory_period' element
    When I click 'Increasing_your_mortgage_term' element
    When I click 'Consider_a_fixed-rate_mortgage' element
    When I click 'Get_my_Report' element
    When I click 'Close_get_my_Report' element
    When I click 'logo' element
    Then I should see 'main_title' element on page
    


  @Stable_fixer
  Scenario: Should click the 'Letstarted’ button and get mortgage personality - Stable Fixer
    When I scroll the page to 'Letstarted' element
    When I click 'Letstarted' element
    Then I should see 'Your_mindset_window' element on page
    Then I should see 'question_1' element on page
    When I click 'fine' element
    Then I should see 'question_2' element on page
    When I click 'staying for more than 5 years' element
    Then I should see 'question_3' element on page
    When I click 'No_plans' element
    Then I should see 'question_4' element on page
    When I click 'a_period_of_unemployment' element
    Then I should see 'question_5' element on page
    When I click 'retiring earlier than planned' element
    Then I should see 'question_6' element on page
    When I click 'I am comfortable' element
    Then I should see 'question_7' element on page
    When I click 'I want to go traveling' element
    Then I should see 'question_8' element on page
    When I click 'I dont have any debt' element
    Then I should see 'question_9' element on page
    When I click 'I dont have any savings' element
    Then I should see 'question_10' element on page
    When I click 'Whatever gets me the best deal' element
    Then I should see 'Stable_Fixer' element on page
    When I click 'See_results' element
    Then I should see 'Want_to_get_more_stability' element on page
    When I click 'Fixed or Variable' element
    When I click 'Consider a long introductory period (for stability)' element
    Then I should see 'Close_button' element on page
    When I click 'Close_button' element
    Then I should see 'Stable_Fixer' element on page
    When I click 'logo' element
    Then I should see 'main_title' element on page


  @Big_planner
  Scenario: Should click the 'Letstarted’ button and get mortgage personality - Big Planner
    When I scroll the page to 'Letstarted' element
    When I click 'Letstarted' element
    Then I should see 'Your_mindset_window' element on page
    Then I should see 'question_1' element on page
    When I click 'worried' element
    Then I should see 'question_2' element on page
    When I click 'stay here for the next 2_5 years' element
    Then I should see 'question_3' element on page
    When I click 'Major_renovations_or_extensions' element
    Then I should see 'question_4' element on page
    When I click 'household_income_stay_the same' element
    Then I should see 'question_5' element on page
    When I click 'Thinking_of_retiring_earlier_than_planned' element
    Then I should see 'question_6' element on page
    When I click 'as long as nothing changes' element
    Then I should see 'question_7' element on page
    When I click 'Nope_nothing_major' element
    Then I should see 'question_8' element on page
    When I click 'I_am_paying_it_off_regularly' element
    Then I should see 'question_9' element on page
    When I click 'significant amount in savings' element
    Then I should see 'question_10' element on page
    When I click 'Whatever gets me the best deal' element
    Then I should see 'Big_Planner' element on page
    When I click 'See_results' element
    Then I should see 'Want_to_make_your_big_plans_possible' element on page
    When I click 'Borrowing more on your remortgage' element
    When I click 'Fixed_or_Variable_BP' element
    Then I should see 'Close_button' element on page
    When I click 'Close_button' element
    Then I should see 'Big_Planner' element on page
    When I click 'logo' element
    Then I should see 'main_title' element on page

  @Debt_easer
  Scenario: Should click the 'Letstarted’ button and get mortgage personality - Debt Easer
    When I scroll the page to 'Letstarted' element
    When I click 'Letstarted' element
    Then I should see 'Your_mindset_window' element on page
    Then I should see 'question_1' element on page
    When I click 'worried' element
    Then I should see 'question_2' element on page
    When I click 'stay here for the next 2_5 years' element
    Then I should see 'question_3' element on page
    When I click 'No_plans' element
    Then I should see 'question_4' element on page
    When I click 'A drop in household income of 20% or more' element
    Then I should see 'question_5' element on page
    When I click 'Thinking of retiring earlier than planned' element
    Then I should see 'question_6' element on page
    When I click 'as long as nothing changes' element
    Then I should see 'question_7' element on page
    When I click 'I want to go traveling' element
    Then I should see 'question_8' element on page
    When I click 'I_am_paying_it_off_regularly' element
    Then I should see 'question_9' element on page
    When I click 'I dont have any savings' element
    Then I should see 'question_10' element on page
    When I click 'Whatever gets me the best deal' element
    Then I should see 'Debt_Easer' element on page
    When I click 'See_results' element
    Then I should see 'Want to make your debt more manageable' element on page
    Then I should see 'Lowering your monthly repayments' element on page
    When I click 'Borrowing more on your remortgage (and managing your debt)' element
    When I click 'Fixed or Variable_DE' element
    Then I should see 'Close_button' element on page
    When I click 'Close_button' element
    Then I should see 'Debt_Easer' element on page
    When I click 'logo' element
    Then I should see 'main_title' element on page

  @Flexible_changer
  Scenario: Should click the 'Letstarted’ button and get mortgage personality - Flexible Changer
    When I scroll the page to 'Letstarted' element
    When I click 'Letstarted' element
    Then I should see 'Your_mindset_window' element on page
    Then I should see 'question_1' element on page
    When I click 'worried' element
    Then I should see 'question_2' element on page
    When I click 'moving in the next 2 years' element
    Then I should see 'question_3' element on page
    When I click 'Minor upkeep but no major investments' element
    Then I should see 'question_4' element on page
    When I click 'A pay rise of 20% or more' element
    Then I should see 'question_5' element on page
    When I click 'Changing job or employer' element
    Then I should see 'question_6' element on page
    When I click 'as long as nothing changes' element
    Then I should see 'question_7' element on page
    When I click 'Nope_nothing_major' element
    Then I should see 'question_8' element on page
    When I click 'I dont have any debt' element
    Then I should see 'question_9' element on page
    When I click 'I dont have any savings' element
    Then I should see 'question_10' element on page
    When I click 'Whatever gets me the best deal' element
    Then I should see 'Flexible Changer' element on page
    When I click 'See_results' element
    Then I should see 'Want to get more flexibility' element on page
    Then I should see 'Consider a short introductory term (and flexible features)' element on page
    When I click 'Fixed or Variable_FC' element
    Then I should see 'Close_button' element on page
    When I click 'Close_button' element
    Then I should see 'Flexible Changer' element on page
    When I click 'logo' element
    Then I should see 'main_title' element on page