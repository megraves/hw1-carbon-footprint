import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/** Define Components:
 * // TODO:
 * 1. Activity Logging: Create a feature that allows users to log daily activities, categorizing them by type. 
 *    Each activity will have an associated carbon value, helping users understand their environmental impact.
 * 2. Goal Setting: Implement a goal-setting feature where users can set personal targets for reducing their carbon footprint,
 *    with progress tracking and motivational feedback.
 * 3. Resource Library:  Develop a section with practical tips and resources for sustainable living, 
 *    encouraging users to adopt eco-friendly habits.
 * 4. Customizable UI: Allow users to personalize the app’s interface, making it visually appealing and user-friendly.
 * 5. Summary Views: Design a dashboard that provides a visual summary of the user's carbon footprint over time, 
 *    using charts or graphs to illustrate trends.
 */

function SummaryCard() {
 // welcome!
 // pie chart of progress
 // button for resource library
}

// Used for logging and presenting activities and goals
function LogCard() {
  // shows activities for the day
  // No activities logged yet.
  // Categorize
}

function GoalCard() {

}

function ActivityCard() {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
