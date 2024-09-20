//UNIT DETAILS
var unitName      = "";
var unitCode      = "";
var startWeekNum  = 1;                         // start week number [usual start is week 1 or 13]
var totalWeeks    = 2; // 11;                  // total teaching weeks for unit [usually 12]

//PAGE TITLE CONTENT (IF ANY)
var topicsNum = 10; // num of topics to render in title, that is 1 plus max index, -1 for no topics
var topics = [
[  "0", "0", "OVERVIEW",               "<strong>Unit Overview.</strong> This first year introductory unit is worth 20 credit points and assumes no prior exposure to programming. We are using this unit website, in-person lectures, in-person labs, content recordings, and extra exercises for teaching. The unit runs in two distinct streams each focussing on one paradigm. For imperative programming, the aim is to introduce the notion of state and sequential operations. Important principles include recursion and iteration, assignment, pointers, and an understanding of the stack and heap. For functional programming, the aim is to introduce types and functions. Important principles include datatypes, evaluation order, higher-order functions, and purity. C and Haskell serve as the example languages. Formative and summative individual courseworks are supported by in-person labs. Note that self-study beyond lectures and labs is usually required to recap and compound the content taught. A typical week of the unit consists of up to 4 hours of lectures, up to 6 hours of programming labs with lecturers and TAs, and approximately 5h self-study."],
[  "1", "0", "FEEDBACK",               "<strong>Feedback &amp; Support.</strong> Please actively ask us regarding all questions during our weekly labs in person. You can also find us after lectures. Use the weekly labs sessions as your primary points of contact to get regular help and feedback from TAs and staff. If you feel you need in-person programming help in the lab then please raise your hand. If all of the above fail and you have fallen significantly behind then talk to us during labs or email our teaching associate <a href='mailto:em18564@bristol.ac.uk'>George</a> and we will try to arrange extra help for you."],
[  "2", "0", "STAFF",                  "<strong>Staff &amp; Lab Team.</strong> <a href='https://tiloburghardt.github.io'>Tilo</a>, <a href='https://mengwangoxf.github.io'>Meng</a>, <a href='http://people.cs.bris.ac.uk/~oray'>Oliver</a>, <a href='https://niravajmeri.github.io'>Nirav</a>, <a href='mailto:em18564@bristol.ac.uk'>George</a>, and <a href='mailto:jess.foster@bristol.ac.uk'>Jess</a> welcome you to the unit. For questions, best see us in the labs or get hold of us after lectures. Before you email lecturers please make sure you have asked your question in the lab. We always try to answer quickly, but note that email turn around may take up to three working days at peak times."],
[  "3", "1", "TEAMS",                  "https://teams.microsoft.com/l/team/19%3APRhSqeKBGY2unSlB9xBo_UcU5BvO_Ogg7ysv8jhKjLs1%40thread.tacv2/conversations?groupId=fc254b51-8b53-4f38-83be-889dc31e0f58&tenantId=b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b"],
[  "4", "1", "BLACKBOARD",             "https://www.ole.bris.ac.uk/ultra/courses/_259156_1/outline"],
[  "5", "1", "C STYLE GUIDE",          "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/imperative/week01/style.html"],
[  "6", "1", "MARKING GUIDE",          "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/imperative/week01/marking.html"],
//[  "7", "1", "STUDY GUIDE",             "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/imperative/study.pdf"],
[  "7", "0", "BOOKS",                  "<strong>Books.</strong> The unit is not taught strictly along the lines of a textbook. However, often it is useful to cover a topic again from a different angle and textbooks can be helpful tools for this. For the imperative part, we recommend the online book <a target='_blank' href='https://en.wikibooks.org/wiki/C_Programming'>C Programming</a>. For the functional part, the online book <a target='_blank' href='http://learnyouahaskell.com'>Learn you a Haskell for Great Good</a> and the book <a target='_blank' href='https://www.cambridge.org/highereducation/books/programming-in-haskell/8FED82E807EF12D390DE0D16FDE217E4'>Programming in Haskell</a> are recommended. Luckily, both languages C and Haskell have a long-standing following and thus many questions that books or the course don't cover can be answered directly by looking things up on the web or by searching across programmer forums."],
[  "8", "0","THANKS",                  "<strong>Thanks and Acknowledgements.</strong> The imperative part of this unit owes its existence and major parts of its content to Dr Ian Holyer. Despite changes and adjustments, Ian's work is underpinning the heart and soul of this unit. He developed the core of the imperative materials and championed the unit for many years. Some of his original materials are available on his <a target='_blank' href='https://csijh.gitlab.io/c-bites'>C-Bites Page</a>. Many thanks to Sion Hannuna for developing the unit significantly over many years, thanks also to Alex Kavvos, Nick Wu and Jamie Willis for signitficant contributions to the functional teaching materials. Thanks also for inspirational C Notes by Neill Campbell. Thanks also to Dan Page for helpful tips regarding JS-Blackboard integration."],
[  "9", "1", "CATALOGUE",             "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?ayrCode=24%2F24&unitCode=COMS10016"],
];
