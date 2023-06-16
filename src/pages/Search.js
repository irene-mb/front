import React,{useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSearchMutation } from "../services/appApi";
import {  Alert } from "react-bootstrap";
import MapContainer from '../components/MapContainer'
import {useSelector } from "react-redux";
import * as moment from "moment"


function Search(){
    const user = useSelector((state) => state.user);
    function Change(){
        setShow1(!show1)
      } 
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [latitude,setLatitude]=useState(0)
    const [longitude,setLongitude]=useState(0)
    const [adminLa,setAdminLa]=useState(0)
    const [adminLo,setAdminLo]=useState(0)
    const [timestamp,setTimestamp]=useState(Date.now())
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [data,setData]=useState({})
    const [error ,setError]=useState(false)
    const [search] = useSearchMutation();
    function handleSignup(e) {
    e.preventDefault();
       const re= search({ email });
       re.then(res=>{
           if(res.data){
               setData(res.data)
               setShow(true)
               setName(res.data.name)
               setLatitude(res.data.latitude)
               setLongitude(res.data.longitude)
               setTimestamp(res.data.timestamp)
           }
           else{
               setError(true)
           }
       })
    }
    navigator.geolocation.getCurrentPosition(function(position) {
        //AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
        setAdminLa(position.coords.latitude)
        setAdminLo(position.coords.longitude)
          });
    
    return(
        <div>
           <div>
                        <Form style={{ width: "50%",marginLeft : "25%",marginTop:"5%" }}  onSubmit={handleSignup}>
                        {error && <Alert variant="danger">"Utilisatuer pas trouver"</Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter the email you want to search</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form>
           </div>
           {show && <div>
               The user information
               <p></p>
               <p>Name :{data.name} </p>
               <p>Email :{data.email} </p>
               <div><p className="po">Last connection </p>
                              <p>{moment(data.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
                              </div>
                              <div>
                                <p className="po" >Your current position is </p>
                              </div>
              <p> <Button onClick={Change} >See on Map</Button></p>
               {show1 &&  <MapContainer 
               admin={user.name} 
               adminLa={adminLa} 
               adminLo={adminLo} 
               user={name}
               userLa={latitude}
               userLo={longitude}
               />
}
               </div>}
        </div>
    )
}

export default Search