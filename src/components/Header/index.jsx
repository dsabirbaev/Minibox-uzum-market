import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import Navigation from './Navigation';
import "./style.scss";
const index = () => {
    return (
        <header id='header'>
            <HeaderTop />
            <div className="container">
                <HeaderMiddle />
                <Navigation/>
            </div>
        </header>
    );
};

export default index;