import React from 'react'
import Image from "next/image";
import Link from "next/link"

//components
import { Formik } from "formik";

//icons
import VerifyEmailSVG from "../../assets/svgs/verify-email.svg"

const VerifyEmail = () => {
    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:py-5">
                <div className="lg:w-[23rem] w-full flex flex-col gap-8 px-4 pb-8">

                    <div className="relative h-48 w-1/2">
                        <Image src={VerifyEmailSVG} alt="" layout="fill" />
                    </div>

                    <h1 className="font-black text-3xl">Verify your email</h1>
                    <p>Enter the verification code sent to <span className="font-extrabold">Johndoe@gmail.com</span> to reset your email successfully</p>

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
                            <form onSubmit={handleSubmit} className="flex flex-col">

                            <div className="flex mb-4 flex-row gap-2 flex-nowrap justify-between">
                                <input
                                    type="number"
                                    name="otp1"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp1}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                                <input
                                    type="number"
                                    name="otp2"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp2}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                                <input
                                    type="number"
                                    name="otp3"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp3}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                                <input
                                    type="number"
                                    name="otp4"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp4}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                                <input
                                    type="number"
                                    name="otp5"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp5}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                                <input
                                    type="number"
                                    name="otp6"
                                    maxLength="1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.otp6}
                                    placeholder=""
                                    className="input w-full text-center"
                                />
                            </div>
                            
                            <button type="submit" className="btn mt-8" disabled={isSubmitting}>
                                Verify Email
                            </button>
                            <p className="w-full text-center mt-2">Can't find email? <Link href="/auth/signup"><span className="font-black text-primary">Resend Email</span></Link></p>
                            </form>
                        )}
                        </Formik>                        
                    </div>
                </div>
        </section>
    )
}

export default VerifyEmail
