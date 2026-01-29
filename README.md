# Task Slayer ⚔️ | RPG Productivity

**Turn your to-do list into an epic battle!**

## 📖 Project Title & Description
**Task Slayer** is a gamified productivity application that transforms mundane task management into an engaging RPG experience. Instead of simply checking off boxes, you "slay" tasks to deal damage to monsters, earning kills and progressing through increasingly difficult bosses.

## ❓ Problem Statement
Traditional to-do lists can be boring and demotivating. Many users struggle to find the motivation to complete their daily tasks. **Task Slayer** solves this by adding an element of fun and immediate gratification—every completed task contributes to defeating a monster, providing a sense of accomplishment and visual reward.

## 🚀 Features Implemented
- **Gamified Task Completion**: Completing a quest (task) deals damage to the current monster.
- **Dynamic Boss System**: Face a variety of monsters like the *Dark Dragon*, *Slime King*, and *Ghost of Procrastination*.
- **RPG Mechanics**:
  - **HP System**: Monsters have health bars that deplete as you complete tasks.
  - **Critical Hits**: Random chance to deal double damage!
  - **Difficulty Scaling**: Monsters get tougher as your kill count increases.
- **Visual Effects**:
  - Screen shake on damage.
  - Floating damage numbers.
  - Flash effects when monsters take hits.
  - Death animations.
- **Interactive UI**: Real-time updates for health bars, kill counts, and boss names.

## 💻 DOM Concepts Used
This project serves as a practical demonstration of core JavaScript DOM manipulation concepts:
1.  **Element Selection**: Using `getElementById` to target UI components (health bars, input fields, game container).
2.  **Dynamic Element Creation**: Using `createElement` and `appendChild` to add new quests and floating damage text to the DOM.
3.  **Event Handling**:
    - `click` events for buttons (Add Quest, Slay).
    - `keypress` events for adding tasks via the "Enter" key.
4.  **Content Manipulation**: Updating `textContent` and `innerHTML` to change monster stats and quest text.
5.  **Style Manipulation**:
    - dynamic `style.width` for the HP bar.
    - `style.transform` for animations.
    - `classList.add/remove` for triggering CSS animations (shake, flash).
6.  **Timing functions**: Using `setTimeout` to handle animation sequences and monster respawn delays.

## 🛠️ Steps to run the project
1.  Clone or download the project folder.
2.  Navigate to the project directory.
3.  Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).
4.  Start adding quests and slaying monsters!

## ⚠️ Known limitations
-   **No Data Persistence**: Tasks and game progress (kills, current boss) are lost when the page is reloaded (uses local session only).
-   **Single Player**: The game is client-side only; no leaderboards or user accounts.
-   **Basic Difficulty Scaling**: Difficulty increases linearly with kill count.
