import React from 'react'

const Footer: React.FunctionComponent = () => {
    return (
        <>
            <div className='w-full bg-gray-900 p-4 relative bottom-0 text-white'>
                <div className='flex flex-row justify-around pb-4'>
                    <div className='flex flex-col gap-y-3 text-white'>
                        <h1 className="text-white text-2xl font-bold">Karizm-shops</h1>
                        <p>Address: Kenneth Dale Drive, Plot 25, Kamwokya</p>
                        <p>Email: ticketing@karizm.com</p>
                        <p>Phone: +256765587225</p>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className="text-white text-2xl font-bold">Socials</h1>
                        <a href="#" tabIndex={1} className="hover:text-orange visited:text-blue">Facebook</a>
                        <a href="#" tabIndex={2} className="hover:text-orange visited:text-blue">Instagram</a>
                        <a href="#" tabIndex={3} className="hover:text-orange visited:text-blue">Twitter</a>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className="text-white text-2xl font-bold">Other related links</h1>
                        <a href="#" tabIndex={4} className="hover:text-orange visited:text-blue">Contact Us</a>
                        <a href="#" tabIndex={5} className="hover:text-orange visited:text-blue">Help</a>
                    </div>
                </div>
                <div className='container mx-auto flex justify-between items-center'>
                    <p className='text-white'>�� 2023 Karizm-shops. All rights reserved.</p>
                    <ul className='flex space-x-10'>
                        <li><a href="#" tabIndex={1} className="hover:text-orange visited:text-blue">Privacy Policy</a></li>
                        <li><a href="#" tabIndex={2} className="hover:text-orange visited:text-blue">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer