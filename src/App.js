import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from "./images/angular.jpg"
import Bootstrap from "./images/bootstrap5.png"
import Csharp from "./images/ccsharp.png"
import Frontend from "./images/kompleweb.jpg"

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      My Courses
    </p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course image={Angular}title="Angular" description="Lorem ipsum dolor sit amet. Et impedit quia ad dolores nobis quo dolor modi sit adipisci harum! Non tempora totam et voluptatem quia est nobis quaerat aut aliquam dolor in autem molestias hic minima voluptatibus. Ut dolores cupiditate et Quis aliquid sed beatae voluptas. Est Quis rerum et internos neque non harum vitae et dolores rerum aut tempora velit."/>
          </div>
          <div className='column'>
          <Course image={Bootstrap} title="Bootstrap 5" description="Lorem ipsum dolor sit amet. Et impedit quia ad dolores nobis quo dolor modi sit adipisci harum! Non tempora totam et voluptatem quia est nobis quaerat aut aliquam dolor in autem molestias hic minima voluptatibus. Ut dolores cupiditate et Quis aliquid sed beatae voluptas. Est Quis rerum et internos neque non harum vitae et dolores rerum aut tempora velit."/>
          </div>
          <div className='column'>
          <Course image={Frontend} title="Frontend" description="Lorem ipsum dolor sit amet. Et impedit quia ad dolores nobis quo dolor modi sit adipisci harum! Non tempora totam et voluptatem quia est nobis quaerat aut aliquam dolor in autem molestias hic minima voluptatibus. Ut dolores cupiditate et Quis aliquid sed beatae voluptas. Est Quis rerum et internos neque non harum vitae et dolores rerum aut tempora velit."/>
          </div>
          <div className='column'>
          <Course image={Csharp} title="C Sharp" description="Lorem ipsum dolor sit amet. Et impedit quia ad dolores nobis quo dolor modi sit adipisci harum! Non tempora totam et voluptatem quia est nobis quaerat aut aliquam dolor in autem molestias hic minima voluptatibus. Ut dolores cupiditate et Quis aliquid sed beatae voluptas. Est Quis rerum et internos neque non harum vitae et dolores rerum aut tempora velit."/>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;