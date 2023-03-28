/**
 * @jest-environment jsdom
 */

import { App } from '../src/app';

describe('the word wrap editor', () => {
  it('should initialize', () => {
    createVirtualDom();

    const app = new App();
    app.initialize(document)

    expect(app).not.toBeNull();
  });

  function createVirtualDom() {
    document.body.innerHTML = '<div id="main"></div>'
    const main = document.getElementById("main")
    const input = document.createElement("input")
    input.setAttribute("id", "column-width")
    main?.appendChild(input)
    const applyButton = document.createElement("button")
    applyButton.setAttribute("id", "do-word-wrap")
    main?.appendChild(applyButton)
    const editor = document.createElement("textarea")
    editor.setAttribute("id", "editor")
    main?.appendChild(editor)
  }

});
