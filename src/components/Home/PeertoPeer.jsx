import React from 'react'
import './peer.scss'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useTranslation } from 'react-i18next';

const PeertoPeer = () => {
  const { t } = useTranslation();

  return (
    <div className='container peertopeer mt-5  mb-5'>
        <div className="top row">
            <div className="left col-12 col-md-5 my-2 mx-2">
              <p className='title'>{t("Peer.title")}</p>
              <span>{t("Peer.commession")} 1%</span>
            </div>
            <div className="right col-8 col-md-4 my-2 mx-2 ">
                <div className="bank text-center">
                    <AccountBalanceOutlinedIcon className="icon" />
                    <span>{t("Peer.banks")}</span>
                </div>
            </div>
            
        </div>
        <div className="middle">
          <div className="main-input">
          <input className= "count"
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder="0"
      />
            <label htmlFor="input">{t("Peer.label")}</label>
          </div>
          <div className="input-groups row">
            <div className="input-wrap ">
              <label htmlFor="input">{t("Peer.label2")}</label>
              <div className="input">
              <CreditCardIcon className="card"/>
                  <input className= "card-input"
                    onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="0000   0000   0000   0000"
                />
                
              </div>
            </div>
            <div className="input-wrap ">
              <label htmlFor="input">{t("Peer.label2")}</label>
              <div className="input">
              <CreditCardIcon className="card"/>
                  <input className= "card-input"
                    onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="0000   0000   0000   0000"
                />
                
              </div>
            </div>
            <button className='transfer-btn btn  '>{t("Peer.transfer")}</button>
          </div>
        </div>
        
    </div>
  )
}

export default PeertoPeer