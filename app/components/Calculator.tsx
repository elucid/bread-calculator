import { useState } from 'react'

type Recipe = {
  [key: string]: number
}

type CalculatorProps = {
  recipe: Recipe
}

export default function Calculator({ recipe }: CalculatorProps) {
  const [multiplier, setMultiplier] = useState(2)

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultiplier(parseInt(event.target.value))
  }

  return (
    <div className="mt-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-2">
          <span className="text-4xl font-bold text-gray-700 dark:text-gray-300">
            🍞 <span className="ml-2">{multiplier}</span>
          </span>
        </div>
        <input
          type="range"
          id="multiplier"
          name="multiplier"
          min="1"
          max="8"
          value={multiplier}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="space-y-2">
        {Object.entries(recipe).map(([ingredient, baseAmount]) => (
          <div key={ingredient} className="flex justify-between">
            <span className="text-gray-700 dark:text-gray-300">{ingredient}:</span>
            <span className="font-medium text-gray-900 dark:text-white">{baseAmount * multiplier}g</span>
          </div>
        ))}
      </div>
    </div>
  )
}