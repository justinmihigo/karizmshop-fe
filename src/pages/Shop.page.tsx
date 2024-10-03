import ProductCard from "../components/Products/ProductCard"
import Filter from "../components/Shop/Filter"


const Shop = () => {
  return (
    <>
      <div>
        <div className="flex flex-row">
        <Filter />
        <div className="w-[20%]">
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

    </>
  )
}

export default Shop