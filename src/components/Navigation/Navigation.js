import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigaiton() {
    const [show, setShow] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            if (window.scrollY > 100){
                setShow(true)
            } else setShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`navigation ${show && 'navigation__black'}`} >
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>My List</li>
            </ul>
        </div>
    )
}

export default Navigaiton;
