import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

import '../css/App.css';

class Fade extends Component{

    state = {
        show:false
    }

    showDiv = () => {
        this.setState({
            show:!this.state.show ? true : false
        });
        console.log(this.state);
    };
    

    render(){
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={5000}
                    classNames="square"

                    enter={true}
                >

                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>

                </CSSTransition>

                <div className="showDiv" 
                 onClick={this.showDiv}>
                    SHow or hide
                </div>
                
            </div>
        )
    }
}


export default Fade;