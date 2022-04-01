import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';

//components
import { Formik } from "formik";
import Modal from "../components/Modal"
import StripeCheckoutForm from '../components/CheckoutForm';

//svg
import Arrow from "../assets/icons/dropdown-arrow.svg"
import SuccessImage from "../assets/svgs/success.svg"

//image
import OrderReview from '../components/cart/OrderReview';
import needAuth from '../routes/needAuth';

//stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { AddToShippingInfo } from '../Config/firebase';

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


// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KiackC2Sb7pUw98SzfBW6ls6QpeKiDzdTncO2s4gp1pJ9IRhlVMbG8AhdeXVBtLeAI3xps4XxzucH7pN2OGkfKk00YKaBDPmk');

function Checkout() {

    const handleAccordion=(x)=>{
        const activeCard = document.getElementById(`content-${x}`)
        activeCard.classList.toggle("h-0");
        activeCard.classList.toggle("opacity-0");
        activeCard.classList.toggle("h-fit");
        activeCard.classList.toggle("opacity-1");
        activeCard.classList.toggle("mt-8");
    }

    //stripe options
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };

    const currentUser = useSelector((state)=> state.auth.currentUser)

    return (
        <>
        <div>
            <h2 className="page_heading">Checkout</h2>
            <div className="flex flex-wrap gap-8 lg:gap-0 justify-between mt-6">

                <section className="w-full lg:w-[60%]">
                <div class="flex flex-col gap-8 items-center justify-center h-fit" id="accordion_container">

                    <div className="w-full card" id="1" data-accordion="01">                        
                        <div className="text-xl font-bold flex justify-between items-center mt-2" onClick={()=>handleAccordion(1)}>                            
                            <h2>Shipping information</h2>
                            <span><Image src={Arrow} alt="" height="10"/></span>
                        </div>

                        <div className='h-fit opacity-1 mt-8 content' id='content-1'>
                            {
                                currentUser?.shippingInfo !== null
                                ?   <span>
                                        <p>{currentUser?.shippingInfo?.firstName} {currentUser?.shippingInfo?.lastName}</p>
                                        <p>{currentUser?.shippingInfo?.phoneNumber}</p>
                                        <p>{currentUser?.shippingInfo?.address}</p>
                                    </span>
                                
                                : <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    phoneNumber: '',
                                    address: ''
                                }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.firstName) {
                                    errors.firstName = 'Required';
                                    } 
                                    if (!values.lastName) {
                                    errors.lastName = 'Required';
                                    } 
                                    if (!values.phoneNumber) {
                                    errors.phoneNumber = 'Required';
                                    } 
                                    if (!values.address) {
                                    errors.address = 'Required';
                                    } 
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    let userId = currentUser.uid
                                    AddToShippingInfo(values, userId)
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
                                    <form onSubmit={handleSubmit} className="flex flex-col w-full mb-12">
                                    
                                    <div className="flex flex-col lg:flex-row lg:gap-6">
                                        <div className="flex mb-4 flex-col w-full">
                                            <label className="font-bold">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                                placeholder="John"
                                                className="input"
                                            />
                                            <p className="text-red-600">{errors.firstName && touched.firstName && errors.firstName}</p>
                                        </div>
                                        <div className="flex mb-4 flex-col w-full">
                                            <label className="font-bold">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                                placeholder="Doe"
                                                className="input"
                                            />
                                        <p className="text-red-600">{errors.lastName && touched.lastName && errors.lastName}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:gap-6">
                                        <div className="flex mb-4 flex-col w-full">
                                            <label className="font-bold">Address</label>
                                            <textarea
                                                type="text"
                                                name="address"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                                placeholder="Enter your shipping Adderess"
                                                className="input h-[8rem] resize-none"
                                            />
                                            <p className="text-red-600">{errors.address && touched.address && errors.address}</p>
                                        </div>
                                        <div className="flex mb-4 flex-col w-full">
                                            <label className="font-bold">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phoneNumber}
                                                placeholder="+234 000 0000"
                                                className="input"
                                            />
                                            <p className="text-red-600">{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full flex justify-end gap-4">
                                        <button type="submit" className="outlined_btn mt-8 flex justify-center items-center gap-2" disabled={isSubmitting}>
                                            <SaveIcon />Save
                                        </button>
                                        <button type="submit" className="btn mt-8" disabled={isSubmitting}>
                                            Next
                                        </button>
                                    </div>                            
                                    </form>
                                )}
                                </Formik>
                                
                            }
 
                        </div>
                    </div>

                    <div className="w-full card" id="2" data-accordion="02">
                        <div className="text-xl font-bold flex justify-between items-center mt-2" onClick={()=>handleAccordion(2)}>
                            <h2>Payment Method</h2>
                            <span><Image src={Arrow} alt="" height="10"/></span>
                        </div>

                        
                    <div className='h-0 opacity-0 content' id='content-2'>
                        <StripeCheckoutForm />
                    </div>
                    </div>

                </div>

                </section>

                <section className="w-full lg:w-[35%]">
                    <div className="card">
                        <OrderReview />
                    </div>
                </section>
            </div>
        </div>

        <Modal>
            <div className="card flex flex-col items-center gap-8">
                <p className="w-full font-bold flex justify-end">X</p>
                <Image src={SuccessImage} alt="success" height="100" />
                <p className="font-bold text-2xl">Checkout Sucessful</p>
                <div className="flex w-full gap-4">
                    <button className="w-full underline-offset-4 underline">Continue Shopping</button>
                </div>
            </div>
        </Modal>

        </>
    )
}

export default needAuth(Checkout)
