import { CancelRounded } from '@mui/icons-material';
import { Rating } from '@mui/material';
import main from "../../assets/main.png";
import HSButton from '../../components/form/HSButton';

const WishlistCard = () => {
    return (
        <div className='w-full sm:w-[47%] flex flex-col sm:flex-row items-center gap-4 bg-[#F5F1F178] shadow-md p-4 rounded-xl'>
            <div className='w-full sm:w-[50%]'>
                <img src={main} className='w-full h-48 sm:h-auto object-cover rounded-lg' alt="main" />
            </div>
            <div className='w-full sm:w-[50%] mt-4 sm:mt-0'>
                <div className='flex flex-row justify-between items-center'>
                    <p className="font-bold text-sm sm:text-md">In Stock</p>
                    <p className="text-gray-500"><CancelRounded color='warning' /></p>
                </div>
                <div className='flex flex-col gap-y-2 sm:gap-y-4 mt-2'>
                    <p className="font-bold text-base sm:text-lg text-gray-400">Hisense smart tv 34</p>
                    <p className='flex flex-row items-center text-sm sm:text-base'>
                        4.7 &nbsp;<Rating value={4} size="small" />
                    </p>
                    <span className='text-base sm:text-lg font-bold text-secondary'>
                        $450 <s className='font-light text-gray-500 ml-2'>$500</s>
                    </span>
                    <HSButton styles='bg-secondary w-full sm:w-[60%] text-sm sm:text-base' title='Add to cart' />
                </div>
            </div>
        </div>
    )
}

export default WishlistCard;