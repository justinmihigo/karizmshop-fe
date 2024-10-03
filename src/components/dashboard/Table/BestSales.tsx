import { MdDelete ,MdModeEdit} from "react-icons/md";

const products = [
    {
      id: 142,
      image: "https://deploy.rwandamart.rw/wp-content/uploads/2022/11/Hisense-TV-.jpg",
      name: "Hisense 43 inch 4K Smart TV",
      category: "TVs & Accessories",
      price: "450,000",
      artist: "Ihaha Technologies",
      orders: 450,
    },
    {
      id: 143,
      image: "https://images.pexels.com/photos/12718842/pexels-photo-12718842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "LG TOP Load Washers Silver 8 KGS Vietnam",
      category: "Kitchen Appliances",
      price: "210,000",
      artist: "Supermarket",
      orders: 397,
    },
    {
      id: 144,
      image: "https://images.pexels.com/photos/12718842/pexels-photo-12718842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Crystal Sunflower Oil /5l",
      category: "Groceries",
      price: "42,000",
      artist: "Igingozo Supermarket",
      orders: 385,
    },
    {
      id: 145,
      image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Diaper – Evybaby econ No 3 With 24pieces",
      category: "Baby Products",
      price: "9,000",
      artist: "Deluxe Baby Shop",
      orders: 324,
    },
    {
      id: 146,
      image: "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Gladiator Round Toe Lace-up Stiletto Sandals",
      category: "Women, Shoes",
      price: "60,000",
      artist: "Top Fashion Boutique",
      orders: 270,
    },
  ];

function BestSales() {
    return (
      <section className=" mx-auto p-6 font-mono">
        <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Artist</th>
                  <th className="px-4 py-3">Orders</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products.map((product) => (
                  <tr className="text-gray-700" key={product.id}>
                    <td className="px-4 py-3 border-b">{product.id}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center">
                        <img
                          className="w-16 h-16 object-cover rounded-md"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b">{product.name}</td>
                    <td className="px-4 py-3 border-b">{product.category}</td>
                    <td className="px-4 py-3 border-b">{product.price}</td>
                    <td className="px-4 py-3 border-b">{product.artist}</td>
                    <td className="px-4 py-3 border-b">{product.orders}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#000] hover:text-[#000] text-[20px] cursor-pointer">
                                <MdModeEdit/>
                        </button>
                        <button className="text-red-500 hover:text-red-700 cursor-pointer">
                              <MdDelete className="text-red font-bold text-[20px]"/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  

  
  export default BestSales;
  