# El Pollo Loco

El Pollo Loco is a browser-based 2D jump 'n' run game built with vanilla JavaScript and the HTML5 Canvas API, created as a project during the Developer Akademie web development course. Guide Pepe through the desert, collect coins and bottles, and defeat the chicken boss.

## Gameplay

- Move left/right and jump to navigate the level
- Collect **coins** and **bottles** scattered across the level
- Throw bottles at chickens and the end boss to defeat them
- Avoid enemy attacks — track your health via the status bars
- Beat the end boss to win the game

## Controls

| Key | Action |
|-----|--------|
| ← / → | Move left / right |
| Space | Jump |
| D | Throw bottle |

On touch devices, on-screen buttons are available.

## Tech Stack

- HTML5 Canvas
- JavaScript (vanilla, object-oriented with ES6 classes)
- CSS3

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/lcotar/El-Pollo-Loco.git
   ```
2. Open `index.html` in a browser, ideally via a local server (e.g. the VS Code Live Server extension).

## Project Structure

```
├── assets/       # audio, fonts, and images
├── classes/      # game object classes (character, chicken, endboss, world, ...)
├── levels/       # level definitions
├── style/        # stylesheets
├── scripts/      # game bootstrap / helper scripts
└── index.html    # game entry point
```

## License

This project was created for educational purposes as part of the Developer Akademie curriculum.
