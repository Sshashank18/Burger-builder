(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__3GFf4",BreadTop:"BurgerIngredients_BreadTop__1GR0Q",Seeds1:"BurgerIngredients_Seeds1__1slsV",Seeds2:"BurgerIngredients_Seeds2__2cQpV",Meat:"BurgerIngredients_Meat__2gl_H",Cheese:"BurgerIngredients_Cheese__1imjH",Salad:"BurgerIngredients_Salad__7xusS",Bacon:"BurgerIngredients_Bacon__1LVgq"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__uMQCg",Open:"SideDrawer_Open__CfzKT",Close:"SideDrawer_Close__hiMMR",Logo:"SideDrawer_Logo__IbKRM"}},function(e,t,n){e.exports={Input:"Input_Input__267Kx",Label:"Input_Label__10fWd",ValidationError:"Input_ValidationError__Q9BOa",InputElement:"Input_InputElement__3PmPP",Invalid:"Input_Invalid__1M9PE"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__ROOJs",Label:"BuildControl_Label__1jrhc",Less:"BuildControl_Less__o7Mp5",More:"BuildControl_More__xBrH8"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1wKCd",Logo:"Toolbar_Logo__1trI7",DesktopOnly:"Toolbar_DesktopOnly__1IDY-"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1NTlB",active:"NavigationItem_active__obeNr"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2Hsmt",OrderButton:"BuildControls_OrderButton__KAFOK",enable:"BuildControls_enable__2wvZD"}},function(e,t,n){e.exports={Button:"Button_Button__gZV47",Success:"Button_Success__2XbzB",Danger:"Button_Danger__3EAbI"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__3ypnG"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3RRM1"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3PAXG"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2NhQa"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__Zjpiy"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1LzcC"}},function(e,t,n){e.exports={Modal:"Modal_Modal__13AbN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__X8vbI",load2:"Spinner_load2__3989h"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1hMLz"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1gKle"}},function(e,t,n){e.exports={Order:"Order_Order__3BzWL"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1QSTW"}},,function(e,t,n){e.exports=n(90)},,,,,function(e,t,n){},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(66),n(7)),l=n(17),u=n(45),s=n(1),d=n(16),p=function(e,t){return Object(s.a)(Object(s.a)({},e),t)},h={ingredients:null,totalPrice:4,error:!1,building:!1},m={cheese:.5,salad:.4,meat:1.3,bacon:.7},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),a=p(e.ingredients,n),r={ingredients:a,totalPrice:e.totalPrice+m[t.ingredientName],building:!0};return p(e,r);case"REMOVE_INGREDIENT":return Object(s.a)(Object(s.a)({},e),{},{ingredients:Object(s.a)(Object(s.a)({},e.ingredients),{},Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-m[t.ingredientName],building:!0});case"SET_INGREDIENTS":return Object(s.a)(Object(s.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1});case"FETCH_INGREDIENTS_FAILED":return Object(s.a)(Object(s.a)({},e),{},{error:!0});default:return e}},f={orders:[],loading:!1,purchased:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Object(s.a)(Object(s.a)({},e),{},{purchased:!1});case"PURCHASE_BURGER_START":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Object(s.a)(Object(s.a)({},t.orderData),{},{id:t.orderId});return Object(s.a)(Object(s.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"PURCHASE_BURGER_FAIL":return Object(s.a)(Object(s.a)({},e),{},{loading:!1});case"FETCH_ORDER_START":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"FETCH_ORDER_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{orders:t.orders,loading:!1});case"FETCH_ORDER_FAIL":return Object(s.a)(Object(s.a)({},e),{},{loading:!1});default:return e}},b={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},E=function(e,t){return p(e,{error:null,loading:!0})},_=function(e,t){return p(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},y=function(e,t){return p(e,{error:t.error,loading:!1})},C=function(e,t){return p(e,{userId:null,token:null})},O=function(e,t){return p(e,{authRedirectPath:t.path})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return E(e);case"AUTH_SUCCESS":return _(e,t);case"AUTH_FAIL":return y(e,t);case"AUTH_LOGOUT":return C(e);case"SET_AUTH_REDIRECT_PATH":return O(e,t);default:return e}},k=n(3),S=n(4),j=n(6),T=n(5),A=(n(71),n(15)),N=n(46),B=n.n(N),D=function(e){return e.children},w=n(26),R=n.n(w),H=n(47),L=n.n(H),x=n(48),P=n.n(x),U=function(e){return r.a.createElement("div",{className:P.a.Logo},r.a.createElement("img",{src:L.a,alt:"My Burger",style:{height:e.height}}))},M=n(49),F=n.n(M),V=n(29),G=n.n(V),q=n(13),W=function(e){return r.a.createElement("li",{className:G.a.NavigationItem},r.a.createElement(q.b,{to:e.link,exact:e.exact,activeClassName:G.a.active},e.children))},z=function(e){return r.a.createElement("ul",{className:F.a.NavigationItems},r.a.createElement(W,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?r.a.createElement(W,{link:"/orders"},"Orders"):null,e.isAuthenticated?r.a.createElement(W,{link:"/logout"},"Logout"):r.a.createElement(W,{link:"/auth"},"Authentication"))},Q=n(51),J=n.n(Q),K=function(e){return r.a.createElement("div",{className:J.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},Y=function(e){return r.a.createElement("header",{className:R.a.Toolbar},r.a.createElement(K,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:R.a.Logo},r.a.createElement(U,null)),r.a.createElement("nav",{className:R.a.DesktopOnly},r.a.createElement(z,{isAuthenticated:e.isAuth})))},X=n(19),Z=n.n(X),$=n(52),ee=n.n($),te=function(e){return e.show?r.a.createElement("div",{className:ee.a.Backdrop,onClick:e.clicked}):null},ne=function(e){var t=[Z.a.SideDrawer,Z.a.Close];return e.open&&(t=[Z.a.SideDrawer,Z.a.Open]),r.a.createElement(D,null,r.a.createElement(te,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("div",{className:Z.a.Logo},r.a.createElement(U,null)),r.a.createElement("nav",null,r.a.createElement(z,{isAuthenticated:e.isAuth}))))},ae=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.SideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(S.a)(n,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(Y,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(ne,{isAuth:this.props.isAuthenticated,closed:this.SideDrawerClosedHandler,open:this.state.showSideDrawer}),r.a.createElement("main",{className:B.a.Content},this.props.children))}}]),n}(a.Component),re=Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(ae),oe=n(60),ie=n(53),ce=n.n(ie),le=n(14),ue=n.n(le),se=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:ue.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:ue.a.BreadTop},r.a.createElement("div",{className:ue.a.Seeds1}),r.a.createElement("div",{className:ue.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:ue.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:ue.a.Cheese});break;case"bacon":t=r.a.createElement("div",{className:ue.a.Bacon});break;case"salad":t=r.a.createElement("div",{className:ue.a.Salad});break;default:t=null}return t},de=Object(A.g)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(oe.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(se,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please Add some ingredients!!")),r.a.createElement("div",{className:ce.a.Burger},r.a.createElement(se,{type:"bread-top"}),t,r.a.createElement(se,{type:"bread-bottom"}))})),pe=n(32),he=n.n(pe),me=n(22),ge=n.n(me),fe=function(e){return r.a.createElement("div",{className:ge.a.BuildControl},r.a.createElement("div",{className:ge.a.Label},e.label),r.a.createElement("button",{className:ge.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:ge.a.More,onClick:e.added},"More"))},ve=[{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"}],be=function(e){return r.a.createElement("div",{className:he.a.BuildControls},r.a.createElement("p",null,"Current Price : ",r.a.createElement("strong",null,e.price.toFixed(2))),ve.map((function(t){return r.a.createElement(fe,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:he.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},Ee=n(54),_e=n.n(Ee),ye=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(te,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:_e.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),Ce=n(33),Oe=n.n(Ce),Ie=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[Oe.a.Button,Oe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ke=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])}));return r.a.createElement(D,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with following ingredients : "),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price:",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout? :"),r.a.createElement(Ie,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(Ie,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},Se=n(55),je=n.n(Se),Te=function(){return r.a.createElement("div",{className:je.a.Loader},"Loading...")},Ae=function(e,t){return function(n){Object(j.a)(o,n);var a=Object(T.a)(o);function o(){var e;Object(k.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(S.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(ye,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},Ne=n(25),Be=n.n(Ne),De=Be.a.create({baseURL:"https://react-my-burger-builder-13255.firebaseio.com/"}),we=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},Re=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},He=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Le=function(e){return function(t){setTimeout((function(){t(we())}),1e3*e)}},xe=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(s.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.props.error?r.a.createElement("p",null,"Ingredients Can't be loaded"):r.a.createElement(Te,null);return this.props.ings&&(a=r.a.createElement(D,null,r.a.createElement(de,{ingredients:this.props.ings}),r.a.createElement(be,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,purchasable:this.updatePurchaseState(this.props.ings),disabled:e,isAuth:this.props.isAuthenticated,ordered:this.purchaseHandler,price:this.props.price})),n=r.a.createElement(ke,{purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.props.ings,price:this.props.price})),r.a.createElement(D,null,r.a.createElement(ye,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),Pe=Object(c.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,isAuthenticated:null!==e.auth.token,error:e.burgerBuilder.error}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){De.get("https://react-my-burger-builder-13255.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(He(t))}}}))(Ae(xe,De)),Ue=n(56),Me=n.n(Ue),Fe=function(e){return r.a.createElement("div",{className:Me.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes Good !!!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(de,{ingredients:e.ingredients})),r.a.createElement(Ie,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(Ie,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Ve=n(57),Ge=n.n(Ve),qe=n(20),We=n.n(qe),ze=function(e){var t=null,n=[We.a.InputElement];switch(e.inValid&&e.shouldValidate&&e.touched&&n.push(We.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}var a=null;return e.inValid&&e.touched&&(a=r.a.createElement("p",{className:We.a.ValidationError},"Please enter a valid value!")),r.a.createElement("div",{className:We.a.Input},r.a.createElement("label",{className:We.a.Label},e.label),t,a)},Qe=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP CODE"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},delieveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},loading:!1,formIsValid:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(s.a)({},e.state.orderForm),r=Object(s.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var o=!0;for(var i in a)o=a[i].valid&&o;e.setState({orderForm:a,formIsValid:o})},e}return Object(S.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(ze,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,inValid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(n){e.inputChangedHandler(n,t.id)}})})),r.a.createElement(Ie,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(a=r.a.createElement(Te,null)),r.a.createElement("div",{className:Ge.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data !!"),a)}}]),n}(a.Component),Je=Object(c.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),De.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(Ae(Qe,De)),Ke=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(S.a)(n,[{key:"render",value:function(){var e=r.a.createElement(A.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(A.a,{to:"/"}):null;e=r.a.createElement("div",null,t,r.a.createElement(Fe,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(A.b,{path:this.props.match.path+"/contact-data",component:Je}))}return e}}]),n}(a.Component),Ye=Object(c.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(Ke),Xe=n(58),Ze=n.n(Xe),$e=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Ze.a.Order},r.a.createElement("p",null,"Ingredients : ",a," "),r.a.createElement("p",null,"Price : ",r.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},et=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=r.a.createElement(Te,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement($e,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),r.a.createElement("div",null,e)}}]),n}(a.Component),tt=Object(c.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDER_START"});var a="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';De.get("/orders.json"+a).then((function(e){var t=[];for(var a in e.data)t.push(Object(s.a)(Object(s.a)({},e.data[a]),{},{id:a}));n({type:"FETCH_ORDER_SUCCESS",orders:t})})).catch((function(e){n(function(e){return{type:"FETCH_ORDER_FAIL",error:e}}(e))}))}}(t,n))}}}))(Ae(et,De)),nt=n(59),at=n.n(nt),rt=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var a=Object(s.a)(Object(s.a)({},e.state.controls),{},Object(d.a)({},n,Object(s.a)(Object(s.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(ze,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,inValid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(n){e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(Te,null));var o=null;this.props.error&&(o=r.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=r.a.createElement(A.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:at.a.Auth},o,i,r.a.createElement("form",{onSubmit:this.submitHandler},a,r.a.createElement(Ie,{btnType:"Success"},"SUBMIT")),r.a.createElement(Ie,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),n}(a.Component),ot=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9-WRhrIFJiJOk7_kPAv8DSIbQ4NwXhpA";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9-WRhrIFJiJOk7_kPAv8DSIbQ4NwXhpA"),Be.a.post(o,r).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(Re(e.data.idToken,e.data.localId)),a(Le(e.data.expiresIn))})).catch((function(e){console.log(e),a({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,a))},onSetAuthRedirectPath:function(){return e(He("/"))}}}))(rt),it=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(A.a,{to:"/"})}}]),n}(a.Component),ct=Object(c.b)(null,(function(e){return{onLogout:function(){return e(we())}}}))(it),lt=function(e){Object(j.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(A.d,null,r.a.createElement(A.b,{path:"/auth",component:ot}),r.a.createElement(A.b,{path:"/",exact:!0,component:Pe}),r.a.createElement(A.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(A.d,null,r.a.createElement(A.b,{path:"/checkout",component:Ye}),r.a.createElement(A.b,{path:"/logout",component:ct}),r.a.createElement(A.b,{path:"/auth",component:ot}),r.a.createElement(A.b,{path:"/orders",component:tt}),r.a.createElement(A.b,{path:"/",exact:!0,component:Pe}),r.a.createElement(A.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(re,null,e))}}]),n}(a.Component),ut=Object(A.g)(Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(we());else{var a=localStorage.getItem("userId");e(Re(t,a));var r=(n.getSeconds()-(new Date).getSeconds())/1e3;setTimeout((function(){e(we())}),5e3*r)}}else e(we())}))}}}))(lt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=l.d,dt=Object(l.c)({burgerBuilder:g,order:v,auth:I}),pt=Object(l.e)(dt,st(Object(l.a)(u.a))),ht=r.a.createElement(c.a,{store:pt},r.a.createElement(q.a,null,r.a.createElement(ut,null)));i.a.render(ht,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[61,1,2]]]);
//# sourceMappingURL=main.a6b598c0.chunk.js.map