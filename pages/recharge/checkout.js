import Image from "next/image";
import React from "react";

//components
import Modal from "../../components/Modal";
import StripeCheckoutForm from "../../components/CheckoutForm";

//svg
import Arrow from "../../assets/icons/dropdown-arrow.svg";
import SuccessImage from "../../assets/svgs/success.svg";

//image
import RechargeReview from "../../components/cart/RechargeReview";
import needAuth from "../../routes/needAuth";

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

function RechargeCheckout() {
  const handleAccordion = (x) => {
    const allCards = document.querySelectorAll(".content");
    allCards.forEach((index) => {
      index.classList.remove("h-fit");
      index.classList.remove("opacity-1");
      index.classList.remove("mt-8");
      index.classList.add("h-0");
      index.classList.add("opacity-0");
    });
    const activeCard = document.getElementById(`content-${x}`);
    activeCard.classList.remove("h-0");
    activeCard.classList.remove("opacity-0");
    activeCard.classList.add("h-fit");
    activeCard.classList.add("opacity-1");
    activeCard.classList.add("mt-8");
  };

  return (
    <>
      <div>
        <h2 className="page_heading">Checkout</h2>
        <div className="flex flex-wrap gap-8 lg:gap-0 justify-between mt-6">
          <section className="w-full lg:w-[60%]">
            <div
              className="flex flex-col gap-8 items-center justify-center h-fit"
              id="accordion_container"
            >
              <div className="w-full card" id="2" data-accordion="02">
                <div
                  className="text-xl font-bold flex justify-between items-center mt-2"
                  onClick={() => handleAccordion(2)}
                >
                  <h2>Payment Method</h2>
                  <span>
                    <Image src={Arrow} alt="" height="10" />
                  </span>
                </div>

                <div className="h-fit opacity-1 mt-8 content" id="content-2">
                  <StripeCheckoutForm />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full lg:w-[35%]">
            <div className="card">
              <RechargeReview />
            </div>
          </section>
        </div>
      </div>

      <Modal>
        <div className="card flex flex-col items-center gap-8">
          <p className="w-full font-bold flex justify-end">X</p>
          <Image src={SuccessImage} alt="success" height="100" />
          <p className="font-bold text-2xl">Checkout Sucessful</p>
          <div className="flex w-full gap-4">
            <button className="w-full underline-offset-4 underline">
              Continue Shopping
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default needAuth(RechargeCheckout);
