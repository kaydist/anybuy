import React from "react";

// Authentication related pages
import Login from "../pages/auth/login"

//
import Home from '../pages/index'

//user
import Profile from "../pages/profile"

// Checkout
import checkout from "../pages/checkout";
import RechargeCheckout from "../pages/recharge/checkout";
import cart from "../pages/cart"


const authProtectedRoutes = [

	//checkouts
	{ path: "/checkout", component: checkout },
	{ path: "/recharge/checkout", component: RechargeCheckout },
	{ path: "/cart", component: cart },
	{ path: "/profile", component: Profile },
	
];

const publicRoutes = [
    { path: "/auth/login", component: Login },
    { path: "/", component: Home },
];

export { authProtectedRoutes, publicRoutes };
