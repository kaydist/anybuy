import React from 'react'
import Image from "next/image"
import { useDispatch } from "react-redux";
import {logout} from "../store/actions/authActions"


//svg
import LogoutIcon from "../assets/icons/logout.svg"
import ResetPassword from "../components/profile/ResetPassword";
import ShippingInfo from "../components/profile/ShippingInfo";
import ProfileInfo from "../components/profile/ProfileInfo";
import { signingOut } from '../Config/firebase';
import needAuth from '../routes/needAuth';


function Profile() {
    const dispatch = useDispatch()

    return (
        <>
        <div>
            <div className="w-full my-6 flex justify-between items-center">
                <h2 className="page_heading">Profile</h2>
                <button 
                className="btn bg-[#434A51] font-extrabold h-[3rem]"
                onClick={()=>{
                    signingOut()
                    dispatch(logout())
                }}
                >
                    <Image src={LogoutIcon} alt="" height="100"/> Log Out
                </button>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-8 justify-between mt-6">

                <section className="w-full lg:w-1/2">
                    <ProfileInfo />
                </section>

                <section className="w-full lg:w-1/2">

                <div className="flex w-full flex-col gap-8 items-center justify-center h-fit">

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

export default needAuth(Profile)
