import React, { Component } from "react";
import './ContactUs.css';
import contactpageImg from '../../assets/contactPageImg.png';
import contactLogo from '../../assets/SecureAdvCallLogo (1).png';
import locationLogo from '../../assets/SecureAdvLocationLogo (1).png';
import timingsLogo from '../../assets/SecureAdvClockLogo (1).png';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function(){
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName,lastName,email,phoneNumber)
  }
    return(
        <div>
            {/* section 1 */}
            <div>
                <img src={contactpageImg} className="contactPageImg"></img>

                <div className="contactFormContainerText">
                    <div className="heading">Contact Us</div>
                    <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name*
                                <input 
                                type="text" 
                                value={firstName}
                                placeholder="Enter first name"
                                onChange={(e) => setfirstName(e.target.value)}
                                />
                            </label>
                            <label>Last Name*
                                <input 
                                type="text" 
                                value={lastName}
                                placeholder="Enter last name"
                                onChange={(e) => setlastName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Email*
                                <input 
                                type="email" 
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>Phone Number*
                                <input 
                                type="number" 
                                value={phoneNumber}
                                placeholder="Enter phone number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label class="container">Workshop 1
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label class="container">Workshop 2
                                <input type="radio" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
                
                {/* <Box  className="contactFormContainerText"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div className="heading">Contact Us</div> 
                    <form onSubmit={handleSubmit}>
                    <div>
                        <TextField name="firstname" onChange={handleChange} required id="outlined-required" label="First Name" defaultValue="" placeholder="Enter your First Name"/>
                        <TextField name="lastname" onChange={handleChange} required id="outlined-required" label="Last Name" defaultValue="" placeholder="Enter your Last Name"/>
                    </div>
                    <div>
                        <TextField name="email" onChange={handleChange}  required id="outlined-required" label="Email" defaultValue="" placeholder="Enter your Email"/>
                    </div>
                    <div>
                        <TextField name="phnumber" onChange={handleChange}  required id="outlined-required" label="Phone Number" defaultValue="" placeholder="Enter your Phone Number"/>
                    </div>
                    <div><button type="submit" className="submitBtn">Submit</button></div>
                    </form>
                    
                </Box> */}

            </div>

            {/* section 2 */}
            <div className="contactPageSection2">
                <div className="contactPageHeader"> Meet our Advisors</div>
                <div className="contactCards">
                    <div className="contactCard">
                        <div><img src={contactLogo} ></img></div>
                        <div className="contactCardsContent">(+1) 470-828-4948</div>
                        <div className="contactCardsContent">secureadv@gmail.com</div>
                    </div>
                    <div className="contactCard">
                        <div><img src={locationLogo}></img></div>
                        <div className="contactCardsContent">SecureAdv  - 1420 Gemini Blvd. Unit 12, Atlanta, GEORGIA,32837 USA.</div>
                    </div>
                    <div className="contactCard">
                        <img src={timingsLogo}></img>
                        <div className="contactCardsContent">Monday - Saturday</div>
                        <div className="contactCardsContent">9:00 AM - 5:00 PM</div>
                    </div>
                </div>
            </div>

        {/* section 3 */}
        <div className="contactPageSection3">
            <div className="contactPageSection3Header">Join our upcoming Investment Vehicles Workshop</div>
            <button className="primaryBtn">Register Now</button>
        </div>

        </div>
    );
}