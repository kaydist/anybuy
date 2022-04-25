import React from "react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Modal from "../Modal";
import { Formik } from "formik";

//svgs
import EmptyUserImage from "../../assets/icons/user.svg";
import { AddToProfileInfo } from "../../Config/firebase";

export const EditIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="edit">
        <path
          id="Vector"
          d="M11.4424 4.79883H4.44238C3.91195 4.79883 3.40324 5.00954 3.02817 5.38461C2.6531 5.75969 2.44238 6.2684 2.44238 6.79883V20.7988C2.44238 21.3293 2.6531 21.838 3.02817 22.213C3.40324 22.5881 3.91195 22.7988 4.44238 22.7988H18.4424C18.9728 22.7988 19.4815 22.5881 19.8566 22.213C20.2317 21.838 20.4424 21.3293 20.4424 20.7988V13.7988"
          stroke="#FF782D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M18.9424 3.29905C19.3402 2.90123 19.8798 2.67773 20.4424 2.67773C21.005 2.67773 21.5446 2.90123 21.9424 3.29905C22.3402 3.69688 22.5637 4.23645 22.5637 4.79905C22.5637 5.36166 22.3402 5.90123 21.9424 6.29905L12.4424 15.7991L8.44238 16.7991L9.44238 12.7991L18.9424 3.29905Z"
          stroke="#FF782D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const SaveIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="save" stroke="currentColor">
        <path
          id="Vector"
          d="M19.8398 21.8682H5.83984C5.30941 21.8682 4.8007 21.6574 4.42563 21.2824C4.05056 20.9073 3.83984 20.3986 3.83984 19.8682V5.86816C3.83984 5.33773 4.05056 4.82902 4.42563 4.45395C4.8007 4.07888 5.30941 3.86816 5.83984 3.86816H16.8398L21.8398 8.86816V19.8682C21.8398 20.3986 21.6291 20.9073 21.2541 21.2824C20.879 21.6574 20.3703 21.8682 19.8398 21.8682Z"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M17.8398 21.8682V13.8682H7.83984V21.8682"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M7.83984 3.86816V8.86816H15.8398"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export const UploadIcon = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="upload-cloud"
        clip-path="url(#clip0_703_4354)"
        stroke="currentColor"
      >
        <path
          id="Vector"
          d="M21.8796 21.3446L16.5462 16.0112L11.2129 21.3446"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M16.5459 16.0112V28.0112"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M27.7325 24.5314C29.033 23.8224 30.0603 22.7005 30.6523 21.3429C31.2444 19.9852 31.3675 18.469 31.0021 17.0336C30.6368 15.5982 29.8038 14.3254 28.6347 13.416C27.4657 12.5065 26.027 12.0123 24.5458 12.0114H22.8658C22.4623 10.4504 21.7101 9.00115 20.6658 7.7727C19.6215 6.54424 18.3123 5.56851 16.8366 4.91885C15.361 4.26919 13.7572 3.96252 12.146 4.02188C10.5348 4.08125 8.95794 4.50511 7.53408 5.26159C6.11023 6.01808 4.87639 7.08751 3.92534 8.38948C2.97429 9.69145 2.33077 11.1921 2.04315 12.7786C1.75554 14.365 1.83132 15.9961 2.2648 17.5491C2.69827 19.102 3.47817 20.5365 4.54585 21.7447"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M21.8796 21.3446L16.5462 16.0112L11.2129 21.3446"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_703_4354">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.545898 0.0112305)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="x">
        <path
          id="Vector"
          d="M18 6.91699L6 18.917"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6 6.91699L18 18.917"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

function ProfileInfo() {
  const [openModal, setOpenModal] = useState(false);
  const currentUser = useSelector((state) => state.auth);

  return (
    <>
      <div className="w-full card">
        <div className="text-xl font-bold flex justify-between items-center mt-2">
          <h2>Profile Info</h2>
          <span onClick={() => setOpenModal(!openModal)}>
            <EditIcon />
          </span>
        </div>

        <div className="flex flex-col gap-6 my-4 items-center justify-center">
          <div className="rounded-full relative w-20 h-20 bg-muted flex items-center justify-center">
            {currentUser.currentUser?.photoURL !== null ? (
              <Image
                src={currentUser.currentUser?.photoURL}
                alt=""
                height="100"
                width="100"
                objectFit="fill"
                className="rounded-full"
              />
            ) : (
              <Image
                src={EmptyUserImage}
                alt="No profile Picture"
                height="100"
              />
            )}
          </div>

          <div className="text-center">
            <p className="text-xl font-bold">
              {currentUser.currentUser?.displayName}
            </p>
            <p className="text-muted">{currentUser.currentUser?.email}</p>
            <p className="text-muted">{currentUser.currentUser?.phoneNumber}</p>
          </div>
        </div>
      </div>

      <Modal state={openModal} close={() => setOpenModal(!openModal)}>
        <div className="card w-[92%] md:w-[32rem] mx-auto">
          <div className="w-full font-bold text-2xl mb-8 flex justify-between">
            <span className="block">Edit Profile Info</span>
            <span className="block" onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </span>
          </div>
          <Formik
            initialValues={{
              displayName: currentUser?.currentUser?.displayName,
              email: currentUser?.currentUser?.email,
              phoneNumber: currentUser?.currentUser?.phoneNumber,
              photoURL: currentUser?.currentUser?.photoURL,
            }}
            validate={(values) => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              let userId = currentUser.currentUser.uid;
              AddToProfileInfo(values, userId);
              setOpenModal(!openModal);
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
                <div className="flex flex-col">
                  <div className="flex mb-4 flex-col w-full">
                    <label className="font-bold">Username</label>
                    <input
                      type="text"
                      name="displayName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.displayName}
                      placeholder="Display Name"
                      className="input"
                    />
                  </div>
                  <div className="flex mb-4 flex-col w-full">
                    <label className="font-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="johndoe@email.com"
                      className="input"
                    />
                    <p className="text-red-600">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="flex mb-4 flex-col w-full">
                    <label className="font-bold">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      placeholder="+234 000 0000"
                      className="input"
                    />
                  </div>
                  <div className="flex mb-4 flex-col w-full relative">
                    <label className="font-bold">Upload Profile Picture</label>
                    <div className="border-dashed border-2 input h-20 bottom-0 left-0 right-0 absolute flex items-center justify-center gap-2 text-muted">
                      <UploadIcon />
                      Upload
                    </div>
                    <input
                      type="file"
                      name="profilePIC"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.profilePIC}
                      placeholder="select a picture"
                      className="h-20 z-[51] opacity-0"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-end gap-4">
                  <button
                    type="submit"
                    className="btn mt-4 flex justify-center items-center gap-2"
                    disabled={isSubmitting}
                  >
                    <SaveIcon />
                    Save
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}

export default ProfileInfo;
