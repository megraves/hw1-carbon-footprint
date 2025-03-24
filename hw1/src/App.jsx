import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

/** Define Components:
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

  return (
    <div class="card">
      <p>Welcome!</p>
      <img class="logo" src={reactLogo}></img>
      <p>Weekly Footprint Summary:</p>
      {/* <p>{motivate}</p> */}
    </div>
    // TODO: add graph for weekly summary (progress bar or something, usestate, every time they check off a log, it updates)
  )
}

/** Users have the option to toggle between light and dark mode -- customizable UI */
function ColorChangeBtn() {
  const [color, setColor] = useState("light");

  const changeColor = () => color == "light" ? setColor("dark") : setColor("light");
  const setChange = () => {
    const page = document.body;
    const cards = document.getElementById("card");
    page.classList.toggle("dark");
    cards.classList.toggle("card.dark");

  }

  const content = () => color == "light" ? "🌞" : "🌝";

  return (
    <button onClick={() => {changeColor(); setChange();}}>
      {content()}
    </button>
  )
}

// Used for logging and presenting activities and goals
function LogCard() {
  // shows activities for the day
  // No activities logged yet.
  // Categorize
  const [activities, setActivities] = useState("No activities yet!");
  
  const addActivity = () => {
    const newAct = document.getElementById("activity").innerHTML;
    console.log(newAct);
    if (activities == "No activities yet!") {
      setActivities("Completed Activities: \n" + newAct + "\n");
    } else {
      console.log("entered");
      setActivities(activities + newAct + '\n');
    }
    
  }

  return (
    <div class="card">
      <p>Activity Log</p>
      <form>
        <input type="text" id="activity" ></input>
      </form>
      <button onClick={() => addActivity()}>
        ➕
      </button>
      <p>{activities}</p>
    </div>
  )
}

function GoalCard() {
  const [goal, setGoal] = useState("");
  const [target, setTarget] = useState(0);
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleGoalSubmit = () => {
    if (goal && target > 0) {
      setSubmitted(true);
    }
  };

  const handleProgressUpdate = (increment) => {
    setProgress((prev) => Math.min(prev + increment, target));
  };

  const getMotivationalMessage = () => {
    const percentage = (progress / target) * 100;
    if (percentage === 0) return "Every step counts! Start today! 🌱";
    if (percentage < 50) return "Great start! Keep up the effort! 💪";
    if (percentage < 100) return "Almost there! You're making a difference! 🌎";
    return "Goal achieved! You're a sustainability hero! 🎉";
  };

  return (
    <div class="card">
      <p>This week's goals:</p>
      {!submitted ? (
          <div className="card">
            <input
              type="text"
              placeholder="E.g., Reduce meat consumption"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
            <label>Target (Times per week/month)</label>
            <input
              type="number"
              placeholder="E.g., 10"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
            />
            <button className="w-full" onClick={handleGoalSubmit}>
              Submit
            </button>
          </div>
        ) : (
          <div className="card">
            <h2 className="text-lg font-semibold">{goal}</h2>
            {/* <Progress value={(progress / target) * 100} className="w-full" /> */}
            <p className="text-sm">{getMotivationalMessage()}</p>
            <div className="flex space-x-2">
              <button onClick={() => handleProgressUpdate(1)}>+1</button>
              <button onClick={() => handleProgressUpdate(5)}>+5</button>
            </div>
            <p className="text-sm">
              Progress: {progress}/{target}
            </p>
          </div>
        )}
    </div>
  )
}

function Resources() {
  return (
    <div class="page">
      <h1>Resource Library:</h1>
      <p>Reducing your carbon footprint doesn't have to be overwhelming. Small, consistent changes in daily habits can make a significant impact on the environment. Here are some practical ways to live more sustainably:</p>
      
      <p>1. Transportation</p>
      <p>🚶 Walk, Bike, or Use Public Transit – Reduce reliance on personal vehicles. Walking and biking produce zero emissions and improve health.</p>
      <p>🚗 Carpool or Rideshare – Share rides to cut down on fuel consumption and reduce traffic congestion. Consider using services like BlaBlaCar or local carpooling apps.</p>
      <p>🚘 Drive Efficiently – If driving is necessary, keep your tires properly inflated, avoid rapid acceleration, and use cruise control for better fuel efficiency.</p>
      <p>🔌 Go Electric or Hybrid – Consider an electric (EV) or hybrid vehicle to reduce emissions. Look for tax incentives or rebates in your area.</p>

      <p>2. Energy Efficiency at Home    </p>
      <p>💡 Switch to LED Bulbs – LED lights use up to 75% less energy and last longer than traditional bulbs. Switch your bulbs to save energy.</p>
      <p>🔌 Unplug Devices When Not in Use – Many electronics consume energy even when turned off. Use a smart power strip to cut phantom loads.</p>
      <p>🌞 Use Renewable Energy – If possible, install solar panels or choose a green energy plan from your utility provider.</p>
      <p>🌡 Optimize Heating & Cooling – Use a programmable thermostat, seal drafts, and insulate your home to reduce energy waste.</p>    

      <p>3. Sustainable Eating Habits</p>
      <p>🥦 Eat More Plant-Based Meals – Reducing meat and dairy consumption can significantly lower greenhouse gas emissions. Try “Meatless Mondays.”    </p>
      <p>🛍 Buy Local & Seasonal – Support local farmers and reduce the carbon footprint associated with transporting food long distances.    </p>
      <p>🍽 Minimize Food Waste – Plan meals, store food properly, and compost scraps instead of throwing them away.    </p>

      <p>4. Eco-Friendly Shopping & Waste Reduction </p>
      <p>♻️ Reduce, Reuse, Recycle – Follow the three Rs, focusing on reducing waste before recycling.    </p>
      <p>🛒 Bring Your Own Bags & Containers – Use reusable shopping bags, water bottles, coffee cups, and lunch containers.    </p>
      <p>📦 Opt for Minimal & Sustainable Packaging – Choose products with compostable or recyclable packaging.    </p>
      <p>🌿 Support Ethical Brands – Look for companies committed to sustainability and fair labor practices.    </p> <br></br>

      <p>5. Water Conservation</p>
      <p>🚿 Take Shorter Showers – Save water and energy by limiting shower time to 5-10 minutes.      </p>
      <p>🚰 Fix Leaks & Install Water-Efficient Fixtures – A dripping faucet can waste gallons of water over time. Use low-flow showerheads and toilets.      </p>
      <p>🌱 Collect Rainwater – Use rain barrels for watering plants instead of tap water.      </p>

      <p> 6. Sustainable Travel & Leisure </p>
      <p>✈️ Offset Your Carbon Emissions – If flying is necessary, purchase carbon offsets through organizations like Gold Standard or Cool Effect.      </p>
      <p>🏕 Choose Eco-Friendly Accommodations – Stay at hotels or Airbnbs with sustainability initiatives.      </p>
      <p>🌍 Practice Responsible Tourism – Respect local cultures, avoid single-use plastics, and support sustainable businesses.      </p>

      <p>Adopting an eco-friendly lifestyle is a journey, not a destination. Start with small changes, and over time, they’ll become second nature. Every effort—no matter how small—contributes to a healthier planet! 🌍♻️</p>
    </div>
  )
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <ColorChangeBtn></ColorChangeBtn>
      <div class="layout">
        <LogCard></LogCard>
        <SummaryCard></SummaryCard>
        <GoalCard></GoalCard>
      </div>
      <Resources></Resources>
    </div>
  )
}

export default App
