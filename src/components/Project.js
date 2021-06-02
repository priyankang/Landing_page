import React from 'react'
import "./CSS/Project.css"
const Project = () => {
    return (
            <div className="booking row mt-4">
                <div className="submit-form col-md-3 col-12">
                    <div className="d-flex"> 
                        <img src="http://godrejproperty.in/godrej-ananda/images/amenities-at-the-park.png" />
    
                        <h2>PROJECT SPECIAL FEATURES</h2>
                    </div>
                    <ul className="text-left">
                        <li>Flooring &amp; Dado
                            <ul>
                                <li>Vitried tile 600x600 for living/dining, kitchen &amp; bedrooms</li>
                            </ul>
                        </li>
                        <li>Doors
                            <ul>
                                <li>Main door – engineered frame &amp; door shutter</li>
                            </ul>
                        </li>
                        <li>Windows
                        <ul>
                            <li>UPVC window with mosquito mesh provision only</li>
                        </ul>
                        </li>
                        <li>Railing
                        <ul>
                            <li>Ms railings for balcony &amp; staircase</li>
                        </ul>
                        </li>
                        <li>False Ceiling in toilets
                        <ul>
                            <li>Ms railings for balcony &amp; staircase</li>
                        </ul>
                        </li>
                    </ul>
                    <button class="btn-gold btn"><a href="#" data-toggle="modal" data-target="#myModal2">View More</a></button>
                </div>             
                <div id="myCarousel" className="carousel slide col-md-9 col-12 h-100 " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-6.jpg" style={{ height: 600 }} />
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-3.jpg" style={{ height: 600 }} />
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-4.jpg" style={{ height: 730 }} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Project;
