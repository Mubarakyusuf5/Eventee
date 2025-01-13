import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { 
  UserGroupIcon, 
  CalendarIcon, 
  CurrencyDollarIcon,
  BellIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const stats = [
  { name: 'Total Events', value: '50', icon: UserGroupIcon },
  { name: 'Total Attendees', value: '1,234', icon: UserGroupIcon },
  { name: 'Upcoming Events', value: '5', icon: CalendarIcon },
  { name: 'Revenue', value: '$12,345', icon: CurrencyDollarIcon },
]

const recentActivity = [
  { id: 1, name: 'Summer Music Festival', action: 'New registration', date: '3 mins ago' },
  { id: 2, name: 'Tech Conference 2023', action: 'Updated details', date: '2 hours ago' },
  { id: 3, name: 'Charity Run', action: 'New event created', date: '1 day ago' },
]

export const OrganzerDash = () => {
  return (
    <div className='bg-gray-50 flex min-h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col lg:ml-[270px]'>
        <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <input
              type="text"
              placeholder="Search..."
              className='bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00539c]'
            />
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 -ml-8' />
          </div>
          <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'>
            <BellIcon className='w-6 h-6 text-[#00539c]' />
          </button>
        </nav>
        <main className='flex-1 p-6 bg-gray-50'>
          <h1 className='text-3xl font-bold text-[#00539c] mb-6'>Dashboard</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {stats.map((item) => (
              <div key={item.name} className='bg-white p-6 rounded-xl shadow-md'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-gray-500 text-sm'>{item.name}</p>
                    <p className='text-2xl font-bold text-[#00539c]'>{item.value}</p>
                  </div>
                  <item.icon className='w-12 h-12 text-[#eea47f]' />
                </div>
              </div>
            ))}
          </div>
          <div className='bg-white rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-semibold text-[#00539c] mb-4'>Recent Activity</h2>
            <ul className='divide-y divide-gray-200'>
              {recentActivity.map((item) => (
                <li key={item.id} className='py-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium text-[#00539c]'>{item.name}</p>
                      <p className='text-sm text-gray-500'>{item.action}</p>
                    </div>
                    <p className='text-sm text-[#eea47f]'>{item.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

