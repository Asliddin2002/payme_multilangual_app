import React from 'react'
import './footer.scss'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
    <div className = "footer">
        <div className="container d-flex  ">
            <div className="left p-5">
                <div className="img-wrap">
                    <img src="https://cdn.paycom.uz/documentation_assets/payme_03.png" alt="" />
                    <h5>{t("Footer.title")}</h5>
                </div>
                <h5>{t("Footer.sub")}</h5>
                <p>{t("Footer.info")}</p>
                <button className ="btn btn-large">{t("Footer.btn")}</button>
            </div>
            <div className="right">
                <img src="https://payme.uz/assets/images/ag-business-module-bg-02.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer