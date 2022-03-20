import Image from 'next/image'
import React from 'react'

//component
import { Formik } from 'formik'

//svgs
import MTNLogo from "../assets/svgs/MTN Logo.svg"
import AirtelLogo from "../assets/svgs/Airtel Nigeria Logo.svg"
import NmobileLogo from "../assets/svgs/9mobile Logo.svg"
import GloLogo from "../assets/svgs/Globacom Limited Logo.svg"

function BuyAirtime() {
    return (
        <div className="flex flex-col gap-8 lg:max-w-2xl justify-between">
            <h2 className="text-4xl font-extrabold">Airtime Purchase</h2>
            <p className="text-lg font-extrabold">Choose Mobile Network</p>

            <div className="flex flex-row items-center sm:justify-between gap-4 overflow-x-auto overflow-y-hidden w-full sm:w-full flex-nowrap lg:px-0">
                <div className="card flex justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                    <Image src={MTNLogo} alt="MTN" width='60' />
                </div>
                <div className="card flex justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                    <Image src={AirtelLogo} alt="MTN" width='60' />
                </div>
                <div className="card flex justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                    <Image src={NmobileLogo} alt="MTN" width='60' />
                </div>
                <div className="card flex justify-center items-center min-w-[8rem] h-32 lg:w-32 lg:h-32">
                    <Image src={GloLogo} alt="MTN" width='60' />
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
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    
                    <div className="flex flex-col lg:flex-row lg:gap-6">
                        <div className="flex mb-4 flex-col w-full lg:w-1/2">
                            <label className="font-bold">Enter Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile_number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobile_number}
                                placeholder=""
                                className="input"
                            />
                            <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:gap-6 justify-between">
                        <div className="flex mb-4 flex-col w-full lg:w-1/2">
                        <label className="font-bold">Top-Up Amount</label>
                            <input
                                type="number"
                                name="amount"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                                placeholder=""
                                className="input"
                            />
                            <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                        </div>
                        <div className="flex flex-col w-full lg:w-64">
                            <button type="submit" className="input mt-8 btn flex justify-center items-center" disabled={isSubmitting}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>                                            
                    </form>
                )}
                </Formik>
            
        </div>
    )
}

export default BuyAirtime
