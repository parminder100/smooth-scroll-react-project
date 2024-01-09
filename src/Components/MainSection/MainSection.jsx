import "../MainSection/MainSection.css";
import { useRef } from "react";
import Header from "../Header/Header";

const MainSection = () =>{
    const aboutRef = useRef();
    const servicesRef = useRef();
    const contactRef = useRef();
    return(
        <>
            <Header 
                aboutRef={aboutRef}
                servicesRef={servicesRef}
                contactRef={contactRef}
            
            />
            <section ref={aboutRef} id="aboutus" className="about-section">
                <h1>About us</h1>
            </section>
            <section ref={servicesRef} id="services" className="service-section">
                <h1>Services</h1>
            </section>
            <section ref={contactRef} id="contactus" className="contact-section">
                <h1>Contact us</h1>
            </section>
        </>
    )
}
export default MainSection;