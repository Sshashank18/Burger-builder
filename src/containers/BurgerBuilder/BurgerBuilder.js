import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {           //Set global bcz it will not be changed
    cheese:0.5, 
    salad:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{

    state={
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get('https://react-my-burger-builder-13255.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients:response.data});
        })
        .catch(error=>{
            this.setState({error:true});
        })
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            // .reduce((sum,el)=>{return sum+ ingredients[el]},0) //My Logic
            .map((igKey)=>{
                return ingredients[igKey];
            })
            .reduce((sum,el)=> {
                return sum + el;
            },0);
        this.setState({purchasable:sum>0});
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    //Arrow function helps in excessing state while other syntax shows error i.e. purcha...(){}
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = ()=>{
        // alert('You Continue !!');
        //.json is added at the end for the firebase to work correctly

        // this.setState({loading:true});

        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'Shashank',
        //         address:{
        //             street:'Bahal street',
        //             zipcode:'110032',
        //             country:'India'
        //         },
        //         email:'test@test.com'
        //     },
        //     delieveryMethod:'fastest'
        // }
        // axios.post('/orders.json',order)
        //     .then(response=>{
        //         this.setState({loading: false, purchasing:false});
        //     })
        //     .catch(error=>{
        //         this.setState({loading: false, purchasing:false});
        //     });

        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString=queryParams.join('&');
        
        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryString
        });
    }

    render(){

        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //it would be like {'salad':true,'cheese':false,...}


        let orderSummary = null;

        let burger=this.state.error ? <p>Ingredients Can't be loaded</p>:<Spinner />;
        if(this.state.ingredients){
            
            burger=(
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        purchasable={this.state.purchasable}
                        disabled={disabledInfo}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}/>
                </Aux>);

            orderSummary=<OrderSummary 
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}/>;
        }

        if(this.state.loading){
            orderSummary=<Spinner/>;
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);