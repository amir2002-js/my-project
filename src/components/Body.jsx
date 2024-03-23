// import { useState } from "react";
// import randomImg from "../api/randomImg";
import ShowImage from "./ShowImage";

export default function Body(props) {
 
  return (
    <div>
      <ShowImage arr={props.useSrc}/>
    </div>
  );
}
