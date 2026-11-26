import {useState} from 'react'

// component to display count 
function CounterDisplay({count}){
     return <>
        <h2>Count: {count}</h2>
     </>
}
// increment button - component with button to be clicked 
function IncrementButton({onIncrement}){
       return <button onClick={onIncrement}>+1</button>
}
function CounterComponent(){
    //state is used to manage data inside a component i.e. make a component remember 
    // to define state in a component 
    // statRef = current value of state 
    // stateUpdateRef = how we update the value 
    // state must always be initialized with an initial value 
    // const [stateRef,stateUpdateRef] = useState(datatype)
    const [count,setCount] = useState(0)  // let count = 0

    function handleclik(){
        setCount(count + 1)
    }

    return (
        <div>
            <CounterDisplay count={count}/>
            <IncrementButton onIncrement={handleclik} />
        </div>
    )

}

export default CounterComponent 