import Image from 'next/image'
import React, {useState, useEffect} from 'react'

//components
import { Formik } from "formik";
import Modal from "../components/Modal"

//svg
import Arrow from "../assets/icons/dropdown-arrow.svg"
import MastercardLogo from "../assets/svgs/mastercard logo.svg"
import PaypalLogo from "../assets/svgs/PayPal Logo.svg"
import VisaLogo from "../assets/svgs/Visa Logo.svg"
import SuccessImage from "../assets/svgs/success.svg"

//image
import Earpod from "../assets/items/mHXOMt3WlF8.png"
import SummaryCard from '../components/cart/summarycard'
import OrderReview from '../components/cart/OrderReview';

export const SaveIcon=()=>{
    return(
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="save" stroke="currentColor">
        <path id="Vector" d="M19.8398 21.8682H5.83984C5.30941 21.8682 4.8007 21.6574 4.42563 21.2824C4.05056 20.9073 3.83984 20.3986 3.83984 19.8682V5.86816C3.83984 5.33773 4.05056 4.82902 4.42563 4.45395C4.8007 4.07888 5.30941 3.86816 5.83984 3.86816H16.8398L21.8398 8.86816V19.8682C21.8398 20.3986 21.6291 20.9073 21.2541 21.2824C20.879 21.6574 20.3703 21.8682 19.8398 21.8682Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_2" d="M17.8398 21.8682V13.8682H7.83984V21.8682" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Vector_3" d="M7.83984 3.86816V8.86816H15.8398" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

function checkout() {

    const handleAccordion=(x)=>{

        const allCards = document.querySelectorAll(".content");        
        allCards.forEach((index) => {
            index.classList.remove("h-fit");
            index.classList.remove("opacity-1");
            index.classList.remove("mt-8");
            index.classList.add("h-0");
            index.classList.add("opacity-0");
        });
            const activeCard = document.getElementById(`content-${x}`)
            activeCard.classList.remove("h-0");
            activeCard.classList.remove("opacity-0");
            activeCard.classList.add("h-fit");
            activeCard.classList.add("opacity-1");
            activeCard.classList.add("mt-8");
    }


    return (
        <>
        <div>
            <h2 className="text-4xl font-extrabold">Checkout</h2>
            <div className="flex flex-wrap gap-8 lg:gap-0 justify-between mt-6">

                <section className="w-full lg:w-[60%]">
                <div class="flex flex-col gap-8 items-center justify-center h-fit" id="accordion_container">

                    <div className="w-full card" id="1" data-accordion="01">                        
                        <div className="text-xl font-bold flex justify-between items-center mt-2" onClick={()=>handleAccordion(1)}>                            
                            <h2>Shipping information</h2>
                            <span><Image src={Arrow} alt="" height="10"/></span>
                        </div>

                        <div className='h-fit opacity-1 mt-8 content' id='content-1'>
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
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
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
                                        name="first_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.first_name}
                                        placeholder="John"
                                        className="input"
                                    />
                                    <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                                </div>
                                <div className="flex mb-4 flex-col w-full">
                                    <label className="font-bold">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                        placeholder="Doe"
                                        className="input"
                                    />
                                    <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
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
                                    <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                                </div>
                                <div className="flex mb-4 flex-col w-full">
                                    <label className="font-bold">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.last_name}
                                        placeholder="+234 000 0000"
                                        className="input"
                                    />
                                    <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
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
                        </div>
                    </div>

                    <div className="w-full card" id="2" data-accordion="02">
                        <div className="text-xl font-bold flex justify-between items-center mt-2" onClick={()=>handleAccordion(2)}>
                            <h2>Payment Method</h2>
                            <span><Image src={Arrow} alt="" height="10"/></span>
                        </div>

                        <div className='h-0 opacity-0 content' id='content-2'>
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
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
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
                                        maxlength = "3"
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

export default checkout
