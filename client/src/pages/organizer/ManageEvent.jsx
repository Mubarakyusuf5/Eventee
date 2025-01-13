import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { BellIcon, MagnifyingGlassIcon, PlusIcon, EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import DataTable from 'react-data-table-component';
import { format } from 'date-fns';

// Sample data
const events = [
  { id: 1, eventName: "Summer Music Festival", price: 50, dateTime: new Date("2023-08-15T18:00:00"), status: "Scheduled", isFree: false, location: "Central Park, NY" },
  { id: 2, eventName: "Tech Conference 2023", price: 0, dateTime: new Date("2023-09-05T09:00:00"), status: "Scheduled", isFree: true, location: "Virtual" },
  { id: 3, eventName: "Charity Run", price: 25, dateTime: new Date("2023-10-10T07:00:00"), status: "Scheduled", isFree: false, location: "Downtown, LA" },
  { id: 4, eventName: "Art Exhibition", price: 15, dateTime: new Date("2023-11-20T10:00:00"), status: "Scheduled", isFree: false, location: "Metropolitan Museum" },
  { id: 5, eventName: "Local Food Festival", price: 0, dateTime: new Date("2023-07-01T11:00:00"), status: "Completed", isFree: true, location: "City Square" },
  { id: 6, eventName: "Annual Book Fair", price: 5, dateTime: new Date("2023-12-05T09:00:00"), status: "Scheduled", isFree: false, location: "Public Library" },
  { id: 7, eventName: "Startup Pitch Night", price: 0, dateTime: new Date("2023-08-30T19:00:00"), status: "Cancelled", isFree: true, location: "Innovation Hub" },
];

const ActionButton = ({ icon: Icon, onClick, ariaLabel, bgColor }) => (
  <button
    onClick={onClick}
    className={`p-1 rounded-full ${bgColor} text-white hover:opacity-80 transition-opacity`}
    aria-label={ariaLabel}
  >
    <Icon className="w-4 h-4" />
  </button>
);

const columns = [
  {
    name: 'Event Name',
    selector: row => row.eventName,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true,
    cell: row => row.isFree ? 'Free' : `$${row.price.toFixed(2)}`,
  },
  {
    name: 'Date & Time',
    selector: row => row.dateTime,
    sortable: true,
    cell: row => format(row.dateTime, 'MMM dd, yyyy HH:mm'),
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    cell: row => (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        row.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
        row.status === 'Completed' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
      }`}>
        {row.status}
      </span>
    ),
  },
  {
    name: 'Type',
    selector: row => row.isFree,
    sortable: true,
    cell: row => row.isFree ? 'Free' : 'Paid',
  },
  {
    name: 'Location',
    selector: row => row.location,
    sortable: true,
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex space-x-2">
        <ActionButton
          icon={EyeIcon}
          onClick={() => console.log('View', row.id)}
          ariaLabel="View event"
          bgColor="bg-blue-500"
        />
        <ActionButton
          icon={PencilIcon}
          onClick={() => console.log('Edit', row.id)}
          ariaLabel="Edit event"
          bgColor="bg-yellow-500"
        />
        <ActionButton
          icon={TrashIcon}
          onClick={() => console.log('Delete', row.id)}
          ariaLabel="Delete event"
          bgColor="bg-red-500"
        />
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
    },
  },
  headCells: {
    style: {
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  cells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
};

export const ManageEvent = () => {
  return (
    <div className="bg-gray-50 flex min-h-screen font-roboto">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-[270px]">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search events..."
              className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00539c] w-64"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 -ml-8" />
          </div>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative">
            <BellIcon className="w-6 h-6 text-[#00539c]" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
        </nav>
        <main className="flex-1 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#00539c] font-poppins">Manage Events</h1>
            <button className="py-2 px-4 bg-[#eea47f] text-white rounded-lg hover:bg-[#e8956f] transition-colors flex items-center">
              <PlusIcon className="w-5 h-5 mr-2" />
              Create Event
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <DataTable
              title="Your Events"
              columns={columns}
              data={events}
              pagination
              customStyles={customStyles}
              highlightOnHover
              pointerOnHover
              responsive
            />
          </div>
        </main>
      </div>
    </div>
  );
};

