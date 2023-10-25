import './globals.css'
import Header from "../../components/Navigating/Header";
import MainPage from "../../components/MainPage/MainPage";
import Footer from "../../components/Navigating/Footer";



export default function Home() {
  return (
    <div>
      <Header/>
        <MainPage/>
      <Footer/>
    </div>
  )
}
