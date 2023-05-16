import mrGo from "../../Images/Temporary/mrGo.png";
import mrb from "../../Images/Temporary/mrb.jpg";

const MainHero = (props) => {
  //If 'true' is passed, Asen will be displayed.
  //If 'false' is passed, Jay will be displayed.
  const heroHandler = (bool) => {
    props.setClicked(true);
    if (bool) {
      props.setBrother(true);
    } else {
      props.setBrother(false);
    }
  };

  const heroExit = () => {
    props.setClicked(false);
  };

  const ifHoveredImg = (
    <section className="HeroMain1">
      <img src={props.ifHovered} alt="Temporary" />
      <button className="exitFull" onClick={heroExit}>
        Return{" "}
      </button>
    </section>
  );
  const notHoveredImg = (
    <section className="HeroMain2">
      <img
        src={mrGo}
        alt="temporary for mrg"
        onClick={() => heroHandler(true)}
      />
      <img
        src={mrb}
        alt="temporary for mrb"
        onClick={() => heroHandler(false)}
      />
    </section>
  );

  return (<div className="HeroContainer">{props.isClicked ? { ifHoveredImg } : { notHoveredImg }}</div>);
};

export default MainHero;
