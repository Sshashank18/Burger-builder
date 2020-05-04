import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi'; //here Aux stands for auxilliary

const sideDrawer = (props)=>{

    return(
        <Aux>
        <Backdrop show/>
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;