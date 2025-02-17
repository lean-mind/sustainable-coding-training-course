/**
 * @vitest-environment jsdom
 */
import { JSDOM } from 'jsdom';
import { describe, it, expect, vi } from 'vitest';

describe("the tic tac toe integration test", async () => {
    const createVirtualDOM = async () => {
        const dom = await JSDOM.fromFile("index.html", { runScripts: "dangerously" })
        const domAsText = dom.serialize()
        const body = domAsText.match(/<body>([\s\S]*)<\/body>/)[1]
        global.document.body.innerHTML = body
    }

    it("loads the body of the html", async () => {
        await createVirtualDOM()
        const winnerElement = document.getElementById('winner');
        expect(winnerElement).not.toBe(null); 
    })
})


