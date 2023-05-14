import { useState } from 'react';
import mrGo from '../../Images/Temporary/mrGo.png';
import mrb from '../../Images/Temporary/mrb.png'; 

const MainHero = (props) =>{
    const [mouseLocation, setLocation] = useState(false);
    const ifHoveredImg = (
        <div className="HeroMain1">
            <img src={props.ifHovered} alt="Temporary image"/>
        </div>
    );
    const notHoveredImg = (
        <div className="HeroMain2">
            <img src={mrGo} alt="temporary img for mrg" onMouseEnter={()=>hoverHandler(true)} onMouseLeave={()=>setLocation(false)}/>
            <img src={mrb} alt='temporary img for mrb' onMouseEnter={()=>hoverHandler(false)} onMouseLeave={()=>setLocation(false)}/>
        </div>
    );
};

export default MainHero;