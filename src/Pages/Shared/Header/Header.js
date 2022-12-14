import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItem1 = <>
        <li><Link to='/'>Home</Link></li>

    </>
     const menuItem2 = <>
     <li><Link to='/blog'>Blog</Link></li>
     
    </>
    return (
        <div className="navbar bg-emerald-400 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem1}
                    {menuItem2}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='h-12 w-12' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuItem1}
                {menuItem2}
                </ul>
            </div>
            <div className="navbar-end">
                {
                     
                        user?.uid ?
                            <>
                               
                                <>
                                <button><Link className='mr-3' to='/addServices'>Add Services</Link></button>
                                <button><Link className='mr-3' to='/myReview'>My Review</Link></button>

                                <button className="btn btn-sm" onClick={handleLogOut}>Log out</button>
                                <span>{user?.displayName}</span>
                               

                                </>
                                
                            </>
                            :
                            <>
                                <Link to='/signup' className="btn mx-2  bg-emerald-400">SignUp</Link>
                                <Link to='/login' className="btn  bg-emerald-400">Login</Link>
                            </>


                        
                    }
                    {
                        user?.photoURL ?
                        <img  style={{ height: '30px' }} src={user?.photoURL} alt="" />
                            
                        : <FaUser></FaUser>
                    }
                    

                    
                
            </div>
        </div>
    );
};

export default Header;