
// import { Link } from 'react-router';
import { FaHome, FaRegFileImage, FaPenSquare, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router';
import image from '../../assets/kids_logo.png';
import { useState } from "react";


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className='w-65  bg-gradient-to-r from-blue-400 fixed h-full px-4 py-2'>
            <div className="flex shrink-0 items-center">
                <img
                    alt="Your Company"
                    src={image}
                    className="h-15 w-15w-auto"
                />
            </div>
            <ul className='mt-18 text-black font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='/dashboard' className='px-3'>
                        <FaHome className="inline-block w-6 h-6 mr-2 mt-2"> </FaHome>
                        Home
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='/listofplayareas' className='px-3'>
                        <FaUserFriends className="inline-block w-6 h-6 mr-2 mt-2"> </FaUserFriends>
                        Play Areas
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='indoor' className='px-3'>
                        <FaRegFileImage className="inline-block w-6 h-6 mr-2 mt-2"> </FaRegFileImage>
                        Bookings
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='/create' className='px-3'>
                        <FaUserFriends className="inline-block w-6 h-6 mr-2 mt-2"> </FaUserFriends>
                       Add Play Areas
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='updateuser' className='px-3'>
                        <FaPenSquare className="inline-block w-6 h-6 mr-2 mt-2"> </FaPenSquare>
                        Calender
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='/chart' className='px-3'>
                        <FaHome className="inline-block w-6 h-6 mr-2 mt-2"> </FaHome>
                        Chart
                    </Link>
                </li>
                {/* <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    <Link to='updateuser' className='px-3'>
                        <FaRegFileImage className="inline-block w-6 h-6 mr-2 mt-2"> </FaRegFileImage>
                        Settings
                    </Link>
                </li> */}
                <ul className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    {/* Settings with Submenu */}
                    <li className="mb-2 rounded">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center w-full px-3 focus:outline-none"
                        >
                            <FaRegFileImage className="w-6 h-6 mr-2" />
                            Settings
                            <span className="ml-auto">{isOpen ? "▲" : "▼"}</span>
                        </button>

                        {/* Submenu */}
                        {isOpen && (
                            <ul className="ml-8 mt-2 space-y-2">
                                <li className="hover:bg-blue-500 p-2 rounded">
                                    <Link to="/updateuser">Update Profile</Link>
                                </li>
                                <li className="hover:bg-blue-500 p-2 rounded">
                                    <Link to="/changepassword">Change Password</Link>
                                </li>
                                <li className="hover:bg-blue-500 p-2 rounded">
                                    <Link to="/preferences">Preferences</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-400 py-2'>
                    {/* <Link to='/logout' className='px-3'>
                            <FaCog className="inline-block w-6 h-6 mr-2 mt-2"> </FaCog>
                            Settings
                        </Link> */}
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;