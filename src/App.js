import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardData from "./components/CardData";
import Card from "./components/Card";

function App() {
  const cardElements = CardData.map((items) => {
    return (
      <Card

        //Simplar way to add props 
        //{...items}
        
        img={items.img}
        rating={items.rating}
        price={items.price}
        location={items.location}
        title={items.title}
        reviewCount={items.reviewCount}
        openSpout = {items.openSpot}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <section className="cards-list section">
         {cardElements}
      </section>
    </div>
  );
}

export default App;
