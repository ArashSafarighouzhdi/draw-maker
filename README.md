# 🏆 Draw Maker

A simple web application for creating random tournament draws for players or teams.

Draw Maker makes it easy to add players, manage the player list, and create a random first-round tournament draw.

---

## 🎯 Overview

Draw Maker is designed to keep tournament draw creation simple and straightforward.

The user can:

- 👤 Add players or teams
- ✏️ Edit player names
- 🗑️ Delete players
- 🎲 Create a random draw
- 🔀 Randomly distribute BYEs when needed
- 🔄 Start a new draw

---

## ✨ Features

### 👤 Add Players

The user can enter a player or team name and add it to the list.

Example:

    Player 1
    Player 2
    Player 3
    Player 4

---

### ✏️ Edit Players

The user can edit the name of an existing player.

This makes it possible to correct a name without removing the player from the list.

---

### 🗑️ Delete Players

The user can remove a player from the list at any time.

---

### 🎲 Create Draw

After adding players, the user can click **Create Draw**.

The application creates a random first-round tournament draw.

The draw size is based on:

- 8
- 16
- 32
- 64
- 128

If there are not enough players to fill the selected draw size, the remaining positions are filled with randomly distributed BYEs.

Only the first round is displayed.

---

### 🔄 New Draw

After a draw has been created, the user can click **New Draw**.

This clears the current players and the current draw, allowing the user to start again.

---

## 🧩 Components

The application is divided into small components, each with a specific responsibility.

| Component        | Purpose                                     |
| ---------------- | ------------------------------------------- |
| 🏠 `Header`      | Displays the application title and subtitle |
| 👤 `PlayerInput` | Allows the user to add a player or team     |
| 📋 `PlayerList`  | Displays and manages the players            |
| 🎲 `DrawMaker`   | Creates the tournament draw                 |
| 🏆 `Draw`        | Displays the generated draw                 |
| 🔄 `NewDraw`     | Starts a new draw                           |

---

# 🧪 Testing

The project uses:

- ▲ Next.js
- ⚛️ React
- 🟦 TypeScript
- 🎨 Tailwind CSS
- ✨ Lucide React
- 🃏 Jest
- 🧪 React Testing Library

The application is built with Next.js and React, with TypeScript used throughout the project.

Jest and React Testing Library are used for unit and integration testing.

---

## 🔹 Unit Tests

The unit tests check individual components separately.

The tests cover:

- Component rendering
- Text content
- Buttons
- Player lists
- Props
- Disabled buttons
- BYE rendering
- Input changes
- Click events
- Elements that should not be displayed

The tests also use different React Testing Library queries, including:

- `getByRole`
- `getAllBy...`
- `queryBy...`

### 🎯 Events

Different user events are tested, including:

- `change`
- `click`

---

## 🔗 Integration Tests

The integration tests check how multiple components work together through the application state.

### 1️⃣ Add Player

    User enters a player name
            ↓
    Clicks "+ Add"
            ↓
    Player state changes
            ↓
    Player appears in PlayerList

### 2️⃣ Delete Player

    Player is displayed
            ↓
    User clicks Delete
            ↓
    Player state changes
            ↓
    Player disappears from PlayerList

### 3️⃣ Create Draw

    Players exist
            ↓
    User clicks "Create Draw"
            ↓
    Draw state changes
            ↓
    Draw is displayed

These tests focus on user actions and the visible changes that happen in the application.

---

## 📊 Test Results

All tests are currently passing.

    Test Suites: 7 passed, 7 total
    Tests:       24 passed, 24 total

### Test Breakdown

    Unit Tests         21
    Integration Tests   3
    ----------------------
    Total              24

---

## 📁 Test Structure

All tests are located inside the `__test__` directory.

    __test__/
    │
    ├── Header.test.tsx
    ├── PlayerInput.test.tsx
    ├── PlayerList.test.tsx
    ├── Draw.test.tsx
    ├── DrawMaker.test.tsx
    ├── NewDraw.test.tsx
    └── Page.test.tsx

---

## ▶️ Running the Tests

Install the dependencies:

    npm install

Run all tests:

    npm test

Run tests in watch mode:

    npm run test:watch

---

## 🛠️ Testing Approach

The tests are intentionally kept simple and focused on the main functionality of the application.

The tests aim to make it clear:

- What the application should display
- What the user can do
- What happens after a user event
- How state changes affect the interface
- What each component is responsible for

The tests focus on observable behaviour from the user's point of view.

---

## 🏗️ Project Structure

    app/
    ├── components/
    │   ├── Header/
    │   ├── PlayerInput/
    │   ├── PlayerList/
    │   ├── DrawMaker/
    │   ├── Draw/
    │   └── NewDraw/
    │
    ├── page.tsx
    └── types.ts

    __test__/
    ├── Header.test.tsx
    ├── PlayerInput.test.tsx
    ├── PlayerList.test.tsx
    ├── Draw.test.tsx
    ├── DrawMaker.test.tsx
    ├── NewDraw.test.tsx
    └── Page.test.tsx

---

## 🚀 Getting Started

Install the dependencies:

    npm install

Start the development server:

    npm run dev

Open the application in your browser and start adding players.

---

## 🏆 Draw Flow

    Add Players
         ↓
    Manage Players
         ↓
    Create Draw
         ↓
    Random First Round
         ↓
    View Draw
         ↓
    New Draw
         ↓
    Start Again

---

## 👨‍💻 Draw Maker

A simple and focused tournament draw application for players and teams.

The application keeps the draw process simple while providing a clear structure for managing players and testing the main user interactions.

⭐ 26 tests passing — 8 test suites passing
