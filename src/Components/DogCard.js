import React, {useState} from "react";

function DogCard({dog: {name, breed, img}, handleBark}) {
  

  let [clicked, setClick] = useState(false)
  
  const clickFun = () => 
    handleBark(setClick, clicked)
  
  return (
    <div className="card">
      <span className="content">
    <h2>{name}</h2>
        <img alt="" width='250' height='200' src={img} />
      </span>
      <span className="bark">
        <button onClick={clickFun}>Bark</button>
        {clicked ? <h2>Bark</h2> : null}
      </span>
    </div>
  );
}

export default DogCard;
