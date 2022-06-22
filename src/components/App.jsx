import { MainPage } from "components/StartPage/MainPage"
import { LoginPage } from "components/LoginPage"
import { Registration } from "./RegistrationPage"
import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "./StartPage/Header"
import { Footer } from "./StartPage/Footer"
import { useSelector } from "react-redux"
import { GoodsSelectors } from "../store";
import './style.css'

export function App () {
  const isAuth = useSelector(GoodsSelectors.getAuth);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' exact element={<MainPage/> }/>
        {!isAuth && <Route path='/login' exact element={<LoginPage/>}/>}
        
        <Route path="/regestration" exact element={<Registration/>}/>
      </Routes> 
      <Footer/>
        </>
    )
}
