import React from 'react'
import './payformobile.scss'
import TelegramIcon from '@mui/icons-material/Telegram';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PaidIcon from '@mui/icons-material/Paid';
import { useTranslation } from 'react-i18next';

const PayForMobile = () => {
    const { t } = useTranslation();

  return (
    <div className="payformobile ">
        <div className="telegram d-flex align-items-center justify-content-center">
            <TelegramIcon style={{"color":"#33CCCC"}}/>
            <p>
        For fast financial transfers via Telegram use <span >our telegram bot</span> 
            </p>
            </div>
            <div className="container">
            <div className="middle ">
                <div className="input-groups">
                    <div className="input-wrap">
                    <div className="left mb-5">
                        <p className='title'>{t("PaymentForMobile.title")}</p>
                        <span>{t("PaymentForMobile.sub")}</span>
                        </div>
                        <label htmlFor="input">{t("Landing.phone")}</label>
                        <div className="input">
                            <ContactPhoneIcon className="card"/>
                            <input className= "card-input"
                                onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }}
                            placeholder="phone number "
                            />
                    
                    </div>
                </div>
                <div className="input-wrap">
                    <label htmlFor="input">{t("PaymentForMobile.label")}</label>
                    <div className="input">
                        <PaidIcon className = "card"/>
                        <input className= "card-input"
                            onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                            }
                        }}
                        placeholder="Enter payment amount  "
                        />
                    
                </div>
                
                </div>
                <button className='transfer-btn btn '>{t("PaymentForMobile.pay")}</button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default PayForMobile