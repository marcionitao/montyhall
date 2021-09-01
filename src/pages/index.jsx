import Door from "../components/Door";
import Gif from "../components/Gif";

export default function Home() {
  return (
    <div style={{display:"flex"}}>
      {/* <Gif/> */}
      <Door selecionada={ true }/>
      <Door selecionada={ false }/>
    </div>
  )
}
