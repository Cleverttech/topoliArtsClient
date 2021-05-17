

import React, { Component } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


export default class Stripe extends Component {
    render() {
        const promise = loadStripe("pk_test_51IpuIuH5gcnIJLr75WZLRMLyoP7d9Oe6boxI5XrBCL5MSjl9gtWL0M9cBJYWvujzTwhVrdyrSQ2PqZeOHHIpN5S500uwkbVzHl");
        return (
            <div>
                <Elements stripe={promise}>
                    <CheckoutForm />
                </Elements>
            </div>
        )
    }
}
