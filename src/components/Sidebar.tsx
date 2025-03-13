import React from 'react'
import { LayoutDashboard, Sparkles, Settings, BarChart2, MessageSquare, Code, Brain } from 'lucide-react'

type Page = 'dashboard' | 'playground' | 'settings'

interface SidebarProps {
  currentPage: Page
  setCurrentPage: (page: Page) => void
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, page: 'dashboard' as const },
    { name: 'Playground', icon: Sparkles, page: 'playground' as const },
    { name: 'Settings', icon: Settings, page: 'settings' as const },
  ]

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:bg-gray-900">
      <div className="flex items-center h-16 px-4 bg-gray-800">
        <Brain className="h-8 w-8 text-blue-400" />
        <span className="ml-2 text-xl font-semibold text-white">OpenAI Dashboard</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className={`${
                currentPage === item.page
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } group flex items-center px-2 py-2 text-base font-medium rounded-md w-full`}
            >
              <item.icon
                className={`${
                  currentPage === item.page ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                } mr-3 h-5 w-5`}
                aria-hidden="true"
              />
              {item.name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User profile"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs font-medium text-gray-400">View profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
