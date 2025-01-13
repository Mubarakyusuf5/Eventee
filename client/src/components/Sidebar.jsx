import React from 'react'
import { NavLink } from "react-router-dom"
import { HomeIcon, CalendarIcon, ChartBarIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const organizerLinks = [
  { name: "Dashboard", url: "/organizer/dashboard", icon: HomeIcon },
  { name: "Manage Event", url: "/organizer/manageEvent", icon: CalendarIcon },
  { name: "Report", url: "/organizer/registered-users", icon: ChartBarIcon },
]

export const Sidebar = () => {
  return (
    <div className='w-[270px] hidden bg-[#00539c] text-white p-4 fixed h-screen lg:flex flex-col'>
      <h1 className='font-bold text-3xl mb-8'>Eventee</h1>
      <nav className='flex-grow'>
        <ul className='space-y-2'>
          {organizerLinks.map(({ url, name, icon: Icon }, index) => (
            <li key={index}>
              <NavLink
                to={url}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-xl transition-all duration-300
                   ${isActive
                    ? 'bg-[#eea47f] text-[#00539c]'
                    : 'hover:bg-[#0066c2]'
                  }`
                }
              >
                <Icon className="w-6 h-6 mr-3" />
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center p-3 mb-4 bg-[#0066c2] rounded-xl">
          <UserCircleIcon className="w-10 h-10 mr-3" />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-[#eea47f]">Organizer</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center p-3 bg-[#eea47f] text-[#00539c] rounded-xl hover:bg-[#f0b48f] transition-all duration-300">
          <ArrowRightOnRectangleIcon className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  )
}

