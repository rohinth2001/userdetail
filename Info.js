import React from 'react'
import { useState, useEffect } from 'react'
import './Info.css'
const Info = (props) => {

    const detail = props.detail
    const navigation = props.navigation
    console.log("loging from info")
    console.log(detail.id);
    let isEmptyDetail = detail.id ? true : false;
    console.log(isEmptyDetail)
    return (
        <div className="info">
            {!isEmptyDetail ?
                <div className="nouser">
                    <h3 >please select some user to display </h3>
                </div> :
                <div>
                    <h1 style={{ textAlign: "center", color: "red" }}> {detail.name}</h1>
                    <div className="out1">
                        FIRST NAME : {detail.firstName}<br />
                        LAST NAME  : {detail.lastName}<br />
                        NAME       : {detail.name}<br />
                        AGE        : {detail.age}<br />
                        DOB        : {detail.dob}<br />
                    </div>
                    <div className="out1">
                        PH.NO     : {detail?.more?.phone}<br />
                        ADDRESS    : <br />
                        {detail?.more?.address_line1}<br />
                        {detail?.more?.address_line2}<br />
                        {detail?.more?.address_line3}<br />
                    </div>
                    <button className="button1" onClick={() => navigation("next", detail.id)} >next</button>
                    <button className="button2" onClick={() => navigation("prev", detail.id)} >PREV</button>
                </div>
            }
        </div>
    )

}
export default Info;