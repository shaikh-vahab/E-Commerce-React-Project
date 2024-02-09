import { BodyImg } from "../components/Body.jsx"
import Catagories from "../components/Catagory.jsx"
import Footer from "../components/Footer.jsx"
import Line from "../components/Line.jsx"
import Navigation from "../components/Navigation.jsx"



function Home(params) {
    return (
        <>
         <BodyImg />
         <Line/>
         <Catagories/>
         <Footer/>
        </>
    )
}

export default Home