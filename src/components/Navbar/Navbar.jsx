import React from 'react'
import './navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container px-5 py-3 main">
            
            <a className="navbar-brand" ><Link to='/'><img src="https://cdn.paycom.uz/documentation_assets/payme_01.png" alt="" /></Link></a>
              
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
            <div className="collapse 
            navbar-collapse 
            flex-grow-0" 
            id="navbarNav">
            <ul className="navbar-nav ">
              <NavLink to='/transfer' style= {{"textDecoration": "none"}} activeClassName ="active" >
              <li className="nav-item me-5 mb-1 ">
                <i className="material-icons">compare_arrows</i>
                <a className="nav-link item" >{t("Navbar.Transfer")}</a>
                </li>
              </NavLink>
              <NavLink to='/payment' style= {{"textDecoration": "none"}} activeClassName ="active" >
                <li className="nav-item me-5 mb-1 ">
                <i className="material-icons">account_balance_wallet</i>
                <a className="nav-link item " >{t("Navbar.Payments")}</a>
                </li>
                </NavLink>
                <li className="nav-item me-5 mb-1 dropdown ">
                <i className="material-icons">headset_mic</i>
                <a className="nav-link item dropdown-toggle"
                 id="navbarDropdown"
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false" >{t("Navbar.Help")}</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Tel: +998 99 556 58 67</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Telegram</a></li>
                </ul>
                </li>
                <li className="nav-item me-5 mb-1 dropdown ">
                <i className="material-icons">translate</i>
                <a className="nav-link item dropdown-toggle" 
                id="navbarDropdown"
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">{t("Navbar.Language")}</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={()=> handleClick("uz")} ><a className="dropdown-item" href="#">Uzbek</a></li>
                  <li onClick={()=> handleClick("en")}><a className="dropdown-item" href="#">EngLish</a></li>
                </ul>
                </li>
            <button className="btn-v btn border-3  justify-content-end ">{t("Navbar.Vacancy")}</button>

            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar