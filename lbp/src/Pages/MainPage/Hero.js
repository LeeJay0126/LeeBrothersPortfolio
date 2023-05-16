import { useState } from "react";
import MainHero from "./MainHero";

const Hero = () => {
  //useState that determines which brother is being displayed
  //false = Jay, true = Asen
  const [brother, setBrother] = useState(false);
  //useState that determines if image should be expanded
  const [isClicked, setClicked] = useState(false);

  return(
    <div>
      <MainHero setBrother={setBrother} isClicked={isClicked} setClicked={setClicked}/>
    </div>
  )

};

export default Hero;
