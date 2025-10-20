import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './index.css'
import { TelegramProvider } from './context/TelegramContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TelegramProvider>
      <RouterProvider router={router} />
    </TelegramProvider>
  </StrictMode>,
)
