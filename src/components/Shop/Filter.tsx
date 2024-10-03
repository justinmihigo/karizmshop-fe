import { FunctionComponent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { Star, AttachMoneyRounded } from '@mui/icons-material';

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
function valuetext(value: number) {
    return `${value} UGX`;
}

const minDistance = 10;

const Filter: FunctionComponent = () => {
    const [index, setIndex] = useState(0);
    const [value1, setValue1] = useState<number[]>([0, 100000]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    useEffect(() => {
        const timer =
            setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 5000)
        return () => clearInterval(timer);
    }, [slides.length])

    return (
        <>
            <div className='flex flex-col space-y-4 w-full mx-4 border-[1px] border-gray p-3 rounded-xl'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-bold'>Filters</h1>
                    <button className='px-3 py-2 text-secondary rounded-xl'>Clear All</button>
                </div>
                <hr />
                <div>
                    <div>
                        <h1 className='font-bold'>Price range</h1>
                        <div className='flex flex-row space-x-2 items-center justify-between py-4'>
                            <span className='flex flex-row items-center min-w-[30%] bg-[#E1E1E1] text-sm font-light p-2 pr-3 rounded-xl' contentEditable={false}><AttachMoneyRounded fontSize='small' /> {value1[0]}</span>
                            <p className='font-bold'>to</p>
                            <div className='relative w-[40%] '>
                                <AttachMoneyRounded fontSize='small' className='absolute top-[7px]' />
                                <input type="text" className='w-full pl-6 bg-[#F3F4F6] text-sm font-light p-2 rounded-xl' value={value1[1]} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 py-3'>
                        <Box sx={{ width: '100%' }}>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange1}
                                valueLabelDisplay='off'
                                max={1000000}
                                min={0}
                                step={1000}
                                size='medium'
                                className='text-secondary'
                                getAriaValueText={valuetext}
                                disableSwap
                            />
                        </Box>

                    </div>
                    <hr />
                    <div className='py-3'>
                        <h1 className='font-bold'>Categories</h1>
                        <div>
                            <form action="">
                                <div className='py-3 flex flex-col space-y-2'>
                                    <div className='flex flex-row space-x-4'><input type="checkbox" name="music" id="music" /> <label>Music</label></div>
                                    <div className='flex flex-row space-x-4'><input type="checkbox" name="music" id="music" /> <label>Fashion</label></div>
                                    <div className='flex flex-row space-x-4'><input type="checkbox" name="music" id="music" /> <label>Electronics</label></div>
                                    <div className='flex flex-row space-x-4'><input type="checkbox" name="music" id="music" /> <label>Merchandise</label></div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className=''>
                        <h1 className='font-bold'>Ratings</h1>
                        <div>
                            <form action="">
                                <div className='py-3 flex flex-col space-y-2'>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <input type="checkbox" name="music" id="5" />
                                        <label htmlFor='5'>
                                            <div>
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <input type="checkbox" name="music" id="4" />
                                        <label htmlFor='5'>
                                            <div>
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <input type="checkbox" name="music" id="3" />
                                        <label htmlFor='3'>
                                            <div>
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                            </div>
                                        </label>
                                    </div>
                                    <div className='flex flex-row items-center space-x-4'>
                                        <input type="checkbox" name="music" id="2" />
                                        <label htmlFor='5'>
                                            <div>
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#F3C63F' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                                <Star fontSize='small' htmlColor='#DEE1E6' />
                                            </div>
                                        </label>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className='py-3'>
                        <h1 className='font-bold'>Top Creatives</h1>
                        <div>
                            <form action="">
                                <div className='py-3 flex flex-col space-y-2'>
                                    <a href="http://">Justin</a>
                                    <a href="http://">Ambroise</a>
                                    <a href="http://">Kyebambe</a>
                                    <a href="http://">Jackson</a>
                                    <a href="http://">Karizm</a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Filter