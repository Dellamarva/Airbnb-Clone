import React from "react"
import './App.css';
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from './data.js'
console.log(data)

export default function App() {
    const cards = data.map(item => { //Makes multiple components
    return (
      <Card 
        key={item.id} //Unique Identifier
        /*item={item} //JSON */
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}

