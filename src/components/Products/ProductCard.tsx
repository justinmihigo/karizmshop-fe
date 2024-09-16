// import AddCircle from "@mui/icons-material/AddCircle";
// import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import Add from "@mui/icons-material/Add";

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
const productCard = ({ name, type, price, image, description, discount, rating, owner, onClick }: ProductCard) => {
    return (
        <>
            <div>
                <div className='bg-[#45982960] rounded-xl'>
                    {discount &&
                        <div className="relative"><p className="absolute bg-red rounded-full px-2 py-1 font-light text-sm text-white top-2 right-2">{discount} off</p></div>
                    }
                    <div className='w-full'>
                        <img src={image} alt={name} className="object-cover h-48 w-96 rounded-t-xl" />
                    </div>
                    <div className="flex flex-col space-y-2 py-3 mx-4">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className="font-bold">{name}</h2>
                            <button className="p-1 rounded-lg bg-[#23049950]"><FavoriteBorderRounded color='primary' /></button>
                        </div>
                        <div>
                            <p className="text-sm">Category: {type}</p>
                        </div>
                        <div>
                            <p className="text-[#00000060]">{description}</p>
                        </div>
                        <div>
                            <p>Rating: {rating}</p>
                        </div>

                        <div className="flex flex-row justify-between items-center font-bold ">
                            <p className="text-red text-lg">{price}</p>
                            <s className="text-sm font-light">1100 UGX</s>
                            <button className="p-1 rounded-lg bg-[#23049950]"><Add color='primary' /></button>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default productCard