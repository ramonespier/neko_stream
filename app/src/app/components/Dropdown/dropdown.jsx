"use client";

import {
  FiEdit,
  FiChevronDown,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center justify-center 
            gap-2 px-4 py-4 rounded-full 
            border border-white/50 
            text-indigo-50 bg-rose-950/50
            hover:bg-rose-950 transition-colors w-14
            lg:hidden
            md:hidden"
        >
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-60%", fontFamily: "'personal, 'Juhzo'" }}
          className="flex flex-col justify-around rounded-lg bg-white/85 shadow-xl absolute top-[120%] w-screen h-60 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Planos" href="/planos" />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Catálogo" href="/catalogo" />
          <Option setOpen={setOpen} Icon={FiShare} text="Watchlist" href="/watchlist" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, href }) => {
  return (
    <motion.li
      variants={itemVariants}
      className="flex items-center gap-2 w-full py-4 p-2 text-lg font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      onClick={() => setOpen(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-2 w-full h-full"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </Link>
    </motion.li>
  );
};

export default Dropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
