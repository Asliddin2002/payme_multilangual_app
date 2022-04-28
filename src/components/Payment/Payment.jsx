import React, {useRef} from 'react'
import Mobile from './Mobiles/Mobile'
import './payment.scss'
import { data } from './Mobiles/data'
import {communalData} from './Mobiles/data'
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next';
// import Modal from './Modal'

const Payment = () => {
    // const[modal, setModal]= useState(true)
    const { t } = useTranslation();

    const inputRef = useRef("")


    // const activateModal = () => {
    //     setModal(!modal)
    // }
    // const inActivateModal = () => {
    //     setModal(!modal)
    // }
    const onHandleChange = () => {
        // const filteredData = inputRef.current.value
    }

    const title = "Mobile operators"
    const title2 = "Communal services"
  return (<>
  <div className='container payment'>
        <div className="top">
        <div className="left"><span>{t("Payment.title")}</span>
        <p>{t("Payment.sub")}</p></div>
        <div className="right">
            <input onChange ={onHandleChange}
            ref={inputRef}
            type="text" placeholder='Search...' />
        </div>
        </div>
        
        <div className="middle mt-4 mb-5">
             {/* <Modal className =  "hide" inActivateModal={inActivateModal}/> */}
        

            <Mobile  data={data} title={title}/>
            <Mobile   data ={communalData} title={title2}/>
        </div>
    </div>
        <Footer/>
  </>
    
  )
}

export default Payment