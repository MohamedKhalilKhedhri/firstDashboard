import React, { useState, useRef, useEffect, useContext } from 'react';
import { NavContext } from '../../Context/NavContext';

function Aside() {

  const {navOpen} = useContext(NavContext);
  const [activeLinkIndex, setActiveLinkIndex] = useState(
    parseInt(localStorage.getItem('activeLinkIndex')) || 0
  );
  const linkListRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('activeLinkIndex', activeLinkIndex);
  }, [activeLinkIndex]);
  
  const handleLinkClick = (index) => {
    setActiveLinkIndex(index);
    const links = linkListRef.current.children;
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    links[index].classList.add('active');
  };

// i did the active link using localstorage well in react projects u can change it with usehistory and location
  return (
    <>
      <div className={`w-64 z-50  py-8 ${navOpen === 0 ? "animate-slideOut" :  "-translate-x-full animate-slideIn"} transition-transform duration-300  lg:translate-x-0 lg:duration-0 lg:transition-none bg-base-100   shadow-md overflow-y-scroll overflow-x-hidden fixed  top-16 left-0 `} style={{height:"calc(100vh - 4rem)"}}>
            <ul ref={linkListRef} className='menu gap-1'>
              <li className='h-12 flex items-center pl-4 relative '>
                <a
                  href=''
                  className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 0 ? 'active  before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                  onClick={() => handleLinkClick(0)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 fill-current'><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                <span> Dashboard</span>
                </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                <a
                  href=''
                  className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 1 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                  onClick={() => handleLinkClick(1)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 fill-current'><path d="M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
                <span>Users</span>
                </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 2 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(2)}
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 fill-current'><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                  <span>Favorite</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 3 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(3)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-5 fill-current'><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>

                <span>Inbox</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 4 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(4)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 fill-current'><path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg>

                <span>Order list</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 5 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(5)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-5 fill-current'><path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"/></svg>

                <span>Product Stock</span>
                  </a>
              </li>
              <li className="menu-title">Notifications</li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 6 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(6)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 fill-current'><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg>


                <span>Pricing</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 7 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(7)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 fill-current'><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>


                <span>Calender</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex ===8 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(8)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 fill-current'><path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>

                <span>To-Do</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 9 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(9)}
                  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-5 fill-current'><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>

              <span>Contact</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 10 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(10)}
                  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 fill-current'><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>

              <span>Invoice</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 11 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(11)}
                  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 fill-current'><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>

              <span>UI Elements</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 12 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(12)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 fill-current'><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>

                <span>Team</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 13 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(13)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 fill-current'><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"/></svg>

                <span>Table</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative mt-9'>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 14 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(14)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  className='w-5 fill-current'><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>

                <span>Settings</span>
                  </a>
              </li>
              <li className='h-12 flex items-center pl-4 relative '>
                  <a
                    href=''
                    className={`rounded-md flex h-full w-full items-center gap-3   ${activeLinkIndex === 15 ? 'active before:content-[""] before:rounded-tr-md before:rounded-br-md before:w-1 before:h-full before:bg-neutral before:left-0 before:top-0 before:absolute' : ''}`}
                    onClick={() => handleLinkClick(15)}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  className='w-5 fill-current'><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>

                <span>Logout</span>
                  </a>
              </li>
            </ul>
          </div>

  
    
    </>
  );
 
}
export default Aside;