import PortaModel from "../../model/PortaModel";
import Door from "../components/Door";
import Gif from "../components/Gif";
import { useState } from "react";

export default function Home() {

  // add state
  const [p1, setP1] = useState(new PortaModel(1));

  return (
    <div style={{display:"flex"}}>
      {/* <Gif/> */}
      <Door porta={ p1 }/>
      <Door porta={ p2 }/>
    </div>
  )
}
