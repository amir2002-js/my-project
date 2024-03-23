// import Footer from "./components/Footer"
import Body from "./components/Body"
import Header from "./components/Header"
// import Stories from "./components/Stories"
import { useEffect, useState } from "react";
import randomImg from "./api/randomImg";

function App() {
  const [imgArrSrc, setIASrc] = useState();

  useEffect(() =>{
    randomImg.get().then((res) => {
      setIASrc(res.data);
    })
  }, [])
  

  return (
    <div className="">
      <div className="max-w-screen-mdx container">
      <Header/>
      {/* <Stories/> */}
      {/* <Footer/> */}
      </div>
      <Body useSrc={imgArrSrc}/>

    </div>
  )
}

export default App
