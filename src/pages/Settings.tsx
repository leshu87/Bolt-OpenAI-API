import React, { useState } from 'react'
import { Save, Key, RefreshCw, Shield, Bell, Clock } from 'lucide-react'

const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('')
  const [organization, setOrganization] = useState('')
  const [defaultModel, setDefaultModel] = useState('gpt-4')
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(true)
  const [theme, setTheme] = useState('light')
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or handle response
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-gray-400" />
                  API Configuration
                </h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                      OpenAI API Key
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        name="apiKey"
                        id="apiKey"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="sk-..."
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Your API key is stored securely and never shared.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization ID (optional)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="org-..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-gray-400" />
                  Default Settings
                </h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="defaultModel" className="block text-sm font-medium text-gray-700">
                      Default Model
                    </label>
                    <select
                      id="defaultModel"
                      name="defaultModel"
                      value={defaultModel}
                      onChange={(e) => setDefaultModel(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                      <option value="dall-e-3">DALL-E 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  Security & Privacy
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="autoSave"
                        name="autoSave"
                        type="checkbox"
                        checked={autoSave}
                        onChange={(e) => setAutoSave(e.target.checked)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="autoSave" className="font-medium text-gray-700">
                        Auto-save prompts and responses
                      </label>
                      <p className="text-gray-500">Save your conversation history for future reference.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-gray-400" />
                  Notifications
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="notifications"
                        name="notifications"
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="notifications" className="font-medium text-gray-700">
                        Enable notifications
                      </label>
                      <p className="text-gray-500">Receive notifications for completed requests and system updates.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  Appearance
                </h3>
                <div className="mt-5">
                  <fieldset>
                    <legend className="sr-only">Theme</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {['light', 'dark', 'system'].map((themeOption) => (
                        <div key={themeOption} className="flex items-center">
                          <input
                            id={themeOption}
                            name="theme"
                            type="radio"
                            checked={theme === themeOption}
                            onChange={() => setTheme(themeOption)}
                            className="focus:ring-blue-500 h<boltArtifact id="openai-dashboard" title="OpenAI API Integration Dashboard">
<boltAction type="file" filePath="src/pages/Settings.tsx">import React, { useState } from 'react'
import { Save, Key, RefreshCw, Shield, Bell, Clock } from 'lucide-react'

const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('')
  const [organization, setOrganization] = useState('')
  const [defaultModel, setDefaultModel] = useState('gpt-4')
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(true)
  const [theme, setTheme] = useState('light')
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or handle response
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-gray-400" />
                  API Configuration
                </h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                      OpenAI API Key
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        name="apiKey"
                        id="apiKey"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="sk-..."
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Your API key is stored securely and never shared.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization ID (optional)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="org-..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2 text-gray-400" />
                  Default Settings
                </h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="defaultModel" className="block text-sm font-medium text-gray-700">
                      Default Model
                    </label>
                    <select
                      id="defaultModel"
                      name="defaultModel"
                      value={defaultModel}
                      onChange={(e) => setDefaultModel(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                      <option value="dall-e-3">DALL-E 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  Security & Privacy
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="autoSave"
                        name="autoSave"
                        type="checkbox"
                        checked={autoSave}
                        onChange={(e) => setAutoSave(e.target.checked)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="autoSave" className="font-medium text-gray-700">
                        Auto-save prompts and responses
                      </label>
                      <p className="text-gray-500">Save your conversation history for future reference.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-gray-400" />
                  Notifications
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="notifications"
                        name="notifications"
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="notifications" className="font-medium text-gray-700">
                        Enable notifications
                      </label>
                      <p className="text-gray-500">Receive notifications for completed requests and system updates.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  Appearance
                </h3>
                <div className="mt-5">
                  <fieldset>
                    <legend className="sr-only">Theme</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {['light', 'dark', 'system'].map((themeOption) => (
                        <div key={themeOption} className="flex items-center">
                          <input
                            id={themeOption}
                            name="theme"
                            type="radio"
                            checked={theme === themeOption}
                            onChange={() => setTheme(themeOption)}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={themeOption} className="ml-3 block text-sm font-medium text-gray-700 capitalize">
                            {themeOption}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Settings
