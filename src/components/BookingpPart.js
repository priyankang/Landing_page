import React from 'react'
import "./CSS/BookingPart.css"

function BookingpPart() {
    return (
        <>
            <div className="booking row">
                <div id="myCarousel" className="carousel slide col-md-9 col-12 h-100" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-2.jpg" style={{ height: 730 }} alt="" />
                        </div>

                        <div className="item">
                            <img src="http://godrejproperty.in/godrej-ananda/images/banner-1.jpg" style={{ height: 730 }} alt="" />
                        </div>
                    </div>
                </div>
                <div className="submit-form col-md-3 col-12">

                    <img src="http://godrejproperty.in/godrej-ananda/images/form-logo.png" alt="" className="booking_img" />

                    <div className="amount">
                        <span>2 BHK | 39.99 lacs*</span>
                    </div>
                    <div className="amount">
                        <span>3 BHK | 57.59 lacs*</span>
                    </div>
                    <div className="amount">
                        <span>STUDIO | 22.99 lacs*</span>
                    </div>
                    <h3 className="get_in"><i className="fa-solid fa-pen-to-square"></i>GET IN TOUCH WITH US</h3>
                    <div className="input-container">
                        <input className="input-field" type="text" placeholder="Name" name="usrnm" id="qSenderName" />
                    </div>

                    <div className="input-container">
                        <input className="input-field" type="text" placeholder="Email" name="email" id="qEmailID" />
                    </div>
                    <div className="input-container">
                        <input className="input-field" type="text" placeholder="Mobile No." name=" " id="qMobileNo" />
                    </div>
                    <div className="input-container">
                        <input className="input-field" type="text" placeholder="Comments.." name=" " id="qMessage" />
                    </div>
                    <div className="formbtn d-flex justify-content-between">
                        <input type="button" className="" value="SUBMIT" id="SubmitQuery" />
                        <b><a href="tel:9071535868 ">Call : +91-9071535868 </a></b> </div>
                    </div>
                    
                </div>
        </>
    )
}

export default BookingpPart
