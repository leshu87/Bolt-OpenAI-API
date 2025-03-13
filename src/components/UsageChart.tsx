import React from 'react'

interface UsageChartProps {
  data: {
    date: string
    tokens: number
  }[]
}

const UsageChart: React.FC<UsageChartProps> = ({ data }) => {
  // In a real implementation, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple bar chart with CSS
  
  const maxTokens = Math.max(...data.map(item => item.tokens))
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">API Usage (Last 7 Days)</h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-sm text-gray-500">{item.date}</div>
            <div className="flex-1">
              <div className="relative h-8 bg-gray-100 rounded">
                <div 
                  className="absolute top-0 left-0 h-8 bg-blue-500 rounded"
                  style={{ width: `${(item.tokens / maxTokens) * 100}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-end pr-2">
                  <span className="text-xs font-medium text-gray-700">{item.tokens.toLocaleString()} tokens</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsageChart
