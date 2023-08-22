import React from 'react';
import investment from './../assets/img/React/investment-tracker.jpeg';
import times from './../assets/img/React/times.png';
import coffee from './../assets/img/React/coffee-shop.png';
import solar from './../assets/img/JavaScript/solar.png';
import dino from './../assets/img/JavaScript/dinasour.png';
import pizza from './../assets/img/JavaScript/pizza.png';
import trip from './../assets/img/Group/trip.png';
import university from './../assets/img/Group/university.png';
import awesome from './../assets/img/Group/awesome.png';
import console from './../assets/img/C#/console.png';
import shop from './../assets/img/C#/shop.png';
import animal from './../assets/img/C#/animal.png';
import { FiMail } from "react-icons/fi";

const projectData = [
  {
    category: 'JavaScript/CSS',
    projects: [
      {
        name: '🪐 Super-Galactic-Age-Calculator 🪐',
        image: solar,
        description: "It will serve as a website to determine a user's age based on a planet's solar years which varies from planet to planet. And demonstrate uses of test-driven development, understanding of the Red, Green, Refactor workflow.",
        link:'https://github.com/nancyliqn91/Super-Galactic-Age-Calculator'
      },
      {
        name: '🦕 Guess Your Dino 🦕',
        image: dino,
        description: 'It will serve as a website to create a dinosaur-themed game where user needs to guess the name of the dinosaur in 7 guesses. Users guess letter by letter, and after 7 guesses, the final answer from the dinosaur themed Lorem Ipsum API will appear.',
        link:'https://github.com/nancyliqn91/GuessYourDino'
      },
      {
        name: '🍕Pizza Parlor🍕',
        image: pizza,
        description: 'It will serve as a website for a pizza company where a user can choose one or more individual toppings (green pepper, cheese, etc.), a size to order a pizza, and see the final cost.',
        link:'https://nancyliqn91.github.io/pizza-parlor/'
      },
    ]
  },
  {
    category: 'C# and .NET',
    projects: [
      {
        name: "💻 Pierre's Bakery 💻",
        image: console,
        description: 'It will serve as a console app to checkout bread and pastry in the bakery shop. A user should be able to enter the amount of bread and pastry, and get the total cost of the order.This is my first c# project which demonstrates uses of TDD workflow.',
        link:'https://github.com/nancyliqn91/Pierre-Bakery',
      },
      {
        name: "🧀 Pierre's Sweet and Savory Treats 🧀",
        image: shop,
        description: ' my c# and .NET project which builds an application with user authentication and a many-to-many relationship to market sweet and savory treats.A user should be able to log in and log out. Only logged in users have create, update, and delete functionality. All users are able to have read functionality.',
        link:'https://github.com/nancyliqn91/Pierre-Sweet-and-Savory-Treats',
      },
      {
        name: '🐶 AnimalShelterAPI 🐈',
        image: animal,
        description: 'My C# and .NET project which builds an API with two versions V1 and V2 that allows all users to use data in this animal shelter. A user should be able to GET and POST animals, search animals by species , name, age in different page by optionally setting the parameters with V1 and V2 version.',
        link:'https://github.com/nancyliqn91/AnimalShelterAPI.Solution'
      }
    ]
  },

  {
    category: 'React',
    projects: [
      {
        name: '💰 Investment-Tracker 💰',
        image: investment,
        description: 'React Capstone Project-An full CRUD application in React that tracks stocks, options, indices, forex, and crypto with bar and line charts for the aggregates with the help of ChatGPT or by the search bar.',
        link:''
      },
      {
        name: '📰 NYTimes - Mobile 📰',
        image: times,
        description: 'An Practice React Native project which use NY Times API and a React Native front end to see the top stories on your mobile device. The project is bootstrapped with npx create-expo-app.',
        link:'https://github.com/nancyliqn91/NYTimes-Iphone'
      },
      {
        name: '☕ Coffee-Shop-Inventory-Tracker ☕',
        image: coffee,
        description: 'An full CRUD application in React that tracks inventory for a local coffee shop to track how much of its coffee beans are remaining as it gets sold.',
        link: 'https://nancyliqn91.github.io/Coffee-Shop-Inventory-Tracker/'
      }
    ]
  },

  {
  category: 'Group Projects',
    projects: [
      {
        name: '🏖 Trip Planner 🏖',
        image: trip,
        description: "A web application that uses Leaflet's open source map to plan vacation or trip destinations and the SeatGeek API to view popular nearby events. Users can pin a location on the interactive map to see the geocoordinates of a location as well as a list of concerts, sports games, and other popular events in the area. After filling out the submission form, the location information will be added to the trip itinerary displayed below. .",
        link:'https://github.com/nancyliqn91/trip-planner'
      },
      {
        name: '🐄 AI University 🐄',
        image: university,
        description: 'C# team week project which creates a fully-functional MVC APP for college campus virtual brochure with dorms, classes, professors, clubs and a student body.',
        link:'https://github.com/nancyliqn91/AI-University.Solution'
      },
      {
        name: '📱 Awesome-Project 📱',
        image: awesome,
        description: 'Use my C# backend API and a React Native front end to see the travel reviews world wide on your mobile device. The project is bootstrapped with npx create-expo-app AwesomeProject.',
        link:'https://nancyliqn91.github.io/pizza-parlor/'
      },
    ]
  },
  
]

function Projects() {
  return (
    <div id="projectsSection">
      {projectData.map((category, index) => (
        <div key={index}>
          <h3 className="project-category">{category.category}</h3>
          <div className="project-list">
            {category.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="project-card">
                <img src={project.image} alt={project.name} />
                <div className="project-details">
                  <p>{project.description}</p>
                  <p><a href={project.link}>{project.name}</a></p>            
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <h2></h2>
      <h2 className="project-category">Want to see more projects? Take a look at my <a href="https://github.com/nancyliqn91">Github</a> !</h2>
      <h2 className="project-category">Want to see more information? Here is my <a href="https://www.linkedin.com/in/qian-li-calla ">LinkedIn</a> !</h2>
      <h2 className="project-category"> How abot a talk ? Let's connect  
      <a href="mailto: nancyliqn91@gmail.com">
      <button onClick={() => console.log('Contact button clicked')} > <FiMail size={38} /> </button> </a> </h2>

      <h2 className="project-category"> Contact Me 👇 !</h2>
    </div>
  );
}

export default Projects;