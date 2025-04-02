import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {
    const [extended, setextended] = useState(false)
  return (
    <div className='sidebar'> 

    {/* top */}
    <div className='top'>
<img src={assets.menu_icon}  className='menu' onClick={()=>{
setextended(prev=>!prev)
}} />

{/* new chat */}
<div className='new-chat'>
    <img src={assets.plus_icon} />
{extended?<p>New Chat</p>:null}
</div>
{/* recent title */}
{extended?<div className='recent'>
    <p className='recent-title'>Recent</p>
    {/* recent-entery */}
    <div className='recent-entry'>
        <img src={assets.message_icon}   />
        <p>What is react...</p>
    </div>
</div> :null}
    </div>



    {/* bottom */}
    <div className='bottom'>
{/* bottom item */}
<div className='bottom-item recent-entry'>
<img src={assets.question_icon} />
{extended?<p>help</p> : null}
</div>
<div className='bottom-item recent-entry'>
<img src={assets.history_icon}/>
{extended? <p>Activity</p> : null}


</div>
<div className='bottom-item recent-entry'>
<img src={assets.setting_icon}  />
{extended? <p>Settings</p>
 : null}

</div>

    </div>



    </div>
  )
}

export default Sidebar