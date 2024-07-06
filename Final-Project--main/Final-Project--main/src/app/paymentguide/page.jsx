import React from "react";
import { CiCreditCard2 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default async function PaymentGuide() {
  return (
    <div className=" grid grid-cols-3 pt-32">
      <div className="lg:col-span-2 col-span-30 space-y-8 px-12">
        <div className="mt-4 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
          <div className="flex  border-b sm:border-b-0">
            <div className="text-sm font-medium ml-3">Checkout</div>
          </div>
          <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
            Complete your shipping and payment details below.
          </div>
          <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"></div>
        </div>
        <div className="rounded-md">
          <form id="payment-form" method="POST" action="">
            <section>
              <div className="flex items-center">
                <IoIosInformationCircleOutline className="text-2xl text-orange-400" />
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 m-2">
                  Personal Information
                </h2>
              </div>
              <fieldset className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                <div className="m-3">
                  <div className="">
                    <label className="text-gray-600 font-semibold text-sm ml-1 ">
                      Full name
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  bg-slate-50"
                        placeholder="insert your name here"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  bg-slate-50"
                        placeholder="try@example.com"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  bg-slate-50"
                        placeholder="+55 9999-9999"
                        type="number"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="m-3">
                  <label className="text-gray-600 font-semibold text-sm  ml-1">
                    Country
                  </label>
                  <div className=" w-1/4">
                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  cursor-pointer bg-slate-50  mt-2">
                      <option>Australia</option>
                      <option>Belgium</option>
                      <option>Brazil</option>
                      <option>Canada</option>
                      <option>China</option>
                      <option>Denmark</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Hong Kong</option>
                      <option>Ireland</option>
                      <option>Italy</option>
                      <option>Japan</option>
                      <option>Luxembourg</option>
                      <option>Mexico</option>
                      <option>Netherlands</option>
                      <option>Poland</option>
                      <option selected="selected">Portugal</option>
                      <option>Singapore</option>
                      <option>Spain</option>
                      <option>Tunisia</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </section>
          </form>
        </div>
        <div className="rounded-md">
          <div className="flex items-center">
            <CiCreditCard2 className="text-2xl text-orange-400 " />
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 m-2">
              Payment Information
            </h2>
          </div>
          <p className="text-gray-500 text-sm">
            Please enter the information completely in order for the payment to
            be made.
          </p>
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            <div className="w-full p-3 border-b border-gray-200">
              <div className="mb-5">
                <label
                  for="type1"
                  className="flex items-center cursor-pointer"
                />
                <input
                  type="radio"
                  className="form-radio h-5 w-5"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-6 ml-3"
                />
                <label />
              </div>
              <div>
                <div className="mb-3">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Name on card
                  </label>
                  <div className="mt-2">
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  bg-slate-50"
                      placeholder="Mano Brown"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Card number
                  </label>
                  <div className="mt-2">
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none bg-slate-50"
                      placeholder="1234  - - - -  - - - -  - - - -"
                      type="number"
                    />
                  </div>
                </div>
                <div className="mb-3 -mx-2 flex items-end">
                  <div className="px-2 w-1/4 ">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Expiration date
                    </label>
                    <div className="mt-2">
                      <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  cursor-pointer bg-slate-50">
                        <option>01 - January</option>
                        <option>02 - February</option>
                        <option>03 - March</option>
                        <option>04 - April</option>
                        <option>05 - May</option>
                        <option>06 - June</option>
                        <option>07 - July</option>
                        <option>08 - August</option>
                        <option>09 - September</option>
                        <option>10 - October</option>
                        <option>11 - November</option>
                        <option>12 - December</option>
                      </select>
                    </div>
                  </div>
                  <div className="px-2 w-1/4">
                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  cursor-pointer bg-slate-50">
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                    </select>
                  </div>
                  <div className="px-2 w-1/4">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1 ">
                      Security code
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none bg-slate-50"
                        placeholder=" - - - "
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/paymentdone">
              <button className="block w-full max-w-xs mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-orange-600 text-white rounded-lg px-3 py-2 font-semibold">
                <i className="mdi mdi-lock-outline mr-1"></i> Check-Out
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* modified */}
      <div className=" bg-sky-50 lg:block hidden mt-4 rounded-xl mr-10 h-1/2 ">
        <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
          Order Summary
          <div className="flex justify-between mt-3">
            <div className=" w-1/2 ">
              <Image
                src="/user-5.jpg"
                alt="picture-profile"
                className="rounded-md"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-between">
              <p className="font-semibold ">Steve T. Scaife</p>
            </div>
          </div>
        </h1>

        <div className=" outline-dashed text-gray-400"></div>
        <div className=" text-xl px-8 flex flex-col justify-between p-5 m-5 h-36 rounded-md bg-sky-100 text-gray-600 ">
          <p className="flex justify-between text-gray-400">
            Order Number
            <span className="text-gray-600 font-semibold"> 123456789</span>
          </p>
          <p className="flex justify-between text-gray-400">
            IVA <span className="text-gray-600 font-semibold"> 23%</span>
          </p>
          <p className="flex justify-between text-gray-400">
            Total
            <span className="text-gray-600 font-semibold">30 € </span>
          </p>
        </div>
        <div className="flex justify-between mt-12 ">
          <div className="pl-10">
            <p className="items-center text-gray-400">Total</p>
            <p className="font-semibold text-2xl"> 30 €</p>
          </div>
          <div className="text-5xl text-gray-400 pr-6 ">
            <BiSolidReport />
          </div>
        </div>
      </div>
    </div>
  );
}
