# Pathpal: Web-Based Indoor Navigation

# Interactive Map with Indoor Wayfinding

Website: [https://deepnotes.app](https://deepnotes.app)

This project is a variation of my diploma project, focusing on an interactive map for indoor wayfinding and navigation. It features an interactive SVG map and utilizes the Dijkstra algorithm to calculate the shortest path to points of interest (POIs). Originally, the application experimented with indoor positioning using BLE technology, but due to ithe experimental nature of the Bluetooth Web API, it has been omitted in this variation. Instead of a traditional database, this version uses a JSON server for development purposes.

## Getting Started

This project is developed with React and Vite, offering a fully responsive design to accommodate various devices.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system to use npm (Node Package Manager).

### Installation

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/kno20205/pathpal-indoor-navigation.git
   ```
2. Navigate to the project directory:
   ```
   cd pathpal-indoor-navigation
   ```
3. Install the project dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

Upon running these commands, your default web browser should open the project running on `localhost` with the port `5173`

### Features

- **Interactive SVG Map**: Navigate through the map to find different POIs within an indoor setting.
- **Shortest Path Calculation**: Utilizes the Dijkstra algorithm to find and display the shortest path to your selected POI.
- **Responsive Design**: Whether you're on a desktop, tablet, or mobile device, the application adjusts to your screen size for optimal viewing and interaction.

### Development Tools

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **JSON Server**: Simulates a backend database with a simple JSON file, making it ideal for development and testing.

### Contribution

Feel free to fork this project and contribute to its development. Whether it's adding new features, improving the existing code, or fixing bugs, your contributions are welcome.

For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

### License

This project is open source and available under the [MIT License](LICENSE).
