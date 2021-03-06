import React, {useContext, useState} from "react"
import {Link, useLocation} from 'react-router-dom'
import { Context } from "../Context"

export default function Header() {
    let location = useLocation()
    const {lang, setChosenLang, chosenLang} = useContext(Context)
    const [showNav, setShowNav] = useState(false)

    function handleChange(e) {
        const {value} = e.target
        setChosenLang(value)
    }

    function hideNavigation() {
        setShowNav(false)
    }

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/">
                    <h1 className="header--title"><span className="header--title__span">Full</span>Bucket<i className="fas fa-fill-drip bucketIcon"></i></h1>
                    
                    <p className="subTitle">Study Environment</p>
                    <hr className="hr"/>
                </Link>
                <button className="openBtn" onClick={() => setShowNav(true)}><i className="fas fa-bars openIcon"></i></button>
                <nav className={`header--nav ${!showNav && 'hideNav'}`}>
                    <button className="closeBtn" onClick={() => setShowNav(false)}><i className="fas fa-times closeIcon"></i></button>
                    <ul className="header--ul">
                        <li className="header--li">
                            <select 
                                value={chosenLang}
                                onChange={handleChange}
                                className="header--select header--li"
                            >
                                <option className="header--option" value={0}>English</option>
                                <option className="header--option" value={1}>Português</option>
                            </select>
                        </li>
                        <Link to="/">
                            <li onClick={hideNavigation} className={`header--li ${location.pathname === '/' && 'activePage'}`}>Whiteboard</li>
                        </Link>
                        <Link to="/spelling">
                            <li onClick={hideNavigation} className={`header--li ${location.pathname === '/spelling' && 'activePage'}`}>Spelling Practice</li>
                        </Link>
                        <Link to="/about">
                            <li onClick={hideNavigation} className={`header--li ${location.pathname === '/about' && 'activePage'}`}>{lang.about}</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}