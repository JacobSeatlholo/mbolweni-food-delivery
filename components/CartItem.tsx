import { Dish } from "@/types/shops";
import React from "react";

const CartItem = ({title, img, price}: Dish) => {
  return (
    <div className="rounded-lg relative">
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={img}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="ml-4 flex w-full justify-between items-center">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {title}
            </h2>
            <p className="mt-1 text-ml text-gray-700">{price}</p>
          </div>
          <div className="mt-4 flex justify-between gap-6 ">
            <div className="flex items-center border-gray-100 align-center">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">-
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value="2"
                min="1"
              />
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                +
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">259</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 absolute top-2 right-2 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
