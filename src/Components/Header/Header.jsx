import registered_logo from "../../asset/img/registered_logo.png";
import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const Header = ({aboutRef, servicesRef, contactRef}) =>{
    const [navbar, setNavbar] = useState(true);

    const handleNavbar = () =>{
        setNavbar(!navbar);
    }

    const handleHome = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        handleNavbar();
    }

    const handleAbout = () =>{
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
        handleNavbar();
    }

    const handleService = () =>{
        servicesRef.current.scrollIntoView({behavior: 'smooth'});
        handleNavbar();
    }

    const handleConatct = () =>{
        contactRef.current.scrollIntoView({behavior: 'smooth'});
        handleNavbar();
    }
    return(
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-6">
                            <img className="logo" src={registered_logo} alt="registered_logo" />
                        </div>
                        <div className="col-sm-6 col-6">
                            <ul className="nav-list-container d-none d-lg-flex">
                                <li onClick={handleHome}>Home</li>
                                <li onClick={handleAbout}>About us</li>
                                <li onClick={handleService}>Services</li>
                                <li onClick={handleConatct}>Contact us</li>
                            </ul>
                            <div onClick={handleNavbar} className="navigation-bar d-block d-lg-none">
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                        <div className={`col-12 mobile-nav d-lg-none ${navbar ? 'hide' : ''}`}>
                            <ul className="nav-list-container">
                                <li onClick={handleHome}>Home</li>
                                <li onClick={handleAbout}>About us</li>
                                <li onClick={handleService}>Services</li>
                                <li onClick={handleConatct}>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;