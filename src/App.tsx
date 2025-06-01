import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './styles.scss'
import SignInComponent from './components/signIn/SignInComponent'
import HomeComponent from './components/home/HomeComponent'
import MenuComponent from './components/menu/MenuComponent'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/sign-in" element={<SignInComponent/>} />
      <Route element={<MenuComponent/>} >
        <Route path="/home" element={<HomeComponent/>} />
      </Route>
      <Route path="/*" element={<Navigate to="/sign-in" />} />
    </Routes>
  </BrowserRouter>
)
