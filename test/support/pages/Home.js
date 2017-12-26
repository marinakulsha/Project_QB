let inheritance = require('./../inheritance');
let Page = require('./page');
let Home = function () {
};
inheritance.inherits(Page, Home);


Home.prototype.url = 'http://mydynamo.co.uk/';

Home.prototype.data = {
    'gotit': {
        selector: element.all(by.xpath('/html/body/div/footer/div[2]/div/div/a')),
        index: 0
    },
    'signup': {
        selector: element.all(by.xpath('/html/body/div/header/div/div/div/a')),
        index: 0
    },
    'main_title': {
        selector: element.all(by.xpath('/html/body/div/div[1]/div[3]/div/div/h1')),
        index: 0
    },

    'logo': {
        selector: element.all(by.xpath('/html/body/div/header/div/div/a')),
        index: 0
    },

    'Meet Dynamo_title': {
         elText: 'Meet Dynamo | The Free Online Mortgage Adviser'
    },

    'home_image': {
        selector: element.all(by.xpath('/html/body/div/div[1]/div[1]')),
        index: 0
    },
    'CTA_meet': {
        selector: element.all(by.xpath('//*[@id="toBottom"]/div[1]/div')),
        index: 0
    },
    'title_mortgage_advizer': {
        selector: element.all(by.xpath('/html/body/div/article/div[1]/div/div/div[1]/h2')),
        // elText: 'The free online mortgage advisor built around you – not the lenders',
        index: 0
    },
    'get_remortgage_reminder': {
        selector: element.all(by.xpath('/html/body/div/article/div[1]/div/div/div[1]/a')),
        index: 0
    },
    'Get_your_free_Mortgage_Personality': {
        selector: element.all(by.xpath('//*[@id="interviewMain"]/div/div/div[3]/h2')),
        elText: 'Get your own Mortgage Personality',
        index: 0
    },
    'A_better_way_to_remortgage': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/h2')),
        elText: 'A Better Way to Remortgage',
        index: 0
    },
    'your_journey': {
        selector: element.all(by.xpath("/html/body/div/article/div[3]/div/div/div/div[1]/div[1]/h3")),
        elText: 'Your journey',
        index: 0
    },
    'your_profile': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[2]/div[1]/h3')),
        elText: 'Your profile',
        index: 0
    },
    'your_tools': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[3]/div[1]/h3')),
        elText: 'Your tools',
        index: 0
    },
    'your_mortgage': {
        selector: element.all(by.xpath('/html/body/div/article/div[3]/div/div/div/div[4]/div[1]/h3')),
        elText: 'Your mortgage',
        index: 0
    },
    'Company': {
        selector: element.all(by.xpath('/html/body/div/footer/div[1]/div/div[1]/nav/ul/li[1]/p')),
        elText: 'Company',
        index: 0
    },
    'Information': {
        selector: element.all(by.xpath('/html/body/div/footer/div[1]/div/div[1]/nav/ul/li[2]/p')),
        elText: 'Information',
        index: 0
    },
    'Legal': {
        selector: element.all(by.xpath('/html/body/div/footer/div[1]/div/div[1]/nav/ul/li[3]/p')),
        elText: 'Legal',
        index: 0
    },
    'Careers': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="https://boards.greenhouse.io/dynamo"]')),
        index: 0
    },
    'Contact Us': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="mailto:info@mydynamo.co.uk"]')),
        elText: 'Contact Us',
        index: 0
    },
    'Press': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="mailto: press@mydynamo.co.uk"]')),
        elText: 'Press',
        index: 0
    },
    'about_footer': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/about.html"]')),
        index: 0
    },
    'We_are_Dynamo': {
        selector: element.all(by.xpath('/html/body/div/div[1]/div/div/div[1]/img')),
        index: 0
    },
    'FAQs_footer': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/faq.html"]')),
        index: 0
    },
    'Privacy_Policy': {
        selector: element.all(by.xpath('.//body/descendant::a[@href="/privacy.html"]')),
        index: 0
    },
     'FAQs_title': {
        elText: 'FAQs - Dynamo Mortgages',
       },

    'Privacy_Policy_title': {
        elText: 'Privacy Policy - Dynamo Mortgages',
      },

    'Letstarted': {
        selector: element.all(by.xpath('//*[@id="interviewMain"]/div/div/div[3]/button')),
        index: 0
    },
    'Your_mindset_window': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[1]/h3')),
        elText: 'Your Mindset',
        index: 0
    },
    'back': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[3]/button')),
        index: 0
    },
    'question_1': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[2]/p')),
        elText: '1. How are you feeling about remortgaging?',
        index: 0
    },
    'worried': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[2]/div/button[1]')),
        index: 0
    },
    'question_2': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/p')),
        elText: '2. How long do you plan to stay in your current home?',
        index: 0
    },
    'moving in the next 2 years': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/div/button[1]')),
        index: 0
    },
    'question_3': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/p')),
        elText: '3. Do you have any big plans for your home over the next two years?',
        index: 0
    },
    'No_plans': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/div/button[3]')),
        index: 0
    },
    'question_4': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/p')),
        elText: '4. Are you expecting any big changes in household income over the next two years?',
        index: 0
    },
    'a_period_of_unemployment': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/div/button[3]')),
        index: 0
    },
    'question_5': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/p')),
        elText: '5. Do you have any exciting career changes planned?',
        index: 0
    },
    'going_part-time': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[1]')),
        index: 0
    },
    'question_6': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/p')),
        elText: '6. How comfortable are you with your monthly repayments?',
        index: 0
    },
    'money_is_tight': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/div/button[1]')),
        index: 0
    },
    'question_7': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/p')),
        elText: '7. Do you have anything big coming up that you might need to budget for?',
        index: 0
    },
    'getting_married': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/div/button[1]')),
        index: 0
    },
    'question_8': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/p')),
        elText: '8. Do you have any debt at the minute?',
        index: 0
    },
    'A_lot_of_debt': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/div/button[1]')),
        index: 0
    },
    'question_9': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[9]/div[2]/p')),
        elText: '9. Do you have any savings you could put towards your mortgage?',
        index: 0
    },
    'significant amount in savings': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[9]/div[2]/div/button[1]')),
        index: 0
    },
    'question_10': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[10]/div[2]/p')),
        elText: '10. When it comes to interest rates, what\'s your attitude to fluctuations?',
        index: 0
    },
    'no_thanks': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[10]/div[2]/div/button[1]')),
        index: 0
    },
    'monthly_saver': {
        selector: element.all(by.xpath('//*[@id="monthlySaver"]/h2')),
        elText: 'Monthly Saver',
        index: 0
    },
    'See_results': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[11]/div[2]/button')),
        elText: 'See Results',
        index: 0
    },
    'Close_button': {
        selector: element.all(by.xpath('//*[@id="interviewResults"]/div/div/button')),
        index: 0
    },
    'Want_to_lower_your_monthly_repayments?': {
        selector: element.all(by.xpath('//*[@id="monthlySaverMore"]/div[2]/div/h3')),
        elText: 'Want to lower your monthly repayments?',
        index: 0
    },
    'text_under_monthly_saver': {
        selector: element.all(by.xpath('//*[@id="monthlySaver"]/p')),
        elText: 'What’s most important to you right now is keeping your monthly repayments down.',
        index: 0
    },

    'Finding_introductory_period': {
        selector: element.all(by.xpath('//*[@id="accordionMonthlySaver"]/div[1]/div[1]/a')),
        index: 0
    },

    'Increasing_your_mortgage_term': {
        selector: element.all(by.xpath('//*[@id="accordionMonthlySaver"]/div[2]/div[1]/a')),
        index: 0
    },
    'Consider_a_fixed-rate_mortgage': {
        selector: element.all(by.xpath('//*[@id="accordionMonthlySaver"]/div[3]/div[1]/a')),
        index: 0
    },
    'Get_my_Report': {
        selector: element.all(by.xpath('//*[@id="interviewResults"]/div/div/div/div[7]/a')),
        index: 0
    },
    'Close_get_my_Report':{
        selector: element.all(by.xpath('//*[@id="mailResult"]/button')),
        index: 0
    },
    'fine': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[1]/div[2]/div/button[3]')),
        index: 0
    },
    'staying for more than 5 years': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/div/button[3]')),
        index: 0
    },
    'retiring earlier than planned': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[3]')),
        index: 0
    },
    'I am comfortable': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/div/button[3]')),
        index: 0
    },
    'I want to go traveling': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/div/button[3]')),
        index: 0
    },
    'I dont have any debt': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/div/button[3]')),
        index: 0
    },
    'I dont have any savings': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[9]/div[2]/div/button[3]')),
        index: 0
    },
    'Whatever gets me the best deal': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[10]/div[2]/div/button[3]')),
        index: 0
    },
    'Stable_Fixer': {
        selector: element.all(by.xpath('//*[@id="stableFixer"]/h2')),
        elText: 'Stable Fixer',
        index: 0
    },
    'Want_to_get_more_stability': {
        selector: element.all(by.xpath('//*[@id="stableFixerMore"]/div[2]/div/h3')),
        elText:'Want to get more stability?',
        index: 0
    },
    'Fixed or Variable': {
        selector: element.all(by.xpath('//*[@id="accordionStableFixer"]/div[1]/div[1]/a')),
        index: 0
    },
    'Consider a long introductory period (for stability)': {
        selector: element.all(by.xpath('//*[@id="accordionStableFixer"]/div[2]/div[1]/a')),
        index: 0
    },
    'stay here for the next 2_5 years': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[2]/div[2]/div/button[2]')),
        index: 0
    },
    'Major_renovations_or_extensions': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/div/button[1]')),
        index: 0
    },
    'household_income_stay_the same': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/div/button[4]')),
        index: 0
    },
    'Thinking_of_retiring_earlier_than_planned': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[3]')),
        index: 0
    },
    'as long as nothing changes': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[6]/div[2]/div/button[2]')),
        index: 0
    },
    'Nope_nothing_major': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[7]/div[2]/div/button[5]')),
        index: 0
    },
    'I_am_paying_it_off_regularly': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[8]/div[2]/div/button[2]')),
        index: 0
    },
    'Big_Planner': {
        selector: element.all(by.xpath('//*[@id="bigPlanner"]/h2')),
        elText:'Big Planner',
        index: 0
    },
    'Want_to_make_your_big_plans_possible': {
        selector: element.all(by.xpath('//*[@id="bigPlannerMore"]/div[2]/div/h3')),
        index: 0
    },
    'Borrowing more on your remortgage': {
        selector: element.all(by.xpath('//*[@id="accordionBigPlanner"]/div[1]/div[1]/a')),
        index: 0
    },
    'Fixed_or_Variable_BP': {
        selector: element.all(by.xpath('//*[@id="accordionBigPlanner"]/div[2]/div[1]/a')),
        index: 0
    },
    'Minor upkeep but no major investments': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[3]/div[2]/div/button[2]')),
        index: 0
    },
    'A drop in household income of 20% or more': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/div/button[2]')),
        index: 0
    },
    'Thinking of retiring earlier than planned': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[3]')),
        index: 0
    },
    'Debt_Easer': {
        selector: element.all(by.xpath('//*[@id="debtEaser"]/h2')),
        elText:'Debt Easer',
        index: 0
    },
    'Want to make your debt more manageable': {
        selector: element.all(by.xpath('//*[@id="debtEaserMore"]/div[2]/div/h3')),
        elText:'Want to make your debt more manageable?',
        index: 0
    },
    'Lowering your monthly repayments': {
        selector: element.all(by.xpath('//*[@id="accordiondebtEaser"]/div[1]/div[1]/a')),
        index: 0
    },
    'Borrowing more on your remortgage (and managing your debt)': {
        selector: element.all(by.xpath('//*[@id="accordiondebtEaser"]/div[2]/div[1]/a')),
        index: 0
    },
    'Fixed or Variable_DE': {
        selector: element.all(by.xpath('//*[@id="accordiondebtEaser"]/div[3]/div[1]/a')),
        index: 0
    },
    'A pay rise of 20% or more': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[4]/div[2]/div/button[1]')),
        index: 0
    },
    'Changing job or employer': {
        selector: element.all(by.xpath('//*[@id="interviewQuestions"]/div/div[2]/div[5]/div[2]/div/button[2]')),
        index: 0
    },
    'Flexible Changer': {
        selector: element.all(by.xpath('//*[@id="flexibleChanger"]/h2')),
        elText:'Flexible Changer',
        index: 0
    },
    'Want to get more flexibility': {
        selector: element.all(by.xpath('//*[@id="flexibleChangerMore"]/div[2]/div/h3')),
        elText:'Want to get more flexibility?',
        index: 0
    },
    'Consider a short introductory term (and flexible features)': {
        selector: element.all(by.xpath('//*[@id="accordionFlexibleChanger"]/div[1]/div[1]/a')),
        index: 0
    },
    'Fixed or Variable_FC': {
        selector: element.all(by.xpath('//*[@id="accordionFlexibleChanger"]/div[2]/div[1]/a')),
        index: 0
    },

};
module.exports = Home;
