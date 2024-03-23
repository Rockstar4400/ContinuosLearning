import React from 'react';
import axios from 'axios';

class axioSelect extends React.Component {

    axios = require('axios');

    componentDidCatch(){
        axios.get('https://gist.githubusercontent.com/Rockstar4400/a1a4f83488316699885358653277d9ab/raw/fcd1aa99fc94cd533899309ecd1350b5ec19f654/quotes.json')
        .then(function (response) {
        // handle success
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    render(){
        return (
            <div></div>
        );
    }
}

export default axioSelect;