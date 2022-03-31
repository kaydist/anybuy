import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

//components
import { Formik } from "formik";

//icons
import FacebookIcon from "../../assets/svgs/Facebook-icon.svg"
import GoogleIcon from "../../assets/svgs/Google-Icon.svg"
import { login } from "../../store/actions/authActions";

//firebase
import { signInWithEmail, SignInWithGoogle, SignInWithFacebook } from '../../Config/firebase';
import PopNotification from '../../components/PopNotification';
import isAuthed from '../../routes/isAuthed';

const Login = () => {
    const dispatch = useDispatch()

    
    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:py-5 lg:mt-8 relative"> 
                <PopNotification message="Your Email or Password is incorrect"/>

                <div className="lg:w-[23rem] w-full">
                    <h1 className="font-black text-3xl">Sign In</h1>
                    <p>Welcome back</p>

                    <div className="flex gap-2 my-8">

                        <label className="relative w-1/2 ">
                            <input 
                            type="radio" 
                            className="input absolute z-20 inset-0 w-full h-full opacity-0 recharge_form" name="login-type"
                            onClick={SignInWithGoogle}
                            />
                            <span className="checkmark input flex items-center gap-2 h-full mt-0">
                                <Image src={GoogleIcon} alt="" height="25" />
                                <p className="text-center">Google</p>
                            </span>
                        </label>
                        <label className="relative w-1/2 ">
                            <input 
                            type="radio" 
                            className="input absolute z-20 inset-0 w-full h-full opacity-0 recharge_form" name="login-type"
                            onClick={SignInWithFacebook}
                            />
                            <span className="checkmark input flex items-center gap-2 h-full mt-0">
                                <Image src={FacebookIcon} alt="" height="25" />
                                <p className="text-center">Facebook</p>
                            </span>
                        </label>
                        
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
                            signInWithEmail(email, password)
                            // router.push("/");
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
                                <Link href="/auth/forgetpwd">
                                    <p className="w-full text-center mt-2 font-black text-primary">
                                        {
                                            errors.password && touched.password && errors.password
                                            ? "Forgot Password"
                                            : ""
                                        }
                                    </p>
                                </Link>
                                
                            </div>
                            
                            <button type="submit" className="btn mt-8">
                                Continue
                            </button>
                            </form>
                        )}
                        </Formik>
                        
                        <p className="mt-4 mb-8 w-full text-center">New to Anybuy? <Link href="/auth/signup"><span className="font-black text-primary">Create Account</span></Link></p>
                    </div>
                </div>
        </section>
    )
}

export default isAuthed(Login)
