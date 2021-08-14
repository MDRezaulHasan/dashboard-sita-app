import React from 'react'
import "./Footer.css"
import { Facebook, Instagram, LinkedIn, GitHub } from "@material-ui/icons"
export default function Footer() {
    return (
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <span className="footer-title"> SITA</span>
                    <h3>xxx@xx.com</h3>
                </div>
                <div className="footer-right">
                    <Facebook />
                    <Instagram />
                    <LinkedIn />
                    <GitHub />
                </div>
            </div>
        </div>
    )
}
