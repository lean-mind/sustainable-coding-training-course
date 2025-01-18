import { test, expect } from '@playwright/test'

test.describe('In the tic tac toe game with EASY mode', () => {
  test('the player should win', async ({ page }) => {
    await page.goto('./index')
    await page.click('text=Start Game')
    await page.selectOption('#ai_level', 'easy')

    await page.click('#block_0')
    await page.click('#block_4')
    await page.click('#block_8')

    const winnerMessage = await page.locator('id=winner').innerText()
    const playerStats = await page.locator('id=playerstat1').innerText()
    expect(winnerMessage).toBe('Player Won')
    expect(playerStats).toBe('1')
  })
  test('the player should lose', async ({ page }) => {
    await page.goto('./index')
    await page.click('text=Start Game')
    await page.selectOption('#ai_level', 'easy')

    await page.click('#block_1')
    await page.click('#block_2')
    await page.click('#block_5')
    await page.click('#block_7')

    const winnerMessage = await page.locator('id=winner').innerText()
    const computerStats = await page.locator('id=computerstat1').innerText()
    expect(winnerMessage).toBe('Computer Won')
    expect(computerStats).toBe('1')
  })
})
