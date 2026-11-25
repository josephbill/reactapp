// to access data shared to a component we use the concept of function parameters 
// functionName({propname,propname2}
import NewComponent from './NewComponent'
import '../App.css'
function Header(props){


    return (
        <header className="header">
             <h2>{props.title}</h2>
             <blockquote>{props.subtitle}</blockquote>
             <p>This is a test</p>
        </header>
    )

}

export default Header;