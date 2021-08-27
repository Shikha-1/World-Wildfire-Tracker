import React from 'react'
import Whatshot from "@material-ui/icons/Whatshot";

const Marker = ({lat, lng, onClick, text}) => {
  return (
    <div onClick={onClick}>
      <Whatshot lat={lat} lng={lng} alt={text} style={{fontSize: "2rem", color: "red"}}/>
    </div>
  )
}

export default Marker;
