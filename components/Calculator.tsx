import { useState } from 'react';

interface CalculatorProps {
  mode: 'starter' | 'levain';
}

const recipes = {
  starter: {
    starter: 12.5,
    'all purpose flour': 25,
    'rye flour': 25,
    'lukewarm water': 50,
  },
  levain: {
    starter: 12.5,
    'all purpose flour': 25,
    'rye flour': 12.5,
    'whole wheat flour': 12.5,
    'lukewarm water': 50,
  },
};

export default function Calculator({ mode }: CalculatorProps) {
  const [multiplier, setMultiplier] = useState(2);

  const recipe = recipes[mode];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">{mode.charAt(0).toUpperCase() + mode.slice(1)} Calculator</h2>
      <div className="mb-6">
        <label htmlFor="multiplier" className="block text-sm font-medium text-gray-700 mb-1">
          Multiplier: {multiplier}
        </label>
        <input
          type="range"
          id="multiplier"
          min="1"
          max="8"
          step="1"
          value={multiplier}
          onChange={(e) => setMultiplier(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <ul className="space-y-2">
        {Object.entries(recipe).map(([ingredient, baseAmount]) => (
          <li key={ingredient} className="flex justify-between">
            <span className="capitalize">{ingredient}:</span>
            <span>{baseAmount * multiplier}g</span>
          </li>
        ))}
      </ul>
    </div>
  );
}