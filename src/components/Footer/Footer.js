import React, { Component } from "react";
import './Footer.css';
import calender from '../../assets/SecureAdvCalendarLogo.png';
import clock from '../../assets/SecureAdvClockLogo.png';
import fb from '../../assets/SecureAdvFbLogo.png';
import tw from '../../assets/SecureAdvTwLogo.png';
import insta from '../../assets/SecureAdvInstLogo.png';
import call from '../../assets/SecureAdvCallLogo.png';
import email from '../../assets/SecureAdvEmailLogo.png';
import location from '../../assets/SecureAdvLocationLogo.png';

export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="footerSection1">
                <div><span className="brandFirstpart">Secure</span><span className="brandSecondpart">Adv</span></div>
                <div className="footerSubHeader">The Key to a Secure Tomorrow, Expert Advice Today</div>
                <div className="footerHeader">OPERATIONAL HOURS</div>
                <div className="footerInfo"><img src={calender} className="footerIcons"></img><span className="footerContent">MONDAY - Friday</span></div>
                <div className="footerInfo"><img src={clock} className="footerIcons"></img><span className="footerContent">9:00 AM - 5:00 PM</span></div>
                <div className="footerSocialLinksContainer">
                    <img src={fb} className="footerSocialIcons"></img>
                    <img src={tw} className="footerSocialIcons"></img>
                    <img src={insta} className="footerSocialIcons"></img>
                </div>
            </div>
            <div className="footerSection2">
                <div className="footerHeader">QUICK LINKS</div>
                <a className="footerLinks">Home</a>
                <a className="footerLinks">Services</a>
                <a className="footerLinks">Website</a>
                <a className="footerLinks">Contact Us</a>
            </div>
            <div className="footerSection3">
                <div className="footerHeader">CONTACT US</div>
                <div className="footerContactInfo"><img src={call} className="footerIcons"></img><span className="footerContent">407-896-6458</span></div>
                <div className="footerContactInfo"><img src={email} className="footerIcons"></img><span className="footerContent">secureadv@gmail.com</span></div>
                <div className="footerContactInfo"><img src={location} className="footerIcons"></img><span className="footerContent">SecureAdv  - 1420 Gemini Blvd. Unit 12, Atlanta, GEORGIA,32837 USA.</span></div>
            </div>

        </div>
    );
}