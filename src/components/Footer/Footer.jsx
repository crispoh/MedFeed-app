import React, {useState} from 'react'
import './Footer.css'
// import {Link} from 'react-router-dom'

export default function Footer() {

    return (
        <>
            <div className="main-footer">
                <div className="footer-img">
                    <div className="footer-img1"></div>
                    <div className="footer-img-text">MedFeed</div>
                </div>
                <div className="footer-text">
                    <div className="footer-text1">
                        <h1>Acerca de MedFeed</h1>
                        <ul>
                            <li>Quienes somos</li>
                            <li>Convenios</li>
                            <li>Acceso</li>
                        </ul>
                    </div>
                    <div className="footer-text2">
                        <h1>Comunicate con nosotros</h1>
                        <ul>
                            <li>Contacto</li>
                            <li>Reclamos</li>
                            <li>Sugerencias</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className="footer-text3">
                        <h1>Acerca de este sitio</h1>
                        <ul>
                            <li>Terminos y condiciones</li>
                            <li><a href="https://storyset.com/work">Illustration by Freepik Storyset</a></li>
                            <li>Design by Crispoh</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}