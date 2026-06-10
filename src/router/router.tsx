import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { NotFound } from '../components/NotFound/NotFound'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> },
])
