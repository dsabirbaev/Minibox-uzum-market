import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";
import arrow from "./assets/icons/arrow-up.svg";
const App = () => {
    return (
        <>  
        <Header />
            <main className="relative">
                <Outlet />
                <a href="#header" className="fixed right-0 top-[90%]"><img src={arrow} alt="#" /></a>
            </main>
        <Footer />           
        </>
    );
};

export default App;
