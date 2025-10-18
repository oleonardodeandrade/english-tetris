# 🎮 English Learning Tetris

A gamified English learning experience combining classic Tetris mechanics with vocabulary building.

## 🎯 About

Play Tetris with letter-based blocks and form English words to score points and learn new vocabulary!

## ✨ Features

- 🎮 Classic Tetris gameplay with 7 tetromino shapes
- 🔤 Letter-based blocks with smart frequency distribution
- 📝 Word formation and validation using Dictionary API
- 🎓 Learn 1000+ English words categorized by level (A1-C2)
- 🏆 Scoring system with combos and difficulty multipliers
- 🌓 Dark mode support
- 📱 Fully responsive design

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript 5.9
- **Build**: Vite 7
- **Styling**: Tailwind CSS 3
- **State**: Zustand (when needed)
- **Animations**: Framer Motion (when needed)
- **API**: Free Dictionary API

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── game/          # Board, Block, Tetromino
│   ├── ui/            # ScoreBoard, Modals, Buttons
│   └── learning/      # WordValidator, Hints, Progress
├── hooks/             # Custom React hooks
├── services/          # API services and game logic
├── data/              # Vocabulary and game data
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── constants/         # Game configuration
```

## 🎮 How to Play

- **← →**: Move piece left/right
- **↓**: Soft drop
- **↑**: Hard drop
- **Space**: Rotate piece
- **P**: Pause game

Form words with completed lines to score extra points!

## 📝 Development

This project follows professional Git workflow:
- `main`: Production-ready code
- `develop`: Integration branch
- `feat/*`: Feature branches
- `fix/*`: Bug fix branches

## 📄 License

MIT

## 👨‍💻 Author

Leonardo Andrade
