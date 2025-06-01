import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './styles.scss'
import SignInComponent from './components/signIn/SignInComponent'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/sign-in" element={<SignInComponent/>} />
      <Route path="/*" element={<Navigate to="/sign-in" />} />
    </Routes>
  </BrowserRouter>
)
