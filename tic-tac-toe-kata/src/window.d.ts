import type { Game } from './app.ts'

declare global {
  interface Window {
    game: Game
    addPlayerMove: (e: number) => void
  }
}
