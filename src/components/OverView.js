import React from 'react'
import "./CSS/OverView.css"

function OverView(props) {
    const {overViewTitle,overViewImg,overViewDiscription} = props;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5" style={{ display: 'flex' , justifyContent: 'center' }}>
                        <img src={overViewImg} style={{ marginRight: 1, padding: 4, borderRadius: 10, border: "1px solid black" }} alt="" height="50" />
                        <h3 className="col-md-5" style={{ marginTop: 2}}>{overViewTitle}</h3>
                    </div>
                    <p className="col-md-6 text-left" style={{ fontSize: 14, wordSpacing: 5 }}>{overViewDiscription}</p>
                </div>
            </div>
        </>
    )
}

export default OverView
