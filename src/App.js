import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Academic from './Components/Academic/Academic';
import Course from './Components/Course/Course';
import Blogs from './Components/Blog/Blogs';
import Quiz from './Components/Quiz/Quiz';
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
        path: '/quiz', element: <Quiz></Quiz>
      },
    ]
  }
]);
function App() {
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
