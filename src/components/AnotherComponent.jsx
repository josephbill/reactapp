function add(x,y){
   return x + y
}

function AnotherComponent(){
    // more react // more js 
    const x = "joseph"
    // state : data management 
    // Login page : email + password 
    return (
        <div className="">
          <section>
            {x} addition's result is {add(10,20)}
            <input placeholder="Enter Email"/>
            <input placeholder="Enter Password"/>
            <button>Login</button>
            <p>Invalid Credentials </p>
          </section>
        </div>
    )

}


export default AnotherComponent


