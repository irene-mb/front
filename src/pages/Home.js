import React, { useEffect,useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Home.css";
import {useSelector } from "react-redux";
import NewContainer from '../components/NewContainer'
import {useUpdateMutation} from "../services/appApi"
import * as moment from "moment"
import image from "../pic/index.jpg"
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [show,setShow]=useState(false)
  const user = useSelector((state) => state.user);
  function Change(){
    setShow(!show)
  } 
  const [latitude,setLatitude]=useState()
    const [longitude,setLongitude]=useState()
    const [timestamp,setTimestamp]=useState(Date.now())

    const [update] = useUpdateMutation()
    if(user){
        setTimeout(() => {
            navigator.geolocation.watchPosition(function(position) {
                //AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
                //console.log(position)
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                setTimestamp(position.timestamp)
                  }); 
        }, 1000);
        
    }
    useEffect(()=>{
        setTimeout(() => {
            if(user){
                const re=update({id:user._id,latitude,longitude,timestamp})
               // console.log(re)
            } 
        }, 3000);
        
    },[latitude,longitude]) 
    return (
        <div>
          <p id="wel">Welcome to geo locate</p>
          {!user && (
           <div>
             <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id="pos" >Log In To Get Your Position</h3>
          <p id="pos-p" >Or contact an admin for your recent position</p>
        </Carousel.Caption>
     
      </Carousel.Item>
    </Carousel>
           </div>
           
          )}
                        {user && !user.isAdmin && (
                            <div>  
                              
                              <div>
                              <p className="po">Last connection </p>
                              <p>{moment(user.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                              </div>
                              <div>
                                <p className="po" >Your current position is </p>
                              </div>
                              <Button onClick={Change} >See on Map</Button>
                              {show &&  <NewContainer latitude={user.latitude} longitude={user.longitude} />
}
                            </div>
                        )}
            {user && user.isAdmin && (
                            <div>  
                          
                              <div><p className="po">Last connection </p>
                              <p>{moment(user.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                              </div>
                              <div>
                                <p className="po" >Your current position is </p>
                              </div>
                              <Button onClick={Change} >See on Map</Button>
                              {show &&  <NewContainer latitude={user.latitude} longitude={user.longitude} />
}
                            </div>
                        )}

        </div>
    );
}

export default Home;
