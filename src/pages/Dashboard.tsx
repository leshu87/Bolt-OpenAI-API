import React from 'react'
import { BarChart2, MessageSquare, Zap, ArrowUpRight, Users, Clock } from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Total Requests', value: '4,238', icon: Zap, change: '+12.5%', changeType: 'increase' },
    { name: 'API Usage', value: '85%', icon: BarChart2, change: '+5.2%', changeType: 'increase' },
    { name: 'Response Time', value: '245ms', icon: Clock, change: '-18.3%', changeType: 'decrease' },
    { name: 'Active Users', value: '573', icon: Users, change: '+8.7%', changeType: 'increase' },
  ]

  const recentPrompts = [
    {
      id: 1,
      prompt: 'Explain the concept of quantum computing in simple terms',
      model: 'gpt-4',
      date: '2 hours ago',
      tokens: 1250,
    },
    {
      id: 2,
      prompt: 'Write a short story about a robot learning to paint',
      model: 'gpt-4',
      date: '5 hours ago',
      tokens: 2340,
    },
    {
      id: 3,
      prompt: 'Summarize the latest research on renewable energy',
      model: 'gpt-3.5-turbo',
      date: '1 day ago',
      tokens: 1820,
    },
    {
      id: 4,
      prompt: 'Create a marketing plan for a new fitness app',
      model: 'gpt-4',
      date: '2 days ago',
      tokens: 3150,
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className={`bg-gray-50 px-5 py-3 flex items-center justify-between`}>
              <div className="text-sm">
                <span
                  className={`font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>{' '}
                <span className="text-gray-500">from last month</span>
              </div>
              <div>
                <ArrowUpRight
                  className={`h-5 w-5 ${
                    stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500 transform rotate-180'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Prompts</h3>
          <button className="text-sm text-blue-600 hover:text-blue-500">View all</button>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {recentPrompts.map((prompt) => (
              <div key={prompt.id} className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-gray-50">
                <dt className="text-sm font-medium text-gray-500 truncate col-span-3">{prompt.prompt}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 flex items-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {prompt.model}
                  </span>
                </dd>
                <dd className="mt-1 text-sm text-gray-500 sm:mt-0 text-right">
                  <div>{prompt.date}</div>
                  <div className="text-xs">{prompt.tokens} tokens</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">API Usage</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <BarChart2 className="h-16 w-16 text-gray-400" />
            <span className="ml-2 text-gray-500">Usage chart will appear here</span>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Model Performance</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <MessageSquare className="h-16 w-16 text-gray-400" />
            <span className="ml-2 text-gray-500">Performance metrics will appear here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
