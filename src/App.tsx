import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './pages/Chart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/chart',
    element: <Chart />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
