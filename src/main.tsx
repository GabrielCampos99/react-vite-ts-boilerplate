import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyThemeProvider } from './styles/MyThemeProvider'
import App from './templates/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App>Hello</App>
    </MyThemeProvider>
  </React.StrictMode>
)
