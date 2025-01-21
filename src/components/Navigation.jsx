// import React from "react";
// import { Link } from "react-router-dom";
// import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// const Navigation = () => {
//   return (
//     <div>
//       <nav className="flex gap-[32px] text-[#5C5F6A] text-[14px] text-center items-center ">
//         <Link to="/">Home</Link>
//         <div className="flex  w-full justify-center pt-20">
//           <div className="flex gap-8 bg-black">
//             <Popover>
//               <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
//                 Solutions
//               </PopoverButton>
//               <PopoverPanel
//                 transition
//                 anchor="bottom"
//                 className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
//               >
//                 <div className="p-3">
//                   <a
//                     className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
//                     href="#"
//                   >
//                     <p className="font-semibold text-white">Insights</p>
//                     <p className="text-white/50">
//                       Measure actions your users take
//                     </p>
//                   </a>
//                   <a
//                     className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
//                     href="#"
//                   >
//                     <p className="font-semibold text-white">Automations</p>
//                     <p className="text-white/50">
//                       Create your own targeted content
//                     </p>
//                   </a>
//                   <a
//                     className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
//                     href="#"
//                   >
//                     <p className="font-semibold text-white">Reports</p>
//                     <p className="text-white/50">Keep track of your growth</p>
//                   </a>
//                 </div>
//                 <div className="p-3">
//                   <a
//                     className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
//                     href="#"
//                   >
//                     <p className="font-semibold text-white">Documentation</p>
//                     <p className="text-white/50">
//                       Start integrating products and tools
//                     </p>
//                   </a>
//                 </div>
//               </PopoverPanel>
//             </Popover>
//           </div>
//         </div>
//         <a href="">About</a>
//         <a href="">Contact</a>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setLoading(false);
      })

      .catch((err) => {
        console.error("Network response was not ok");
        setLoading(false);
      });
  };

  useEffect(() => {
    handleCategoryClick();
  }, []);

  const handleCategorySelect = (category) => {
    navigate({ category });
  };

  console.log(categories);
  return (
    <div className="mt-[10px] text-[#5C5F6A]">
      <ul className="flex gap-[32px]">
        <li className="transition hover:scale-110 hover:-translate-y-1 duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="relative flex gap-[8px]">
          <Menu as="div" className="relative">
            <MenuButton className="flex items-center transition hover:-translate-y-1 hover:scale-110 duration-500">
              Categories
            </MenuButton>

            <MenuItems
              transition
              anchor="bottom end"
              className="bg-white shadow-lg origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {categories.map((category, key) => (
                <MenuItem key={key}>
                  <Link
                    to={`/Listing?cat=${category}`}
                    className="text-black p-2 block"
                  >
                    {category}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </li>
        <li className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]">
          <Link to="/about">About</Link>
        </li>
        <li className="transition hover:-translate-y-1 hover:scale-110 duration-500 rounded-[5px]">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
