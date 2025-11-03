import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ open, setOpen }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-0 w-full h-screen z-20 md:hidden "
        >
          <div className="text-xl font-semibold uppercase  text-white py-10 m-6 rounded-3xl bg-black">
            <ul className="flex flex-col items-center gap-10">
              
              <li><Link to={'/' } className='text-white'>Home</Link></li>
              <li><Link to={'/products'}>Products</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/shop'}>Shop</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
