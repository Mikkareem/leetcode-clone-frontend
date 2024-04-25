import React from "react"
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'


import PlaygroundScreen from "./screens/PlaygroundScreen"
import ProblemsListScreen from "./screens/ProblemsListScreen"
import ProblemPostScreen from "./screens/ProblemPostScreen"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to={'/problems'}>Problems</Link>,
    errorElement: <div>404 Not found</div>
  },
  {
    path: '/problems',
    element: <ProblemsListScreen />
  },
  {
    path: '/problems/:problemId',
    element: <PlaygroundScreen />
  },
  {
    path: '/problems/post',
    element: <ProblemPostScreen />
  }
])


const App: React.FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
