export class Controller {

    public subscribeToEvents(aDocument: Document, {columnWidthId, editorId, applyId}:
        {
            columnWidthId: string,
            editorId: string,
            applyId: string
        }): void {
        const columnWidthInput = aDocument.getElementById(columnWidthId) as HTMLInputElement
        if (columnWidthInput == null) {
            console.log(`Wrong id for widgets: ${columnWidthId}`)
        }
        const editorWidget = aDocument.getElementById(editorId) as HTMLTextAreaElement
        if (editorWidget == null) {
            console.log(`Wrong id for widgets: ${editorId}`)
        }
        const applyButton = aDocument.getElementById(applyId) as HTMLButtonElement
        if (applyButton == null) {
            console.log(`Wrong id for widgets: ${applyId}`)
        }
        console.log('Subscribing events...')

        applyButton.onclick = () => {
            console.log('Button apply clicked');
            console.log('ColumnWidth: ', columnWidthInput.value);
            console.log('Text: ', editorWidget.value);
        }
    }
}