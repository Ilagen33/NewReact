//IMPORT: CSS vabilla e Bootstrap
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT: (dai componenti) footer e funziona principale
import MyFooter from "./Components/MyFooter";
import Genres from "./Components/AllTheBooks";

//IMPORT CONTEXT
import {Theme} from "./Modules/Context"
import { useState } from "react";

function App() {

  let [theme, setTheme] = useState('light');
  console.log("Theme context in App:", { theme, setTheme });;

  return (
    <>
      <Theme.Provider value={{theme, setTheme}}>
        <Genres/> 
        <MyFooter />
      </Theme.Provider>
    </>
  );
}

export default App;
