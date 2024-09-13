import './App.css'
import UserCard from './components/UserCard'
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import UserDesc from "./userDesc.js"


function App() {

  return (
    <div className='container'>
        <UserCard myName="SACHIN KUMAR" img={img1} desc={UserDesc.sachin}/>
        <UserCard myName="GAURAV YADAV" img={img2} desc={UserDesc.gaurav}/>
        <UserCard myName="DEVELOPER KUMAR" img={img3} desc={UserDesc.developer}/> 
    </div>
  )
}

export default App
