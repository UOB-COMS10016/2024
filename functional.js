const currentWeek   = 10;
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
["2","Lecture","#CCCFFF","0","Lecture Recording","Materials",],
["3","Setup Lab:","#EEEEDD","0","","",],
["4","Worksheet","#EEEEDD","1","","Materials",],
["5","Extra Notes,<br> Examples,<br> &amp; Explanations","#94e5bf","0","","Notes",],
["6","History","#EEEEDD","0","","Materials",],
["7","Coursework","#EEEEDD","0","Submit on Blackboard","Materials",],
["8","Bonus Worksheet","#FCC981","1","","Materials",],
["9","Lecture","#CCCFFF","0","","Materials",],
["10","Formative Practical","#EEEEDD","1","","Materials",],
["11","Bonus Lecture","#D8CCFF","0","","",],
["12","Lecture","#CCCFFF","0","","",],
["13","Mock Test","#EEEEDD","1","","Materials",],

];

const activities = [
["1","(optional)","","","","0","1",],
["2","Mon 10:00-10:50<br/>Chem LT1","Welcome & Introduction","https://docs.google.com/presentation/d/1wkVzt7ibiRMIwxB10C4qETbi9vqPPSOK_JB_0N-Sjgc/edit?usp=sharing","https://mediasite.bris.ac.uk/Mediasite/Play/a59fa0f036804fd19768d9b5d6adfe361d","1","1",],
["2","Thurs 16:00-16:50<br/>Chem LT1","Haskell Syntax","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Lecture1.hs","https://mediasite.bris.ac.uk/Mediasite/Play/c515bd32fe8341e6b7927be4739cdf821d","2","1",],
["3","Mon 16/09/24<br/>15:00-18:00<br/>Wed 18/09/24<br/>10:00-13:00<br/>MVB2.11/1.15","GET YOUR PC READY","./setup.html","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["2","Mon 10:00-10:50<br/>Chem LT1","Recursion","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Recursion.hs","https://mediasite.bris.ac.uk/Mediasite/Play/90e8085b9e344a14b9771946910913da1d","3","1",],
["2","Thurs 16:00-16:50<br/>Chem LT1","Types","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/BasicTypes.hs","https://mediasite.bris.ac.uk/Mediasite/Play/fe1958cd22b54f59bed3004871aaff561d","4","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","GHCi and Functions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet01.pdf","","5","5",],
["0","","","","","0","0",],
["5","in your own time","","","","10","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["6","(optional)","History of Haskell","","","15","2",],
["2","Mon 10:00-10:50<br/>Chem LT1","Pattern matching and Lists","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/PatternsLists.hs","https://mediasite.bris.ac.uk/Mediasite/Play/4a3f3721e8ec4fc18af181236c7378f01d","17","1",],
["2","Thurs 16:00-16:50<br/>Chem LT1","Polymorphism and Typeclasses","","https://mediasite.bris.ac.uk/Mediasite/Play/fb4756e80010403aa137367145fe63a41d","18","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Lists and Laziness","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet02.pdf","","19","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["2","Mon 10:00-10:50<br/>Chem LT1","Algebraic Datatypes (ADTs)","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/ADTs.hs","https://mediasite.bris.ac.uk/Mediasite/Play/da991129cc734ceeb958ce622d34a2d31d","24","1",],
["2","Thurs 16:00-16:50<br/>Chem LT1","'Purity' and IO","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/PurityAndIOBluePeter.lhs","https://mediasite.bris.ac.uk/Mediasite/Play/c79199545fe943e29a048476ff4835981d","25","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","ADTs and Pattern Matching","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet03.pdf","","27","5",],
["0","","","","","0","0",],
["5","in your own time","","","","32","1",],
["0","","","","","0","0",],
["7","Deadline: 12:00 Tues 29/10/24","Power to the People","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","https://www.ole.bris.ac.uk/ultra/courses/_259156_1/outline","33","3",],
["0","","","","","0","0",],
["2","Mon 10:00-10:50<br/>Chem LT1","More IO (Katamari Haskacy)","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/KatamariHaskacyBluePeter.lhs","https://mediasite.bris.ac.uk/Mediasite/Play/ac580ab8f2024a64889b631b0882bd2d1d","36","2",],
["2","Thurs 16:00-16:50<br/>Chem LT1","Higher-order Functions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HObp.hs","https://mediasite.bris.ac.uk/Mediasite/Play/73924e27273242cba966e260978f13ff1d","38","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Programming with IO","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet04.pdf","","40","5",],
["0","","","","","0","0",],
["5","in your own time","","","","45","2",],
["0","","","","","0","0",],
["8","(optional)","Structural Inductive Proofs","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus1.pdf","","47","5",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["9","Mon 10:00-10:50<br/>Chem LT1","More Higher-order Functions","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HObp.hs","","52","2",],
["2","Thurs 16:00-16:50<br/>Chem LT1","Folds Part 1","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Folds.hs","https://mediasite.bris.ac.uk/Mediasite/Play/d08595d86d7040baa4e7999bdd5f90301d","54","2",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","HO Functions (filter, map, and more)","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet05.pdf","","56","5",],
["0","","","","","0","0",],
["5","in your own time","","","","61","3",],
["0","","","","","0","0",],
["10","","Sudoku","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/Sudoku/SudokuInstrs.pdf","","64","4",],
["0","","","","","0","0",],
["9","Mon 10:00-10:50<br/>Chem LT1","Folds Part 2","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Folds.hs","","68","2",],
["9","Thurs 16:00-16:50<br/>Chem LT1","Functors","","","70","1",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Folds","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet06.pdf","","71","5",],
["0","","","","","0","0",],
["11","(optional)","Binary Trees with Alex Kavvos","https://mediasite.bris.ac.uk/Mediasite/Play/b3fcbbfaf52a4ea0a850d131b088c8ac1d","","0","0",],
["5","in your own time","","","","76","3",],
["7","Deadline: 12:00 Thurs 21/11/24<br/>(submit at least 1 hour early)","Simplify","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW2/CW2-Instrs.pdf","https://www.ole.bris.ac.uk/ultra/courses/_259156_1/outline","79","3",],
["0","","","","","0","0",],
["9","Mon 10:00-10:50<br/>Chem LT1","Programs as Data Transformations","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/slides/function-composition.pdf","","82","2",],
["12","Thurs 16:00-16:50<br/>Chem LT1","Monads I","","","0","0",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Functors & Data Transformations","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet07.pdf","","84","2",],
["0","","","","","0","0",],
["5","in your own time","","","","86","1",],
["0","","","","","0","0",],
["8","(optional)","Monoids","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus2.pdf","","87","5",],
["13","in your own time","Mock Test","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/mock.pdf","","92","1",],
["12","Mon 10:00-10:50<br/>Chem LT1","Monads II","","","0","0",],
["12","Thurs 16:00-16:50<br/>Chem LT1","Property-Based Testing","","","0","0",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Monads","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet08.pdf","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["8","(optional)","Maps, Tries, Sets, and Perfect Trees","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus3.pdf","","93","5",],
["0","","","","","0","0",],
["12","Mon 10:00-10:50<br/>Chem LT1","Model-View-Update Pattern","","","0","0",],
["12","Thurs 16:00-16:50<br/>Chem LT1","Mock Test (interactive quiz)","","","0","0",],
["4","Mon 15:00-18:00<br/>MVB2.11/1.15","Minesweeper","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet09.pdf","","98","5",],
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
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],
["0","","","","","0","0",],

];

const files = [
["0","https://plrg-bristol.github.io/","Bristol PL Research Group",],
["1","https://docs.google.com/presentation/d/1wkVzt7ibiRMIwxB10C4qETbi9vqPPSOK_JB_0N-Sjgc/edit?usp=sharing","Welcome to Functional Programming Slides",],
["2","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Lecture1.hs","Lecture1.hs",],
["3","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Recursion.hs","Recursion.hs",],
["4","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/BasicTypes.hs","BasicTypes.hs",],
["5","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet01.pdf","sheet01.pdf",],
["6","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet01Dyslexic.pdf","sheet01Dyslexic.pdf",],
["7","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer01.pdf","answer01.pdf",],
["8","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer01Dyslexic.pdf","answer01Dyslexic.pdf",],
["9","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code01.hs","code01.hs",],
["10","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Types.pdf","Types",],
["11","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/HaskellPoDs.pdf","Plain old Datatypes",],
["12","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Tuples.pdf","Tuples",],
["13","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Branching.pdf","Branching",],
["14","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Guards.pdf","Guards",],
["15","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/HistoryOfHaskell.pdf","History of Haskell",],
["16","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/HowFPMattered.pdf","How Functional Programming Mattered",],
["17","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/PatternsLists.hs","PatternsLists.hs",],
["18","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Polymorphism.hs","Polymorphism.hs",],
["19","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet02.pdf","sheet02.pdf",],
["20","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet02Dyslexic.pdf","sheet02Dyslexic.pdf",],
["21","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer02.pdf","answer02.pdf",],
["22","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer02Dyslexic.pdf","answer02Dyslexic.pdf",],
["23","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code02.hs","code02.hs",],
["24","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/ADTs.hs","ADTs.hs",],
["25","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/PurityAndIO.hs","PurityAndIO.hs",],
["26","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/PurityAndIOBluePeter.lhs","PurityAndIOBluePeter.lhs",],
["27","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet03.pdf","sheet03.pdf",],
["28","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet03Dyslexic.pdf","sheet03Dyslexic.pdf",],
["29","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer03.pdf","answer03.pdf",],
["30","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer03Dyslexic.pdf","answer03Dyslexic.pdf",],
["31","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code03.hs","code03.hs",],
["32","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/PatternMatching.pdf","Pattern Matching",],
["33","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW1/CW1-Instrs.pdf","CW1-Instrs.pdf",],
["34","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW1/CW1-InstrsDyslexic.pdf","CW1-InstrsDyslexic.pdf",],
["35","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW1/CW1-PowerToThePeople.zip","CW1-PowerToThePeople.zip",],
["36","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/KatamariHaskacy.hs","KatamariHaskacy.hs",],
["37","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/KatamariHaskacyBluePeter.lhs","KatamariHaskacyBluePeter.lhs",],
["38","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HO.hs","HO.hs",],
["39","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HObp.hs","HObp.hs",],
["40","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet04.pdf","sheet04.pdf",],
["41","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet04Dyslexic.pdf","sheet04Dyslexic.pdf",],
["42","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer04.pdf","answer04.pdf",],
["43","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer04Dyslexic.pdf","answer04Dyslexic.pdf",],
["44","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code04.hs","code04.hs",],
["45","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Lists.pdf","Lists",],
["46","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Maybe.pdf","Maybe",],
["47","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus1.pdf","sheetBonus1.pdf",],
["48","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus1Dyslexic.pdf","sheetBonus1Dyslexic.pdf",],
["49","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/StructuralInductiveProofs.pdf","Structural Inductive Proofs",],
["50","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus1.pdf","answerBonus1.pdf",],
["51","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus1Dyslexic.pdf","answerBonus1Dyslexic.pdf",],
["52","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HO.hs","HO.hs",],
["53","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/HObp.hs","HObp.hs",],
["54","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Folds.hs","Folds.hs",],
["55","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/FoldsBP.hs","FoldsBP.hs",],
["56","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet05.pdf","sheet05.pdf",],
["57","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet05Dyslexic.pdf","sheet05Dyslexic.pdf",],
["58","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer05.pdf","answer05.pdf",],
["59","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer05Dyslexic.pdf","answer05Dyslexic.pdf",],
["60","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code05.hs","code05.hs",],
["61","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/HigherOrderFunctions.pdf","HO Functions",],
["62","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Map.pdf","Map",],
["63","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/PreludeFunctionsCheatsheet.pdf","Prelude Functions Cheatsheet",],
["64","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/Sudoku/SudokuInstrs.pdf","SudokuInstrs.pdf",],
["65","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/Sudoku/SudokuInstrsDyslexic.pdf","SudokuInstrsDyslexic.pdf",],
["66","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/Sudoku/Sudoku.hs","Sudoku.hs",],
["67","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/Sudoku/hard.txt","hard.txt",],
["68","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Folds.hs","Folds.hs",],
["69","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/FoldsBP.hs","FoldsBP.hs",],
["70","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/Functors.hs","Functors.hs",],
["71","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet06.pdf","sheet06.pdf",],
["72","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet06Dyslexic.pdf","sheet06Dyslexic.pdf",],
["73","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer06.pdf","answer06.pdf",],
["74","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer06Dyslexic.pdf","answer06Dyslexic.pdf",],
["75","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code06.hs","code06.hs",],
["76","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Folds.pdf","Folds",],
["77","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/copro.pdf","How to Design \"Co\"-Programs",],
["78","https://www.cs.ox.ac.uk/jeremy.gibbons/publications/hodgp-journal.pdf","Design Patterns as Higher-Order Datatype-Generic Programs",],
["79","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW2/CW2-Instrs.pdf","CW2-Instrs.pdf",],
["80","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW2/CW2-InstrsDyslexic.pdf","CW2-InstrsDyslexic.pdf",],
["81","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/coursework/CW2/CW2-Simplify.zip","CW2-Simplify.zip",],
["82","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/slides/function-composition.pdf","function-composition.pdf",],
["83","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/code/DataTransformations.hs","DataTransformations.hs",],
["84","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet07.pdf","sheet07.pdf",],
["85","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet07Dyslexic.pdf","sheet07Dyslexic.pdf",],
["86","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Intro-to-IO.pdf","Intro to IO",],
["87","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus2.pdf","sheetBonus2.pdf",],
["88","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus2Dyslexic.pdf","sheetBonus2Dyslexic.pdf",],
["89","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/Monoids.pdf","Monoids notes",],
["90","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus2.pdf","answerBonus2.pdf",],
["91","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus2Dyslexic.pdf","answerBonus2Dyslexic.pdf",],
["92","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/mock.pdf","mock.pdf",],
["93","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/notes/DataMap.pdf","Data.Map",],
["94","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus3.pdf","sheetBonus3.pdf",],
["95","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheetBonus3Dyslexic.pdf","sheetBonus3Dyslexic.pdf",],
["96","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus3.pdf","answerBonus3.pdf",],
["97","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answerBonus3Dyslexic.pdf","answerBonus3Dyslexic.pdf",],
["98","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet09.pdf","sheet09.pdf",],
["99","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/sheet09Dyslexic.pdf","sheet09Dyslexic.pdf",],
["100","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer09.pdf","answer09.pdf",],
["101","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/answer09Dyslexic.pdf","answer09Dyslexic.pdf",],
["102","https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/content/functional/sheets/code09.hs","code09.hs",],

];

