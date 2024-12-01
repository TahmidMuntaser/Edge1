
const domContainer = document.getElementById('root');

// ReactDOM.render("Hello, World!", domContainer);


const MyElementwithfunc = () => {
    const [counter, setCounter] = React.useState(0);
    // console.log(displayvalue);

    return (
        <div>
        <h1 id="display">{counter}</h1>
        <div>
          <button id="button" onClick={()=>setCounter(counter+1)}>INC +</button>
          <button id="button" onClick={()=>setCounter(counter-1)}>DEC -</button>
        </div>
      </div>
    );
};

ReactDOM.render(<div>

    <MyElementwithfunc/>
    <MyElementwithfunc/>
    <MyElementwithfunc/>
    
    </div>, domContainer);