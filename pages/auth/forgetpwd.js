import React from 'react'
import Image from "next/image";
import { useRouter } from "next/router";

//components
import { Formik } from "formik";

//icons
import ForgetPasswordIcon from "../../assets/svgs/forgetpassword.svg"
import isAuthed from '../../routes/isAuthed';

const ForgetPassword = () => {
    const router = useRouter()

    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:pt-5">
                <div className="lg:w-[23rem] w-full flex flex-col gap-8 px-4 pb-8">

                    <div className="relative h-48 w-1/2">
                        <Image src={ForgetPasswordIcon} alt="" layout="fill" />
                    </div>

                    <h1 className="font-black text-3xl">Forgot your Password</h1>
                    <p>Enter your email to reset your password</p>

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
                            setSubmitting(false);
                            }, 400);
                            router.push("/auth/verifyemail")
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
                            
                            <button type="submit" className="btn mt-8" disabled={isSubmitting}>
                                Continue
                            </button>
                            </form>
                        )}
                        </Formik>
                        
                    </div>
                </div>
        </section>
    )
}

export default isAuthed(ForgetPassword)
