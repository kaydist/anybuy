import Image from "next/image"

//components
import { Formik } from "formik";
import Modal from '../components/Modal'

//svg
import SuccessImage from "../assets/svgs/success.svg"
import EmptyUserImage from "../assets/icons/user.svg"
import ResetPassword from "../components/profile/ResetPassword";
import ShippingInfo from "../components/profile/ShippingInfo";
import ProfileInfo from "../components/profile/ProfileInfo";


function profile() {
    return (
        <>
        <div>
            <h2 className="text-4xl font-extrabold">Profile</h2>
            <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-8 justify-between mt-6">

                <section className="w-full lg:w-1/2">
                    <ProfileInfo />
                </section>

                <section className="w-full lg:w-1/2">

                <div class="flex w-full flex-col gap-8 items-center justify-center h-fit">

                    <div className="w-full card">
                        <ShippingInfo />
                    </div>

                    <div className="w-full">
                        <ResetPassword />
                    </div>

                </div>

                </section>

            </div>
        </div>

        {/* <Modal>
            <div className="card w-[92%] md:w-[32rem] flex flex-col items-center gap-8">
                <p className="w-full font-bold flex justify-end">X</p>
                <Image src={SuccessImage} alt="success" height="100" />
                <p className="font-bold text-2xl">Checkout Sucessful</p>
                <div className="flex w-full gap-4">
                    <button className="w-full underline-offset-4 underline">Continue Shopping</button>
                </div>
            </div>
        </Modal> */}

        </>
    )
}

export default profile
