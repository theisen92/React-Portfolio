import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./card.style.css";

function Card() {
  return (
    <>
      <div className="row">
        <div className="card col-sm">
          <Carousel className="margins" interval={20000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/emp-dir-1.jpg"}
                alt="Employee directory - home page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/emp-dir-2.jpg"}
                alt="Employee directory - search by number"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/emp-dir-3.jpg"}
                alt="Employee directory - search by email"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/emp-dir-4.jpg"}
                alt="Employee directory - search by name"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Employee directory</h5>
            <p className="card-text">
              Website for someone who wants quickly sort through employees at a
              company by filtering name, email or phone number
            </p>
            <a
              href="https://github.com/theisen92/19-Employee-Directory"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github Page
            </a>
            <a
              href="https://theisen92.github.io/19-Employee-Directory/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary site"
            >
              Active site
            </a>
          </div>
        </div>
        <div className="card col-sm">
          <Carousel className="margins" interval={20000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-1.jpg"}
                alt="Food app - adding recipe"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-2.jpg"}
                alt="Food app - added recipe"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-3.jpg"}
                alt="Food app - recipe details"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-4.jpg"}
                alt="Food app - edit recipe"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-5.jpg"}
                alt="Food app - weekly meal plan"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/food-app-6.jpg"}
                alt="Food app - grocery list"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Food app</h5>
            <p className="card-text">
              Website for someone who wants to make and save recipes, weekly
              meal plans and groceries
            </p>
            <a
              href="https://github.com/theisen92/15-food-app"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github Page
            </a>
            <a
              href="https://floating-tundra-66070.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary site"
            >
              Active site
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col-sm">
          <Carousel className="margins" interval={20000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/burger-1.jpg"}
                alt="Employee directory - home page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/burger-2.jpg"}
                alt="Employee directory - search by number"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/burger-3.jpg"}
                alt="Employee directory - search by email"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/burger-4.jpg"}
                alt="Employee directory - search by name"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Burger App</h5>
            <p className="card-text">
              Website for creating and divouring burgers
            </p>
            <a
              href="https://github.com/theisen92/13-Burger"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github Page
            </a>
            <a
              href="https://enigmatic-ravine-61520.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary site"
            >
              Active site
            </a>
          </div>
        </div>
        <div className="card col-sm">
          <Carousel className="margins" interval={20000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/budget-1.jpg"}
                alt="Employee directory - home page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/budget-2.jpg"}
                alt="Employee directory - search by number"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/budget-3.jpg"}
                alt="Employee directory - search by email"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">Budget Tracker</h5>
            <p className="card-text">
              Website for someone on the go who wants to track and update their
              budget in places that might not have internet
            </p>
            <a
              href="https://github.com/theisen92/18-Budget-Trackers"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Github Page
            </a>
            <a
              href="https://warm-sea-16547.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary site"
            >
              Active site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
