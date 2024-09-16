import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value} UGX`;
}

const minDistance = 10;

// function MinimumDistanceSlider() {
//     const [value1, setValue1] = useState<number[]>([0, 100000]);

//     const handleChange1 = (
//         event: Event,
//         newValue: number | number[],
//         activeThumb: number,
//     ) => {
//         if (!Array.isArray(newValue)) {
//             return;
//         }

//         if (activeThumb === 0) {
//             setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//         } else {
//             setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
//         }
//     };

// const [value2, setValue2] = useState<number[]>([20, 37]);

// const handleChange2 = (
//     event: Event,
//     newValue: number | number[],
//     activeThumb: number,
// ) => {
//     if (!Array.isArray(newValue)) {
//         return;
//     }

//     if (newValue[1] - newValue[0] < minDistance) {
//         if (activeThumb === 0) {
//             const clamped = Math.min(newValue[0], 100 - minDistance);
//             setValue2([clamped, clamped + minDistance]);
//         } else {
//             const clamped = Math.max(newValue[1], minDistance);
//             setValue2([clamped - minDistance, clamped]);
//         }
//     } else {
//         setValue2(newValue as number[]);
//     }
// };

//     return (
//         <Box sx={{ width: 300 }}>
//             <Slider
//                 getAriaLabel={() => 'Minimum distance'}
//                 value={value1}
//                 onChange={handleChange1}
//                 valueLabelDisplay='off'
//                 getAriaValueText={valuetext}
//                 disableSwap
//             />
//         </Box>
//     );
// }

const Filter: FunctionComponent = () => {
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

    return (
        <>
            <div className='flex flex-col space-y-4 w-[18%] mx-4 border-[1px] border-gray p-3 rounded-xl'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-bold'>Filters</h1>
                    <button className='px-3 py-2 bg-orange text-white rounded-xl'>Clear</button>
                </div>
                <hr />
                <div>
                    <div>
                        <h1 className='font-bold'>Price range</h1>
                        <div className='flex flex-row space-x-4 items-center justify-between py-4'>
                            <input type="text" className='max-w-[30%] bg-[#34528360] p-2 rounded-xl' value={value1[0]} readOnly />
                            <p className='font-bold'>to</p>
                            <input type="text" className='max-w-[40%] bg-[#34528360] p-2 rounded-xl' value={value1[1]} readOnly />
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
                                color='success'
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
                    <hr/>
                    <div className=''>
                        <h1 className='font-bold'>Ratings</h1>
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
                    <hr/>
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
                <></>
            </div>
        </>
    )
}

export default Filter