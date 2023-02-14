import './App.css';
import Course from './Course';
import Angular from "./images/angular.jpg"
import Bootstrap from "./images/bootstrap5.png"
import Csharp from "./images/ccsharp.png"
import KompleWeb from "./images/kompleweb.jpg"

function App() {
  return (
    <div className="App">
      <Course image={Angular}
       title="Angular" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course image={Bootstrap} title="Bootstrap 5" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course image={KompleWeb} title="Komple Web" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course image={Csharp} title="C Sharp" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
    </div>
  );
}

export default App;