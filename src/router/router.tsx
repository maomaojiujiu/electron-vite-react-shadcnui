import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
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
