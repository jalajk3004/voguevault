"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  
  const ref = useRef();
  
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md bg-black    sticky top-0 z-10">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image width={200} height={40} src="/vouguevault.png" alt=""></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-5 font-bold md:text-md">
          <Link href={"/suits"}>
            <li>Suit</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5 cursor-pointer flex">
      <Link href={"/login"}><MdAccountCircle  className="text-xl md:text-2xl mx-2 " /></Link>
        <TiShoppingCart  onClick={toggleCart} className="text-xl md:text-2xl " />
      </div>

      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-gray-700 px-8 py-10 transform transition-transform ${Object.keys(cart).length===0?"translate-x-0" : 'translate-x-full'}`}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 text-2xl text-gray-900 cursor-pointer"><IoCloseCircleSharp /></span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-normal">No Items in the Cart. Please add few Items in the Cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="flex justify-center items-center w-1/3 text-lg">
                    <FaCircleMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-gray-900" />
                    <span className="mx-2"> {cart[k].qty} </span>
                    <FaPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="cursor-pointer text-gray-900" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex ">
          <Link href={"/checkout"}><button className="flex mr-2 text-white bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-900 rounded text-lg"><FaBagShopping className="m-1" />Checkout</button></Link>
          <button onClick={clearCart} className="flex  justify-center text-center py-2 px-0 text-white bg-gray-800 border-0 focus:outline-none hover:bg-gray-900 rounded text-lg">Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
