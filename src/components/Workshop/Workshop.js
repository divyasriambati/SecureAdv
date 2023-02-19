import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import './Workshop.css';
import workshopImg from '../../assets/OptionTrading&InvestmentImg.png';
import highlightCheckbox from '../../assets/Investment vehicles workhop highlights.png';
import clock from '../../assets/Workshoptimingsclock.png';

export default function(){
    return(
        <div>
            {/* section 1 */}
            <div className="contactPageSection1Container">
                <div className="Section1Col1">
                    <div className="contactPageHeader1">Investment Vehicles Workshop</div>
                    <div className="contactPageContent">Plan and secure your financial future by investing less than 15 hours of your time on this pragmatic, market agnostic, retail investor friendly workshop. </div>
                    <div className="workshopPrice">Get started for just $395</div>
                    <div>
                        <button className="primaryBtn"><Link className='Btn' to="/contact">Contact Us</Link></button>
                    </div>
                </div>
                <div className="section1col2">
                    <img src={workshopImg} className="optionTradingImg"></img>
                </div>
            </div>

            {/* section 2 */}
            <div className="contactPageSection2">
                <div className="contactPageHeader2"> Workshop Highlights</div>
                <div className="workshopHighlightsCard">
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Bring you from zero to hundred in option trading concepts and how they can be applied in the markets</span></div>
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Take home time tested home grown indicators which work both in bull & bear markets</span></div>
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Live trading roadshows where you will work with our experts</span></div>
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Learn portfolio and risk management from experts who have extensive experience building large portfolios</span></div>
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Learn about investment vehicles like IULs, Annuities , IRAs and a host of other products</span></div>
                    <div className="workshopHighlights"><img src={highlightCheckbox}></img><span className="highlightsContent">Work with our licensed financials professionals to design and implement the right investment vehicle which helps you meet your financial goals</span></div>
                </div>
            </div>

            {/* section 3 */}
            <div className="contactPageSection3">
                <div className="contactPageHeader2"> Workshop Overview</div>
                <div className="workshopOverviewCardsSection">
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">1</button>
                        <div className="workshopOverviewHeader">Expertise on concepts</div>
                        <div className="workshopOverviewContent">Learn options , charting and account management concepts.</div>
                        <div className="timingSection"><img src={clock}></img><span className="WorkshopOverviewTimings">3:00 Hours</span></div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">2</button>
                        <div className="workshopOverviewHeader">Live trading roadshow</div>
                        <div className="workshopOverviewContent">Set up paper accounts, and trade live with the experts in real market conditions</div>
                        <div className="timingSection"><img src={clock}></img><span className="WorkshopOverviewTimings">3:00 Hours</span></div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">3</button>
                        <div className="workshopOverviewHeader">Investment vehicles</div>
                        <div className="workshopOverviewContent">Understand different investment vehicles to secure your short team and long term financial goals.</div>
                        <div className="timingSection"><img src={clock}></img><span className="WorkshopOverviewTimings">3:00 Hours</span></div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">4</button>
                        <div className="workshopOverviewHeader">Continued education & Implementation</div>
                        <div className="workshopOverviewContent">Work with our industry experts to tailor the investment  vehicles for your needs. Create passive streams of income by participating in  option trading . Life long alerts available from outr experts </div>
                        <div className="timingSection"><img src={clock}></img><span className="WorkshopOverviewTimings">4:00 Hours</span></div>
                    </div>
                </div>
            </div>

        </div>
    );
}