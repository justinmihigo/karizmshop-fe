import React from 'react'

const Navbar: React.FunctionComponent = () => {
    return (
        <>
            <div>
                <header className="text-white p-4">
                    <nav className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-orange">Karizm-shops</h1>
                        <ul className="flex space-x-10">
                            <li><a href="#" tabIndex={1} className="hover:text-orange visited:text-blue">Home</a></li>
                            <li><a href="#" tabIndex={2} className="hover:text-orange visited:text-blue">Shop</a></li>
                            <li><a href="#" tabIndex={3} className="hover:text-orange visited:text-blue">About</a></li>
                            <li><a href="#" tabIndex={4} className="hover:text-orange visited:text-blue">Services</a></li>
                            <li><a href="#" tabIndex={5} className="hover:text-orange visited:text-blue">Contact</a></li>
                            <li><a role='button' href="#" tabIndex={6} className="hover:text-black  bg-orange text-white p-2 px-4 rounded-xl">Login</a></li>

                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar