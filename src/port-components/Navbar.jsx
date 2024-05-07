import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Services' },
    { id: 3, text: 'Projects' },
  ];

  return (
    <div className='flex justify-between items-center h-16 w-full mx-auto px-4'>
      <h1 className='w-full text-[5vh] font-bold text-[#7469B6] font-basicSix'>Divyanshu</h1>
      <ul className='hidden s:flex s:flex-row s:gap-8 h-10 s:items-center s:justify-center s:mx-8'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b h-8 content-center text-[3vh]  border-[#7469B6] text-[#2B283E] font-basicSix cursor-pointer duration-300'
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block s:hidden mx-8'>
        {nav ? <AiOutlineClose size={20} className='text-[#2B283E]' /> : <AiOutlineMenu size={20} className='text-[#2B283E]' />}
      </div>
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-max h-80 rounded-full content-center  bg-[#7469B6] ease-in-out duration-500 p-8 flex flex-col gap-6'
            : 'ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-[5vh] font-bold text-[#E8EBF7] mt-4 font-basicSix text-center'>Divyanshu</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className=' border-b w-44 h-10 border-[#E8EBF7] duration-300 cursor-pointer text-[3vh] font-basicSix text-center text-[#E8EBF7]'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;