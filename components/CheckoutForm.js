import React from 'react'
import Image from 'next/image'

//components
import { Formik } from "formik";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

//svgs
import MastercardLogo from "../assets/svgs/mastercard logo.svg"
import PaypalLogo from "../assets/svgs/PayPal Logo.svg"
import VisaLogo from "../assets/svgs/Visa Logo.svg"

export const SaveIcon=()=>{
    /* eslint-disable no-alert, no-console */
    return(
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="save" stroke="currentColor">
        <path id="Vector" d="M19.8398 21.8682H5.83984C5.30941 21.8682 4.8007 21.6574 4.42563 21.2824C4.05056 20.9073 3.83984 20.3986 3.83984 19.8682V5.86816C3.83984 5.33773 4.05056 4.82902 4.42563 4.45395C4.8007 4.07888 5.30941 3.86816 5.83984 3.86816H16.8398L21.8398 8.86816V19.8682C21.8398 20.3986 21.6291 20.9073 21.2541 21.2824C20.879 21.6574 20.3703 21.8682 19.8398 21.8682Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M17.8398 21.8682V13.8682H7.83984V21.8682" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M7.83984 3.86816V8.86816H15.8398" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
    /* eslint-enable no-alert, no-console */
}

const StripeCheckoutForm=()=>{

    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };

    return (
        <>
            <div className="flex gap-3">
                <div id="visa" className="input w-36 h-16 p-2 flex items-center justify-center">
                    <Image src={VisaLogo} alt="Visa" width='80' />
                </div>
                <div className="input w-36 h-16 p-2 flex items-center justify-center">
                    <Image src={MastercardLogo} alt="Visa" width='80' />
                </div>
                <div className="input w-36 h-16 p-2 flex items-center justify-center">
                    <Image src={PaypalLogo} alt="Visa" width='80' />
                </div>
            </div>

            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="flex flex-col w-full my-12">
                
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Card Name</label>
                        <input
                            type="text"
                            name="card_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.card_name}
                            placeholder="John Doe"
                            className="input"
                        />
                        <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Card Number</label>
                        <input
                            type="tel"
                            name="card_number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.card_number}
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            className="input"
                        />
                        <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">Exp. Date</label>
                        <input
                            type="date"
                            name="exp_date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.exp_date}
                            placeholder="MM/YY"
                            className="input"
                        />
                        <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="flex mb-4 flex-col w-full">
                        <label className="font-bold">CVV</label>
                        
                        <input
                            type="number"
                            name="cvv"
                            maxLength = "3"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cvv}
                            placeholder="xxx"
                            className="input"
                        />
                        <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    <div className="flex mb-4 flex-col w-full lg:w-1/2">
                        <p className="font-bold">Discount</p>
                        <div className="w-full border flex flex-row gap-2 bg-white px-1 rounded-lg">
                            <input
                            type="text"
                            name="coupon"
                            placeholder="Enter Coupon code"
                            className="input w-full border-0 m-0 py-0 focus:border-0"
                            />
                            <button className="my-1 btn rounded-lg">Apply</button>
                        </div>
                    </div>
                </div>
                

                <div className="w-full flex justify-end gap-4">
                    <button type="submit" className="outlined_btn mt-8 flex justify-center items-center gap-2" disabled={isSubmitting}>
                    <SaveIcon />Save
                    </button>
                </div>                            
                </form>
            )}
            </Formik>
        </>
                    
    )
}

export default StripeCheckoutForm
