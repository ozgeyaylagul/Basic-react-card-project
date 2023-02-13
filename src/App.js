import './App.css';
import Course from './Course';

function App() {
  return (
    <div className="App">
      <Course title="Angular" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course title="Bootstrap" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course title="JavaScript" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
      <Course title="React" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque"/>
    </div>
  );
}

export default App;