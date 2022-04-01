import React, {useRef, useState} from 'react'
import { gsap } from 'gsap';
import { Formik } from "formik";
import { resetPassword } from '../../Config/firebase';

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




function ResetPassword() {
    const [isOpen, setisOpen] = useState(false)

    const ResetPasswordButton = useRef(null)
    const q = gsap.utils.selector(ResetPasswordButton)
    const tIn = useRef()

    const openDropdown=()=>{        
        setisOpen(true)
        tIn.current = gsap.timeline()
        .fromTo(ResetPasswordButton.current, {height: "0%", opacity: 0}, {height: "100%", opacity: 1, duration: 1, ease: "expo.out"})
        .fromTo(q("form"), {height: "0%", opacity: 0}, {height: "100%", opacity: 1, duration: 1, ease: "expo.out"}, "<")
    }

    const closeDropdown=()=>{
        tIn.current = gsap.timeline()
        .to(ResetPasswordButton.current, {height: "0%", opacity: 0, duration: 1, ease: "expo.out"}, "<20%")
        setisOpen(false)
    }

    return (
        <>
            <button 
            className="w-full card text-primary font-bold text-2xl text-center"
            onClick={ isOpen === false ? openDropdown : closeDropdown}>
                Reset Password
            </button>

            <div className="card w-full mt-6 px-10 opacity-0 reset-password-dropdown" 
            ref={ResetPasswordButton}>
            <h2 className="text-xl font-bold mb-6">Reset Password</h2>
            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.password) {
                    errors.password = 'Required';
                    } else if (values.password.length < 7 ){
                        errors.confirmPassword = 'Too Weak'
                    }
                    if (!values.confirmPassword){
                        errors.confirmPassword = 'Required';
                    } else if (values.password !== values.confirmPassword ){
                        errors.confirmPassword = 'Passwords Mismatch'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let newPassword = values.password
                    resetPassword(newPassword)
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
                    <form onSubmit={handleSubmit} className="flex-col flex">

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
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder="1234"
                            className="input"
                        />
                        <p className="text-red-600">{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
                    </div>
                    
                    <div className="w-full flex justify-end">
                        <button type="submit" className="btn mt-8 flex justify-center items-center gap-2" disabled={isSubmitting}>
                            <SaveIcon />Save
                        </button>
                    </div>  
                    </form>
                )}
                </Formik>
            </div>

            
        </>
    )
}

export default ResetPassword
