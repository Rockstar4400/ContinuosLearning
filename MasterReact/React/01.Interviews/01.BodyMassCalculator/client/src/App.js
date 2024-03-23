import React, { Component } from "react";
import Chart from "./components/Chart";
import Form from "./components/Form";
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      fields: { Height: "", Weight: "", Hip: "", Neck: "" },
      genders: { Gender: "" },
      errorsInputs: {},
      errorsCheckbox: {}
    };
    this.clear = this.clear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidations = this.handleValidations.bind(this);
    this.effect = this.effect.bind(this);
    this.formula = this.formula.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  clear() {
    this.setState({
        result: 0,
        fields: { Height: "", Weight: "", Hip: "", Neck: "" },
        genders: { Gender: "" },
        errorsInputs: {},
        errorsCheckbox: {}
    });
  }

  handleChange = (e, field) => {
    let fields = this.state.fields;
    let genders = this.state.genders;
    genders[field] = e.target.value;
    fields[field] = e.target.value;
    this.setState({ fields, genders });
  }

  handleValidations() {
    let fields = this.state.fields;
    let genders = this.state.genders;
    let errorsInputs = {}, errorsCheckbox = {};
    let formIsValid = true;
    let messageEmptly = "Debe insertar informacion.";
    let messageNotNumber = "Debe insertar solo numeros.";
    let messageNegativeNum = "No debe contener numeros negativos.";
    let messageNotGender = "Debe seleccionar un genero.";

    if (typeof genders !== "undefined") {
      if (!genders["Gender"].trim().length > 0) {
        formIsValid = false;
        errorsCheckbox["Gender"] = messageNotGender;
      }
    }

    for (let key in fields) {
      if(key !== "Gender"){
        if (!fields[key].trim().length > 0) {
            formIsValid = false;
            errorsInputs[key] = messageEmptly;
            } else 
            if (typeof fields[key] !== "undefined") {
                if (fields[key].match(/^-\d+$/)) {
                formIsValid = false;
                errorsInputs[key] = messageNegativeNum;
                } else if (!fields[key].match(/^\d+(\.\d+)*$/)) {
                formIsValid = false;
                errorsInputs[key] = messageNotNumber;
                }
            }
        }
    }
    
    this.setState({
      errorsInputs: errorsInputs,
      errorsCheckbox: errorsCheckbox,
    });

    return formIsValid;
  }

  effect(result){
    var i = 0;
    if (i === 0) {
      i = 1;
      const elem = document.getElementById("Effect");
      var width = 0;
      const id = setInterval(frame, 0);
      function frame() {
        if (width >= result) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width * 4 + "%";
          elem.innerHTML = 
          `<p id='Number'>${result.toFixed(1)}%</p>
           <p id="Triangle">&#9660;</p>`;
        }
      }
    }
  }

  formula(){
    const G = this.state.fields.Gender;
    const H1 = Number(this.state.fields.Height);
    //const W = Number(this.state.fields.Weight); ?
    const H2 = Number(this.state.fields.Hip);
    const N = Number(this.state.fields.Neck);
    let result = 0;

    if(G === "Men"){
        result = 495/1.0324 - 0.19077 * Math.log10((H2 - N)) + .15456 * Math.log10(H1) - 450;
        this.setState({ result: result});
    }else{
        result = 495/1.29579 - 0.35004 * Math.log10((H2 - N)) + .221 * Math.log10(H1) - 450;
        this.setState({ result: result});
    }
  }


  onFormSubmit (event) {
    event.preventDefault();

    if (this.handleValidations()) {
      this.formula();
      setTimeout(() => {
        this.effect(this.state.result);
      }, "300")
    }else{

    }
  }

  render() {
    if (this.state.result !== 0) {
      return (
        <div className="Container">
          <div className="Nav">
            <Nav />
          </div>
          <div className="FormAndChart">
            <Form 
                className="Form" 
                onFormSubmit={this.onFormSubmit}
                state={this.state}
                handleChange = {this.handleChange}
                clear = {this.clear}
                />
            <Chart 
                className="Chart" 
                result={this.state.result}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Container">
          <div className="Nav">
            <Nav />
          </div>
          <div className="FormAndChart">
            <Form 
                className="Form" 
                onFormSubmit={this.onFormSubmit}
                state={this.state}
                handleChange = {this.handleChange}
                clear = {this.clear} />
          </div>
        </div>
      );
    }
  }
}

export default App;
