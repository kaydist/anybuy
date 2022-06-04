import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

//components
import HeaderSearch from "./Header-search";
import Notification from "./Notification";

//images
import MenuBar from "../assets/icons/Menu Bar.svg";
import Logo from "../assets/svgs/Logo.svg";

//svgs
import EmptyUserImage from "../assets/icons/user.svg";
import CartIcon from "../assets/icons/shopping-bag.svg";
import { OpenSearch } from "../animations/search-animation";
import { openSideNav } from "../animations/sideNav-animation";

export const SearchIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="search" opacity="0.9">
        <path
          id="Vector"
          d="M11.1567 19.5513C15.575 19.5513 19.1567 15.9695 19.1567 11.5513C19.1567 7.13299 15.575 3.55127 11.1567 3.55127C6.73846 3.55127 3.15674 7.13299 3.15674 11.5513C3.15674 15.9695 6.73846 19.5513 11.1567 19.5513Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M21.1566 21.5513L16.8066 17.2013"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

function Nav() {
  const [searchState, setSearchState] = useState(false);
  const AuthState = useSelector((state) => state.auth);
  const CartCount = useSelector((state) => state.cart);

  const router = useRouter();
  const NavChange = (idx, url) => {
    const AllLinks = document.querySelectorAll(".Nav-links");
    AllLinks.forEach((link) => {
      link.classList.remove("before:w-full");
      link.classList.add("before:w-0");
    });
    router.push(`${url}`);
  };

  return (
    <header className="mx-auto my-0 flex justify-between items-center p-4 lg:px-44 lg:py-4 bg-white max-w-[109.2rem] z-40 fixed w-screen h-20">
      {/* <Notification message="Filters applied" /> */}

      <div className="flex gap-4 items-center">
        <div onClick={openSideNav} className="inline-block lg:hidden z-50">
          <Image src={MenuBar} alt="Menu" />
        </div>
        <div id="Nav-logo">
          <Image src={Logo} alt="AnyBuy" />
        </div>
      </div>

      <nav className="hidden lg:inline-block">
        <ul>
          {[
            ["Home", "/", "0"],
            ["Shop", "/category/all-products", "1"],
            ["Recharge", "/recharge", "2"],
            ["Contact", "/contact", "3"],
          ].map(([title, url, idx]) => (
            <a>
              <li
                key={idx}
                className="nav-links relative inline-block mx-9 font-bold text-sm before:border-b-4 before:border-b-primary before:rounded before:block before:absolute before:-bottom-1 before:content-['']  before:w-0 hover:before:w-1/2 hover:transition-width"
                onClick={() => {
                  NavChange(idx, url);
                }}
              >
                {title}
              </li>
            </a>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:hidden items-end justify-end" id="Nav-Search">
        <HeaderSearch isOpen={searchState} />
      </div>

      {AuthState.currentUser === null ? (
        <div>
          <ul>
            <Link href="/auth/login" passHref>
              <a>
                <li className="relative inline-block mx-9 font-bold text-sm">
                  Sign In
                </li>
              </a>
            </Link>

            <Link href="/auth/signup" passHref>
              <a>
                <li className="hidden lg:inline-block ml-9">
                  <button className="px-8 py-3 btn font-bold text-sm">
                    Create Account
                  </button>
                </li>
              </a>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="inline-block">
          <ul className="flex">
            <li className="relative flex justify-end items-center gap-4 lg:mx-9 font-bold text-sm">
              <div
                className="lg:hidden rounded-full h-6 w-6 flex items-center justify-center"
                id="Nav-Search-Icon"
                onClick={() => {
                  OpenSearch;
                  setSearchState(true);
                }}
              >
                <SearchIcon />
              </div>

              <Link href="/profile" passHref>
                <a>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-muted h-6 w-6 flex items-center justify-center p-0 relative">
                      {AuthState.currentUser?.photoURL !== null ? (
                        <Image
                          src={AuthState.currentUser?.photoURL}
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
                    </span>
                    <span className="hidden lg:inline">Profile</span>
                  </div>
                </a>
              </Link>
            </li>

            <Link href="/cart" passHref>
              <a>
                <li className="relative hidden lg:flex items-center gap-2 mx-9 font-bold text-sm">
                  <div className="h-6 w-6 flex items-center justify-center relative">
                    <Image src={CartIcon} alt="" height="100" />
                    {CartCount.cart.length > 0 ? (
                      <div className="absolute -right-2 -top-2 text-body-bg text-xs bg-red-600 rounded-full w-4 h-4 flex justify-center">
                        {CartCount.cart.length}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  Cart
                </li>
              </a>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Nav;
