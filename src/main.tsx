import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/css/globals.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
