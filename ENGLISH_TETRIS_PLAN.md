# 🎮 English Learning Tetris - Implementation Plan

## 📋 Project Overview

**Tetris educativo** onde os blocos contêm letras e o jogador forma palavras em inglês para ganhar pontos.

---

## ✅ Implementation Checklist

### 🚀 Phase 1: Project Setup
- [x] Create Vite + React + TypeScript project
- [x] Install Tailwind CSS 4
- [x] Setup ESLint and Prettier
- [x] Create folder structure (components, hooks, utils, types)
- [x] Initialize Git repository
- [x] Create initial README
- **Note**: Install libs (Zustand, Framer Motion, etc.) only when needed

---

### 🎮 Phase 2: Core Tetris Game
- [ ] Create game board component (10x20 grid)
- [ ] Define tetromino shapes (I, O, T, S, Z, J, L)
- [ ] Implement piece movement (left, right, down)
- [ ] Implement piece rotation (clockwise/counter-clockwise)
- [ ] Add collision detection (walls, floor, other pieces)
- [ ] Implement automatic falling (game loop)
- [ ] Add game state management (playing, paused, game over)

---

### 🔤 Phase 3: Letter System
- [ ] Create letter frequency data (based on English)
- [ ] Generate random letters for each block
- [ ] Display letters inside blocks
- [ ] Create "next piece preview" with letters
- [ ] Ensure good vowel/consonant distribution

---

### 📝 Phase 4: Word Formation
- [ ] Detect completed lines
- [ ] Extract letters from completed line
- [ ] Validate words using Dictionary API
- [ ] Display found words with animation
- [ ] Remove completed lines
- [ ] Add word definitions (tooltip or modal)

---

### 🎯 Phase 5: Scoring & Progression
- [ ] Calculate score (line clear + word bonus)
- [ ] Add difficulty multiplier (word length/level)
- [ ] Implement combo system (consecutive words)
- [ ] Add level progression (speed increases)
- [ ] Display score, level, and lines cleared

---

### 🎓 Phase 6: Educational Features
- [ ] Create vocabulary database (1000+ words by level)
- [ ] Add hint system (suggest possible words)
- [ ] Track words learned (localStorage)
- [ ] Show learning progress statistics
- [ ] Add daily challenge mode (optional)

---

### 🎨 Phase 7: UI/UX Polish
- [ ] Create header and footer
- [ ] Add game controls UI (start, pause, restart)
- [ ] Create modals (game over, pause, help)
- [ ] Add dark mode toggle
- [ ] Make responsive (mobile, tablet, desktop)
- [ ] Add loading states

---

### ✨ Phase 8: Animations & Sound
- [ ] Add piece movement animations
- [ ] Add line clear animation
- [ ] Add word found celebration effect
- [ ] Add sound effects (move, rotate, drop, clear, word found)
- [ ] Add level up animation
- [ ] Optimize performance

---

### 🧪 Phase 9: Testing
- [ ] Write unit tests (game logic, word validation)
- [ ] Write integration tests (game flow)
- [ ] Test on different devices
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Fix bugs

---

### 📦 Phase 10: Deployment
- [ ] Build production version
- [ ] Optimize bundle size
- [ ] Deploy to Vercel
- [ ] Test production build
- [ ] Add analytics (optional)

---

## 🛠 Tech Stack

```
Frontend: React 19 + TypeScript 5.9
Build: Vite 7
Styling: Tailwind CSS 4
State: Zustand 5
Animations: Framer Motion 12
API: Free Dictionary API
```

---

## 📁 Basic Folder Structure

```
src/
├── components/
│   ├── game/          # Board, Block, Tetromino, Controls
│   ├── ui/            # ScoreBoard, Modals, Buttons
│   └── learning/      # WordValidator, Hints, Progress
├── hooks/             # useGame, useKeyboard, useDarkMode
├── services/          # wordService, scoreCalculator
├── data/              # vocabulary, tetrominoes, letterFrequency
├── types/             # game.types.ts, word.types.ts
├── utils/             # collision, rotation, helpers
└── constants/         # gameConfig, colors
```

---

## 🎯 Core Features Priority

### Must Have (MVP)
✅ Tetris gameplay with 7 pieces
✅ Letter blocks
✅ Word validation
✅ Basic scoring
✅ Game over detection

### Should Have
✅ Dark mode
✅ Sound effects
✅ Animations
✅ Hints system
✅ Progress tracking

### Nice to Have
⭐ Daily challenges
⭐ Leaderboard
⭐ Achievements
⭐ PWA support

---

## 🎮 Game Mechanics Summary

1. **Blocos caem** com letras aleatórias
2. **Jogador move/rotaciona** os blocos (teclado/touch)
3. **Linha completa** = extrai as letras
4. **Valida palavras** em inglês (API)
5. **Palavra válida** = pontos + animação
6. **Progresso de nível** = velocidade aumenta
7. **Game Over** = blocos atingem o topo

---

## 🎨 Design Guidelines

### Colors
- Tetrominoes: Cyan, Yellow, Purple, Green, Red, Blue, Orange
- Background: White (light) / Dark blue (dark)
- Text: Gray scale with good contrast
- Accents: Indigo/Purple for UI elements

### Typography
- Font: Inter (sans-serif) or similar
- Letters on blocks: Bold, large, high contrast
- UI text: Regular weight

### Spacing
- Grid cells: Square (30-40px)
- Padding: 16-24px for containers
- Gap: 8-12px between elements

---

## 🔤 Letter Frequency (English)

```
High frequency: E, T, A, O, I, N, S, H, R
Medium: D, L, C, U, M, W, F, G, Y, P, B
Low: V, K, J, X, Q, Z
```

---

## 🏆 Scoring Example

```
Line clear: 100 points
Word "CAT": 200 × 3 = 600 points
Total: 700 points

Word "BEAUTIFUL": 200 × 9 × 3 (difficulty) = 5,400 points
With 2x combo: 5,400 × 1.5 = 8,100 points
```

---

## 🎯 Success Criteria

- ✅ Game is playable and fun
- ✅ Word validation works correctly
- ✅ Responsive on all devices
- ✅ 60 FPS smooth animations
- ✅ Clear instructions for new players
- ✅ Professional commit history (semantic commits)
- ✅ Deployed and accessible online

---

## 📚 Resources

- **Dictionary API**: https://dictionaryapi.dev/
- **Tetris Guide**: https://tetris.wiki/Tetris_Guideline
- **Vocabulary Lists**: Oxford 3000 words
- **React Docs**: https://react.dev/
- **Tailwind**: https://tailwindcss.com/

---

## 🚦 Getting Started

1. Setup project
2. Build basic Tetris (no letters yet)
3. Add letters to blocks
4. Implement word validation
5. Add scoring and polish
6. Deploy!

---

## 📝 Commit Examples

```bash
feat: initialize project with vite and react
feat: implement game board and grid
feat: add tetromino shapes and movement
feat: implement collision detection
feat: add letter generation system
feat: integrate word validation API
feat: implement scoring system
feat: add dark mode support
feat: add animations and sound effects
docs: update README with instructions
chore: deploy to vercel
```

---

**Good luck! 🚀**

Build incrementally, commit often, and test frequently!
