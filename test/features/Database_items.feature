Feature: As a User I should go to 'databaseitems' page, add new item, edit item, obsolete item

Scenario: I Should go to Databaseitems page, add new Part item, delete this item, add new Accessory, delete new Accessory

  When I go to 'login' page
  When I input into 'username' field the value 'marina'
  When I input into 'password' field the value 'marina1!'
  When I click 'login_btn' element
  Then I should see 'title_product_activity' element on page
  When I click 'setup_btn' element
  When I go to 'items' page
  When I click 'database_btn' element
  Then I should see 'title_manage_database_items' element on page 
  Then I should see 'title_manage_database_items' element on page 
  When I click 'add_btn_1' element
  Then I should see 'title_add_item' element on page
  When I input into 'new_item' field the value 'name_part'
  When I click 'select_dropdown' element
  When I select 'select_option' option from 'select_alloptions'
  # When I scroll the page to 'base_description' element
  When I input into 'base_description' field the value 'test1'
  When I input into 'description_1' field the value 'test1'
  When I input into 'description_2' field the value 'test1'
  When I input into 'salesorder_description' field the value 'test1'
  When I input into 'list_price' field the value '55'
  When I input into 'end_user_price' field the value '55'
  When I input into 'level_3' field the value '55'
  When I input into 'level_2' field the value '55'
  When I input into 'level_1' field the value '55'
  When I input into 'commission' field the value '55'
  When I input into 'unit_cost' field the value '55.5'
  When I click 'save_btn' element
  Then I should see 'title_completed' element on page
  When I click 'compl_OK_btn' element
  Then I should see 'title_confirmation' element on page
  When I click 'conf_No_btn' element
  Then I should see 'title_manage_database_items' element on page
  Then I should see 'title_manage_database_items' element on page
  When I click 'part_dropdown_PC' element
  When I select 'select_option' option from 'select_alloptions'
  Then I should see 'added_item' element on page
  When I click 'added_item' element
  When I click 'obsolete_btn' element
  Then I should see 'title_conf_delete' element on page
  When I click 'obsolete_conf_btn' element
  Then I should see 'title_manage_database_items' element on page 

 When I click 'clear_filter' element
 When I click 'item_type' element
 When I select 'select_type' option from 'select_alltypes'
 Then I should see 'add_btn' element on page
 When I click 'add_btn' element
 Then I should see 'title_add_item' element on page
 Then I should see 'new_acc_input' element on page
 When I input into 'new_acc_input' field the value 'name_accessory'
 When I click 'select_PC_dropdown' element
 When I select 'select_PC' option from 'select_PCs'
 When I press 'ESCAPE' button
 Then I should see 'title_add_item' element on page
 Then I should see 'title_add_item' element on page
 # When I scroll the page to 'base_description_acc' element
 When I click 'pricepage_select' element
 When I select 'select_pagesection' option from 'select_allpagesection'
 When I input into 'base_description_acc' field the value 'test2'
 When I input into 'sub_description' field the value 'test2'
 When I input into 'salesorder_description_acces' field the value 'test2'
 When I input into 'list_price_access' field the value '44'
 When I input into 'end_user_price_access' field the value '44'
 When I input into 'level_3_access' field the value '44'
 When I input into 'level_2_access' field the value '44'
 When I input into 'level_1_access' field the value '44'
 When I input into 'commission_access' field the value '44'
 When I input into 'unit_cost_access' field the value '44.4'
 When I click 'save_btn' element
 Then I should see 'title_completed_acc' element on page
 When I click 'compl_OK_btn_acc' element
 Then I should see 'title_confirmation_acc' element on page
 When I click 'conf_No_btn_acc' element
 Then I should see 'title_manage_database_items' element on page
 Then I should see 'title_manage_database_items' element on page
 Then I should see 'title_manage_database_items' element on page
 When I click 'item_type' element
 When I select 'select_type' option from 'select_alltypes'
 When I click 'acc_dropdown_PC' element
 When I select 'select_All' option from 'select_PC_acc_options'
 When I select 'select_acc_PC' option from 'select_PC_acc_options'
 When I press 'ESCAPE' button
 When I press 'ESCAPE' button
 Then I should see 'added_access' element on page
 When I click 'added_access' element
 When I click 'obsolete_btn' element
 Then I should see 'title_conf_delete_acc' element on page
 When I click 'obsolete_conf_btn_acc' element
 Then I should see 'title_manage_database_items' element on page 
 When I click 'hello_user_btn' element
 When I click 'logout_btn' element
 Then I should get 'title_quote_builder' title

Scenario: I Should go to Databaseitems page, add new Part, edit cost, sell Prices, full description, delete this Part item

  When I go to 'login' page
  When I input into 'username' field the value 'marina'
  When I input into 'password' field the value 'marina1!'
  When I click 'login_btn' element
  Then I should see 'title_product_activity' element on page
  When I click 'setup_btn' element
  When I go to 'items' page
  When I click 'database_btn' element
  Then I should see 'title_manage_database_items' element on page 
  Then I should see 'title_manage_database_items' element on page
  Then I should see 'title_manage_database_items' element on page
  When I click 'add_btn_edit' element
  Then I should see 'title_add_item' element on page
  When I input into 'new_item' field the value 'name_part_edit'
  When I click 'select_dropdown' element
  When I select 'select_option' option from 'select_alloptions'
  When I input into 'base_description' field the value 'test_edit'
  When I input into 'description_1' field the value 'test_edit'
  When I input into 'description_2' field the value 'test_edit'
  When I input into 'salesorder_description' field the value 'test_edit'
  When I input into 'list_price' field the value '55'
  When I input into 'end_user_price' field the value '55'
  When I input into 'level_3' field the value '55'
  When I input into 'level_2' field the value '55'
  When I input into 'level_1' field the value '55'
  When I input into 'commission' field the value '55'
  When I input into 'unit_cost' field the value '55.5'
  When I click 'save_btn' element
  Then I should see 'title_completed' element on page
  When I click 'compl_OK_btn' element
  Then I should see 'title_confirmation' element on page
  When I click 'conf_No_btn' element
  Then I should see 'title_manage_database_items' element on page
  Then I should see 'title_manage_database_items' element on page
  When I click 'part_dropdown_PC' element
  When I select 'select_option' option from 'select_alloptions'

  Then I should see 'added_item_edit' element on page
  When I click 'added_item_edit' element  
  When I click 'cost_btn' element
  Then I should see 'edit_item_pricing' element on page
  When I click 'select_bucket_edit' element
  When I select 'bucket_1' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '551'
  When I input into 'level2_edit' field the value '551'
  When I input into 'level3_edit' field the value '551'
  When I input into 'EndUserPrice_edit' field the value '551'
  When I input into 'listprice_edit' field the value '551'
  When I input into 'commission_edit' field the value '51.00'
  When I input into 'cost_price' field the value '551'
When I click 'select_bucket_edit' element
  When I select 'bucket_2' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '552'
  When I input into 'level2_edit' field the value '552'
  When I input into 'level3_edit' field the value '552'
  When I input into 'EndUserPrice_edit' field the value '552'
  When I input into 'listprice_edit' field the value '552'
  When I input into 'commission_edit' field the value '52.00'
  When I input into 'cost_price' field the value '552'
When I click 'select_bucket_edit' element
  When I select 'bucket_3' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '553'
  When I input into 'level2_edit' field the value '553'
  When I input into 'level3_edit' field the value '553'
  When I input into 'EndUserPrice_edit' field the value '553'
  When I input into 'listprice_edit' field the value '553'
  When I input into 'commission_edit' field the value '53.00'
  When I input into 'cost_price' field the value '553'
When I click 'select_bucket_edit' element
  When I select 'bucket_4' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '554'
  When I input into 'level2_edit' field the value '554'
  When I input into 'level3_edit' field the value '554'
  When I input into 'EndUserPrice_edit' field the value '554'
  When I input into 'listprice_edit' field the value '554'
  When I input into 'commission_edit' field the value '54.00'
  When I input into 'cost_price' field the value '554'
When I click 'select_bucket_edit' element
  When I select 'bucket_5' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '555'
  When I input into 'level2_edit' field the value '555'
  When I input into 'level3_edit' field the value '555'
  When I input into 'EndUserPrice_edit' field the value '555'
  When I input into 'listprice_edit' field the value '555'
  When I input into 'commission_edit' field the value '55.00'
  When I input into 'cost_price' field the value '555'
When I click 'select_bucket_edit' element
  When I select 'bucket_6' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '556'
  When I input into 'level2_edit' field the value '556'
  When I input into 'level3_edit' field the value '556'
  When I input into 'EndUserPrice_edit' field the value '556'
  When I input into 'listprice_edit' field the value '556'
  When I input into 'commission_edit' field the value '56.00'
  When I input into 'cost_price' field the value '556'  
When I click 'select_bucket_edit' element
  When I select 'bucket_7' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '557'
  When I input into 'level2_edit' field the value '557'
  When I input into 'level3_edit' field the value '557'
  When I input into 'EndUserPrice_edit' field the value '557'
  When I input into 'listprice_edit' field the value '557'
  When I input into 'commission_edit' field the value '57.00'
  When I input into 'cost_price' field the value '557'
When I click 'select_bucket_edit' element
  When I select 'bucket_8' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '558'
  When I input into 'level2_edit' field the value '558'
  When I input into 'level3_edit' field the value '558'
  When I input into 'EndUserPrice_edit' field the value '558'
  When I input into 'listprice_edit' field the value '558'
  When I input into 'commission_edit' field the value '58.00'
  When I input into 'cost_price' field the value '558'
When I click 'select_bucket_edit' element
  When I select 'bucket_9' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '559'
  When I input into 'level2_edit' field the value '559'
  When I input into 'level3_edit' field the value '559'
  When I input into 'EndUserPrice_edit' field the value '559'
  When I input into 'listprice_edit' field the value '559'
  When I input into 'commission_edit' field the value '59.00'
  When I input into 'cost_price' field the value '559'
 When I click 'select_bucket_edit' element
  When I select 'bucket_10' option from 'select_allbuckets'
  When I input into 'level1_edit' field the value '560'
  When I input into 'level2_edit' field the value '560'
  When I input into 'level3_edit' field the value '560'
  When I input into 'EndUserPrice_edit' field the value '560'
  When I input into 'listprice_edit' field the value '560'
  When I input into 'commission_edit' field the value '60.00'
  When I input into 'cost_price' field the value '560'
  Then I should see 'edit_item_pricing' element on page

  When I click 'update_cost_edit' element
  Then I should see 'title_completed_edit' element on page
  When I click 'compl_OK_btn_edit' element
  Then I should see 'title_manage_database_items' element on page 

  Then I should see 'added_item_edit' element on page
  When I click 'added_item_edit' element  
  When I click 'all_descr_edit' element  
  Then I should see 'edit_item_description' element on page 
  When I input into 'basedescript_edit' field the value 'test_descr_edit1'
  When I input into 'description1_edit' field the value 'test_descr_edit1'
  When I input into 'description2_edit' field the value 'test_descr_edit1'
  When I input into 'salesorderdescr_edit' field the value 'test_descr_edit1'
  When I click 'updatedescr_btn_edit' element  
  Then I should see 'title_completed_edit' element on page
  When I click 'compl_OK_btn_edit' element
  Then I should see 'title_manage_database_items' element on page 
  Then I should see 'added_item_edit' element on page
  When I click 'added_item_edit' element
  When I click 'obsolete_btn' element
  Then I should see 'title_conf_delete_edit' element on page
  When I click 'obsolete_conf_btn' element
  Then I should see 'title_manage_database_items' element on page 
  When I click 'hello_user_btn' element
  When I click 'logout_btn' element
  Then I should get 'title_quote_builder' title



Scenario: I Should go to Databaseitems page, add new Accessory, edit cost, sell Prices, full description, delete this Accessory