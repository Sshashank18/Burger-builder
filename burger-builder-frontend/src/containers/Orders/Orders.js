import React,{Component} from 'react';
import axios from '../../axios-order';
import Order from '../../components/Orders/Order';
import {connect} from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component{

    componentDidMount(){
       this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render(){
        let order = <Spinner />
        if(!this.props.loading){
            order=this.props.orders.map(order => (
                <Order key={order.id}
                    ingredients={order.ingredient}
                    price={+order.price}/>   
           ))
        }
        return(
            <div>
                {order}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders,axios));