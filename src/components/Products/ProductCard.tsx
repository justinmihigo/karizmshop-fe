import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import Add from "@mui/icons-material/Add";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
export interface ProductCard {
    name: string;
    type: string;
    price: string;
    image: string;
    description: string;
    rating: string;
    discount?: string;
    owner?: string;
    onClick?: Function;
}
const productCard = ({ name, type, price, image, description, discount, rating }: ProductCard) => {
    return (
        <>
            <div>
                <div className='shadow-md rounded-xl'>
                    {discount &&
                        <div className="relative"><p className="absolute bg-secondary rounded-full px-2 py-1 font-light text-sm text-white top-2 right-2">{discount} off</p></div>
                    }
                    <div className='w-full'>
                        <img src={image} alt={name} className="object-cover h-48 w-96 rounded-t-xl" />
                    </div>
                    <div className="flex flex-col space-y-2 py-3 mx-4">
                        <div className="flex flex-row justify-between items-center">
                            <Link to='/productDetails'className="font-bold">{name}</Link>
                            <button className="p-1 rounded-lg bg-[#F3F4F6]"><FavoriteBorderRounded htmlColor="black" /></button>
                        </div>
                        <div>
                            <p className="text-sm">Category: {type}</p>
                        </div>
                        <div>
                            <p className="text-[#00000060] text-[14px]">{description.slice(0,30)+'...'}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <span>Rating: {rating}</span> &nbsp;&nbsp;
                            <Rating value={Number(rating)}/>
                        </div>

                        <div className="flex flex-row justify-between items-center font-bold ">
                            <p className="text-secondary text-lg">{price}</p>
                            <s className="text-sm font-light">1100 UGX</s>
                            <button className="p-1 rounded-lg bg-[#1C4A93]"><Add htmlColor="white" /></button>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default productCard