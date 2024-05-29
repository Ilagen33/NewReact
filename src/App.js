//IMPORT: CSS vabilla e Bootstrap
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT: (dai componenti) footer e funziona principale
import MyFooter from "./Components/MyFooter";
import Genres from "./Components/AllTheBooks";

function App() {
  return (
    <>
      <Genres /> 
      <MyFooter />
    </>
  );
}

export default App;
