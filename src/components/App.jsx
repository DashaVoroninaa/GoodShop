import { MainPage } from "components/StartPage/MainPage"
import { LoginPage } from "components/LoginPage"
import { Registration } from "./RegistrationPage"
import { Routes, Route } from "react-router-dom"
import { Header } from "./StartPage/Header"
import { Footer } from "./StartPage/Footer"
import './style.css'

export function App () {
    return (
        <>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/> }/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/regestration" element={<Registration/>}/>
        </Routes> 
        <Footer/>
        </>
    )
}
