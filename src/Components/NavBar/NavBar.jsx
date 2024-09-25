import React, { useContext } from 'react'
import Mode from '../ToggleMode/Mode'
import { NavContext } from '../../Context/NavContext'

function NavBar() {
    const {navOpen,NavState} = useContext(NavContext)
   
  return (
    <>
    <div className="navbar bg-base-100 fixed top-0 left-0 shadow-md z-50">
        <div className="w-64 flex justify-center flex-1 lg:flex-none">
            <p className="text-2xl font-bold"><span className='text-primary'>Dash</span>Spark</p>
        </div>
        <div className="flex-none lg:hidden">
                <label className="btn btn-circle swap swap-rotate" >
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={navOpen === 0} onChange={()=>{NavState(navOpen === 0 ? null : 0)}}  />

                    {/* hamburger icon */}
                    <svg
                        className="swap-off fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                        className="swap-on fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                </label>
            </div>
            <div className="flex-none lg:hidden">
                <button className="btn btn-square btn-ghost" onClick={()=>{NavState(navOpen === 1 ? null : 1)}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
                </button>
            </div>
        <div className={`lg:flex-1 flex lg:p-0 py-9 px-2 lg:justify-between lg:static fixed top-16 left-0 h-screen lg:h-auto lg:flex-row flex-col w-64 lg:w-auto bg-base-100 lg:gap-0 gap-7 shadow-md lg:shadow-none  overflow-y-scroll overflow-x-hidden lg:overflow-visible ${navOpen === 1 ? "animate-slideOut" :  "-translate-x-full animate-slideIn"} transition-transform duration-300  lg:translate-x-0 lg:duration-0 lg:transition-none bg-base-100 `}>
            <div className=''>
                <div className=''>
                        <label className="input input-bordered  flex items-center gap-2 rounded-2xl">
                            <input type="text" className="" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                    </label>
                    </div>
            </div>
        
            <div className="flex-none gap-1 flex items-center flex-col-reverse lg:flex-row">
                <button className='btn btn-ghost btn-circle'>
                    <div className="indicator">
                        <span className="indicator-item badge badge-error">99+</span>
                        <svg xmlns="http://www.w3.org/2000/svg"  className='h-6 w-6 fill-current' viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg>
                    </div>
                </button>
                <Mode />

                <div className="lg:dropdown lg:dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn text-start hidden lg:flex">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            {/* here change it to dynamic name that u will fetch after authentification */}
                            <div className='flex flex-col '>
                                <p className='font-bold'>Moni Roy</p>
                                <p className='text-xs'>admin</p>
                            </div>
                            <div className=' rounded-full p-2 bg-neutraleu'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-3 fill-current' viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </div>
                        
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md  dropdown-content bg-base-100 rounded-box z-[1] mt-4 lg:w-72 w-full lg:p-4 lg:shadow">
                        <li className="menu-title">Notifications</li>
                        <li>
                            <a className='gap-4'>
                                <div className="avatar">
                                    <div className="w-9 bg-primary p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-base-100'><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                                    </div>
                                </div>
                                {/* here change it to dynamic name that u will fetch after authentification */}
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Settings</p>
                                    <p className='text-xs'>Update Dashboard</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='gap-4'>
                                <div className="avatar">
                                    <div className="w-9 bg-secondary p-2 rounded-full  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='fill-base-100'><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
                                    </div>
                                </div>
                                {/* here change it to dynamic name that u will fetch after authentification */}
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Event Update</p>
                                    <p className='text-xs'>An event date update again</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='gap-4'>
                                <div className="avatar">
                                    <div className=" w-9 bg-accent p-2 rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='fill-base-100'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                                    </div>
                                </div>
                                {/* here change it to dynamic name that u will fetch after authentification */}
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Profile</p>
                                    <p className='text-xs'>Update your profile</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className='gap-4'>
                                <div className="avatar">
                                    <div className=" w-9 bg-error p-2 rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='fill-base-100'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                                    </div>
                                </div>
                                {/* here change it to dynamic name that u will fetch after authentification */}
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Application Error</p>
                                    <p className='text-xs'>Check your running application</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='' className='text-ne*'>See all notifications</a>
                        </li>
                    </ul>
                </div>
            
            </div>
        </div>
        </div>

    </>
  )
}

export default NavBar
