import React from 'react'
import "./CSS/OverView.css"
const Godrejgroup=()=>{
    return(
        <>
            <div className="container" style={{ marginBottom: 40 , marginTop: 0}}>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-10.jpg" alt="Los Angeles" />
                            <div className="carousel-caption">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-7.jpg" alt="Chicago" />
                            <div className="carousel-caption">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-8.jpg" alt="New York" />
                            <div className="carousel-caption">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-9.jpg" alt="New York" />
                            <div className="carousel-caption">
                                <h3>GODREJ GROUP</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background"></div>
            <div className="Header_Price">
                <div className="container" style={{ display: 'flex' }}>
                    <img src="http://godrejproperty.in/godrej-ananda/images/inr-icon.png" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                    <h3 >About GODREJ<br /> <span style={{ color: "burlywood" }}  >PROPERTIES</span></h3>
                </div>
            </div>


            <div className="highlights container">
                <div style={{ display: 'flex' }}>
                    <img src="http://godrejproperty.in/godrej-ananda/images/our-ser.png" style={{ marginTop: 25, marginRight: 20, padding: 5, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                    <h3 >PROJECT<br /> <span style={{ color: "burlywood" }}  >HIGHLIGHTS:</span></h3>
                </div>
                <div className="row highlight">
                    <div className="col-md-6 col-12">
                        <ul>
                            <li>FLOORS - 3B+G+28</li>
                            <li>SECURITY AMENITIES</li>
                            <li>LIFESTYLE CLUB</li>
                            <li>2 ACRES OF GREENS</li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-12">
                        <ul>
                            <li>Multipurpose Hall</li>
                            <li>Business Center</li>
                            <li>Indoor Games Room</li>
                            <li>Dance & Zumba Studio</li>
                        </ul>
                    </div>
                </div>
                </div>
        </>
    )
}
export default Godrejgroup