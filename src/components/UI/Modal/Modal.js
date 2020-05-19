import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    //Turned Modal.js from functional component to class component so that we can see if the component should be updated or not and only then render (not unnecessary rendering)
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render(){
        return(
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
                    opacity:this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>);
    }
} 


export default Modal;