import React,{Component} from 'react';
import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component{
    state={
        ingredients:null,
        totalPrice:0
    }

    componentWillMount(){
        // console.log(this.props.location.search);
        // const query = new URLSearchParams(
        // //    this.props.location.search
        // );
        let queryParams = this.props.location.search.substring(1);

        let queryparamsArray = queryParams.split("&");

        let ingredients = {};
        let price=0;

        queryparamsArray.map(element => {
            if(element.split('=')[0]==='price'){
                price=element.split("=")[1];
                return null;
            }else{
                return ingredients[element.split("=")[0]] = Number(element.split("=")[1]);
            }
        });
        console.log(ingredients);

        // for (let params of query.entries()) {
        //     ingredients[params[0]] = +params[1];
        // }
        this.setState({ingredients:ingredients , totalPrice:price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data'); 
    }

    render(){

        return(
            
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                        render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}  {...props}/>)} />
            </div>
        );
    }
}

export default Checkout;