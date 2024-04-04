import { createHashRouter } from 'react-router-dom'

// 在electron中必须使用HashRouter，不能使用BrowserRouter
export const router = createHashRouter([
  {
    path: '/',
    element: <>index</>
  },
  {
    path: '/login',
    element: <>login</>
  },
  {
    path: 'dashboard',
    element: <>dashboard</>
  }
])
