import Image from "next/image";
import Link from "next/link"
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

//components
import { Formik } from "formik";

//icons
import FacebookIcon from "../../assets/svgs/Facebook-icon.svg"
import GoogleIcon from "../../assets/svgs/Google-icon.svg"
import { Login } from "../../store/actions/authActions";

const login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    
    return (
        <section className="flex justify-center items-center w-full h-fit min-h-[80vh]">
            <div className="card w-full lg:w-fit lg:px-14 lg:py-5">
                <div className="lg:w-[23rem] w-full">
                    <h1 className="font-black text-3xl">Sign In</h1>
                    <p>Welcome back</p>

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
                            } else if (
                            values.password !== "password"
                            ) {
                            errors.password = 'Invalid Password';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            dispatch(Login());
                            router.push("/");
                            setTimeout(() => {
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
                            
                            <button type="submit" className="btn mt-8" disabled={isSubmitting}>
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

export default login
