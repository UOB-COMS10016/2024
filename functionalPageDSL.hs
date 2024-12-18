{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RecordWildCards #-}
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}

{-# HLINT ignore "Evaluate" #-}

module Main where

import Data.List (nub, sortOn)
import Data.Map.Strict (Map)
import Data.Map.Strict qualified as M
import Text.Printf (printf)

main :: IO ()
main = putStr $ pageToJS functionalPage config

config :: Config
config =
  MkConfig
    { currentWeek = 12,
      activityNum = 8,
      columnNum = 4,
      title = "FUNCTIONAL PROGRAMMING",
      headerOn = True,
      header1 = "EXERCISES",
      header2 = "LECTURES",
      header3 = "COURSEWORK",
      inactColour = "#999999",
      titleColour = "#777777",
      titleBColour = "#BBBBBB",
      bkgColour = "#CCCCCC",
      embossColour = "#AAAAAA",
      fontSizePix = 11
    }

functionalPage :: Page -- a.k.a. [Week], a.k.a [[GridEntry]]
functionalPage =
  [ -- Week 1
    [ Entry
        { title = "",
          spec = ExtraMaterials,
          materials =
            [ -- external "Guest seminar VOD: Haskell in the Datacentre" "https://web.microsoftstream.com/video/17f0fbf7-461c-4cf1-937f-21e8407a137e"
              -- , external "Paper: How functional programming mattered" "https://mengwangoxf.github.io/Papers/NSR15.pdf"
              external "Bristol PL Research Group" "https://plrg-bristol.github.io/"
            ]
        },
      Entry
        { title = "Welcome & Introduction",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (External "https://docs.google.com/presentation/d/1wkVzt7ibiRMIwxB10C4qETbi9vqPPSOK_JB_0N-Sjgc/edit?usp=sharing"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/a59fa0f036804fd19768d9b5d6adfe361d"
              },
          materials =
            [ external "Welcome to Functional Programming Slides" "https://docs.google.com/presentation/d/1wkVzt7ibiRMIwxB10C4qETbi9vqPPSOK_JB_0N-Sjgc/edit?usp=sharing"
            ]
        },
      Entry
        { title = "Haskell Syntax",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "Lecture1.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/c515bd32fe8341e6b7927be4739cdf821d"
              },
          materials =
            [ code "Lecture1.hs"
            ]
        },
      Entry
        { title = "GET YOUR PC READY",
          spec = SetupLab {setupLink = "./setup.html"},
          materials = []
        }
    ],
    -- Week 2
    [ Entry
        { title = "Recursion",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "Recursion.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/90e8085b9e344a14b9771946910913da1d"
              },
          materials =
            [ code "Recursion.hs"
            ]
        },
      Entry
        { title = "Types",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "BasicTypes.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/fe1958cd22b54f59bed3004871aaff561d"
              },
          materials =
            [ code "BasicTypes.hs"
            ]
        },
      Entry
        { title = "GHCi and Functions",
          spec = Worksheet "sheet01.pdf",
          materials = sheets 1 ++ answers 1
        },
      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            map
              (uncurry note)
              [ ("Types", "Types.pdf"),
                ("Plain old Datatypes", "HaskellPoDs.pdf"),
                ("Tuples", "Tuples.pdf"),
                ("Branching", "Branching.pdf"),
                ("Guards", "Guards.pdf")
              ]
        }
    ],
    -- Week 3
    [ Entry
        { title = "History of Haskell",
          spec = History,
          materials =
            [ note "History of Haskell" "HistoryOfHaskell.pdf",
              note "How Functional Programming Mattered" "HowFPMattered.pdf"
            ]
        },
      Entry
        { title = "Pattern matching and Lists",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "PatternsLists.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/4a3f3721e8ec4fc18af181236c7378f01d"
              },
          materials =
            [ code "PatternsLists.hs"
            ]
        },
      Entry
        { title = "Polymorphism and Typeclasses",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Nothing, -- Just (BBSlide "card-game.pdf")
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/fb4756e80010403aa137367145fe63a41d"
              },
          materials =
            [ -- slide "card-game.pdf"
              code "Polymorphism.hs"
            ]
        },
      -- , Entry
      --     { title = ""
      --     , spec = NotesExtra
      --     , materials = map (uncurry note)
      --         [
      --           ("Data Constructors", "DataConstructors.pdf")
      --         -- , ("Function Composition", "FunctionComposition.pdf")
      --         -- , ("Laziness", "Laziness.pdf")
      --         , ("Type Classes", "TypeClasses.pdf")
      --         , ("Recipe for writing functions", "FunctionRecipe.pdf")
      --         ]
      --     }
      Entry
        { title = "Lists and Laziness",
          spec = Worksheet "sheet02.pdf",
          materials = sheets 2 ++ answers 2
        }
    ],
    -- Week 4
    [ Entry
        { title = "Algebraic Datatypes (ADTs)",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "ADTs.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/da991129cc734ceeb958ce622d34a2d31d"
              },
          materials =
            [ code "ADTs.hs"
            ]
        },
      Entry
        { title = "'Purity' and IO",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "PurityAndIOBluePeter.lhs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/c79199545fe943e29a048476ff4835981d"
              },
          materials =
            [ code "PurityAndIO.hs",
              code "PurityAndIOBluePeter.lhs"
            ]
        },
      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            map
              (uncurry note)
              [ ("Pattern Matching", "PatternMatching.pdf")
              ]
        },
      Entry
        { title = "ADTs and Pattern Matching",
          spec = Worksheet "sheet03.pdf",
          materials = sheets 3 ++ answers 3
        },
      Entry
        { title = "Power to the People",
          spec =
            Coursework
              { instructions = "CW1/CW1-Instrs.pdf",
                submissionLink = "https://www.ole.bris.ac.uk/ultra/courses/_259156_1/outline",
                deadline = "12:00 Tues 29/10/24"
              },
          materials =
            map
              (coursework "CW1")
              [ "CW1-Instrs.pdf",
                "CW1-InstrsDyslexic.pdf",
                "CW1-PowerToThePeople.zip"
              ]
        }
    ],
    -- Week 5
    [ Entry
        { title = "More IO (Katamari Haskacy)",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "KatamariHaskacyBluePeter.lhs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/ac580ab8f2024a64889b631b0882bd2d1d"
              },
          materials =
            [ code "KatamariHaskacy.hs",
              code "KatamariHaskacyBluePeter.lhs"
            ]
        },
      Entry
        { title = "Higher-order Functions",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "HObp.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/73924e27273242cba966e260978f13ff1d"
              },
          materials =
            [ code "HO.hs",
              code "HObp.hs"
            ]
        },
      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            map
              (uncurry note)
              [ ("Lists", "Lists.pdf"),
                ("Maybe", "Maybe.pdf")
              ]
        },
      Entry
        { title = "Programming with IO",
          spec = Worksheet "sheet04.pdf",
          materials = sheets 4 ++ answers 4
        },
      Entry
        { title = "Structural Inductive Proofs",
          spec = WorksheetBonus "sheetBonus1.pdf",
          materials = sheetsBonus 1 ++ [note "Structural Inductive Proofs" "StructuralInductiveProofs.pdf"] ++ answersBonus 1
        }
    ],
    -- Reading week
    [],
    -- Week 7
    [ Entry
        { title = "More Higher-order Functions",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "HObp.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/f92529a3dd8a46cf8697f3b494a9dbea1d"
              },
          materials =
            [ code "HO.hs",
              code "HObp.hs"
            ]
        },
      Entry
        { title = "Folds Part 1",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "Folds.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/d08595d86d7040baa4e7999bdd5f90301d"
              },
          materials =
            [ code "Folds.hs",
              code "FoldsBP.hs"
            ]
        },
      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            map
              (uncurry note)
              [ ("HO Functions", "HigherOrderFunctions.pdf"),
                ("Map", "Map.pdf"),
                ("Prelude Functions Cheatsheet", "PreludeFunctionsCheatsheet.pdf")
              ]
        },
      Entry
        { title = "HO Functions (filter, map, and more)",
          spec = Worksheet "sheet05.pdf",
          materials = sheets 5 ++ answers 5
        },
      Entry
        { title = "Sudoku",
          spec = FormativePractical "Sudoku/SudokuInstrs.pdf",
          materials =
            map
              (coursework "Sudoku")
              [ "SudokuInstrs.pdf",
                "SudokuInstrsDyslexic.pdf",
                "Sudoku.hs",
                "hard.txt"
              ]
        }
    ],
    -- Week 8
    [ Entry
        { title = "Folds Part 2",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "Folds.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/e1900f93f7b64c8d9622959ec48786531d"
              },
          materials =
            [ code "Folds.hs",
              code "FoldsBP.hs"
            ]
        },
      Entry
        { title = "Functors",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "Functors.hs"), -- Just (BBSlide "week7.pdf")
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/9bf3ad694a34440baea79558a2d2e96f1d"
              },
          materials =
            [ code "Functors.hs"
            ]
        },
      Entry
        { title = "Binary Trees with Alex Kavvos",
          spec =
            LectureExtra
              { videoLink = "https://mediasite.bris.ac.uk/Mediasite/Play/b3fcbbfaf52a4ea0a850d131b088c8ac1d"
              },
          materials = []
        },
      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            [ note "Folds" "Folds.pdf",
              note "How to Design \"Co\"-Programs" "copro.pdf",
              external "Design Patterns as Higher-Order Datatype-Generic Programs" "https://www.cs.ox.ac.uk/jeremy.gibbons/publications/hodgp-journal.pdf"
            ]
        },
      Entry
        { title = "Folds",
          spec = Worksheet "sheet06.pdf",
          materials = sheets 6 ++ answers 6
        },
      Entry
        { title = "Simplify",
          spec =
            Coursework
              { instructions = "CW2/CW2-Instrs.pdf",
                submissionLink = "https://www.ole.bris.ac.uk/ultra/courses/_259156_1/outline",
                deadline = "12:00 Thurs 21/11/24<br/>(submit at least 1 hour early)"
              },
          materials =
            map
              (coursework "CW2")
              [ "CW2-Instrs.pdf",
                "CW2-InstrsDyslexic.pdf",
                "CW2-Simplify.zip"
              ]
        }
    ],
    -- Week 9
    [ Entry
        { title = "Programs as Data Transformations",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBSlide "function-composition.pdf"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/f967fc610d0b40c3b9693669721d6f6c1d"
              },
          materials =
            [ slide "function-composition.pdf",
              code "DataTransformations.hs"
            ]
        },
      Entry
        { title = "Monads I",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "Monads (pt 1).hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/348a3487267e48549c46920833872bb51d"
              },
          materials =
            [code "Monads (pt 1).hs"]
        },
      --   slide "IO-and-Gen.pdf"
      -- , code "ExampleIO.hs"

      Entry
        { title = "",
          spec = NotesExtra,
          materials =
            map
              (uncurry note)
              [("Intro to IO", "Intro-to-IO.pdf")]
        },
      Entry
        { title = "Functors & Data Transformations",
          spec = Worksheet "sheet07.pdf",
          materials = sheets 7 ++ answers 7
        },
      Entry -- we do want this to go up, Sam promised it last week
        { title = "Monoids",
          spec = WorksheetBonus "sheetBonus2.pdf",
          materials = sheetsBonus 2 ++ [note "Monoids notes" "Monoids.pdf"] ++ answersBonus 2
        }
    ],
    -- Week 10
    [ Entry
        { title = "Mock Test",
          spec = MockTest {test = noteLink "mock.pdf"},
          materials =
            map
              note'
              [ "mock.pdf"
              , "mock-answers.pdf"
              ]
        },
      Entry
        { title = "Monads II: Parsing",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "MonadicParsingBluePeter.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/57b3afd4de3e40bf860d918184b452c71d"
              },
          materials =
            [ code "MonadicParsing.hs"
            , code "MonadicParsingBluePeter.hs"
            , sheet "Grogu.hs"
            ]
        },

      Entry
        { title = "Property-Based Testing",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (BBCode "MiniPBT.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/8bf6fcd43aa045229d3238b3027ef9801d"
              },
          materials =
            [code "Sort.hs", code "MiniPBT.hs"]
        },

      Entry
        { title = "Monads",
          spec = Worksheet "sheet08.pdf",
          materials = sheets 8 ++ [sheet "Grogu.hs"] ++ answers 8
        },
      Entry
        { title = "Maps, Tries, Sets, and Perfect Trees",
          spec = WorksheetBonus "sheetBonus3.pdf",
          materials = note "Data.Map" "DataMap.pdf" : sheetsBonus 3 ++ answersBonus 3
        }
    ],
    -- Week 11
    [ Entry
        { title = "Model-View-Update Pattern With Hangman",
          spec =
            Lecture
              { firstOrSecond = First,
                slidesFile' = Just (BBCode "HangmanBluePeter.hs"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/e9f9b0c5db954021968e882e3a4eff561d"
              },
          materials =
            [ code "Hangman.hs"
            , code "HangmanBluePeter.hs"
            ]
        },
      --   external "Functors and Applicatives slides + quiz"
      --            "https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa"
      -- , code "ApplicativeLive2023.hs"

      Entry
        { title = "Mock Test (interactive quiz)",
          spec =
            Lecture
              { firstOrSecond = Second,
                slidesFile' = Just (External $ noteLink "mock.pdf"),
                lectureRecording = Just "https://mediasite.bris.ac.uk/Mediasite/Play/03da7dc2ef6846caaaf77ebb1710aaf11d"
              },
          materials =
            map
              note'
              [ "mock.pdf"
              , "mock-answers.pdf"
              ]
        },
      Entry
        { title = "Minesweeper",
          spec = Worksheet "sheet09.pdf",
          materials = sheets 9 ++ answers 9
        }
    ],
    -- Week 12/revision week
    [
      --   Entry
      --     { title = "Mock Test Walkthrough"
      --     , spec =
      --       Lecture
      --         { firstOrSecond = First
      --         , slidesFile' = Just (External $ noteLink "COMS10016-Mock.pdf")
      --         , lectureRecording = Nothing
      --         }
      --     , materials =
      --         [ note' "COMS10016-Mock.pdf"
      --         , note' "COMS10016-Mock-answers.pdf"
      --         , slide "Mock.hs"
      --         , slide "SamMock.pdf"
      --         ]
      --     }
      -- , Entry
      --     { title = "Functor/Applicative recap and Quiz + Q&A"
      --     , spec = Lecture
      --         { firstOrSecond = Second
      --         , slidesFile' = Just (External "https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa")
      --         , lectureRecording = Nothing
      --         }
      --     , materials =
      --         [ external "Functors and Applicatives slides + quiz"
      --                     "https://quizizz.com/admin/presentation/619be26fa9afb8001d4e68fa"
      --         ]
      --     }
        Entry
          { title = "Revision of previous sheets"
          , spec = Worksheet "sheet09.pdf"
          , materials = []
          }
      -- , Entry
      --     { title = "Sheet of Death"
      --     , spec = WorksheetBonus "sheetBonus4.pdf"
      --     , materials = sheetsBonus 4 ++ answersBonus 4
      --     }
      ],

    -- Spare couple weeks of lectures, to make sure site doesn't break
    [],
    []
  ]

---------------------------------------------------------------------
-- Specifying Categories for Entry types
---------------------------------------------------------------------

entryToCategory :: GridEntry -> Category
entryToCategory (Entry _ details materials) = case details of
  SetupLab {} -> simpleCat "Setup Lab:" "#EEEEDD"
  Lectures {..} ->
    MkCat
      { title = "Lectures",
        colour = "#CCCFFF",
        counter = False,
        slidesLinkName = "",
        materialLinkName =
          if not (null materials)
            then "Materials"
            else ""
      }
  Lecture {..} ->
    MkCat
      { title = "Lecture",
        colour = "#CCCFFF",
        counter = False,
        slidesLinkName = case lectureRecording of
          Just _ -> "Lecture Recording"
          _ -> "",
        materialLinkName =
          if not (null materials)
            then "Materials"
            else ""
      }
  LectureExtra {..} ->
    MkCat
      { title = "Bonus Lecture",
        colour = "#D8CCFF",
        counter = False,
        slidesLinkName = "",
        materialLinkName =
          if not (null materials)
            then "Materials"
            else ""
      }
  ExtraMaterials ->
    MkCat
      { title = "Extra Materials",
        colour = "#DDDDDD",
        counter = False,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  Worksheet {} ->
    MkCat
      { title = "Worksheet",
        colour = "#EEEEDD",
        counter = True,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  WorksheetBonus {} ->
    MkCat
      { title = "Bonus Worksheet",
        colour = "#FCC981",
        counter = True,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  NotesExtra ->
    MkCat
      { title = "Extra Notes,<br> Examples,<br> &amp; Explanations",
        colour = "#94e5bf",
        counter = False,
        slidesLinkName = "",
        materialLinkName = "Notes"
      }
  History ->
    MkCat
      { title = "History",
        colour = "#EEEEDD",
        counter = False,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  Coursework {submissionLink} ->
    MkCat
      { title = "Coursework",
        colour = "#EEEEDD",
        counter = False, -- Doesn't seem to be working for some reason
        slidesLinkName =
          if not (null submissionLink)
            then "Submit on Blackboard"
            else "",
        materialLinkName = "Materials"
      }
  FormativePractical {} ->
    MkCat
      { title = "Formative Practical",
        colour = "#EEEEDD",
        counter = True,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  MockTest {test} ->
    MkCat
      { title = "Mock Test",
        colour = "#EEEEDD",
        counter = False,
        slidesLinkName = "",
        materialLinkName = "Materials"
      }
  _ -> blankCategory

isLectureCategory :: EntrySpec -> Bool
isLectureCategory x = case x of
  Lectures {} -> True
  Lecture {} -> True
  NotesExtra {} -> True
  LectureExtra {} -> True
  _ -> False

isCourseworkCategory :: EntrySpec -> Bool
isCourseworkCategory x = case x of
  Worksheet {} -> True
  WorksheetBonus {} -> True
  SetupLab {} -> True
  Coursework {} -> True
  FormativePractical {} -> True
  _ -> False

blankCategory :: Category
blankCategory =
  MkCat
    { title = "",
      colour = "#CCCCCC",
      counter = False,
      slidesLinkName = "",
      materialLinkName = ""
    }

---------------------------------------------------------------------
-- Specifying Entry to Activity transformation
---------------------------------------------------------------------

entryToActivity :: CategoryDict -> GridEntry -> Activity
entryToActivity catDict entry@(Entry {title, spec, materials}) =
  MkActivity
    { categoryNum = catDict M.! entryToCategory entry, -- Slightly unsafe
      dateTime = case spec of
        ExtraMaterials -> "(optional)"
        History -> "(optional)"
        SetupLab {} -> "Mon 16/09/24<br/>15:00-18:00<br/>Wed 18/09/24<br/>10:00-13:00<br/>MVB2.11/1.15"
        Worksheet {} -> "Mon 15:00-18:00<br/>MVB2.11/1.15"
        WorksheetBonus {} -> "(optional)"
        Lectures {} -> "Mon 10:00-10:50<br/>Thurs 16:00-16:50<br/>Chem LT1"
        Lecture {firstOrSecond} -> case firstOrSecond of
          First -> "Mon 10:00-10:50<br/>Chem LT1"
          Second -> "Thurs 16:00-16:50<br/>Chem LT1"
        LectureExtra {} -> "(optional)"
        NotesExtra -> "in your own time"
        Coursework {..} -> "Deadline: " ++ deadline
        FormativePractical {} -> ""
        MockTest {} -> "in your own time"
        _ -> "",
      title = case spec of
        Lectures {slidesFile, revisionVideos} ->
          titleWithSlidesAndVideos title (Just slidesFile) revisionVideos
        -- Lecture{slidesFile', revisionVideo}
        --   -> titleWithSlidesAndVideos title slidesFile' revisionVideo
        _ -> title,
      activityURL = case spec of
        SetupLab {setupLink} -> setupLink
        Worksheet {file} -> sheetLink file
        WorksheetBonus {file} -> sheetLink file
        Coursework {instructions} -> courseworkLink instructions
        FormativePractical {file} -> courseworkLink file
        LectureExtra {videoLink} -> videoLink
        Lecture {slidesFile'} -> maybeSlidesPathToURL slidesFile'
        MockTest {test} -> test
        _ -> "",
      slidesURL = case spec of
        Coursework {submissionLink} -> submissionLink
        Lecture {lectureRecording} -> case lectureRecording of
          Just revVid -> revVid
          _ -> ""
        _ -> "",
      materialStart = 0,
      materialRange = length materials
    }

titleWithSlidesAndVideos :: String -> Maybe SlidesPath -> [URL] -> [Char]
titleWithSlidesAndVideos title slidesFile revisionVideos =
  ( case slidesFile of
      Nothing -> title
      Just slides -> href title (slidesPathToUrl slides)
  )
    ++ revisionVidLinks revisionVideos

href :: String -> URL -> String
href text link = printf "<a href='%s' target='_blank'>%s</a>" link text

revisionVidLinks :: [URL] -> String
revisionVidLinks vids =
  zipWith f [1 ..] vids
    |> concat
  where
    f :: Int -> URL -> String
    f i link = "<br/>(" ++ href ("Revision Video " ++ show i) link ++ ")"

---------------------------------------------------------------------
-- Types API
---------------------------------------------------------------------

data GridEntry = Entry
  { title :: String,
    spec :: EntrySpec,
    materials :: [Material]
  }
  deriving (Show, Eq)

data EntrySpec
  = ExtraMaterials
  | Lectures
      { slidesFile :: SlidesPath,
        revisionVideos :: [URL]
      }
  | Lecture
      { firstOrSecond :: FirstOrSecond,
        slidesFile' :: Maybe SlidesPath,
        lectureRecording :: Maybe URL
      }
  | LectureExtra {videoLink :: String}
  | SetupLab {setupLink :: URL}
  | Worksheet {file :: String}
  | WorksheetBonus {file :: String}
  | History
  | NotesExtra
  | Coursework
      { instructions :: String,
        submissionLink :: URL,
        deadline :: String
      }
  | FormativePractical {file :: String}
  | MockTest {test :: URL}
  | Blank
  deriving (Show, Eq)

data FirstOrSecond = First | Second deriving (Show, Eq, Ord)

data SlidesPath
  = BBSlide FilePath
  | BBCode FilePath
  | External URL
  deriving (Show, Eq)

data Material = MkMaterial
  { name :: String,
    link :: URL
  }
  deriving (Show, Eq, Ord)

data Category = MkCat
  { title :: String,
    colour :: Colour,
    counter :: Bool,
    slidesLinkName :: String,
    materialLinkName :: String
  }
  deriving (Show, Eq, Ord)

data Config = MkConfig
  { currentWeek :: Int, -- current week [releases content fully visible up to this week]
    activityNum :: Int, -- number of activities per week (empty slots possible)
    columnNum :: Int, -- desired columns per week (yet autofitted to max 2 rows per week)
    title :: String, -- content title (different to unitName since multiple content streams maybe in one unit)
    headerOn :: Bool, -- table column headers on(=1) or off(=0) min of 4 columns needed to render
    header1 :: String, -- leftmost 1x column header
    header2 :: String, -- middle 2x column header
    header3 :: String, -- rest of the columns header
    inactColour :: Colour, -- font colour for inactive content
    titleColour :: Colour, -- table title colour
    titleBColour :: Colour, -- table title background colour
    bkgColour :: Colour, -- table border background colour
    embossColour :: Colour, -- table border emboss colour
    fontSizePix :: Int -- font size in pixels
    --    extendCatNum1 :: Int     -- number of one category that has no border to above cell (e.g. for multi-week coursework)
    --    extendCatNum2 :: Int     -- number of one category that has no border to above cell (e.g. for multi-week empty)
  }
  deriving (Show)

-- extendCatNum1 and extendCatNum2 should ideally be generated

-- Type synonyms
type CategoryDict = Map Category Int

type Page = [Week]

type Week = [GridEntry]

type URL = String

type Colour = String

-- Utility types for compiling to Javascript

data Activity = MkActivity
  { categoryNum :: Int,
    dateTime :: String,
    title :: String,
    activityURL :: String,
    slidesURL :: String,
    materialStart :: Int,
    materialRange :: Int
  }
  deriving (Show, Eq, Ord)

data ActivitiesMaterials = MkAM ![Activity] ![Material]
  deriving (Show, Eq, Ord)

instance Semigroup ActivitiesMaterials where
  (MkAM a1s m1s) <> (MkAM a2s m2s) = MkAM (a1s ++ a2s') (m1s ++ m2s)
    where
      a2s' = map (adjustIndex (length m1s)) a2s
      adjustIndex n activity@(MkActivity {materialRange, materialStart})
        | materialRange > 0 = activity {materialStart = materialStart + n}
        | otherwise = activity -- If no materials, don't increment start. Makes diffs cleaner

instance Monoid ActivitiesMaterials where
  mempty = MkAM [] []

---------------------------------------------------------------------
-- Smart constructors
---------------------------------------------------------------------

-- Materials

note :: String -> String -> Material
note name file = MkMaterial name (noteLink file)

note' :: String -> Material
note' file = MkMaterial file (noteLink file)

code :: String -> Material
code file = MkMaterial file (codeLink file)

slide :: String -> Material
slide file = MkMaterial file (slideLink file)

coursework :: String -> String -> Material
coursework cwDir file = MkMaterial file (courseworkLink (cwDir ++ "/" ++ file))

external :: String -> URL -> Material
external = MkMaterial

sheet :: String -> Material
sheet file = MkMaterial file (sheetLink file)

sheets :: Int -> [Material]
sheets i =
  map
    sheet
    [ printf "sheet%02d.pdf" i,
      printf "sheet%02dDyslexic.pdf" i
    ]

answers :: Int -> [Material]
answers i =
  map
    sheet
    [ printf "answer%02d.pdf" i,
      printf "answer%02dDyslexic.pdf" i,
      printf "code%02d.hs" i
    ]

sheetsBonus :: Int -> [Material]
sheetsBonus i =
  map
    sheet
    [ printf "sheetBonus%01d.pdf" i,
      printf "sheetBonus%01dDyslexic.pdf" i
    ]

answersBonus :: Int -> [Material]
answersBonus i =
  map
    sheet
    [ printf "answerBonus%01d.pdf" i,
      printf "answerBonus%01dDyslexic.pdf" i
    ]

-- Link construction

bbRootDir :: URL
bbRootDir = "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2024_TB-1/"

comingSoonPage :: URL
comingSoonPage = "" -- funcRootDir ++ "coming-soon.html"

funcRootDir :: URL
funcRootDir = bbRootDir ++ "content/functional/"

dir :: String -> String -> URL
dir folder path = funcRootDir ++ folder ++ "/" ++ path

sheetLink :: String -> URL
sheetLink = dir "sheets"

noteLink :: String -> URL
noteLink = dir "notes"

slideLink :: String -> URL
slideLink = dir "slides"

maybeSlidesPathToURL :: Maybe SlidesPath -> URL
maybeSlidesPathToURL = maybe comingSoonPage slidesPathToUrl

slidesPathToUrl :: SlidesPath -> URL
slidesPathToUrl slidesFile =
  case slidesFile of
    BBSlide path -> slideLink path
    BBCode path -> codeLink path
    External url -> url

codeLink :: String -> URL
codeLink = dir "code"

courseworkLink :: String -> URL
courseworkLink = dir "coursework"

-- Grid entries

blankEntry :: GridEntry
blankEntry = Entry "" Blank []

-- Categories

simpleCat :: String -> Colour -> Category
simpleCat title colour =
  MkCat
    { title = title,
      colour = colour,
      counter = False,
      slidesLinkName = "",
      materialLinkName = ""
    }

---------------------------------------------------------------------
-- Compilation machinery
---------------------------------------------------------------------

genCategoryDict :: Page -> CategoryDict
genCategoryDict page =
  concat page
    |> map entryToCategory
    |> nub
    |> (`zip` [1 ..])
    |> M.fromList
    |> M.insert blankCategory 0

genActivitiesAndMaterials ::
  Page ->
  CategoryDict ->
  Config ->
  ActivitiesMaterials
genActivitiesAndMaterials page catDict config =
  map genPerWeek page
    |> mconcat
  where
    genPerWeek :: Week -> ActivitiesMaterials
    genPerWeek gridEntries =
      [e1, e2, e3, e4, e5, e6, e7, e8]
        |> map genPerEntry
        |> mconcat
      where
        ([e1, e5], [e2, e3, e6, e7], [e4, e8]) = (pad 2 exercises, pad 4 lectures, pad 2 coursework)
        (exercises, lectures, coursework) = foldr splitIntoSections ([], [], []) gridEntries

        splitIntoSections entry@(Entry {spec}) (ex, lecs, cws)
          | isLectureCategory spec = (ex, entry : lecs, cws)
          | isCourseworkCategory spec = (ex, lecs, entry : cws)
          | otherwise = (entry : ex, lecs, cws)

        pad :: Int -> [GridEntry] -> [GridEntry]
        pad n xs = take n $ xs ++ repeat blankEntry

    genPerEntry :: GridEntry -> ActivitiesMaterials
    genPerEntry entry = MkAM [entryToActivity catDict entry] (materials entry)

pageToJS :: Page -> Config -> String
pageToJS page config =
  unlines
    [ configToJS config,
      categoriesToJS catDict,
      activitiesToJS activities,
      materialsToJS materials
    ]
  where
    catDict = genCategoryDict page
    MkAM activities materials =
      genActivitiesAndMaterials page catDict config

configToJS :: Config -> String
configToJS MkConfig {..} =
  [ ("currentWeek  ", show currentWeek),
    ("activityNum  ", show activityNum),
    ("columnNum    ", show columnNum),
    ("title        ", show title),
    ("headerOn     ", if headerOn then "1" else "0"),
    ("header1      ", show header1),
    ("header2      ", show header2),
    ("header3      ", show header3),
    ("inactColour  ", show inactColour),
    ("titleColour  ", show titleColour),
    ("titleBColour ", show titleBColour),
    ("bkgColour    ", show bkgColour),
    ("embossColour ", show embossColour),
    ("fontSizePix  ", show fontSizePix),
    ("extendCatNum1", "-1"),
    ("extendCatNum2", "-1")
  ]
    |> map (\(name, val) -> "const " ++ name ++ " = " ++ val ++ ";")
    |> unlines

categoriesToJS :: CategoryDict -> String
categoriesToJS catDict =
  unlines
    [ "var categories = [",
      M.toList catDict
        |> sortOn snd
        |> map (\(MkCat {..}, index) -> listToJSArray [show index, title, colour, if counter then "1" else "0", slidesLinkName, materialLinkName])
        |> unlines,
      "];"
    ]

listToJSArray :: [String] -> String
listToJSArray xs = "[" ++ foldr f "" xs ++ "],"
  where
    f listItem acc = show listItem ++ "," ++ acc

activitiesToJS :: [Activity] -> String
activitiesToJS activities =
  unlines
    [ "const activities = [",
      activities
        |> map
          ( \MkActivity {..} ->
              listToJSArray
                [show categoryNum, dateTime, title, activityURL, slidesURL, show materialStart, show materialRange]
          )
        |> unlines,
      "];"
    ]

materialsToJS :: [Material] -> String
materialsToJS materials =
  unlines
    [ "const files = [",
      zipWith materialToJS [0 ..] materials
        |> unlines,
      "];"
    ]

materialToJS :: Int -> Material -> String
materialToJS index MkMaterial {..} =
  listToJSArray [show index, link, name]

---------------------------------------------------------------------
-- Utility Functions
---------------------------------------------------------------------

infixl 0 |>

(|>) :: a -> (a -> b) -> b
x |> f = f x
