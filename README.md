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

<table style="border-radius: 10px;  border: 1px solid gray;">
  <tr >
    <td align="center"><img src="https://private-user-images.githubusercontent.com/113889912/317519555-75f0e689-b7b0-44b5-b5d9-7a3072b79f39.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE1NzQ1MTcsIm5iZiI6MTcxMTU3NDIxNywicGF0aCI6Ii8xMTM4ODk5MTIvMzE3NTE5NTU1LTc1ZjBlNjg5LWI3YjAtNDRiNS1iNWQ5LTdhMzA3MmI3OWYzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyN1QyMTE2NTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMTFmZTY4YjNlZDE2YWY3MDhkODIzOGM4NmM1OGQzZDdiYzlmODZjOWM3YjcyOTFmN2UyNTJiM2MzNDM1N2JjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sVxDuZ27U3sdSOd0B2Wv8E59v4H5I5izLEN4PpN1Hj0"/></td>
   <td align="center"><h3 >Displaying Object Information on Click</h3></td>
  </tr>
    <tr>
    <td align="center"><img src="https://private-user-images.githubusercontent.com/113889912/317516103-91c0a1d7-41e2-4df6-bf39-47849a2b44ad.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE1NzM2OTYsIm5iZiI6MTcxMTU3MzM5NiwicGF0aCI6Ii8xMTM4ODk5MTIvMzE3NTE2MTAzLTkxYzBhMWQ3LTQxZTItNGRmNi1iZjM5LTQ3ODQ5YTJiNDRhZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyN1QyMTAzMTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNzUwOTJkYTg2ZWVlZTQzMTg1ZGFlNTFjNDA5NTU3NGEyYTU0MjA2ZjVlZjFiNWQ1Njk3MGM5NjA5MTYyMzhmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.XE6BBXPGhDLpHV46oMwC8hys-tm30IDRWQZNHndI8bQ"/></td>
    <td align="center"><h3>Demonstration of Shortest Path Calculation</h3></td>
  </tr>
</table>

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

Follow these steps to get the project up and running:

1. **Clone the Repository**: Use your preferred Git client to clone this repository to your local machine.

2. **Install Node.js**: This project requires Node.js. If you don't have Node.js version 21 installed, you can download and install it from [nodejs.org](https://nodejs.org/).

3. **Install Dependencies**: Navigate to the project directory in your terminal and run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Start the Application**: Once the dependencies are installed, you can start the application by running the following command in your terminal:

   ```bash
   npm run dev
   ```

5. **Start the Server**: In a separate terminal window, start the server by running:

   ```bash
   npm run server
   ```

6. **Run Both at The Same Time**: If you want to start both the application and the server at the same time, you can run the following command:

   ```bash
   npm run dev:all
   ```

After running these commands, your default web browser should automatically open and navigate to `localhost:5173`, where you can see the running application. The server will be running on `localhost:8080`.

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

- **Editing Tools**: Developers have the option to utilize vector graphic editing tools such as Adobe Illustrator or Boxy SVG for modifying the SVG map. This modification can involve updating layouts, adding or removing Points of Interest (POIs), and adjusting paths. Refer to the screenshot below to see an example of map editing using Boxy SVG. For converting SVG to JSX, [Transform Tools](https://transform.tools/) can be a useful resource.

<img src="https://private-user-images.githubusercontent.com/113889912/317502714-0fe78ce5-60d9-46b9-aef3-8bfd5868b570.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE1NzM4NjIsIm5iZiI6MTcxMTU3MzU2MiwicGF0aCI6Ii8xMTM4ODk5MTIvMzE3NTAyNzE0LTBmZTc4Y2U1LTYwZDktNDZiOS1hZWYzLThiZmQ1ODY4YjU3MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyN1QyMTA2MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYzAyNmI0OGM0MDBlNjIyZDM3Mjc1NTk0NDJmMTY1Y2I0OGRiNGMzNjQ3YjA0NGE0Y2M1MzhhOGVlNmY5ZTk0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.z9KDfaHARXmm4BMSAXEaHyJ9bA0Zfv6-LT-QQdDabBA">
## Credits

This project was inspired by my diploma work and significantly influenced by the support of mentors, peers, and resources like [maciejb2k's pathfinding app](https://github.com/maciejb2k/pathfinding_app).

## License

Pathpal is open-sourced under the MIT License. Contributions and feedback are welcome!
