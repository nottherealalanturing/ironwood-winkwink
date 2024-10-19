'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { APPLOGO, BELLICON } from '../assets/icons';
import '../globals.css';
import bams from '../assets/images/bam.png';
import Sidebar from '../components/sidebar';
import { MdArrowDropDown, MdClose } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';
import MobileNav from '../components/Mobnav';
import ToastProvider from '../components/toastifywrapper';
import StoreProvider from '@/redux/provider/StoreProvider';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <html lang="en">
      <body className={`bg-white h-screen w-screen antialiased`}>
        <ToastProvider>
          <StoreProvider>
            {showNav && (
              <div className="flex flex-col items-center p-8 justify-center w-screen h-screen relative top-0 left-0 z-50">
                <div className="w-full flex items-center justify-end">
                  <button onClick={() => setShowNav(!showNav)}>
                    <MdClose />
                  </button>
                </div>
                <MobileNav showNav={showNav} setShowNav={setShowNav} />
              </div>
            )}
            <div className="flex flex-col items-start justify-start w-full h-full">
              <div className="hidden md:flex w-full justify-between items-center md:max-w-[1440px] mx-auto my-0 p-5">
                <APPLOGO />
                <div className="flex items-center justify-start py-2 gap-14">
                  <div className="p-4 h-4 flex items-center justify-center border-r-2 border-r-[#B1B2B2]">
                    <BELLICON />
                  </div>

                  <div className="flex items-center justify-start ">
                    <Image
                      alt="tesr"
                      src={bams}
                      className="inline-block h-6 w-6 rounded-full"
                      width={24}
                      height={24}
                    />
                    <div className="dropdown">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 bg-[#ffffff] border-none hover:bg-[#ffffff]"
                      >
                        <div className="flex flex-col items-start justify-start gap-0">
                          <p className="font-campton text-base font-bold leading-none">
                            Badmus Bamidele
                          </p>
                          <p className="font-campton text-base font-normal leading-none">
                            Admin Officer
                          </p>
                        </div>

                        <MdArrowDropDown color="#161718" />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                      >
                        <Link href="/">LOGOUT</Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden w-full justify-between items-center md:max-w-[1440px] mx-auto my-0 p-5">
                <APPLOGO />
                <button
                  onClick={() => {
                    setShowNav(!showNav);
                  }}
                >
                  <FaHamburger />
                </button>
              </div>

              <div className="flex items-start justify-start h-full w-full max-w-[1440px] mx-auto my-0">
                <div className="hidden md:block w-2/12 bg-white">
                  <Sidebar />
                </div>
                <div className="w-full md:w-10/12 h-full bg-[#f1f1f1] p-4">
                  {children}
                </div>
              </div>
            </div>
          </StoreProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
