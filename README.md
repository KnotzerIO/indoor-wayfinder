# Pathpal: Web-Based Indoor Wayfinder
Pathpal is an innovative web application designed to revolutionize indoor navigation. Using interactive maps and efficient pathfinding algorithms, it offers an intuitive solution for navigating complex indoor spaces.
**Demo:** [Visit Pathpal](https://pathpal-navigation.azurewebsites.net)

## Table of Content:

- [Pathpal: Web-Based Indoor Wayfinder](#pathpal-web-based-indoor-wayfinder)
  - [Table of Content:](#table-of-content)
  - [About The App](#about-the-app)
  - [Screenshots](#screenshots)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Status](#status)
  - [Technical Insights](#technical-insights)
    - [Map Technology](#map-technology)
    - [Pathfinding](#pathfinding)
    - [Core Map Technology](#core-map-technology)
    - [Path Drawing and Wayfinding](#path-drawing-and-wayfinding)
    - [Customizing the Map](#customizing-the-map)
  - [Credits](#credits)
  - [License](#license)

## About The App

This project is a variation of my diploma project, focusing on an interactive map for indoor wayfinding and navigation. It features an interactive SVG map and utilizes the Dijkstra algorithm to calculate the shortest path to points of interest (POIs). Originally, the application experimented with indoor positioning using BLE technology, but due to ithe experimental nature of the Bluetooth Web API, it has been omitted in this variation. Instead of a traditional database, this version uses a JSON server for development purposes.

## Screenshots

//TODO

## Features

- **Interactive SVG Maps**: Navigate complex indoor spaces with ease.
- **Dijkstra Pathfinding**: Calculates the shortest path to your destination.
- **Responsive Design**: Optimized for any device and screen size.
- **JSON Server**: Simplifies backend development for prototyping.
- **Customizable POIs**: Edit names and categories of points of interest.
- **Pinch-to-Zoom**: Effortlessly zoom in and out on maps with touch gestures.

## Technologies

Pathpal is built with the latest web technologies for speed, efficiency, and adaptability:

- React
- Vite
- TypeScript
- TailwindCSS
- SVG
- Dijkstra's Algorithm
- JSON Server

## Setup

Clone down this repository.
**Install Node.js**: If you don't have Node.js version 21, download and install it from [nodejs.org](https://nodejs.org/).

Installation:
`npm install`

To Run Test Suite:  
`npm test`

To Start Server:

`npm start`

Upon running these commands, your default web browser should open the project running on `localhost` with the port `5173`

## Status

Pathpal is currently a functional prototype. Future updates may include a map editor for enhanced customization.

## Technical Insights

### Map Technology

- **SVG Format**: The map is primarily SVG for its flexibility and interactive capabilities, ideal for detailed navigation.
- **Image Format Support**: Supports various formats like PNG and JPEG for map backgrounds, with interactive features best suited for SVG.

### Pathfinding

- **Routes Definition**: Paths within the map represent navigable routes, essential for the Dijkstra algorithm to calculate efficient paths.
- **Dijkstra Algorithm**: Ensures accurate and swift navigation between POIs.


### Core Map Technology

- **SVG as the Default Format**: The application primarily uses an SVG (Scalable Vector Graphics) file for the map due to its scalability and ease of manipulation. SVGs allow for interactive and dynamic rendering of indoor spaces, making them ideal for detailed navigation paths.
- **Support for Various Image Formats**: While SVG is the default, the system is designed to accommodate any image format (e.g., PNG, JPEG) as a map background. This flexibility ensures that developers can use existing floor plans or maps without needing to convert them to SVG. However, the primary interactive and navigational features are optimized for SVG.

### Path Drawing and Wayfinding

- **Path Drawing**: For navigation to function, paths must be defined within the map. These paths represent walkable routes and are crucial for the wayfinding algorithm. In SVG files, paths can be drawn and edited directly, allowing for precise control over navigation routes.
- **Wayfinding Algorithm**: The application utilizes the Dijkstra algorithm for calculating the shortest path between points of interest (POIs) on the map. This algorithm operates on the network of paths drawn on the map, ensuring efficient and accurate navigation.

### Customizing the Map

- **Editing Tools**: Developers can use vector graphic editing tools (e.g., Adobe Illustrator, Boxy SVG) to modify the SVG map. This includes updating layouts, adding/removing POIs, and adjusting paths. See the screenshot below for an example of map editing in action with Boxy SVG.

## Credits

This project was inspired by my diploma work and significantly influenced by the support of mentors, peers, and resources like [maciejb2k's pathfinding app](https://github.com/maciejb2k/pathfinding_app).

## License

Pathpal is open-sourced under the MIT License. Contributions and feedback are welcome!
