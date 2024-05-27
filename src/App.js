import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import Genres from "./Components/AllTheBooks";

function App() {
  return (
    <div>
      <main>
          <Genres />
      </main> 
      <MyFooter />
    </div>
  );
}

export default App;
