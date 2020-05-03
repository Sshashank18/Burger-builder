import React from 'react'; //React imported to return JSX code
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const Burger = (props)=>{

    let transformedIngredients = Object.keys(props.ingredients)   //Object function will convert ingredients object into array of its keys i.e. cheese,salod,etc.,etc.
            .map(igKey=>{
                return [...Array(props.ingredients[igKey])].map((_,i)=>{          //here _ shows that element name is blank as not used and i is index
                    return <BurgerIngredients key={igKey + i} type={igKey}  />    //Whenever use array pass it a key
                });
            })                  //transformedIngredients is an Array of Array of Objects till here
            
            .reduce((arr,el)=>{    //reduce transforms the array in the way we like
                return arr.concat(el);
            },[]);  //this is the initial value passed
    
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Add ingredients!!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    );
}

export default Burger;