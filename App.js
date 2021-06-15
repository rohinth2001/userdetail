import './App.css';
import Home from './Home';
import Info from './Info';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
function App() {

  const [detail, setdetail] = useState({});
  const [Users, setUsers] = useState({});


  const tstFunction = (detail) => {
    // console.log(detail);
    setdetail(detail);
  }
  const fetchdata = () => {
    fetch('https://mockui5.free.beeceptor.com/userList')
      .then((Response) => Response.json())
      .then((data) => {
        setUsers(data);
      });
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const navigationFunction = (navType, currId) => {
    console.log(navType);
    console.log(currId);
    let postional = 0;
    if(navType === "next" && typeof currId =='undefined')
    {
      postional = 1;
      console.log(postional);
    }
    else if (navType === "next") {
      postional = currId + 1;
    }
    else if (navType === "prev" && typeof currId=='undefined')
    {
      alert("sorry,no previous user ");
    }
    else {
      postional = currId - 1;
    }
    // console.log("postional value");
    // console.log(postional);
    // console.log(Users)
    if(postional > Users.length){
      return;
    }
    else if(postional < 1){
      return;
    }
    const navDetail = Users.filter(e => e.id == postional);
    // console.log(navDetail);
    if (navDetail) {
      // console.log(navDetail)
      setdetail(navDetail[0]);
    }

  }

  return (
    <Router>
      <div className="App">
        <Switch>
         
            <Route path="/signup" >
            <Signup />  

            </Route >
            <Route path="/home" >
            <div >
              <div className="head">
                <Link className="log" to="/login">LOGIN</Link>
                <Link className="sig" to="/signup">REGISTER</Link>
              </div>
              <div className="home_" >
                <Home test={tstFunction} />
              </div>
              <div className="info_">
                <Info detail={detail} navigation={navigationFunction} />
              </div>
            </div>

          </Route>
          <Route path="/" >
            <Login />
            
            </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
