import React, { useState } from 'react'
import { Send, Trash2, Copy, Download, Sparkles } from 'lucide-react'

const Playground: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [model, setModel] = useState('gpt-4')
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(2048)
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResponse(
        "Based on your prompt, here's a simulated response from the OpenAI API. In a real implementation, this would be the actual response from the API call. The response would be formatted and displayed here, with options to copy, download, or clear the response. You can adjust the model parameters like temperature and max tokens to see how they affect the response."
      )
      setIsLoading(false)
    }, 1500)
  }

  const clearPrompt = () => {
    setPrompt('')
  }

  const clearResponse = () => {
    setResponse('')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">AI Playground</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Prompt</h2>
              <button 
                onClick={clearPrompt}
                className="text-gray-400 hover:text-gray-500"
                title="Clear prompt"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-64 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your prompt here..."
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {response && (
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Response</h2>
                <div className="flex space-x-2">
                  <button 
                    className="text-gray-400 hover:text-gray-500"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  <button 
                    className="text-gray-400 hover:text-gray-500"
                    title="Download response"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={clearResponse}
                    className="text-gray-400 hover:text-gray-500"
                    title="Clear response"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                {response}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-6 h-fit">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Model Settings</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <select
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-4-turbo">GPT-4 Turbo</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="dall-e-3">DALL-E 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
                Temperature: {temperature}
              </label>
              <input
                type="range"
                id="temperature"
                min="0"
                max="2"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Precise</span>
                <span>Balanced</span>
                <span>Creative</span>
              </div>
            </div>

            <div>
              <label htmlFor="maxTokens" className="block text-sm font-medium text-gray-700 mb-1">
                Max Tokens: {maxTokens}
              </label>
              <input
                type="range"
                id="maxTokens"
                min="256"
                max="4096"
                step="256"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Preset Prompts</h3>
              <div className="space-y-2">
                {['Write a blog post about AI', 'Explain quantum computing', 'Create a marketing plan'].map((presetPrompt) => (
                  <button
                    key={presetPrompt}
                    onClick={() => setPrompt(presetPrompt)}
                    className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-md"
                  >
                    <Sparkles className="h-4 w-4 text-blue-500 mr-2" />
                    {presetPrompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground
