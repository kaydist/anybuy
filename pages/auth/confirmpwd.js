import React from 'react'
import Link from "next/link"

//components
import { Formik } from "formik";
import isAuthed from '../../routes/isAuthed';

function confirmpwd() {
    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:py-5">
                <div className="lg:w-[23rem] w-full">
                    <h1 className="font-black text-3xl mb-8">Confrim Password</h1>

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
                            <div className="flex mb-4 flex-col">
                                <p className="font-bold"> Confrim Password</p>
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

export default isAuthed(confirmpwd)
