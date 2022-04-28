import React from 'react'
import Landing from './Landing'
import PeertoPeer from './PeertoPeer'
import Paymecard from './Paymecard'
import PayForMobile from './PayForMobile'
import OtherCateg from './OtherCateg'
import Loan from './Loan'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className=' home'>
      <Landing/>
      <PeertoPeer/>
      <Paymecard/>
      <PayForMobile/>
      <OtherCateg/>
      <Loan/>
      <Footer/>
    </div>
  )
}

export default Home