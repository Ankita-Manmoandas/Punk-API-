import react from "react";
import blackCross from "../../assests/images/black-cross.png";
import "./Moreinfo.scss";

const MoreInfo = (props) => {
  const {togglefunction} = props;
  

  return (
    <div className="more-info">
    <img src={blackCross} onClick={togglefunction} className="more-info__exit"/>
    <p className="more-info__content"> More information coming soon! </p>
   
    </div>
  )

}

export default MoreInfo; 