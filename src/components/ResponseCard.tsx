import React from 'react'
import { Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react'

interface ResponseCardProps {
  response: string
  timestamp: string
}

const ResponseCard: React.FC<ResponseCardProps> = ({ response, timestamp }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <span className="ml-2 text-sm text-gray-500">{timestamp}</span>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600" title="Copy to clipboard">
            <Copy className="h-4 w-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-600" title="Download response">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-gray-700 whitespace-pre-wrap">{response}</div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-2 py-1 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <ThumbsUp className="h-4 w-4 mr-1" />
            Helpful
          </button>
          <button className="inline-flex items-center px-2 py-1 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
            <ThumbsDown className="h-4 w-4 mr-1" />
            Not helpful
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Model: GPT-4 • Tokens: 1,245
        </div>
      </div>
    </div>
  )
}

export default ResponseCard
