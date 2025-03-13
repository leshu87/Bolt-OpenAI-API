import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Playground from './pages/Playground'
import Settings from './pages/Settings'

type Page = 'dashboard' | 'playground' | 'settings'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'playground' && <Playground />}
          {currentPage === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  )
}

export default App
