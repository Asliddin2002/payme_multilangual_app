import React from 'react'
import './othercareg.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CommuteIcon from '@mui/icons-material/Commute';
import { useTranslation } from 'react-i18next';

const OtherCateg = () => {
    const { t } = useTranslation();
  return (
    <div className = "other-categ">
        <div className="container wraper ">
            <div className="title-wrap">
                <span className="title">{t("Other.title")}</span>
                <p className="sub-title">{t("Other.sub")}</p>
            </div>
            <div className="row ">
            <div className="cards col-3 mx-5">
                <AttachMoneyIcon className="icon"/>
                <p>{t("Other.card1")}</p>
            </div>
            <div className="cards col-3 mx-5">
                <ElectricBoltIcon className="icon"/>
                <p>{t("Other.card2")}</p>
            </div>
            <div className="cards col-3 mx-5">
                <CommuteIcon className="icon"/>
                <p>{t("Other.card3")}</p>
            </div>
            </div>
            
            <button className='btn btn-light '>{t("Other.btn1")}</button>
        </div>
        
    </div>
  )
}

export default OtherCateg