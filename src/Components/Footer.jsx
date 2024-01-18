import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="container_footer">
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaSquareGithub />
        </div>
    )
}