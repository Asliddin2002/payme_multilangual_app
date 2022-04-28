import React from 'react'
import './loan.scss'
import LanguageOutlinedIcon from '@mui/icons-material/Language';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTv';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useTranslation } from 'react-i18next';

const Loan = () => {
    const { t } = useTranslation();
  return (<>
  <div className="container white-contaner">
    <div className="loans ">
        <div className="text">
            <span className="title">{t("Loan.title")}</span>
            <p className="sub-title">{t("Loan.sub")}</p>
        </div>
        <button className='btn btn-large '>{t("Loan.banks")}</button>
    </div>
    
        <div className="bank-wrap row">
            <div className="bank col-3"><img src="https://logobank.uz:8005/media/logos_png/ipoteka-01.png" alt="" /></div>
            <div className="bank col-3"><img src="https://logobank.uz:8005/media/logos_png/Anorbank-01.png" alt="" /></div>
            <div className="bank col-3"><img src="https://cityrating.uz/wp-content/uploads/2018/11/NZRkRSlhG04cmQxHi7svnLbj1Qpc1_Ga-e1542539309298.jpg" alt="" /></div>
            <div className="bank col-3"><img src="https://logobank.uz:8005/media/logos_png/Asakabank_new-01.png" alt="" /></div>
        </div>
    </div>
    <div className="category mb-5 ">
        <div className="top container ">
        <span className="title">{t("Loan.categ")}</span>
        <button className="btn btn-large">{t("Loan.categBtn")}</button>
        </div>
        <div className="bottom container ">
            <div className="box mx-5 col-2">
                <LanguageOutlinedIcon className = "icon"/>
                <p >{t("Loan.card1")}</p>  
            </div>
            <div className="box mx-5 col-2">
            <LiveTvOutlinedIcon className = "icon"/>
                <p >{t("Loan.card2")}</p>  
            </div>
            <div className="box mx-5 col-2">
                <BeachAccessOutlinedIcon className = "icon"/>
                <p >{t("Loan.card3")}</p>  
            </div>
            <div className="box mx-5 col-2">
                <SportsEsportsOutlinedIcon className = "icon"/>
                <p >{t("Loan.card4")}</p>  
            </div>
            <div className="box mx-5 col-2">
                <AirplaneTicketOutlinedIcon className = "icon"/>
                <p >{t("Loan.card5")}</p>  
            </div>
        </div>
    </div>

    <div className="mobile-apps container">
        {/* // */}
        {/* https://logobank.uz:8005/media/logos_png/payme-01.png */}
        <div className="left"><img src="https://blog.payme.uz/wp-content/uploads/2020/12/0001-3.png" alt="" /></div>
        <div className="right">
            <div className="title">{t("Loan.title2")}</div>
            <div className="mobile-app  d-flex">
                <div className="app  d-flex align-items-center justify-content-center ">
                <ShopIcon className="icon"/>
                    {/* <i className="material-icons">shop</i> */}
                    <div className="app-info">
                        <span className="little ">GET IT 0N</span>
                        <span className="big">Google Play</span>
                    </div>
                </div>
                <div className="app d-flex align-items-center justify-content-center ">
                    {/* <i className="material-icons">shop</i> */}
                    <AppleIcon className="icon" />
                    <div className="app-info">
                        <span className="little ">Avaliable on the</span>
                        <span className="big">App Store</span>
                    </div>
                </div>
                <div className="app d-flex align-items-center justify-content-center ">
                    <LocalMallIcon className="icon"/>
                    {/* <i className="material-icons">shop</i> */}
                    <div className="app-info">
                        <span className="little ">Explore It on</span>
                        <span className="big">AppGallery</span>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  </>
    
  )
}

export default Loan