// function

import About from "./Components/about";
import AboutClass from "./Components/Aboutclass";
import Content from "./Components/Content";
import Homeclass from "./Components/Homeclass";
import Home from "./Home";

function App(){

  return(
    <>
    <h1>Hello to React</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nulla ipsum omnis illum aliquam modi voluptatum est iste distinctio harum vero quas quos ea officia soluta, pariatur ratione voluptatem?</p>
      
      <Home/>
      <About/>
      <Content/>
      <Homeclass/>
      <AboutClass/>
      <h3>Thank you</h3>
    </>
  )
}

export default App;