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
      'Lukewarm Water': 375, // Combined 350g + 25g
      'Whole Wheat Flour': 25,
      'Rye Flour': 25,
      'All Purpose Flour': 450,
      'Salt': 10,
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <Tab.Group onChange={(index) => setMode(['starter', 'levain', 'dough'][index])}>
          <Tab.List className="flex bg-gray-200 p-1">
            {Object.keys(recipes).map((key) => (
              <Tab
                key={key}
                className={({ selected }) =>
                  `w-full py-2.5 px-4 text-sm font-medium leading-5 rounded-lg transition-all duration-200 focus:outline-none
                  ${selected 
                    ? 'bg-white text-blue-700 shadow' 
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-700'}`
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