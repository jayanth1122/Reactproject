import Greeting from "./Greeting";

export default function App(){

    let age = 28;
    const target = "python"
    const skills = ["Java", "Sql", "Java Script"];
  return(
    <div>
    <h1>Welcome to React Props</h1>
    <Greeting name = "Malik" age = {age} target = {target} skills = {skills}/>
    </div>
  )
}