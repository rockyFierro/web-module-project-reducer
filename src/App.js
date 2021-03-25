import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers'
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { applyNumber, changeOperation, clearDisplay, remReturn, remClear ,remValue } from './actions'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const applyNum = (num) => {
    isNaN(num) ?
    console.warn(`${num} is not a valid input, please use a number.`) :
    dispatch(applyNumber(num)) 
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} 
                onClick={ ()=> dispatch(remValue(state.total))}
              />
              <CalcButton value={"MR"} 
                onClick={ ()=> dispatch(remReturn(state.memory))}
              />
              <CalcButton value={"MC"} 
                onClick={ ()=> dispatch(remClear()) }
              />
            </div>

            <div className="row">
              <CalcButton value={1}
                // onClick={ ()=>{ dispatch(addOne()) }
                onClick={() => { applyNum(1); }}
              />
              <CalcButton value={2} 
              onClick={() => { applyNum(2) }}/>
              <CalcButton value={3} 
              onClick={() => { applyNum(3) }}/>
            </div>

            <div className="row">
              <CalcButton value={4} 
              onClick={() => { applyNum(4) }}/>
              <CalcButton value={5} 
              onClick={() => { applyNum(5) }}/>
              <CalcButton value={6} 
              onClick={() => { applyNum(6) }}/>
            </div>

            <div className="row">
              <CalcButton value={7} 
              onClick={() => { applyNum(7) }}/>
              <CalcButton value={8} 
              onClick={() => { applyNum(8) }}/>
              <CalcButton value={9} 
              onClick={() => { applyNum(9) }}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} 
              onClick={()=>{dispatch(changeOperation('+'))}}
              />
              <CalcButton value={"*"}
              onClick={()=>{dispatch(changeOperation('*'))}}
              />
              <CalcButton value={"-"} 
              onClick={()=>{dispatch(changeOperation('-'))}}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} 
              onClick={()=>{dispatch(clearDisplay())}}
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
