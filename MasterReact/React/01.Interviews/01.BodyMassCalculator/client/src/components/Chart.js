import React, { Component } from 'react';

class Chart extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='Progress'>
                    <h2>Tu Resultado: {this.props.result.toFixed(1)}%</h2>
                    <div className='Percentage' id='Effect'>
                     <p>{this.props.result.toFixed(1)}%</p>
                     <p id="Triangle">&#9660;</p>
                    </div>
                </div>
                <div className='Bar'></div>
                <div className='Indexes'>
                    <div>
                        <input type="checkbox" className='c1'></input>
                        <p>2-4%</p>
                        <p>Esencial</p>
                    </div>
                    <div>
                        <input type="checkbox" className='c2'></input>
                        <p>6-13%</p>
                        <p>Deportista</p>
                    </div>
                    <div>
                        <input type="checkbox" className='c3'></input>
                        <p>14-17%</p>
                        <p>Fitness</p>
                    </div>
                    <div>
                        <input type="checkbox" className='c4'></input>
                        <p>18-25%</p>
                        <p>Aceptable</p>
                    </div>
                    <div>
                        <input type="checkbox" className='c5'></input>
                        <p>25% +</p>
                        <p>Obeso</p>
                    </div>
                </div>
            </div>);
        }
    };

export default Chart;