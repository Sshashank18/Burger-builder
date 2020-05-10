import React,{Component} from 'react';
import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component{
    constructor(props){

        super(props);

        let queryParams = this.props.location.search.substring(1);
        let queryparamsArray = queryParams.split("&");

        let ingredients = {};
        let price=0;

        queryparamsArray.map(element => {
            if(element.split('=')[0]==='price'){
                price= +element.split("=")[1];
                return null;
            }else{
                return ingredients[element.split("=")[0]] = Number(element.split("=")[1]);
            }
        });

        // for (let params of query.entries()) {
        //     ingredients[params[0]] = +params[1];
        // }

        this.state = {
            ingredients: ingredients,
            price: price
        }
    }

    // componentWillMount(){
    //     // console.log(this.props.location.search);
    //     // const query = new URLSearchParams(
    //     // //    this.props.location.search
    //     // );
        
        
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.price);

        const queryString=queryParams.join('&');
        
        this.props.history.replace({
            pathname:'/checkout/contact-data',
            search:'?' + queryString
        });


        // this.props.history.replace('/checkout/contact-data?'); 
    }

    render(){
        return(
            
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                       render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.price}  {...props}/>)} />
            </div>
        );
    }
}

export default Checkout;