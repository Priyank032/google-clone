import React from 'react'
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from '@material-ui/core/Avatar';
import "./Home.css";
import Search from "./Search";


function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_header_left">
                    {/* <Link to="/about">About </Link>
                    <Link to="/store">Store </Link> */}
                </div>
                <div className="home_header_right">
                    <Link to="/gmail">Gmail </Link>
                    <Link to="/images">Images </Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home_body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />
                <div className="home_inputContainer">
                    <Search hideButtons />
                </div>

            </div>
        </div>
    )
}

export default Home
