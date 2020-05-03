import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const control=[
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
    {label:"Salad",type:"salad"},
    {label:"Bacon",type:"bacon"},
];


const buildControls = (props)=>(
    <div className={classes.BuildControls}>
        {control.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}/>
        )
        )}
    </div>
);

export default buildControls;