import './App.css'
import TeamCard from './components/TeamCard'
import Header from './components/Header'
import TeamList from './components/TeamList'
import Footer from './components/Footer'
import NewComponent from './components/NewComponent'
import AnotherComponent from './components/AnotherComponent'
import TeamForm from './components/TeamForm'
// to use local assets import them for a reference name 
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'
import CounterComponent from './components/CounterComponent'
import SimpleForm from './components/SimpleForm'
import { useState } from 'react'

const title = "Meet our Team"
const slogan = "The best team in the world!!"
const initialMembers = [
    {id: 1, name: "Joseph Mbugua", role:"Technical Mentor", avatar: user1},
    {id: 2, name: "Jane Doe" , role:"Accountant", avatar: user2},
    {id: 3, name: "Alan Turing", role:"CEO", avatar: user3}
  ]


function App(){
  // being App is the parent/root component then I will load my data 
  // i.e. data should be fetched on the parent component 
  // data lives at the top of the tree ("single source of truth i.e reduces data accessibility by restricting 
  // multiple data fetches in different component")
  // data once fetched can be shared to other components 
  // state for app to remember members in my team 
  const [teamMembers, setTeamMembers] = useState(initialMembers)
  function handleAddMember(newMember){
    // take the initial members array and add new object to it
         setTeamMembers((prev) => [
          ...prev,{...newMember, id: Date.now(), avatar: user1}
         ])
  }
  return(
    // nest other component inside this jsx return 
    // rule nest return inside a container (react fragments)<> </> or div/sematics 
    // className is an attribute for element selection for css styling 
    <div className="app">
          {/* place components in the order of appearance */}
          {/* to call a component use the component name inside the container <ComponentName/> */}
          {/* share of info from to parent to child is called prop drilling  */}
          {/* a prop is more of an attribute for a component */}
          <Header title={title} subtitle={slogan}/> 
          <TeamForm onAddMember={handleAddMember}/>
          <TeamList members={teamMembers}/>
          <Footer year={2026}/>
          {/* <AnotherComponent/> */}
    </div>
  )


}


export default App