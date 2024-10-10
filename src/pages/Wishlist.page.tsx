import WishlistCard from "../components/wishlist/wishlistCard"

const Wishlist = () => {
    return (
        <div>
            <div className='w-[80%] m-auto'>
                <div>
                    <h1 className="font-bold text-xl">My Wishlist &nbsp; <span className="text-gray-500">(6)</span> </h1>
                </div>
                <div className='py-5 flex flex-row justify-between gap-y-4 flex-wrap'>
                    {
                        [0,1,2,3,4,5,6,7,8,10].map((_)=>{
                            return(
                                <WishlistCard /> 
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )
}

export default Wishlist