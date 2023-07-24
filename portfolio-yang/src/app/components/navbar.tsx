// import Link from 'next/link'
import Image from "next/image";
import { Toolbar, Box  } from '@mui/material';
import Link from 'next/link';
import logo from "../../../public/logo.svg";

const Navbar = () => {
    return (
        <Toolbar>
            <nav className="relative flex w-full flex-wrap items-center justify-between bg-transparent py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <Box>
                        <Link
                            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                            href="#">
                            <Image
                                src={logo}
                                style={{height: "50px"}}
                                alt="TE Logo"
                                loading="lazy" 
                            />
                        </Link>
                        {/* <Avatar alt="Remy Sharp" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ibzRFIPL3wL2-LuRUdOb2g.jpeg"/> */}
                    </Box>
                    {/* <Link
                        className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                        href="#">
                        <Image
                            src={logo}
                            style={{height: "50px"}}
                            alt="TE Logo"
                            loading="lazy" 
                        />
                    </Link> */}
                    <div className="flex w-1/3 gap-x-20">
                        <Link 
                        href={'../pages/about'}
                        className="flex items-center justify-center text-white hover:text-gray-300 focus:text-gray-500 lg:mb-0 lg:mt-0"
                        >
                            SOBRE MIM
                        </Link>
                        <Link 
                        href={'/'}
                        className="flex items-center justify-center text-white hover:text-gray-300 focus:text-gray-500 lg:mb-0 lg:mt-0"
                        >
                            PORTFOLIO
                        </Link>
                        <Link 
                        href={'/'}
                        className="flex items-center justify-center text-white hover:text-gray-300 focus:text-gray-500 lg:mb-0 lg:mt-0"
                        >
                            CONTATO
                        </Link>
                    </div>
                </div>
            </nav>
        </Toolbar>
        // <nav className='flex-1 justify-between items-center navbar navbar-light bg-light'>
        //     <ul className='navbar-nav container mx-auto flex justify-between items-center py-2 gap-x-2'>
        //         <li className="nav-item flex space-x-2">
        //             <Link href="/">
        //                 Home
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link href="/">
        //                 About
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link href="/">
        //                 Contact
        //             </Link>
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default Navbar;