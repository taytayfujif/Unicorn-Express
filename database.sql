CREATE TABLE project_home_summary(
    id serial ,
    section varchar(50) NOT NULL,
    summary varchar(500) NOT NULL
);

INSERT INTO project_home_summary VALUES (
    DEFAULT, 
    'Around the Corner',
    'Looking into your future life it may seem far away but in actuality it is only around the corner. For this section we will heavily focus on what you will get out of buying a house in the future and why it will benefit you. To help you gain a better understanding we have broken this section into four subsections which are: Benefits of Owning a Home, Reasons to Buy a Home, Building Security and Wealth, Providing more for your family and your future.'
);

INSERT INTO project_home_summary VALUES (
    DEFAULT, 
    'Present Savings',
    'Even though it seems that there is not much you can do right now as a high school student and have so much questions about why this is important. We hope that you will gain a better understanding of the importance of getting good grades, saving, and what a credit score is.This section may also help answer some of your questions, Ex: How this affects you, Why you need this, What this will get you, and when you should start.'
);
INSERT INTO project_home_summary VALUES (
    DEFAULT, 
    'Why Not Stay In Hawaii',
    'You always here about how hard it is to live in Hawaii because it is so expensive. Though if you are able to follow the information we have provided you buying a home in Hawaii might not be as expensive and impossible as you think. In addition to that there are so many reasons to stay!'
);

CREATE TABLE project_home (
    id serial ,
    section varchar(50) NOT NULL,
    sub_section varchar(100) NOT NULL,
    sub_subA varchar(400) NOT NULL,
    sub_subB varchar(400) NOT NULL,
    sub_subC varchar(400) NOT NULL,
    sub_subD varchar(400) NOT NULL,
    a1 varchar(400) NOT NULL,
    b1 varchar(400) NOT NULL,
    c1 varchar(400) NOT NULL,
    c2 varchar(400) NOT NULL,
    d1 varchar(400) NOT NULL
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Around the Corner',
    'Benefits of Owning a Home',
    'Pride of Ownership',
    'You Pay Less Taxes and Save Money',
    'You Will Have a Peace of Mind of Owning Your Own Home',
    'NONE',
    'Owning your own home means that you can put your time and effort into your house and show it off to others.',
    'By owning your own house you will be helping economic growth which in return makes the government offer tax incentives for homeowners.',
    'Do not worry about those annoying landlords constantly hounding you because by owning your own house you will be your own landlord.',
    'By owning your own house you do not ever have to worry about being kicked out or moving because you will be able to decide when you leave and how long you stay.',
    'NONE'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Around the Corner',
    'Reasons to Buy a Home',
    'Security and Stability',
    'Appreciate',
    'NONE',
    'NONE',
    'When you on your own home it will become a “safe place”. In other words creating security and stability for you and your family.',
    'In addition to that over time your house will do what they call appreciate; which increase its value over time.',
    'NONE',
    'NONE',
    'NONE'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Around the Corner',
    'Building Security and Wealth',
    'Equity',
    'Property of Ownership',
    'Providing More for Your Family and Your Future',
    'NONE',
    'One of the factors of owning your own house is creating equity from your house. Equity is the value of a homeowners interest in a home. In return you can use that equity to send kids to college, care for parents, or buy more property.',
    'In addition to equity you will be able to add on money from your houses appreciation. Like mentioned before your house will appreciate overtime; which means Property Ownership will bring you wealth.',
    'By owning your own home you will be able to give your family a place to grow up. You will not have to move so your kids will be able to create long lasting memories, friendships, and sense of identity in the community around you.',
    'NONE',
    'NONE'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Present Savings',
    'Importance of getting good grades now!',
    'How it will affect your future of owning a home? ',
    'Why do you need this? ',
    'What will you get by doing this?',
    'When you should start doing this?',
    'Getting good grades determines your acceptance into college and you will need get accepted so you can get a good degree to produce a steady income.',
    'In order to buy a house you will need to be able to pay for one in order to get a house of your dreams you need a good job.',
    'By accomplishing things like getting good grades, going to college,earning a degree, and finding a good job you will be able to make your opportunity of buying a house a lot easier. In addition to that it will also let you keep up with mortgage payments after buying a home.',
    'NONE',
    'As soon as possible! Even though buying a house seems so far away from now it is important to start right away. It may seem like you are just a student but the actions you are doing right now in life will set you up for the rest of your life. So if you want to be able to buy a nice house start now by getting good grades.'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Present Savings',
    'Save! Save!',
    'Do Not Just Rely on a Good Job',
    'The Sooner The Better',
    'More Benefits',
    'NONE',
    'In addition to getting good grades you can start saving money. If not now after you get a good job. You can do this by doing things like opening up a savings account or budgeting.',
    'It may take a while but over time the money will start to add up and when it is time to buy a house you will be able to buy one. So the sooner the start the sooner you will be able to buy a home.',
    'Other benefits of learning how to save especially budgeting is that when you do buy a house you will already have the skills and repetition of putting money aside. This will help you keep up with mortgage payments and other bills at the same time.',
    'NONE',
    'NONE'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    'Present Savings',
    'Do Not Just Swipe Away',
    'Credit score and Why it is Important',
    'NONE',
    'NONE',
    'NONE',
    'Another huge importance of buying a house is having a good credit score. If you do not keep a good credit score you may not be able to buy a house. Having a bad credit score does not just mean not being able to buy a house; it can also prevent you from renting somewhere, buying a car, and more.',
    'NONE',
    'NONE',
    'NONE',
    'NONE'
);

INSERT INTO project_home VALUES(
    DEFAULT,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
);

INSERT INTO project_home VALUES(
    DEFAULT,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
);

INSERT INTO project_home VALUES(
    DEFAULT,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
);

INSERT INTO project_home VALUES(
    DEFAULT,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
);
