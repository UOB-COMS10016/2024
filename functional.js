const currentWeek   = 12;
const activityNum   = 8;
const columnNum     = 4;
const title         = "FUNCTIONAL PROGRAMMING";
const headerOn      = 1;
const header1       = "EXERCISES";
const header2       = "LECTURES";
const header3       = "COURSEWORK";
const inactColour   = "#999999";
const titleColour   = "#777777";
const titleBColour  = "#BBBBBB";
const bkgColour     = "#CCCCCC";
const embossColour  = "#AAAAAA";
const fontSizePix   = 11;
const extendCatNum1 = -1;
const extendCatNum2 = -1;

var categories = [
["0","","#CCCCCC","0","","",],
["1","Extra Materials","#DDDDDD","0","","Materials",],
["2","Lecture","#CCCFFF","0","","Materials",],
["3","Setup Lab:","#EEEEDD","0","","",],
["4","Worksheet","#EEEEDD","1","","Materials",],
["5","History","#EEEEDD","0","","Materials",],
["6","Lecture","#CCCFFF","0","Lecture Recording","Materials",],
["7","Notes ft.<br>Extra Examples<br>+ Explanations","#94e5bf","0","","Notes",],
["8","Coursework","#EEEEDD","1","SUBMIT HERE (Blackboard)","Materials",],
["9","Bonus Worksheet","#FCC981","1","","Materials",],
["10","Formative Practical","#EEEEDD","1","","Materials",],
["11","Bonus Lecture","#D8CCFF","0","","",],
["12","Mock Test","#EEEEDD","1","","Materials",],

];

const activities = [
["1","(optional)","","","","0","3",],
["2","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Welcome & Introduction","","","3","2",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Using GHCi & First Program","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/GHCi-and-prelude.pdf","","5","1",],
["3","Wed 27/09/23<br/>10:00-13:00<br/>MVB2.11/1.15","GET YOUR PC READY","./setup.html","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["2","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Functions & Basic Types","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Functions-and-Basic-Types.pdf","","6","1",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Polymorphism & Currying","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Polymorphism-and-currying.pdf","","7","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","GHCi and Functions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet01.pdf","","8","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["5","(optional)","History of Haskell","","","13","2",],
["6","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Data types & Type classess","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/datatypes.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/6b919533801c484a85eabc42a4fb00811d","15","1",],
["6","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Pattern matching & Card game","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/card-game.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/837fc7dcb31f4cf3883e09656e4a1a7c1d","16","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Types, Type Classes, and Branching","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet02.pdf","","18","5",],
["0","","","","","0","0",],
["7","in your own time","","","","23","8",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Recursion I","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/recursion1.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/a278ef2cf905455ab298fd11701a14101d","31","1",],
["6","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Recursion II: Lists","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/recursion2.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/8cfe56ca3375406a80c5f3ed9ad6f1381d","32","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","ADTs and Pattern Matching","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet03.pdf","","33","5",],
["0","","","","","0","0",],
["7","in your own time","","","","38","1",],
["0","","","","","0","0",],
["8","Deadline: 12:00 Thurs 09/11/23","Power to the People","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","https://www.ole.bris.ac.uk/webapps/assignment/uploadAssignment?content_id=_8307455_1&course_id=_257219_1","39","4",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Lists & List Comprehensions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/list-comp.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/6b795e3925a94303abbe44b1d5964f521d","43","2",],
["6","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Evaluation","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/evaluation.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/9f89d107dd6c412c8f768a88660e83071d","45","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Recursive Pattern Matching","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet04.pdf","","46","5",],
["0","","","","","0","0",],
["7","in your own time","","","","51","2",],
["0","","","","","0","0",],
["9","(optional)","Structural Inductive Proofs","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus1.pdf","","53","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Higher Order Functions I","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/4cbcea53e1b7462ea0bee7ac686cbf011d","58","4",],
["6","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Higher Order Functions II","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/66b95c12968545049d366df2b9cbb25a1d","62","4",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","List Comprehensions, Property Tests, and Evaluation","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet05.pdf","","66","5",],
["0","","","","","0","0",],
["7","in your own time","","","","71","3",],
["0","","","","","0","0",],
["10","","Sudoku","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/Sudoku/SudokuInstrs.pdf","","74","4",],
["0","","","","","0","0",],
["6","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Folds I","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/34caa8c6a85c47348b4108030ca0bc641d","78","5",],
["6","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Folds II","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","https://mediasite.bris.ac.uk/Mediasite/Play/7fc5773adbe8447cb64102bf84d61ace1d","83","4",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","HO Functions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet06.pdf","","87","5",],
["0","","","","","0","0",],
["11","(optional)","Binary Trees with Alex Kavvos","https://mediasite.bris.ac.uk/Mediasite/Play/b3fcbbfaf52a4ea0a850d131b088c8ac1d","","0","0",],
["7","in your own time","","","","92","3",],
["8","Deadline: 12:00 Thurs 30/11/23<br/>(submit at least 1 hour early)","Simplify","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW2/CW2-Instrs.pdf","https://www.ole.bris.ac.uk/webapps/assignment/uploadAssignment?content_id=_8307456_1&course_id=_257219_1","95","2",],
["0","","","","","0","0",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","IO and Generators","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/IO-and-Gen.pdf","","97","2",],
["7","in your own time","","","","99","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Folds","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet07.pdf","","100","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["9","(optional)","Monoids","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus2.pdf","","105","5",],
["0","","","","","0","0",],
["2","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","QuickCheck Generators: II","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Generators.pdf","","110","2",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Functors","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/Functor2023.hs","","112","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","IO","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet08.pdf","","114","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["9","(optional)","Maps, Tries, Sets, and Perfect Trees","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus3.pdf","","119","5",],
["12","in your own time","Mock Test","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/COMS10016-Mock.pdf","","124","1",],
["2","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Applicatives","https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa","","125","2",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Applicatives cont. and Monads","https://quizizz.com/admin/presentation/61a1077bf56186001dc1301e","","127","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Functor, Applicative, and Monad","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet09.pdf","","129","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["2","Mon 11:00-11:50<br/>PHYS BLDG 1.11 TYNDALL","Mock Test Walkthrough","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/COMS10016-Mock.pdf","","134","4",],
["2","Thurs 16:00-16:50<br/>PHYS BLDG 1.11 TYNDALL","Functor/Applicative recap and Quiz + Q&A","https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa","","138","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Revision of previous sheets","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet09.pdf","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["9","(optional)","Sheet of Death","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus4.pdf","","139","4",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],

];

const files = [
["0","https://web.microsoftstream.com/video/17f0fbf7-461c-4cf1-937f-21e8407a137e","Guest seminar VOD: Haskell in the Datacentre",],
["1","https://mengwangoxf.github.io/Papers/NSR15.pdf","Paper: How functional programming mattered",],
["2","https://bristolpl.github.io/","Bristol PL Research Group",],
["3","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/COMS10016_intro.pdf","COMS10016_intro.pdf",],
["4","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/intro-FP.pdf","intro-FP.pdf",],
["5","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/GHCi-and-prelude.pdf","GHCi-and-prelude.pdf",],
["6","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Functions-and-Basic-Types.pdf","Functions-and-Basic-Types.pdf",],
["7","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Polymorphism-and-currying.pdf","Polymorphism-and-currying.pdf",],
["8","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet01.pdf","sheet01.pdf",],
["9","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet01Dyslexic.pdf","sheet01Dyslexic.pdf",],
["10","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer01.pdf","answer01.pdf",],
["11","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer01Dyslexic.pdf","answer01Dyslexic.pdf",],
["12","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code01.hs","code01.hs",],
["13","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/HistoryOfHaskell.pdf","History of Haskell",],
["14","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/HowFPMattered.pdf","How Functional Programming Mattered",],
["15","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/datatypes.pdf","datatypes.pdf",],
["16","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/card-game.pdf","card-game.pdf",],
["17","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/card.hs","card.hs",],
["18","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet02.pdf","sheet02.pdf",],
["19","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet02Dyslexic.pdf","sheet02Dyslexic.pdf",],
["20","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer02.pdf","answer02.pdf",],
["21","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer02Dyslexic.pdf","answer02Dyslexic.pdf",],
["22","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code02.hs","code02.hs",],
["23","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Types.pdf","Types",],
["24","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/HaskellPoDs.pdf","Haskell PoDs",],
["25","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/DataConstructors.pdf","Data Constructors",],
["26","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Tuples.pdf","Tuples",],
["27","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Branching.pdf","Branching",],
["28","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Guards.pdf","Guards",],
["29","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/TypeClasses.pdf","Type Classes",],
["30","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/FunctionRecipe.pdf","Recipe for writing functions",],
["31","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/recursion1.pdf","recursion1.pdf",],
["32","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/recursion2.pdf","recursion2.pdf",],
["33","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet03.pdf","sheet03.pdf",],
["34","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet03Dyslexic.pdf","sheet03Dyslexic.pdf",],
["35","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer03.pdf","answer03.pdf",],
["36","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer03Dyslexic.pdf","answer03Dyslexic.pdf",],
["37","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code03.hs","code03.hs",],
["38","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/PatternMatching.pdf","Pattern Matching",],
["39","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","CW1-Instrs.pdf",],
["40","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW1/CW1-InstrsDyslexic.pdf","CW1-InstrsDyslexic.pdf",],
["41","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW1/CW1-PowerToThePeople.zip","CW1-PowerToThePeople.zip",],
["42","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW1/PowerTest.hs","PowerTest.hs",],
["43","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/list-comp.pdf","list-comp.pdf",],
["44","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/list.hs","list.hs",],
["45","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/evaluation.pdf","evaluation.pdf",],
["46","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet04.pdf","sheet04.pdf",],
["47","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet04Dyslexic.pdf","sheet04Dyslexic.pdf",],
["48","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer04.pdf","answer04.pdf",],
["49","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer04Dyslexic.pdf","answer04Dyslexic.pdf",],
["50","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code04.hs","code04.hs",],
["51","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Lists.pdf","Lists",],
["52","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Maybe.pdf","Maybe",],
["53","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus1.pdf","sheetBonus1.pdf",],
["54","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus1Dyslexic.pdf","sheetBonus1Dyslexic.pdf",],
["55","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/StructuralInductiveProofs.pdf","Structural Inductive Proofs",],
["56","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus1.pdf","answerBonus1.pdf",],
["57","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus1Dyslexic.pdf","answerBonus1Dyslexic.pdf",],
["58","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/HObp.hs","HObp.hs",],
["59","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","week7.pdf",],
["60","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/HO.hs","HO.hs",],
["61","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/MinuteSheetQR.png","MinuteSheetQR.png",],
["62","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/HObp.hs","HObp.hs",],
["63","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","week7.pdf",],
["64","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/HO.hs","HO.hs",],
["65","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/MinuteSheetQR.png","MinuteSheetQR.png",],
["66","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet05.pdf","sheet05.pdf",],
["67","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet05Dyslexic.pdf","sheet05Dyslexic.pdf",],
["68","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer05.pdf","answer05.pdf",],
["69","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer05Dyslexic.pdf","answer05Dyslexic.pdf",],
["70","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code05.hs","code05.hs",],
["71","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/HigherOrderFunctions.pdf","HO Functions",],
["72","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Map.pdf","Map",],
["73","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/PreludeFunctionsCheatsheet.pdf","Prelude Functions Cheatsheet",],
["74","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/Sudoku/SudokuInstrs.pdf","SudokuInstrs.pdf",],
["75","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/Sudoku/SudokuInstrsDyslexic.pdf","SudokuInstrsDyslexic.pdf",],
["76","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/Sudoku/Sudoku.hs","Sudoku.hs",],
["77","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/Sudoku/hard.txt","hard.txt",],
["78","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/FoldsBP.hs","FoldsBP.hs",],
["79","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","week7.pdf",],
["80","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/Folds.hs","Folds.hs",],
["81","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/MinuteSheetQR.png","MinuteSheetQR.png",],
["82","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/Recap.hs","Recap.hs",],
["83","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/FoldsBP.hs","FoldsBP.hs",],
["84","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/week7.pdf","week7.pdf",],
["85","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/Folds.hs","Folds.hs",],
["86","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/MinuteSheetQR.png","MinuteSheetQR.png",],
["87","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet06.pdf","sheet06.pdf",],
["88","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet06Dyslexic.pdf","sheet06Dyslexic.pdf",],
["89","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer06.pdf","answer06.pdf",],
["90","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer06Dyslexic.pdf","answer06Dyslexic.pdf",],
["91","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code06.hs","code06.hs",],
["92","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Folds.pdf","Folds",],
["93","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/copro.pdf","How to Design \"Co\"-Programs",],
["94","https://www.cs.ox.ac.uk/jeremy.gibbons/publications/hodgp-journal.pdf","Design Patterns as Higher-Order Datatype-Generic Programs",],
["95","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW2/CW2-Instrs.pdf","CW2-Instrs.pdf",],
["96","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/coursework/CW2/CW2-Simplify.zip","CW2-Simplify.zip",],
["97","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/IO-and-Gen.pdf","IO-and-Gen.pdf",],
["98","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/ExampleIO.hs","ExampleIO.hs",],
["99","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Intro-to-IO.pdf","Intro to IO",],
["100","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet07.pdf","sheet07.pdf",],
["101","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet07Dyslexic.pdf","sheet07Dyslexic.pdf",],
["102","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer07.pdf","answer07.pdf",],
["103","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer07Dyslexic.pdf","answer07Dyslexic.pdf",],
["104","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code07.hs","code07.hs",],
["105","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus2.pdf","sheetBonus2.pdf",],
["106","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus2Dyslexic.pdf","sheetBonus2Dyslexic.pdf",],
["107","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/Monoids.pdf","Monoids notes",],
["108","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus2.pdf","answerBonus2.pdf",],
["109","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus2Dyslexic.pdf","answerBonus2Dyslexic.pdf",],
["110","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Generators.pdf","Generators.pdf",],
["111","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/questions.hs","questions.hs",],
["112","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/Functor2023.hs","Functor2023.hs",],
["113","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/kinds.png","kinds.png",],
["114","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet08.pdf","sheet08.pdf",],
["115","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet08Dyslexic.pdf","sheet08Dyslexic.pdf",],
["116","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer08.pdf","answer08.pdf",],
["117","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer08Dyslexic.pdf","answer08Dyslexic.pdf",],
["118","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code08.hs","code08.hs",],
["119","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/DataMap.pdf","Data.Map",],
["120","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus3.pdf","sheetBonus3.pdf",],
["121","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus3Dyslexic.pdf","sheetBonus3Dyslexic.pdf",],
["122","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus3.pdf","answerBonus3.pdf",],
["123","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus3Dyslexic.pdf","answerBonus3Dyslexic.pdf",],
["124","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/COMS10016-Mock.pdf","COMS10016-Mock.pdf",],
["125","https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa","Functors and Applicatives slides + quiz",],
["126","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/ApplicativeLive2023.hs","ApplicativeLive2023.hs",],
["127","https://quizizz.com/admin/presentation/61a1077bf56186001dc1301e","Monads slides and quiz",],
["128","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/code/ApplicativeLive2023Updated.hs","ApplicativeLive2023Updated.hs",],
["129","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet09.pdf","sheet09.pdf",],
["130","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheet09Dyslexic.pdf","sheet09Dyslexic.pdf",],
["131","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer09.pdf","answer09.pdf",],
["132","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answer09Dyslexic.pdf","answer09Dyslexic.pdf",],
["133","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/code09.hs","code09.hs",],
["134","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/COMS10016-Mock.pdf","COMS10016-Mock.pdf",],
["135","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/notes/COMS10016-Mock-answers.pdf","COMS10016-Mock-answers.pdf",],
["136","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/Mock.hs","Mock.hs",],
["137","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/slides/SamMock.pdf","SamMock.pdf",],
["138","https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa","Functors and Applicatives slides + quiz",],
["139","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus4.pdf","sheetBonus4.pdf",],
["140","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/sheetBonus4Dyslexic.pdf","sheetBonus4Dyslexic.pdf",],
["141","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus4.pdf","answerBonus4.pdf",],
["142","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2023_TB-1/content/functional/sheets/answerBonus4Dyslexic.pdf","answerBonus4Dyslexic.pdf",],

];
