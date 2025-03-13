import React from 'react'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  currentPage: string
  setCurrentPage: (page: any) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, currentPage, setCurrentPage }) => {
  const navigation = [
    { name: 'Dashboard', page: 'dashboard' },
    { name: 'Playground', page: 'playground' },
    { name: 'Settings', page: 'settings' },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 flex md:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsOpen(false)}></div>
      <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-900">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <X className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <span className="text-xl font-semibold text-white">OpenAI Dashboard</span>
          </div>
          <nav className="mt-5 space-y-1 px-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(item.page)
                  setIsOpen(false)
                }}
                className={`${
                  currentPage === item.page
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md w-full`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 bg-gray-700 p-4">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium text-white">John Doe</p>
              <p className="text-sm font-medium text-gray-400">View profile</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-14 flex-shrink-0"></div>
    </div>
  )
}

export default MobileMenu
