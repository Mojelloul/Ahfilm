import React,{useState,useEffect} from 'react'
import './Nav.css'
function Nav() {
        const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll",true);
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://logomakr.com/media/upload/87/87CFyr.png"
            alt="AHFILM"
            />
             <img
            className="nav__avatar"
            src="https://logomakr.com/media/upload/2j/2jnmYD.png"
            alt="AHFILM"
            />
        </div>
    )
}

export default Nav
