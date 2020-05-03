import React from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxi';

const layout = (props)=>(
    <Aux>
        <div>Toolbar,backdrop,sidedrawer</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;