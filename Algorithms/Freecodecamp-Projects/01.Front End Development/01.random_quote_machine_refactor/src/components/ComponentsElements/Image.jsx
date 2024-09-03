import React from 'react';
import Stark from '../Svgs/Houses/Stark';
import Targaryen from '../Svgs/Houses/Targaryen';
import Lannister from '../Svgs/Houses/Lannister';
import Baratheon from '../Svgs/Houses/Baratheon';
import Martell from '../Svgs/Houses/Martell';
import Tyrell from '../Svgs/Houses/Tyrell';
import Arryn from '../Svgs/Houses/Arryn';
import Greyjoy from '../Svgs/Houses/Greyjoy';
import Tully from '../Svgs/Houses/Tully';

class Image extends React.Component {

    render(){
        if(this.props.house === "Arryn"){
            return(
                <Arryn className="Arryn"></Arryn>
            );
            }if(this.props.house === "Baratheon"){
                return(
                    <Baratheon className="Baratheon"></Baratheon>
                );
            }if(this.props.house === "Greyjoy"){
                return(
                    <Greyjoy className="Greyjoy"></Greyjoy>
                );
            }if(this.props.house === "Lannister"){
                return(
                    <Lannister className="Lannister"></Lannister>
                );
            }if(this.props.house === "Martell"){
                return(
                    <Martell className="Martell"></Martell>
                );
            }if(this.props.house === "Stark"){
                return(
                    <Stark className="Stark"></Stark>
                );
            }if(this.props.house === "Targaryen"){
                return(
                    <Targaryen className="Targaryen"></Targaryen>
                );
            }if(this.props.house === "Tully"){
                return(
                    <Tully className="Tully"></Tully>
                );
            }if(this.props.house === "Tyrell"){
                return(
                    <Tyrell className="Tyrell"></Tyrell>
                );
            }else{
                return(
                    <div>No Image</div>
                );
            }
        }
}

export default Image;
