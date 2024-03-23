import React, { Component } from "react";

class Form extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <h1>Calculadora de Grasa Corporal</h1>
        <p>
          El método de la Marina de los Estados Unidos (US Navy Method) ofrece
          una manera sencilla de calcular un aproximado de tejido adiposo en el
          cuerpo de la una persona.
        </p>

        <p>Los valores requeridos por la fórmula son los siguientes:</p>

        <form 
          className="form" 
          onSubmit={(e) => this.props.onFormSubmit(e)}>
          <label>Género</label>
          <br />
          <input 
            type="radio"
            className="checkbox-rounded"
            value="Men"
            checked= {this.props.state.genders["Gender"] === "Men"}
            onChange = {(e) => this.props.handleChange(e, ["Gender"])}
          />
          <label className="labelcheckboxMan">Hombre</label>
           
          <input 
            type="radio" 
            className="checkbox-rounded"
            value="Women"
            checked={this.props.state.genders["Gender"] === "Women"}
            onChange = {(e) => this.props.handleChange(e, ["Gender"])}
          />
          
          <label className="labelcheckboxWoman">Mujer</label>
          <br />
          <span style={{ color: "red" }}>{this.props.state.errorsCheckbox["Gender"]}</span>
          
          <br />
          <label>Altura (cm)</label>
          <br />
          <input 
            type="text" 
            name="Height" 
            className="inputs"
            placeholder="Escribe tu altura"
            value={this.props.state.fields["Height"]}
            onChange = {(e) => this.props.handleChange(e, e.target.name)}
            />
            <br/>
            
            <span style={{ color: "red" }}>{this.props.state.errorsInputs["Height"]}</span>
            <br />
          
          <label>Peso (kg)</label>
          <br />
          <input 
            type="text" 
            name="Weight" 
            className="inputs"
            placeholder="Escribe tu peso"
            value={this.props.state.fields["Weight"]}
            onChange = {(e) => this.props.handleChange(e, e.target.name)}
            />
            <br/>
            <span style={{ color: "red" }}>{this.props.state.errorsInputs["Weight"]}</span>
            <br />
            
          <label>Cintura (cm)</label>
          <br />
          <input 
            type="text" 
            name="Hip" 
            className="inputs"
            placeholder="Medida de tu cintura"
            value={this.props.state.fields["Hip"]}
            onChange = {(e) => this.props.handleChange(e, e.target.name)}
            />
            <br/>
            <span style={{ color: "red" }}>{this.props.state.errorsInputs["Hip"]}</span>
            <br />
          <label>Cuello (cm)</label>
          <br />
          <input 
            type="text" 
            name="Neck" 
            className="inputs"
            placeholder="Medida de tu cuello"
            value={this.props.state.fields["Neck"]}
            onChange = {(e) => this.props.handleChange(e, e.target.name)}
            />
            <br/>
            <span style={{ color: "red" }}>{this.props.state.errorsInputs["Neck"]}</span>
            <br />
            
          <input 
            type="submit" 
            value="Calcular"
            className="buttonCalc"
            onClick={this.props.effect}
            />
          <input 
            type="button" 
            value="Limpiar"
            className="buttonClean" 
            onClick={this.props.clear}
            /> 
        </form>
      </div>
    );
  }
}
export default Form;
