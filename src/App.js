import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Academic from './Components/Academic/Academic';
import Course from './Components/Course/Course';
import Blogs from './Components/Blog/Blogs';
import Quiz from './Components/Quiz/Quiz';
import StartQuiz from './Components/StartQuiz/StartQuiz';
const router = createBrowserRouter([
  {
    path: '/', element: <Header></Header>, children: [

      {
        path: '/about', element: <About></About>
      },
      {
        path: '/academics', element: <Academic></Academic>
      },
      {
        path: '/course', element: <Course></Course>
      },
      {
        path: '/blog', element: <Blogs></Blogs>
      },
      {
        path: '/quiz',
        loader: async () => {
          return fetch('quiz.json')
        },
        element: <Quiz></Quiz>
      },
      {
        path: '/quiz/:quizNumber',
        loader: async ({ params }) => { return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizNumber}`) },
        element: <StartQuiz></StartQuiz>
      },
    ]

  },

]);

function App() {
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
