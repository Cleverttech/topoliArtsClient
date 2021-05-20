import React, { useState, useEffect } from "react";
import {Redirect}  from 'react-router-dom'
import Loader from './Loader'
import {  CardElement,  useStripe,  useElements} from "@stripe/react-stripe-js";
import config from '../config'
import io from "socket.io-client";
import axios from 'axios'


let socket = ''

export default function CheckoutForm(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  let thisProps = props  
  let {fullname, telephone, message} = thisProps.location.state.inputValues
  let msgForm = `${fullname} just bought a course from you. Here's their number ${telephone} to contact them if ${thisProps.user.email} or IM is not an option. He also left this message: ${message}`
    useEffect(() => {
      if(!thisProps){
        return (<Loader style={{width:"200px"}}/>)
      }
      else{
        // Create PaymentIntent as soon as the page loads
        return window.fetch(`${config.API_URL}/api/create-payment-intent`, {method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify({items: { userId: `${thisProps.user._id}` , courseId: `${thisProps.match.params.courseId}`}})}, {withCredentials: true})
      .then(res => {
        return res.json();
      })
      .then(data => {
          setClientSecret(data.clientSecret);
        })
    }}, []);
    
    const cardStyle = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      }
    };
    
    const handleChange = async (event) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
    
    const handleSubmit = async ev => {
      ev.preventDefault();
      setProcessing(true);
      
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);

        // message part
        //do the socket connection
        socket = io(`${config.API_URL}`);
        
        
        const {user, courses} = thisProps
        
        let mentorId = '';
        courses.map((e)=>{
          if(e._id == thisProps.match.params.courseId){
            
            return mentorId = e.mentor._id
          }
        })
        let data = {
          participants: [user._id, mentorId]
        }
        axios.post(`${config.API_URL}/api/conversation`, data, {withCredentials: true})
        .then((response) => {
          console.log(response)
          socket.emit("join_chat", response.data._id);
          let messageContent = {
            chatId: response.data._id,
            content: {
              sender: user,
              message: msgForm,
            },
          };
          
          console.log(messageContent)
          // emit it so that everyone connected to the same chat receives the message
           socket.emit("send_message", messageContent);
          })
          
        }
      };
      
      return (
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button className='myButton' disabled={processing || disabled || succeeded} id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
              ) : (
              "Pay now"
              )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a
            href={`https://dashboard.stripe.com/test/payments`}
          >
            Stripe dashboard.
          </a> Refresh the page to pay again.
        </p>
      </form>
    );
  }

