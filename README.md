# Pathpal: Web-Based Indoor Navigation

## Demo link:

Access my site at: [https://pathpal-navigation.azurewebsites.net](https://pathpal-navigation.azurewebsites.net)

## Table of Content:

- [Pathpal: Web-Based Indoor Navigation](#pathpal-web-based-indoor-navigation)
  - [Demo link:](#demo-link)
  - [Table of Content:](#table-of-content)
  - [About The App](#about-the-app)
  - [Screenshots](#screenshots)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Status](#status)
  - [Technical Background](#technical-background)
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

`React` `Vite` `Typescript` `TailwindCSS` `SVG` `Dijkstra`

## Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:Œ
`npm install`

To Run Test Suite:  
`npm test`

To Start Server:

`npm start`

Upon running these commands, your default web browser should open the project running on `localhost` with the port `5173`

## Status

While this project stands as a fully functional prototype, it is continuously evolving. It aims to inspire future innovations, with plans to revisit and potentially integrate more advanced positioning technologies as they mature.

## Technical Background

The map serves as the cornerstone of our web-based indoor navigation application. It's designed to be both versatile and adaptable, accommodating various indoor layouts with precision and ease. Here's an insight into the technical foundation of the map functionality and how developers can customize it for their specific needs:

### Core Map Technology

- **SVG as the Default Format**: The application primarily uses an SVG (Scalable Vector Graphics) file for the map due to its scalability and ease of manipulation. SVGs allow for interactive and dynamic rendering of indoor spaces, making them ideal for detailed navigation paths.
- **Support for Various Image Formats**: While SVG is the default, the system is designed to accommodate any image format (e.g., PNG, JPEG) as a map background. This flexibility ensures that developers can use existing floor plans or maps without needing to convert them to SVG. However, the primary interactive and navigational features are optimized for SVG.

### Path Drawing and Wayfinding

- **Path Drawing**: For navigation to function, paths must be defined within the map. These paths represent walkable routes and are crucial for the wayfinding algorithm. In SVG files, paths can be drawn and edited directly, allowing for precise control over navigation routes.
- **Wayfinding Algorithm**: The application utilizes the Dijkstra algorithm for calculating the shortest path between points of interest (POIs) on the map. This algorithm operates on the network of paths drawn on the map, ensuring efficient and accurate navigation.

### Customizing the Map

- **Editing Tools**: Developers can use vector graphic editing tools (e.g., Adobe Illustrator, Boxy SVG) to modify the SVG map. This includes updating layouts, adding/removing POIs, and adjusting paths.
- **Adapting to New Formats**: If using a non-SVG background image, developers should overlay an SVG layer for paths and POIs. This hybrid approach allows the use of detailed backgrounds with scalable vector paths for interaction.

## Credits

This project was inspired by my diploma work and the continuous support from my mentors and peers.

## License

This project is open source and available under the MIT License.
