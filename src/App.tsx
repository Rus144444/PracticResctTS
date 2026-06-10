import { useState } from "react"

export function App() {
  console.log("App rendering")
  const [count, setCount] = useState(10)
 
  const handleClick = () => {
    setCount(count + 1)
  }
 
  return (
    <>
      <h1>Vite + React {count}</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  )
}