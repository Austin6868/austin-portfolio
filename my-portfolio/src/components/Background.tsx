import React, { Children } from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import bgImage from "../assets/BgMainImage.svg"


export default function Background(){
    return(
        <div className="fixed w-screen h-max inset-0 bg-black transition-opacity">
            <img className = "blur-3xl w-screen" src={bgImage}></img>
        </div>
    )
}