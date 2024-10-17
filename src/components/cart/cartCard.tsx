import React from 'react';
import main from "../../assets/main.png";

const sizes = ['L', 'M', 'S'];
const colors = ['bg-gray-300', 'bg-gray-400'];

const CartCard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 py-5">
        <div className="w-full sm:w-[200px] h-[200px] sm:h-auto">
          <img src={main} alt="main" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-bold">Bike</h2>
            <a href="#" className="text-secondary font-bold">Remove</a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4 sm:gap-y-0">
            <div className='w-full sm:w-auto'>
              <span className="block mb-2">Size</span>
              <div className='flex flex-row items-center'>
                {sizes.map((size, index) => (
                  <span key={index}
                    className={`p-2 px-3 sm:px-5 text-sm sm:text-base
                      ${index === 0 ? 'bg-secondary text-white' : 'bg-gray-200 text-secondary'} 
                      ${index === 0 ? 'rounded-l-xl' : index === sizes.length - 1 ? 'rounded-r-xl' : ''} 
                      ${index == 1 ? 'border-r-2 border-secondary' : ''}
                      border-t-2 border-b-2 border-secondary ${index === 0 ? 'border-l-2' : index === sizes.length - 1 ? 'border-r-2' : ''}`}>
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className='w-full sm:w-auto'>
              <span className="block mb-2">Color</span>
              <div className='flex flex-row items-center gap-x-3'>
                {colors.map((color, index) => (
                  <div key={index} className={`h-7 w-7 sm:h-9 sm:w-9 ${color} rounded-full ${index === 0 ? 'border-2 border-secondary' : ''}`} />
                ))}
              </div>
            </div>
            <div className='w-full sm:w-auto'>
              <span className="block mb-2">Quantity</span>
              <div className='flex flex-row items-center gap-x-3'>
                <button className='border-2 font-light p-1 sm:p-2 px-2 sm:px-3 text-secondary rounded-xl bg-gray-200'>+</button>
                <span className='border-2 font-light p-1 sm:p-2 px-2 sm:px-3 text-secondary rounded-xl bg-gray-200' contentEditable={true}>0</span>
                <button className='border-2 font-light p-1 sm:p-2 px-2 sm:px-3 text-secondary rounded-xl bg-gray-200'>-</button>
              </div>
            </div>
            <div className='w-full sm:w-auto text-right sm:text-left'>
              <span className="font-bold text-xl">$59.99</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default CartCard;