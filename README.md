# Guess The Highlighted Country Game

A fun and interactive **geography quiz game** built using **React.js** and **Leaflet.js**. Test your knowledge of world countries by identifying the highlighted country on a map.

---

## Features

1. **Interactive Map**:
   - Displays a map with one country highlighted.
   - Centers the map on the highlighted country for better visibility.

2. **Multiple Choice Options**:
   - Four options are provided for each question.
   - One correct answer and three randomly generated incorrect options.

3. **Dynamic Level System**:
   - Each correct answer increases the level by 1.
   - Wrong answers reset the level to 0.

4. **High Score Tracking**:
   - Keeps track of the **highest level** achieved.
   - High score is stored persistently using **localStorage**.

5. **Persistent State**:
   - The current country, options, and level are saved in **localStorage**.
   - Progress and high scores are maintained even after refreshing the page.

6. **Responsive UI**:
   - Clean and modern user interface built with **Tailwind CSS**.
   - Works seamlessly on both desktop and mobile devices.

---

## 🛠️ Technologies Used

- **React.js**: For building the user interface and managing state.
- **Leaflet.js**: For rendering the interactive map and highlighting countries.
- **Tailwind CSS**: For styling and creating responsive designs.
- **LocalStorage**: To persist game progress, high scores, and state across sessions.

---

## 🎮 How to Play
1. Start the game.
2. Look at the highlighted country on the map.
3. Choose the correct country name from the four options provided.
4. Correct Answer:
The level increases by 1.
A new country is highlighted.
5. Wrong Answer:
The level resets to 0.
A new Question appears.
6. Track your High Score:
Your highest level achieved will be displayed and saved.

---

## High Score System
Your highest level is stored locally using localStorage.
If you beat your previous high score, it updates automatically.

---

## Setup Instructions
1. Clone the Repositroy
   ```bash
   git clone https://github.com/Ayu-Rawat/Quiz.git
   cd guess-the-country-game
2. Install Dependencies
   ```bash
   npm install
3. Start the Development Server
   ```bash
   npm start

---

## Demo
https://quiz-ayu-rawats-projects.vercel.app/
