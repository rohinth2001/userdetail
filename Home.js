import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
const Home = (props) => {

    const testF = props.test
    //console.log(testF)
    const [details, setdetails] = useState([])
   

    const fetchdata = () => {
        fetch('https://mockui5.free.beeceptor.com/userList')
            .then((Response) => Response.json())
            .then((data) => {
               // console.log(data)
                setdetails(data)
            });

    }
    useEffect(() => {
        fetchdata();
    },[])
    return (
        <div className="home">
            <h2 style={{ color: 'red', textAlign: 'center' }}>USERS LIST</h2>
              {details.map((detail) => (
                <button onClick={()=>testF(detail)} className="names">
                    {detail.name}
                </button>
            ))}   
        </div>
    )

}
export default Home;