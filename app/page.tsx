'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Calculator from './components/Calculator'

export default function Home() {
  const [mode, setMode] = useState('starter')

  const recipes = {
    starter: {
      'Starter': 12.5,
      'All Purpose Flour': 25,
      'Rye Flour': 25,
      'Lukewarm Water': 50,
    },
    levain: {
      'Starter': 12.5,
      'All Purpose Flour': 25,
      'Rye Flour': 12.5,
      'Whole Wheat Flour': 12.5,
      'Lukewarm Water': 50,
    },
    dough: {
      'Levain': 100,
      'Lukewarm Water': 375,
      'Whole Wheat Flour': 25,
      'Rye Flour': 25,
      'All Purpose Flour': 450,
      'Salt': 10,
    },
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <Tab.Group onChange={(index) => setMode(['starter', 'levain', 'dough'][index])}>
          <Tab.List className="flex bg-gray-200 dark:bg-gray-700 p-1">
            {Object.keys(recipes).map((key) => (
              <Tab
                key={key}
                className={({ selected }) =>
                  `w-full py-2.5 px-4 text-sm font-medium leading-5 rounded-lg transition-all duration-200 focus:outline-none
                  ${selected 
                    ? 'bg-white dark:bg-gray-600 text-blue-700 dark:text-blue-300 shadow' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-white/[0.12] dark:hover:bg-gray-600/[0.8] hover:text-gray-700 dark:hover:text-gray-200'}`
                }
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
        <div className="p-6">
          <Calculator recipe={recipes[mode as keyof typeof recipes]} />
        </div>
      </div>
    </main>
  )
}