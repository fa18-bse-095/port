// import React, { useState } from 'react';
// import { FaLeaf, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';
// // import ResponsiveMenu from './ResponsiveMenu';
// // import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';
// import ResponsiveMenu from './ResponsiveMenu';

// import { Link, NavLink } from 'react-router-dom';
// import ko from '../assets/th.jpg'



// const NavbarMenu = [
//   { id: 1, title: 'Home', link: '/' },
//   { id: 2, title: 'Work', link: '/work' },
//   { id: 3, title: 'About', link: '/about' },
//   { id: 5, title: 'Contact', link: '/contact' },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   return (
//     <>
//       <nav>
//         <motion.div
//         initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
         
//           className=" flex justify-between items-center py-2 md:pt-4 w-[100%] container mx-auto m-4 px-8  "
//         >
//           {/* Logo section */}
//           <div className="text-2xl flex items-center gap-2 uppercase font-bold md:gap-1">
//           <img src= {ko}alt="" className=' w-20 h-20 rounded-3xl' />
//             <p className="text-white">Portfolio</p>
//             {/* <p className="text-white">Ahmad</p> */}
//              {/* <img src={ho} className=' w-20 h-10' alt="" /> */}
//             {/* <FaLeaf className="text-green-500" /> */}
//           </div>
//           {/* Menu section */}
//           <div className="hidden md:block">
//             <ul className="flex items-center md:gap-1 lg:gap-6 text-white">
//               {NavbarMenu.map((item) => (
//                 <li key={item.id}>
//                   <NavLink
//                     to={item.link}
//                     className="inline-block py-1 px-3 hover:text-sky-400 hover:shadow-[0_2px_0_-1px] font-semibold"
//                   >
//                     {item.title}
//                   </NavLink>
//                 </li>
//               ))}
              
//             </ul>
//           </div>
//           <div className="md:hidden hover:cursor-auto">
//             <button onClick={() => setOpen(!open)}>
//               {open ? <FaTimes size={30} className=' hover:cursor-pointer' /> : <FaBars size={30} className=' hover: cursor-pointer' />}
//             </button>
//           </div>
//         </motion.div>
//       </nav>
//       <ResponsiveMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';
import { NavLink } from 'react-router-dom';
import ko from '../assets/th.jpg';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Work', link: '/work' },
  { id: 3, title: 'About', link: '/about' },
  { id: 5, title: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-between items-center py-2 md:pt-4 w-full container mx-auto m-4 px-8"
        >
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 uppercase font-bold md:gap-1">
            <img src={ko} alt="Logo" className="w-20 h-20 rounded-3xl" />
            <p className="text-white">Portfolio</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-1 lg:gap-6 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className="inline-block py-1 px-3 hover:text-sky-400 hover:shadow-[0_2px_0_-1px] font-semibold"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden hover:cursor-auto">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <FaTimes size={30} className="hover:cursor-pointer" />
              ) : (
                <FaBars size={30} className="hover:cursor-pointer" />
              )}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Responsive Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
