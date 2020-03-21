// To-Do Finish body
import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Layout/Header";
import Drawer from "./Components/Layout/Drawer";
import Body from "./Components/Layout/Body";
import axios from "axios";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh"
  },
  //Header
  appBar: {
    display: "flex",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    display: "flex",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
    //marginBottom: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  hide: {
    display: "none"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },

  content: {
    width: "100%",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },

  contentPaper: {
    height: "100%"
  },

  search: {
    border: "1px solid black",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#ADADAD", 0.15),
    "&:hover": {
      backgroundColor: fade("#ADADAD", 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchContainer: {
    marginLeft: "auto"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },

  EditorPaper: {
    height: "100%",
    display: "flex"
  },
  Editor: {
    margin: "0 auto",
    width: "70em",
    background: "#f7c58e"
  }
}));

function App() {
  // Create a Slate editor object that won't change across renders.
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [chapterTitles, setChapterTitles] = useState([]);
  const [activeChapterTitle, setActiveChapter] = useState("");

  // Fetch chapters and set them in state
  useEffect(() => {
    fetchChapters();
  }, []);

  // Extract created sorted chapter list, extract title values and set them in state
  useEffect(() => {
    let newArray = [];
    const ByIndex = (a, b) => a.index - b.index;
    const sortedChapters = [...chapters].sort(ByIndex);
    sortedChapters.forEach(chapter => {
      newArray = [...newArray, chapter.title];
    });

    setChapterTitles([...chapterTitles, ...newArray]);
  }, [chapters]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  const handleDrawerTitleClick = title => {
    setActiveChapter(title);
  };

  const fetchChapters = async () => {
    try {
      const res = await axios.get("http://localhost:8000/chapters");
      setChapters(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        toggleForm={handleFormToggle}
      />
      <Drawer
        titles={chapterTitles}
        classes={classes}
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerClick={handleDrawerTitleClick}
      />
      <Body
        classes={classes}
        formOpen={formOpen}
        open={open}
        activeChapterTitle={activeChapterTitle}
        chapters={chapters}
      />
    </div>
  );
}

export default App;
