import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './landing.scss'
import { useTranslation } from 'react-i18next';

const Landing =() =>{
    const { t } = useTranslation();
  return( 
      <>   
    <div className="container landing ">
        
        <div className="row flex-column-reverse flex-md-row  text-md-start">
        <div className="contact col-12 col-md-6 mt-5">
            <p className="title ">{t("Landing.login")}</p>
                <p className="info">{t("Landing.phone")}</p>
            <div className="input-group col-md-12 ">
                <div className="inputes">
                    <input className='form-control code' type="button" value="+998" />
                    <input onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                        }} className='from-control number' type="text" placeholder='__ __ __  __ __  __ __  ' />
                </div>
            </div>
                <p className='info'>{t("Landing.phone2")}</p>
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
        <div className="image-wrapper col-12 col-md-6">
            <img className="image" 
            src="https://static.vecteezy.com/system/resources/previews/000/684/217/non_2x/online-payment-with-mobile-phone-and-credit-card.jpg" 
            alt="PayMe"  />
        </div>

        </div>

        
    </div>
    </> 
  )
}

export default Landing