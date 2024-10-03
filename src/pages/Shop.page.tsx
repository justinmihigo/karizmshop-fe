import { useEffect, useState } from "react"
import ProductCard from "../components/Products/ProductCard"

import Filter from "../components/Shop/Filter"
import { SearchRounded, ArrowRightAltOutlined } from "@mui/icons-material"

const slides = [{
  id: 1,
  title: 'New Arrivals',
  description: 'Discover the latest products',
  image: 'src/assets/recommended.png',
},
{
  id: 2,
  title: 'Best Sellers',
  description: 'Check out the most popular products',
  image: 'src/assets/recommended.png',
}, {
  id: 3,
  title: 'Exclusive Offers',
  description: 'Get the best deals',
  image: 'src/assets/recommended.png',
}
]
const Shop = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer =
        setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000)
    return () => clearInterval(timer);
}, [slides.length])
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="mx-5 my-3">
          <p className="text-gray-500">Home &gt; <span className="font-medium text-text">Shop</span></p>
        </div>

        <div className="flex flex-row">
          <Filter />
          <div className="w-[100%] mx-5">
            <div className="flex flex-row items-center justify-between pb-10">
              <div className="w-full">
                <SearchRounded className="relative left-[40px]" htmlColor="gray" />
                <input type="text" placeholder="Search ..." className=" w-[90%] p-2 rounded-xl bg-gray-200 placeholder:p-10 focus:px-10 " />
              </div>
              <div>
                <a href="#" role="button" className="bg-secondary text-white rounded-xl p-2 px-4">Search</a>
              </div>
            </div>
            <div className="flex flex-row justify-between pb-5">
              <div className="flex flex-row items-center gap-x-4">
                <h2 className="font-bold text-l">Products Results</h2><span className="text-sm text-gray-500">100 products</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Sort by &nbsp; &nbsp;</span>
                <select className="outline-none text-secondary">
                  <option value="0">Latest</option>
                  <option value="1">Lowest Price</option>
                  <option value="2">Highest Price</option>
                </select>
              </div>

            </div>
            <div className="flex flex-row gap-y-5 justify-between flex-wrap">
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>
              <div className="w-[30%]">
                <ProductCard
                  name="Apple watch"
                  type="Electronics"
                  price="1000 UGX"
                  image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                  description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                  rating="4.5"
                  discount="10%"
                />
              </div>

            </div>
          </div>
        </div>
        <section className="flex flex-row items-center gap-x-10 m-10">
        <div className="flex-initial w-[30%]">
                    <h1 className='font-bold py-2'>Recommended Products</h1>
                    {slides.map((slide, i) => {
                        return (
                            <div key={slide.id} className={`transition-display duration-1000 ${i === index ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <div className='page'>
                                    <img src={slide.image} />
                                    <div className='flex flex-col gap-y-2 text-center'>
                                        <p className='font-bold text-center pt-2'>{slide.title}</p>
                                        <p className='font-light text-sm text-center'> {slide.description} </p>
                                        <button className='align-center p-3 rounded-md bg-[#1C4A93] text-white'>Discover Now</button>
                                    </div>
                                </div>
                            </div>)
                    })}
                    <div className="flex justify-center mt-4">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full mx-1 ${i === index ? 'bg-secondary' : 'bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
          <div className="whitespace-nowrap overflow-hidden">
            <div className="inline-block w-[60%] pr-4">
              <div className="bg-[#B9E5FF50] flex flex-row justify-between p-4 rounded-xl">
                <div className="flex flex-col gap-y-4 pl-4">
                  <span className="text-secondary">New product</span>
                  <p className="font-bold w-[55%]">African Extracts Roobios beaty</p>
                  <p>Use It Every Day</p>
                  <a role="button" href="#" className="w-[60%] border-[1px] bg-white rounded-full p-2 px-3">Shop Now <ArrowRightAltOutlined /> </a>
                </div>
                <div className="w-[300px] h-[200px] bg-white" />
              </div>
            </div>
            <div className="inline-block w-[60%]">
              <div className="bg-[#B9E5FF50] flex flex-row justify-between p-4 rounded-xl">
                <div className="flex flex-col gap-y-4 pl-4">
                  <span className="text-secondary">New product</span>
                  <p className="font-bold w-[55%]">African Extracts Roobios beaty</p>
                  <p>Use It Every Day</p>
                  <a role="button" href="#" className="w-[60%] border-[1px] bg-white rounded-full p-2 px-3">Shop Now <ArrowRightAltOutlined /> </a>
                </div>
                <div className="w-[300px] h-[200px] bg-white" />
              </div>
            </div>
            <div className="inline-block w-[60%]">
              <div className="bg-[#B9E5FF50] flex flex-row justify-between p-4 rounded-xl">
                <div className="flex flex-col gap-y-4 pl-4">
                  <span className="text-secondary">New product</span>
                  <p className="font-bold w-[55%]">African Extracts Roobios beaty</p>
                  <p>Use It Every Day</p>
                  <a role="button" href="#" className="w-[60%] border-[1px] bg-white rounded-full p-2 px-3">Shop Now <ArrowRightAltOutlined /> </a>
                </div>
                <div className="w-[300px] h-[200px] bg-white" />
              </div>
            </div>
          </div>
        </section>
        <section className="m-10">
          <div className="flex flex-row justify-between pb-5">
            <div className="flex flex-row items-center gap-x-4">
              <h2 className="font-bold text-l">Products Results</h2><span className="text-sm text-gray-500">Do not miss the current offers until the end of March.</span>
            </div>
            <div>
              <a href="#" className="border-2 border-secondary text-secondary rounded-xl p-2 text-sm text-gray-500">View All &gt;</a>
            </div>
          </div>
          <div className="flex flex-row gap-y-5 justify-between flex-wrap">
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
          </div>
        </section>
        <section className="m-10">
          <div className="flex flex-row justify-between pb-5">
            <div className="flex flex-row items-center gap-x-4">
              <h2 className="font-bold text-l">Best Sellers</h2><span className="text-sm text-gray-500">Dont miss this opportunity at a special discount just for this week.</span>
            </div>
            <div>
              <a href="#" className="border-2 border-secondary text-secondary rounded-xl p-2 text-sm text-gray-500">View All &gt;</a>
            </div>
          </div>
          <div className="flex flex-row gap-y-5 justify-between flex-wrap">
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
            <div className="w-[23%]">
              <ProductCard
                name="Apple watch"
                type="Electronics"
                price="1000 UGX"
                image="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus."
                rating="4.5"
                discount="10%"
              />
            </div>
          </div>
        </section>
        <section className="m-10">
          <div className="flex flex-row justify-around">
            <div className="w-[15%]">
              <div>
                <h2 className="font-bold text-l py-2">Most Popular</h2>
                <hr className="border-[2px] w-[40%] border-secondary" />
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <div>
                <h2 className="font-bold text-l py-2">Recent Products</h2>
                <hr className="border-[2px] w-[40%] border-secondary" />
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
            </div>
            <div className="w-[15%]">
              <div>
                <h2 className="font-bold text-l py-2">Most Selling</h2>
                <hr className="border-[2px] w-[40%] border-secondary" />
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="w-[60px] h-[60px] object-contain">
                  <img src="https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-silver-220907_inline.jpg.large.jpg" alt="watch" />
                </div>
                <div>
                  <p>Apple watch</p>
                  <p className="text-secondary py-2">$49.00 <s className="font-light text-sm">$60.00</s></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Shop
