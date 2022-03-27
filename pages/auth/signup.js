import React from 'react'
import Image from "next/image";
import Link from "next/link"

//components
import { Formik } from "formik";

//icons
import FacebookIcon from "../../assets/svgs/Facebook-icon.svg"
import GoogleIcon from "../../assets/svgs/Google-Icon.svg"

//firebase
import { AddToStore, createUserWithEmail } from '../../Config/firebase';

const signup = () => {
    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:py-5">
                <div className="lg:w-[23rem] w-full">
                    <h1 className="font-black text-3xl">Create Account</h1>
                    <p>Welcome to Anypay</p>

                    <div className="flex gap-2 my-8">
                        <div className="py-2 px-4 border-2 rounded-lg w-1/2 flex items-center gap-2">
                            <Image src={GoogleIcon} alt="" height="25" /> Google 
                        </div>
                        <div className="py-2 px-4 border-2 rounded-lg w-1/2 flex items-center gap-2">
                            <Image src={FacebookIcon} alt="" height="25"/>Facebook
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
                            if (!values.password) {
                                errors.password = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            const email = values.email
                            const password = values.password
                            createUserWithEmail(email, password)
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

                            <div className="flex mb-4 flex-col">
                                <p className="font-bold">Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="xxx@email.com"
                                    className="input"
                                />
                                <p className="text-red-600">{errors.email && touched.email && errors.email}</p>
                            </div>
                            <div className="flex mb-4 flex-col">
                                <p className="font-bold">Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="1234"
                                    className="input"
                                />
                                <p className="text-red-600">{errors.password && touched.password && errors.password}</p>
                            </div>
                            
                            <button type="submit" className="btn mt-8" disabled={isSubmitting}>
                                Continue
                            </button>
                            </form>
                        )}
                        </Formik>
                        
                        <p className="mt-4 mb-8 w-full text-center">Already Have An Account. <Link href="/auth/login"><span className="font-black text-primary">Sign In</span></Link></p>
                    </div>
                </div>
        </section>
    )
}

export default signup
