import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
<div className='main'>
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}  />
    </div>

<div className="main-container">

<div className="greet">

  <p><span>Hello ,Ayush.</span></p>
  <p>How can I help you Today.</p>

</div>


<div className="cards">
<div className="card">
  <p>Suggest some beautiful places to visit on the upcoming roadtrip</p>
  <img src={assets.compass_icon}/>
</div>

<div className="card">
  <p>Briefly summarise this concept: Urban planing</p>
  <img src={assets.bulb_icon}/>
</div>

<div className="card">
  <p>Bainstorm team bonding activities for our work retreat</p>
  <img src={assets.message_icon}/>
</div>

<div className="card">
  <p> Improve the readbility of the following code</p>
  <img src={assets.code_icon}/>
</div>
</div>
<div className="main-bottom">
  <div className="search-box">
    <input type="text" placeholder='Enter your prompt here'/>
    <div className='icons'>
<img src={assets.gallery_icon} alt="" />
<img src={assets.mic_icon} alt="" />
<img src={assets.send_icon} alt="" />
    </div>
  </div>
  <div className="bottom-info">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto quos ipsum dolore pariatur corporis adipisci </p>
  </div>
</div>
</div>
</div>
 )
}

export default Main