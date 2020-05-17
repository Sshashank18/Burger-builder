import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Auxi/Auxi';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-order';



class BurgerBuilder extends Component{

    state={
        purchasing:false,
    }

    componentDidMount(){
        // axios.get('https://react-my-burger-builder-13255.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients:response.data});
        // })
        // .catch(error=>{
        //     this.setState({error:true});
        // })

        this.props.onInitIngredients();
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
        return sum>0;
    }

    // addIngredientHandler = (type)=>{
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }


    // removeIngredientHandler = (type)=>{
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    //Arrow function helps in excessing state while other syntax shows error i.e. purcha...(){}
    purchaseHandler=()=>{
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = ()=>{
        // alert('You Continue !!');

        // const queryParams = [];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price='+this.props.price);

        // const queryString=queryParams.join('&');
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render(){

        const disabledInfo={
            ...this.props.ings
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //it would be like {'salad':true,'cheese':false,...}


        let orderSummary = null;

        let burger=this.props.error ? <p>Ingredients Can't be loaded</p>:<Spinner />;
        
        if(this.props.ings){
            
            burger=(
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        disabled={disabledInfo}
                        isAuth={this.props.isAuthenticated}
                        ordered={this.purchaseHandler}
                        price={this.props.price}/>
                </Aux>);

            orderSummary=<OrderSummary 
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.props.ings}
                        price={this.props.price}/>;
        }

        // if(this.state.loading){
        //     orderSummary=<Spinner/>;
        // }


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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated: state.auth.token !== null,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(burgerBuilderActions.setAuthRedirectedPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios)); //withErrorHandler is the argument that the connection function call return us