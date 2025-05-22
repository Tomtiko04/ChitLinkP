import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/Logo.png";

const navItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: (
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.98397 19.7614V16.5427C6.98397 15.7211 7.65491 15.055 8.48256 15.055H11.508C11.9055 15.055 12.2866 15.2118 12.5677 15.4908C12.8487 15.7698 13.0066 16.1482 13.0066 16.5427V19.7614C13.0041 20.103 13.139 20.4314 13.3814 20.6739C13.6239 20.9163 13.9537 21.0526 14.2978 21.0526H16.3619C17.3259 21.0551 18.2513 20.6767 18.9339 20.0008C19.6164 19.325 20 18.4073 20 17.4503V8.2809C20 7.50785 19.6548 6.77457 19.0575 6.27859L12.0358 0.711441C10.8144 -0.264672 9.06433 -0.233156 7.87936 0.786293L1.01791 6.27859C0.392358 6.75995 0.0184761 7.4954 0 8.2809V17.441C0 19.4356 1.62882 21.0526 3.63808 21.0526H5.65504C6.36971 21.0526 6.95052 20.4802 6.9557 19.7708L6.98397 19.7614Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Bank Accounts',
    path: '/bank-accounts',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 8.5H5C4.44772 8.5 4 8.94772 4 9.5V19.5C4 20.0523 4.44772 20.5 5 20.5H19C19.5523 20.5 20 20.0523 20 19.5V9.5C20 8.94772 19.5523 8.5 19 8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3.5L20 8.5H4L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15.5C13.1046 15.5 14 14.6046 14 13.5C14 12.3954 13.1046 11.5 12 11.5C10.8954 11.5 10 12.3954 10 13.5C10 14.6046 10.8954 15.5 12 15.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Savings',
    path: '/savings',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.5C1 3.91015 3.91015 1 7.5 1H14.5C18.0899 1 21 3.91015 21 7.5V14.5C21 18.0899 18.0899 21 14.5 21H7.5C3.91015 21 1 18.0899 1 14.5V7.5Z"
          stroke="currentColor"
          stroke-width="1.8"
        />
        <rect
          x="9.89062"
          y="5.44531"
          width="2"
          height="10.2917"
          rx="1"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Contacts',
    path: '/contacts',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 7C5.5 6.60603 5.5776 6.21593 5.72836 5.85195C5.87913 5.48797 6.1001 5.15726 6.37868 4.87868C6.65726 4.6001 6.98797 4.37913 7.35195 4.22836C7.71593 4.0776 8.10603 4 8.5 4C8.89397 4 9.28407 4.0776 9.64805 4.22836C10.012 4.37913 10.3427 4.6001 10.6213 4.87868C10.8999 5.15726 11.1209 5.48797 11.2716 5.85195C11.4224 6.21593 11.5 6.60603 11.5 7C11.5 7.79565 11.1839 8.55871 10.6213 9.12132C10.0587 9.68393 9.29565 10 8.5 10C7.70435 10 6.94129 9.68393 6.37868 9.12132C5.81607 8.55871 5.5 7.79565 5.5 7ZM8.5 2C7.17392 2 5.90215 2.52678 4.96447 3.46447C4.02678 4.40215 3.5 5.67392 3.5 7C3.5 8.32608 4.02678 9.59785 4.96447 10.5355C5.90215 11.4732 7.17392 12 8.5 12C9.82608 12 11.0979 11.4732 12.0355 10.5355C12.9732 9.59785 13.5 8.32608 13.5 7C13.5 5.67392 12.9732 4.40215 12.0355 3.46447C11.0979 2.52678 9.82608 2 8.5 2ZM15.5 2H14.5V4H15.5C15.894 4 16.2841 4.0776 16.6481 4.22836C17.012 4.37913 17.3427 4.6001 17.6213 4.87868C17.8999 5.15726 18.1209 5.48797 18.2716 5.85195C18.4224 6.21593 18.5 6.60603 18.5 7C18.5 7.39397 18.4224 7.78407 18.2716 8.14805C18.1209 8.51203 17.8999 8.84274 17.6213 9.12132C17.3427 9.3999 17.012 9.62087 16.6481 9.77164C16.2841 9.9224 15.894 10 15.5 10H14.5V12H15.5C16.8261 12 18.0979 11.4732 19.0355 10.5355C19.9732 9.59785 20.5 8.32608 20.5 7C20.5 5.67392 19.9732 4.40215 19.0355 3.46447C18.0979 2.52678 16.8261 2 15.5 2ZM0 19C0 17.6739 0.526784 16.4021 1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H12C13.3261 14 14.5979 14.5268 15.5355 15.4645C16.4732 16.4021 17 17.6739 17 19V21H15V19C15 18.2044 14.6839 17.4413 14.1213 16.8787C13.5587 16.3161 12.7956 16 12 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21H0V19ZM24 19C24 18.3434 23.8707 17.6932 23.6194 17.0866C23.3681 16.48 22.9998 15.9288 22.5355 15.4645C22.0712 15.0002 21.52 14.6319 20.9134 14.3806C20.3068 14.1293 19.6566 14 19 14H18V16H19C19.7956 16 20.5587 16.3161 21.1213 16.8787C21.6839 17.4413 22 18.2044 22 19V21H24V19Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Finance',
    path: '/finance',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5C15 3.114 15 2.172 14.414 1.586C13.828 1 12.886 1 11 1C9.114 1 8.172 1 7.586 1.586C7 2.172 7 3.114 7 5M1 13C1 9.229 1 7.343 2.172 6.172C3.344 5.001 5.229 5 9 5H13C16.771 5 18.657 5 19.828 6.172C20.999 7.344 21 9.229 21 13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H9C5.229 21 3.343 21 2.172 19.828C1.001 18.656 1 16.771 1 13Z"
          stroke="currentColor"
          stroke-width="1.9"
        />
        <path
          d="M11 16.333C12.105 16.333 13 15.587 13 14.667C13 13.747 12.105 13 11 13C9.895 13 9 12.254 9 11.333C9 10.413 9.895 9.667 11 9.667M11 16.333C9.895 16.333 9 15.587 9 14.667M11 16.333V17M11 9.667V9M11 9.667C12.105 9.667 13 10.413 13 11.333"
          stroke="currentColor"
          stroke-width="1.9"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: (
      <svg
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 18.857C1 16.3497 4.41384 14.0352 8.45867 14.0352C12.4819 14.0352 15.9175 16.3273 15.9175 18.8346"
          stroke="currentColor"
          stroke-width="1.96152"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.44889 10.561C11.0891 10.561 13.2289 8.42108 13.2289 5.78096C13.2289 3.14083 11.0891 1 8.44889 1C5.80882 1 3.668 3.14083 3.668 5.78096C3.65908 8.41216 5.78406 10.552 8.41522 10.561C8.4271 10.561 8.43799 10.561 8.44889 10.561Z"
          stroke="currentColor"
          stroke-width="1.96152"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    label: 'Support',
    path: '/support',
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.67308 9.7508V6.41272C4.68299 5.75657 4.82228 5.10882 5.08296 4.5066C5.34364 3.90437 5.72059 3.3595 6.19222 2.9032C6.66384 2.44691 7.22086 2.08816 7.83137 1.84751C8.44188 1.60686 9.09388 1.48904 9.75 1.5008C10.4061 1.48904 11.0581 1.60686 11.6686 1.84751C12.2791 2.08816 12.8362 2.44691 13.3078 2.9032C13.7794 3.3595 14.1564 3.90437 14.417 4.5066C14.6777 5.10882 14.817 5.75657 14.8269 6.41272V9.7508M12.2885 16.4143C12.9617 16.4143 13.6074 16.1468 14.0834 15.6708C14.5595 15.1947 14.8269 14.549 14.8269 13.8758V11.02M12.2885 16.4143C12.2885 16.835 12.1213 17.2386 11.8238 17.5361C11.5262 17.8336 11.1227 18.0008 10.7019 18.0008H8.79808C8.3773 18.0008 7.97376 17.8336 7.67622 17.5361C7.37869 17.2386 7.21154 16.835 7.21154 16.4143C7.21154 15.9935 7.37869 15.5899 7.67622 15.2924C7.97376 14.9949 8.3773 14.8277 8.79808 14.8277H10.7019C11.1227 14.8277 11.5262 14.9949 11.8238 15.2924C12.1213 15.5899 12.2885 15.9935 12.2885 16.4143ZM2.76923 7.84695H4.03846C4.20677 7.84695 4.36819 7.91382 4.4872 8.03283C4.60622 8.15184 4.67308 8.31326 4.67308 8.48157V12.2893C4.67308 12.4576 4.60622 12.619 4.4872 12.738C4.36819 12.857 4.20677 12.9239 4.03846 12.9239H2.76923C2.43261 12.9239 2.10978 12.7902 1.87175 12.5521C1.63372 12.3141 1.5 11.9913 1.5 11.6546V9.11619C1.5 8.77956 1.63372 8.45673 1.87175 8.2187C2.10978 7.98068 2.43261 7.84695 2.76923 7.84695ZM16.7308 12.9239H15.4615C15.2932 12.9239 15.1318 12.857 15.0128 12.738C14.8938 12.619 14.8269 12.4576 14.8269 12.2893V8.48157C14.8269 8.31326 14.8938 8.15184 15.0128 8.03283C15.1318 7.91382 15.2932 7.84695 15.4615 7.84695H16.7308C17.0674 7.84695 17.3902 7.98068 17.6283 8.2187C17.8663 8.45673 18 8.77956 18 9.11619V11.6546C18 11.9913 17.8663 12.3141 17.6283 12.5521C17.3902 12.7902 17.0674 12.9239 16.7308 12.9239Z"
          stroke="#545454"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Logout',
    path: '/logout',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.496 21H6.5C5.395 21 4.5 19.849 4.5 18.429V5.57C4.5 4.151 5.395 3 6.5 3H13.5M16 15.5L19.5 12L16 8.5M9.5 11.996H19.5"
          stroke="#9A2D41"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 flex h-screen w-64 flex-col bg-white shadow-md transition-transform duration-500 ${!isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}`}
    >
      {/* Logo section */}
      <div className="flex items-center justify-between p-8">
        <img src={logo} alt="chitLink" className="h-8" />
        <button onClick={onClose} className="-mr-2 p-2 text-gray-600 hover:text-gray-900 lg:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Main navigation */}
      <nav className="flex-1">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) onClose();
                }}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-8 py-3 text-[16px] transition-colors duration-200 [&>svg]:transition-colors [&>svg]:duration-200 ${
                    isActive
                      ? 'border-r-4 border-[#C59139] bg-[#F4F3F0] font-bold text-[#C59139] [&>svg]:text-[#C59139]'
                      : 'font-semibold text-[#000000]/67 hover:border-r-4 hover:border-[#C59139] hover:bg-[#F4F3F0] hover:text-[#C59139] hover:[&>svg]:text-[#C59139]'
                  }`
                }
                end={item.path === '/'}
              >
                <span className="w-5 text-center">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section with divider */}
      <div className="pb-6">
        <div className="mb-4 px-4 h-px bg-gray-200"></div>
        <ul className="space-y-3">
          {bottomItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) onClose(); 
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-8 py-3 text-[16px] transition-colors duration-200 [&>svg]:transition-colors [&>svg]:duration-200 ${
                    item.label === 'Logout'
                      ? 'text-red-500 hover:text-red-600'
                      : isActive
                        ? 'border-r-4 border-[#C59139] bg-[#F4F3F0] font-bold text-[#C59139] [&>svg]:text-[#C59139]'
                        : 'font-semibold text-[#000000]/67 hover:border-r-4 hover:border-[#C59139] hover:bg-[#F4F3F0] hover:text-[#C59139] hover:[&>svg]:text-[#C59139]'
                  }`
                }
              >
                <span className="w-5 text-center">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
