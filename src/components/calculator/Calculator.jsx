import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number, setNumber] = useState(null);
  const [isOperation, setisOperation] = useState(false);

  //? -------------------------------------------------------------
  const handleNumber = (e) => {

    if (number === null) {
      setNumber(e.target.innerText);
      setisOperation(false);
    } else {
      setNumber(number + e.target.innerText);
      setisOperation(false);

      // console.log(number)
    }
  };
  //? -------------------------------------------------------------

  const handleOperation = (e) => {
    if (number !== null) {
      if (isOperation === false) {
        setisOperation(true);
        setNumber(number + e.target.innerText);
      }
    }

    // setNumber(number + e.target.innerText);
  };
  //? -------------------------------------------------------------

  const handleResult = () => {
    if (isOperation === false) {
      setNumber(eval(number).toString());
    }
  };

  //? -------------------------------------------------------------

  //? ------------------------------------------------------------

  const handleDelete = () => {
    setNumber(null);
  };
  //? -------------------------------------------------------------

  //? -------------------------------------------------------------

  const handleZero = (e) => {

    if (number.includes(".") === false) {
        if (number !== null) {
      if (isOperation === false) {
        setNumber(number + e.target.innerText);
      }
    }
    }

  



  };

  //? -------------------------------------------------------------




  //? -------------------------------------------------------------



  const handlePoint = (e) => {

    if (number !== null) {

      if (number.endsWith(".") === false) {
        

 if (isOperation === false) {
        setNumber(number + e.target.innerText);
      }

      }

     
    }else {
      setNumber("0.")
    }


  };

  //? -------------------------------------------------------------

  return (
    <div className="calculator">
    <div className="calculatorMain">
      <div className="calculatorPDiv">
      <p className="calculatorP">{number}</p>

      </div>

      <button className="calculatorButton" onClick={(e) => handleOperation(e)}>+</button>
      <button className="calculatorButton" onClick={(e) => handleOperation(e)}>-</button>
      <button className="calculatorButton" onClick={(e) => handleOperation(e)}>*</button>
      <button className="calculatorButton" onClick={(e) => handleOperation(e)}>/</button>
      <button className="calculatorButton" onClick={handleDelete}>C</button>
      <button className="calculatorButton" onClick={(e) => handleResult(e)}>=</button>
      <br />
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>1</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>2</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>3</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>4</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>5</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>6</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>7</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>8</button>
      <button className="calculatorButton" onClick={(e) => handleNumber(e)}>9</button>
      <button className="calculatorButton" onClick={(e) => handleZero(e)}>0</button>
      <button className="calculatorButton" onClick={(e) => handlePoint(e)}>.</button>
      <br />

      {/* <p>{number.substring(4)}</p> */}
      {/* <p>{number.substring(4).replace("+", "topla")}</p> */}
    </div>
    </div>
  );
};

export default Calculator;
