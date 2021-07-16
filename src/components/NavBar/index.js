import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import data from './links.json'

const NavBar = () =>{
    const [displayMenu, setDisplayMenu] = useState(false);
    const links = data.links;
    
    return (
        <div id="navbar">
          <nav className="flex flex-row justify-between items-center bg-gradient-to-b from-indigo-500 to-indigo-400 p-4">
            <button
              onClick={() => setDisplayMenu(!displayMenu)}
              className="md:hidden border-0 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {!displayMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class=" h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ) : (
                ""
              )}
              {displayMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                ""
              )}
            </button>
            <Link to="/">
              <div className="mx-5">
                <h1 className="text-3xl text-white">{"Commodities/DataSim"}</h1>
              </div>
            </Link>
            <div className="md:hidden p-5"></div>
    
            <ul className="hidden md:flex justify-around items-center">
              {links.map((link, i) => (
                <li
                  key={`link ${i}`}
                  className="transform hover:scale-110 transition duration-500 ease-in-out"
                >
                <a href={link.to} className="mr-5 text-xl text-white">{link.name} </a>
                </li>
              ))}
            </ul>
          </nav>
          {displayMenu ? (
            <div onClick={() => setDisplayMenu(!displayMenu)}>
              <div>
                <ul className="flex flex-col bg-indigo-400 ">
                  {links.map((link, i) => (
                    <li key={`link ${i}`} className="py-1 px-1 ">
                    <a href={link.to} className="mr-5 text-xl text-white">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
}

export default NavBar