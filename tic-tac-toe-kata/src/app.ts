import gameOverAudio from './audio/gameover.wav'
import winAudio from './audio/win.wav'

export type Game = {
  render_board: () => void
  start: () => void
  checkBoardComplete: () => void
  game_loop: () => void
  randomizeStart: () => void
  addComputerMove: (ai_level: string) => void
  minimax: (board: string[], isMaximizing: boolean) => number
  checkWinner: () => void
  check_line: (a: number, b: number, c: number) => boolean
  check_match: () => string
  reset_board: () => void
  muteAudio: () => void
}

type Comparator = (a: number, b: number) => boolean

export function createGame(
  play_board: ('X' | 'O' | '')[] = ['', '', '', '', '', '', '', '', ''],
): Game {
  const player = 'O'
  const computer = 'X'
  let board_full = false
  let ai_level = ''

  const game = {} as Game

  const render_board = () => {
    const board_container = document.querySelector('.play-area') as HTMLElement
    board_container.innerHTML = ''
    play_board.forEach((e, i) => {
      board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
      if (e === player || e === computer) {
        document.querySelector(`#block_${i}`)?.classList.add('occupied')
      }
    })
  }
  game.render_board = render_board

  const configure_ai = () => {
    const ai_select = document.querySelector('#ai_level') as HTMLSelectElement
    ai_level = Array.from(ai_select.options).filter(
      (option) => option.defaultSelected,
    )[0].value
    ai_select.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement
      ai_level = target.options[target.selectedIndex].value
    })
  }

  game.start = () => {
    render_board()
    configure_ai()
  }

  const checkBoardComplete = () => {
    board_full = play_board.every((item) => item !== '')
  }
  game.checkBoardComplete = checkBoardComplete

  const game_loop = () => {
    render_board()
    checkBoardComplete()
    checkWinner()
  }
  game.game_loop = game_loop

  const randomizeStart = () => {
    if (play_board.every((item) => item === '')) {
      // const PLAYER = 0;
      const COMPUTER = 1
      const start = Math.round(Math.random())
      if (start === COMPUTER) {
        addComputerMove(ai_level)
        console.log('COMPUTER STARTED')
      } else {
        console.log('PLAYER STARTS')
      }
    }
  }
  game.randomizeStart = randomizeStart

  window.addPlayerMove = (e) => {
    if (play_board[e] === '' && !board_full) {
      const querySelector = document.querySelector(
        '#ai_level',
      ) as HTMLSelectElement
      querySelector.disabled = true
      play_board[e] = player
      game_loop()
      addComputerMove(ai_level)
    }
  }

  const addComputerMove = (ai_level: string) => {
    if (!board_full) {
      let score = 0
      let compare: Comparator = (a, b) => a > b
      switch (ai_level) {
        case 'hard':
          score = Number.NEGATIVE_INFINITY
          compare = (a, b) => a > b
          break
        case 'easy':
          score = Number.POSITIVE_INFINITY
          compare = (a, b) => a < b
          break
        case 'normal': {
          const guess = Math.random() * 100
          if (guess <= 40) {
            score = Number.POSITIVE_INFINITY
            compare = (a, b) => a < b
          } else {
            score = Number.NEGATIVE_INFINITY
            compare = (a, b) => a > b
          }
          break
        }
      }
      let nextMove = 0
      for (let i = 0; i < play_board.length; i++) {
        if (play_board[i] === '') {
          play_board[i] = computer
          const endScore = minimax(play_board, false)
          play_board[i] = ''
          if (compare(endScore, score)) {
            score = endScore
            nextMove = i
          }
        }
      }
      play_board[nextMove] = computer
      game_loop()
    }
  }
  game.addComputerMove = addComputerMove

  const scores = { X: 1, O: -1, tie: 0 }

  const check_match = (): 'X' | 'O' | 'tie' | '' => {
    for (let i = 0; i < 9; i += 3) {
      if (check_line(i, i + 1, i + 2)) {
        return play_board[i]
      }
    }
    for (let i = 0; i < 3; i++) {
      if (check_line(i, i + 3, i + 6)) {
        return play_board[i]
      }
    }
    if (check_line(0, 4, 8)) {
      return play_board[0]
    }
    if (check_line(2, 4, 6)) {
      return play_board[2]
    }
    checkBoardComplete()
    if (board_full) return 'tie'
    return ''
  }

  const minimax = (board: string[], isMaximizing: boolean) => {
    const res = check_match()
    if (res !== '') {
      return scores[res]
    }
    if (isMaximizing) {
      let bestScore = Number.NEGATIVE_INFINITY
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = computer
          const score = minimax(board, false)
          board[i] = ''
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
      // biome-ignore lint/style/noUselessElse: why not
    } else {
      let bestScore = Number.POSITIVE_INFINITY
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          board[i] = player
          const score = minimax(board, true)
          board[i] = ''
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }
  game.minimax = minimax

  let temp1 = 0
  let temp2 = 0
  let temp3 = 0
  let temp4 = 0
  let temp5 = 0
  let temp6 = 0

  let endMusic: HTMLAudioElement | null = null //the Audio object for the music at the end of the game

  const checkWinner = () => {
    const res = check_match()
    let playerstat1 = 0
    let computerstat1 = 0
    let loss1 = 0
    let loss2 = 0
    let draw1 = 0
    let draw2 = 0

    const winner_statement = document.getElementById('winner') as HTMLElement
    const audio = document.querySelector('audio') as HTMLAudioElement

    if (res === player) {
      winner_statement.innerText = 'Player Won'
      winner_statement.classList.add('playerWin')
      board_full = true
      playerstat1++
      loss2++
      temp1 = temp1 + playerstat1
      temp3 = temp3 + loss2
      console.log('player win')
      audio.pause()
      endMusic = new Audio(winAudio)
      endMusic.play()
    } else if (res === computer) {
      winner_statement.innerText = 'Computer Won'
      winner_statement.classList.add('computerWin')
      board_full = true
      computerstat1++
      loss1++
      temp2 = temp2 + computerstat1
      temp4 = temp4 + loss1
      console.log('computer win')
      audio.pause()
      endMusic = new Audio(gameOverAudio)
      endMusic.play()
    } else if (board_full) {
      winner_statement.innerText = 'Draw...'
      winner_statement.classList.add('draw')
      draw1++
      draw2++
      temp5 = temp5 + draw1
      temp6 = temp6 + draw2
      console.log('draw')
      audio.pause()
      endMusic = new Audio(gameOverAudio)
      endMusic.play()
    }

    const playerStat1Element = document.getElementById(
      'playerstat1',
    ) as HTMLElement
    playerStat1Element.innerText = `${temp1}`
    const computerStat1Element = document.getElementById(
      'computerstat1',
    ) as HTMLElement
    computerStat1Element.innerText = `${temp2}`
    const loss1Element = document.getElementById('loss1') as HTMLElement
    loss1Element.innerText = `${temp4}`
    const loss2Element = document.getElementById('loss2') as HTMLElement
    loss2Element.innerText = `${temp3}`
    const draw1Element = document.getElementById('draw1') as HTMLElement
    draw1Element.innerText = `${temp5}`
    const draw2Element = document.getElementById('draw2') as HTMLElement
    draw2Element.innerText = `${temp6}`

    if (loss1 === 1 || loss2 === 1 || draw1 === 1 || draw2 === 1) {
      //when the game ends, I create and add a button in the 'div-end-of-game' div
      const btn = document.createElement('button')
      btn.className = 'btn-sound'
      btn.innerHTML = "<i class='fa fa-volume-up' aria-hidden='true'></i>"
      btn.onclick = muteAudio
      document.getElementsByClassName('div-end-of-game')[0].appendChild(btn)
    }
  }
  game.checkWinner = checkWinner

  const x = document.getElementById('myAudio') as HTMLAudioElement

  const muteAudio = () => {
    //mutes or demutes all the audio (music and end game music)
    const btn = document.getElementsByClassName('btn-sound')[0]
    if (!x.muted) {
      x.muted = true
      if (endMusic) endMusic.muted = true
      btn.innerHTML = "<i class='fa fa-volume-down' aria-hidden='true'></i>" //change the icon of the button when the sound is muted
    } else {
      x.muted = false
      if (endMusic) endMusic.muted = false
      btn.innerHTML = "<i class='fa fa-volume-up' aria-hidden='true'></i>"
    }
  }
  game.muteAudio = muteAudio

  const check_line = (a: number, b: number, c: number) => {
    const status =
      play_board[a] === play_board[b] &&
      play_board[b] === play_board[c] &&
      (play_board[a] === player || play_board[a] === computer)
    if (status) {
      // TODO Uncomment lines below and add unit test for this code
      // document.getElementById(`block_${a}`).classList.add("won");
      // document.getElementById(`block_${b}`).classList.add("won");
      // document.getElementById(`block_${c}`).classList.add("won");
    }
    return status
  }
  game.check_line = check_line

  game.check_match = check_match

  const reset_board = () => {
    const winner_statement = document.getElementById('winner') as HTMLElement
    play_board = ['', '', '', '', '', '', '', '', '']
    board_full = false
    winner_statement.classList.remove('playerWin')
    winner_statement.classList.remove('computerWin')
    winner_statement.classList.remove('draw')
    winner_statement.innerText = ''
    const aiLevel = document.querySelector('#ai_level') as HTMLSelectElement
    aiLevel.disabled = false

    const audio = document.querySelector('audio')
    render_board()
    randomizeStart()

    const mute_sound_btn = document.getElementsByClassName('btn-sound')[0]
    if (mute_sound_btn?.parentNode != null)
      mute_sound_btn.parentNode.removeChild(mute_sound_btn) //delete the button when resetting the board
  }
  game.reset_board = reset_board

  return game
}
