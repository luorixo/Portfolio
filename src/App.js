import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import { darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


// components
import Main from './components/Main';
import About from './components/About';
import Blog from './components/Blog';
import Work from './components/Work';
import Skills from './components/Skills';
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle/>

      <ThemeProvider theme={lightTheme}>

      {/* for framer motion animation on page change */}
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/work" component={Work}/>
        <Route exact path="/skills" component={Skills}/>
      </Switch>
      </AnimatePresence>
      </ThemeProvider>
  </> 
} 

export default App