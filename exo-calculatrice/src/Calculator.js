import React, { useReducer } from "react";

const initialState = {
  input: "",
  total: null,
  operator: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "addInput":
      return { ...state, 
        input: state.input + action.payload };
    case "setOperator":
      return {
        ...state,
        total: state.input,
        operator: action.payload,
        input: "",
      };
    case "calculate":
      let result;
      switch (state.operator) {
        case "+":
          result = parseFloat(state.total) + parseFloat(state.input);
          break;
        case "-":
          result = parseFloat(state.total) - parseFloat(state.input);
          break;
        case "*":
          result = parseFloat(state.total) * parseFloat(state.input);
          break;
        default:
          result = state.total;
          break;
      }
      return { input: result.toString(), total: result, operator: null };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    const value = e.target.value;
    // if (state.total != null) {
    //   dispatch({ type: "calculate" });
    // }
    if (!isNaN(value) || value === ".") {
      dispatch({ type: "addInput", payload: value });
    } else if (value === "+" || value === "-" || value === "*") {
      dispatch({ type: "setOperator", payload: value });
   } else if (value === "=") {
     dispatch({ type: "calculate" });
    } else if (value === "reset") {
      dispatch({ type: "reset" });
    }
  }

  const buttons = [
    { label: "9", value: "9" },
    { label: "8", value: "8" },
    { label: "7", value: "7" },
    { label: "6", value: "6" },
    { label: "5", value: "5" },
    { label: "4", value: "4" },
    { label: "3", value: "3" },
    { label: "2", value: "2" },
    { label: "1", value: "1" },
    { label: ".", value: "." },
    { label: "0", value: "0" },
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "=", value: "=" },
    { label: "Reset", value: "reset" },
  ];

  return (
    <div class="container mt-5">
      <div class="row">
      <h1>Calculatrice :</h1>
      </div>
        <div class="row justify-content-center">
          <div class="col-6">
          <input type="text" value={state.input} class="form-control form-control-lg text-center" />
          {buttons.map((button, index) => (
          <button key={index} value={button.value} onClick={handleClick} class="btn btn-success m-3 col-3">
            {button.label}
          </button>
          ))}
          </div>
        </div>
    </div>
  );
}

export default Calculator;