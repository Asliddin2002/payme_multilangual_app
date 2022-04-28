import React from 'react'
import './paymecard.scss'
import { useTranslation } from 'react-i18next';

const Paymecard = () => {
  const { t } = useTranslation();

  return (
    <div className=" paymecard">
      
        <div className="bottom container">
            <div className="left">
            <img src="https://static.tildacdn.com/tild6464-3637-4535-b835-393835326631/logo.png" alt="card" />
            </div>
        <div className="right">
            <div className="title">{t("PaymentCard.title")}</div>
            <p className="info">{t("PaymentCard.info")}</p>
            <button className='btn more btn-light btn-large'>{t("PaymentCard.more")}</button>
        </div>
        </div>
    </div>
  )
}

export default Paymecard