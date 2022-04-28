import React,{useState} from 'react'
import './mobile.scss'


const Mobile = ({data, title}) => {
    const[visible, setVisible] = useState(6)
    const [button, setButton] = useState(true)
    

    const handleButtonPlus = () => {
        setVisible(11);
        setButton(!button)
    }
    const handleButtonMinus =()=> {
        setVisible(6);
        setButton(!button)
    }

  return (
    <div  className='mobile mt-5'>
        <div className="title">
            <p>{title}</p>
            <span>{data.length}</span>
            {button? <div className="more"
            onClick={handleButtonPlus}
            >More</div> : <div className="more"
            onClick={handleButtonMinus}
            >Hide</div> }
        </div>
        <div className="cards">
            {data.slice(0, visible).map((item) => (
                <div 
                key={item.id} className="card"> <img src={item.img} alt={item.name} />
                
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Mobile