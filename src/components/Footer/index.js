import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const Footer = () =>{

    return (
        <div className="flex flex-row justify-between items-center bg-gradient-to-b from-indigo-500 to-indigo-400 py-8">
          <nav >
            <a href="/home#navbar">
              <div className="mx-5">
                <h1 className="text-3xl text-white">{"Commodities/DataSim"}</h1>
              </div>
            </a>
          </nav>
          <a href="https://www.linkedin.com/in/mauropicatto">
              <div className="mx-5">
                <h1 className="text-2xl text-white">{"Realizado por: Mauro Picatto"}</h1>
              </div>
            </a>
        </div>
      );
}

export default Footer