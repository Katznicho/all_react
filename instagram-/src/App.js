import React from 'react';
import SideMenu from './Component/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Component/Headr'
import './App.css';
import Employees from './Component/Employees';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#000",
      main: "#fff",
      dark:"#1010"
    }
  }
})
const useStyles = makeStyles({
  appMain: {
    width: "100%",
    paddingLeft: "270px"
  }
});
function App() {
  const classes = useStyles()
  return (
    <ThemeProvider>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header />
        <Employees/>
      </div>
      
      <CssBaseline/>
    </ThemeProvider>
   
     
  )
}

export default App
