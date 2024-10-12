import React from 'react';
const CategoryOrder: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="w-full lg:w-1/2">
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-left border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-2">CATEGORY</th>
                <th className="px-4 py-2">PRODUCTS</th>
                <th className="px-4 py-2">TOTAL SALES</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">clothes</td>
                <td className="px-4 py-2">9500</td>
                <td className="px-4 py-2">950,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">groceries</td>
                <td className="px-4 py-2">8775</td>
                <td className="px-4 py-2">878,998</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">electronics</td>
                <td className="px-4 py-2">6778</td>
                <td className="px-4 py-2">99,879</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">cosmetics</td>
                <td className="px-4 py-2">4566</td>
                <td className="px-4 py-2">77,886</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-left border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-2">Order_Id</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">TOTAL TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">001</td>
                <td className="px-4 py-2">Ihaha Technologies</td>
                <td className="px-4 py-2">950,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">002</td>
                <td className="px-4 py-2">2000 Supermarket</td>
                <td className="px-4 py-2">875,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">003</td>
                <td className="px-4 py-2">Igingozo Supermarket</td>
                <td className="px-4 py-2">685,896</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2">004</td>
                <td className="px-4 py-2">Deluxe Baby Shop</td>
                <td className="px-4 py-2">525,630</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryOrder;
