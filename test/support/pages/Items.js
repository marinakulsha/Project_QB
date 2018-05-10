let inheritance = require('./../inheritance');
let Page = require('./page');
let Items = function () {
};
inheritance.inherits(Page, Items);


Items.prototype.url = 'https://qb-stage.aisnovations.com/admin/company-info';

Items.prototype.data = {
    'title_product_activity': {
        selector: element.all(by.xpath('//*[@id="dashboard"]/div[1]/qb-product-activity/mat-card/div[1]/span')),
        elText:'Product Activity',
        index: 0
    },

    'setup_btn': {
        selector: element.all(by.xpath('//*[@id="layout"]/qb-sidenav/div/perfect-scrollbar/div/div[1]/div/nav/qb-sidebar-menu/div/div[2]/div[12]/qb-sidebar-menu-item/div/a/mat-icon')),
        index: 0
    },

    'database_btn': {
        selector: element.all(by.xpath('//*[@id="layout"]/qb-sidenav/div/perfect-scrollbar/div/div[1]/div/nav/qb-sidebar-menu/div/div[1]/div[9]/qb-sidebar-menu-item/div/a')),
        index: 0
    },

    'title_manage_database_items': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[2]/div/div/div[1]/span')),
        index: 0
    },

    'add_btn': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[2]/div/div/div[3]/button[1]')),
        index: 0
    },

    'title_add_item': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-database-item-editor/main/div')),
        index: 0
    },

    'new_item': {
        selector: element.all(by.xpath(".//input[@placeholder='New Part Number (Replacement)']")),
        index: 0
    },

    'select_dropdown': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-database-item-editor/main/form/div[2]/section[1]/div[1]/mat-form-field/div')),
        index: 0
    },

    'select_option': {
        selector: by.className('mat-option ng-star-inserted'),
        index: 0,
        elName: 'TESTMAR'
    },

    'select_alloptions': {
        selector: element.all(by.className('mat-select-content ng-trigger ng-trigger-fadeInContent')),
        index: 0
    },

    'base_description': {
        selector: element.all(by.xpath(".//textarea[@formcontrolname ='baseDescription']")),
        index: 0
    },

    'description_1': {
        selector: element.all(by.xpath(".//textarea[@placeholder ='Sub Description 1']")),
        index: 0
    },

    'description_2': {
        selector: element.all(by.xpath(".//textarea[@placeholder ='Sub Description 2']")),
        index: 0
    },

    'salesorder_description': {
        selector: element.all(by.xpath(".//textarea[@placeholder ='Sales Order Description']")),
        index: 0
    },

    'list_price': {
        selector: element.all(by.xpath(".//input[@placeholder ='List Price']")),
        index: 0
    },

    'end_user_price': {
        selector: element.all(by.xpath(".//input[@placeholder ='End User Price']")),
        index: 0
    },

    'level_3': {
        selector: element.all(by.xpath(".//input[@placeholder ='Level 3']")),
        index: 0
    },

    'level_2': {
        selector: element.all(by.xpath(".//input[@placeholder ='Level 2']")),
        index: 0
    },

    'level_1': {
        selector: element.all(by.xpath(".//input[@placeholder ='Level 1']")),
        index: 0
    },

    'commission': {
        selector: element.all(by.xpath(".//input[@placeholder ='Commission']")),
        index: 0
    },

    'unit_cost': {
        selector: element.all(by.xpath(".//input[@placeholder ='Unit Cost']")),
        index: 0
    },

    'save_btn': {
        selector: element.all(by.xpath(".//button[@class ='mat-raised-button mat-accent']")),
        index: 0
    },

    'title_completed': {
        selector: element.all(by.id('mat-dialog-title-0')),
        index: 0
    },

    'compl_OK_btn': {
        selector: element.all(by.className('mat-button mat-primary ng-star-inserted')),
        index: 0
    },

    'title_confirmation': {
        selector: element.all(by.id('mat-dialog-title-1')),
        index: 0
    },

    'conf_No_btn': {
        selector: element.all(by.xpath('//*[@id="mat-dialog-1"]/qb-question-dialog/div/div[1]/mat-dialog-actions/button[2]')),
        index: 0
    },

    'part_dropdown_PC': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[1]/div[1]/qb-filter/div/div[2]/div[2]/qb-combo-editor/section/section/mat-form-field/div/div[1]/div')),
        index: 0
    },

    'added_item': {
        selector: element.all(by.xpath('.//span[contains(text(), "name_part_edit")]')),
        index: 0
    },
  
    'obsolete_btn': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[2]/div/div/div[3]/button[6]')),
        index: 0
    },

    'title_conf_delete': {
        selector: element.all(by.xpath('//*[@id="mat-dialog-title-2"]')),
        index: 0
    },

    'obsolete_conf_btn': {
        selector: element.all(by.xpath('.//span[contains(text(), "Obsolete")]')),
        index: 0
    },

    'clear_filter': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[1]/div[1]/qb-filter/div/div[1]/button')),
        index: 0
    },

    'item_type': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[1]/div[1]/qb-filter/div/div[2]/div[1]/qb-combo-editor/section/section/mat-form-field')),
        index: 0
    },

    'select_type': {
        selector: by.tagName('mat-option'),
        index: 0,
        elName: 'Accessory'
    },

    'select_alltypes': {
        selector: element.all(by.className('mat-select-content ng-trigger ng-trigger-fadeInContent')),
        index: 0
    },
   
    'new_acc_input': {
        selector: element.all(by.xpath(".//input[@placeholder='New Accessory (Replacement)']")),
        index: 0
    },
   
    'select_PC_dropdown': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-database-item-editor/main/form/div[2]/section[1]/div[1]/qb-select-all/div/mat-form-field/div/div[1]/div')),
        index: 0
    },

    'select_PC': {
        selector: by.tagName('mat-option'),
        index: 0,
        elName: 'TESTMAR'
    },

    'select_PCs': {
        selector: element.all(by.className('mat-select-content ng-trigger ng-trigger-fadeInContent')),
        index: 0
    },

    'ESCAPE': {
        selector: element.all(by.tagName('body')),
        index: 0
    },

    'base_description_acc': {
        selector: element.all(by.xpath(".//textarea[@formcontrolname ='baseDescription']")),
        index: 0
    },

    'sub_description': {
        selector: element.all(by.xpath(".//textarea[@placeholder='Sub Description']")),
        index: 0
    },

    'salesorder_description_acces': {
        selector: element.all(by.xpath(".//textarea[@formcontrolname ='salesOrderDescription']")),
        index: 0
    },

    'pricepage_select': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-database-item-editor/main/form/div[2]/section[1]/div[2]/mat-form-field')),
        index: 0
    },

    'select_pagesection': {
        selector: by.className('mat-option ng-star-inserted'),
        index: 0,
        elName: 'Accessories'
    },

    'select_allpagesection': {
        selector: element.all(by.className('mat-select-content ng-trigger ng-trigger-fadeInContent')),
        index: 0
    },

    'list_price_access': {
        selector: element.all(by.xpath(".//input[@placeholder='List Price']")),
        index: 0
    },

    'end_user_price_access': {
        selector: element.all(by.xpath(".//input[@placeholder='End User Price']")),
        index: 0
    },

    'level_3_access': {
        selector: element.all(by.xpath(".//input[@placeholder='Level 3']")),
        index: 0
    },

    'level_2_access': {
        selector: element.all(by.xpath(".//input[@placeholder='Level 2']")),
        index: 0
    },

    'level_1_access': {
        selector: element.all(by.xpath(".//input[@placeholder='Level 1']")),
        index: 0
    },
    
    'commission_access': {
        selector: element.all(by.xpath(".//input[@placeholder='Commission']")),
        index: 0
    },

    'unit_cost_access': {
        selector: element.all(by.xpath(".//input[@placeholder='Unit Cost']")),
        index: 0
    },

    'title_completed_acc': {
        selector: element.all(by.xpath(".//h1[contains(text(), 'Completed')]")),
        index: 0
    },

    'compl_OK_btn_acc': {
        selector: element.all(by.xpath('.//button[@class="mat-button mat-primary ng-star-inserted" and .//span[contains(., "OK")]]')),
        index: 0
    },

    'title_confirmation_acc': {
        selector: element.all(by.xpath(".//h1[contains(text(), 'Confirmation')]")),
        index: 0
    },

    'conf_No_btn_acc': {
        selector: element.all(by.xpath('.//button[@class="mat-button mat-primary ng-star-inserted" and .//span[contains(., "No")]]')),
        index: 0
    },

    'acc_dropdown_PC': {
        selector: element.all(by.xpath('//*[@id="layout__content"]/perfect-scrollbar/div/div[1]/qb-admin/qb-item-manager/qb-item-center/div/qb-table/div[1]/div[1]/qb-filter/div/div[2]/div[3]/qb-checkbox-editor/section/div/qb-select-all/div/mat-form-field')),
        index: 0
    },

    'select_All': {
        selector: by.tagName('mat-option'),
        index: 0,
        elName: 'All'
    },

    'select_PC_acc_options': {
        selector: element.all(by.className('mat-select-content ng-trigger ng-trigger-fadeInContent')),
        index: 0
    },

    'select_acc_PC': {
        selector:by.tagName('mat-option'),
        index: 0,
        elName: 'TESTMAR'
    },

    'added_access': {
        selector: element.all(by.xpath('.//datatable-row-wrapper[@class="datatable-row-wrapper ng-star-inserted" and .//span[contains(., "name_accessory")]]')),
        index: 0       
    },
    
    'title_conf_delete_acc': {
        selector: element.all(by.xpath(".//h1[contains(text(), 'Confirmation')]")),
        index: 0
    },

    'obsolete_conf_btn_acc': {
        selector: element.all(by.xpath('.//button[@class="mat-button mat-warn ng-star-inserted" and .//span[contains(., "Obsolete")]]')),
        index: 0
    },

    'hello_user_btn': {
        selector: element.all(by.className('icon-right mat-menu-item')),
        index: 0
    },

    'logout_btn': {
        selector: element.all(by.xpath('.//button[@class="mat-menu-item" and .//span[contains(., "Logout")]]')),
        index: 0
    },
  
    'title_quote_builder': {
        elText: 'Quote Builder'
   },

   'cost_btn': {
    selector: element.all(by.xpath('.//button[@class="mat-raised-button ng-star-inserted"]')),
    index: 2
   },

   'cost_price': {
    selector: element.all(by.xpath(".//input[@placeholder='Cost price']")),
    index: 0
   },

   'update_cost_edit': {
    selector: element.all(by.xpath('.//button[@class="mat-button mat-primary"]')),
    index: 0
   },

   'sell_prices': {
    selector: element.all(by.xpath('')),
    index: 0
   },
      
   'select_bucket_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'bucket_1': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'select_allbuckets': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'level1_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'level2_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'level3_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'EndUserPrice_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'listprice_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'commission_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'update_cost_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'all_descr_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'basedescript_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'description1_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'description2_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'salesorderdescr_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'update_description_edit': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   'add_btn_edit': {
    selector: element.all(by.xpath('.//button[@class= "mat-raised-button ng-star-inserted"]')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

'': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },
   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },

   '': {
    selector: element.all(by.xpath('')),
    index: 0
   },












































};
module.exports = Items;
