import React from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

function Navbar(){

    return(
        <header className="absolute z-10 w-full h-20 flex items-center shadow-md nav-background">
      <div className="w-full text-white flex justify-content-center pl-5 lg:pl-12 pr-5 lg:pr-12 items-center flex-row">
        <div className="w-full flex flex-row justify-between">
          <Link className="text-3xl font-semibold" to="/">
            Austin Zhang
          </Link>
          <div className="flex items-center space-x-16">
            <div className="hidden lg:block lg:ml-12 text-xl font-normal text-opacity-75">
              <Menu menuButton={<MenuButton>Projects</MenuButton>} transition>
                <span className="pl-1 font-bold">🚀 Finished</span>
                <MenuItem>court-booking-app</MenuItem>
                <MenuItem>instructions+</MenuItem>
                <MenuItem>rpg-game-project</MenuItem>
                <span className="pl-1 font-bold">🚧 Under Construction</span>
                <MenuItem>votingbuck</MenuItem>
                <MenuItem>wot-aggregator</MenuItem>
              </Menu>
            </div>
            <div className="hidden lg:block lg:ml-12 text-xl font-normal text-opacity-75">
              <Menu menuButton={<MenuButton>Internships</MenuButton>} transition>
                <MenuItem>
                  <Link to="/politicians">RBC Amplify</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/corporations">RBC TI</Link>
                </MenuItem>
              </Menu>
            </div>
            <div className="hidden lg:block lg:ml-12 text-xl font-normal text-opacity-75">
              <Link to="/politicians">Contact me</Link>
            </div>
            <div className="hidden lg:block lg:ml-12 text-xl font-normal text-opacity-75">
              <Link to="/about">About</Link>
            </div>
            <div className="lg:hidden space-y-2">
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Navbar;
