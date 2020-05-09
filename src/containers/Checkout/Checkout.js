import React,{Component} from 'react';
import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            cheese:1,
            bacon:1,
            meat:1
        }
    }

    componentDidMount(){
        // console.log(this.props.location.search);
        // const query = new URLSearchParams(
        // //    this.props.location.search
        // );
        let queryParams = this.props.location.search.substring(1);

        let queryparamsArray = queryParams.split("&");
        console.log(queryparamsArray);

        let ingredients = {};

        queryparamsArray.map(element => {
            return ingredients[element.split("=")[0]] = Number(element.split("=")[1]);
        });

        // for (let params of query.entries()) {
        //     ingredients[params[0]] = +params[1];
        // }
        this.setState({ingredients:ingredients});
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        );
    }
}

export default Checkout;