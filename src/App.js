import {useState,useEffect} from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search"
import {useUpdateMutation} from "./services/appApi"

function App() {
    const user = useSelector((state) => state.user);
    /* const [latitude,setLatitude]=useState()
    const [longitude,setLongitude]=useState()
    const [update] = useUpdateMutation()
    if(user){
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(function(position) {
                //AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                  }); 
        }, 1000);
        
    }
    useEffect(()=>{
        setTimeout(() => {
            if(user){
                const re=update({id:user._id,latitude,longitude})
                console.log(re)
            } 
        }, 3000);
        
    },[latitude,longitude]) 
      */
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    {user && user.isAdmin && (
                        <>
                         <Route path="/search" element={<Search />} />
                        </>
                    )
                    }

                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
