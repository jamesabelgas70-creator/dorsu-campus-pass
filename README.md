# DOrSU Digital Campus Pass

ITMSD 1 — Laboratory Exercise 03: React Native Fundamentals  
**Student:** Angel James M. Abelgas  
**Toolchain:** Expo SDK 57 · React 19 · TypeScript

A mobile digital campus pass for Davao Oriental State University demonstrating React Native components, TypeScript props, `useState`, and Flexbox layout.

## Features

- Institutional header (DOrSU / FCET banner)
- Student ID card with avatar, program info, and ACTIVE / SUSPENDED badge
- Gate scan counter (`+1 Scan at Gate` / `Reset Scans`)
- Pass suspension toggle
- Peer props demo (reusable `StudentCard` with different data)

## Project structure

```
dorsu-campus-pass/
├── App.tsx                      # Root screen + state
├── assets/avatar.jpg            # Student photo
└── src/
    ├── types/student.ts         # StudentProfile, StatusBadgeProps
    └── components/
        ├── Header.tsx
        ├── StudentCard.tsx
        ├── StatusBadge.tsx
        └── ScanCounter.tsx
```

## Prerequisites

- Node.js LTS (v18+)
- npm
- Expo Go app on your phone (or Android emulator)

## Setup & run

```bash
npm install
npx expo start
```

Then:

1. Scan the QR code with **Expo Go** (Android) or the Camera app (iOS), **or**
2. Press `w` in the terminal to open in a web browser

### Other scripts

```bash
npm run android   # Expo Go / Android
npm run web       # Browser
```

## Lab modules covered

| Module | Topic |
|--------|--------|
| 1 | Expo scaffolding & Fast Refresh |
| 2 | Core primitives (`View`, `Text`, `Image`, `Pressable`) |
| 3 | Modular components & TypeScript props |
| 4 | Dynamic state with `useState` |
| 5 | `StyleSheet` & Flexbox layout |
| 6 | Full synthesis app + peer props demo |

## Course

**ITMSD 1** — Fundamentals of Mobile Design and Tools  
Davao Oriental State University · FCET · AY 2026–2027
