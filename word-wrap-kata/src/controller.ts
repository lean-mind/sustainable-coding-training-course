
export class Controller {

    public subscribeToEvents(aDocument: Document, {columnWidthId, saveConfigId, editorId, applyId}:
                             {columnWidthId: string,
                              saveConfigId: string,
                              editorId: string,
                              applyId: string
                             }): void {
        const columnWidthInput = aDocument.getElementById(columnWidthId) as HTMLInputElement
        if (columnWidthInput == null){
            console.log(`Wrong id for widgets: ${columnWidthId}`)
        }
        const saveConfigButton = aDocument.getElementById(saveConfigId) as HTMLButtonElement
        if (saveConfigButton == null){
            console.log(`Wrong id for widgets: ${saveConfigId}`)

        }
        const editorWidget = aDocument.getElementById(editorId) as HTMLTextAreaElement
        if (editorWidget == null){
            console.log(`Wrong id for widgets: ${editorId}`)
        }
        const applyButton = aDocument.getElementById(applyId) as HTMLButtonElement
        if (applyButton == null){
            console.log(`Wrong id for widgets: ${applyId}`)
        }
        console.log('Subscribing events...')

        //columnWidthInput!.onchange = () =>  console.log(columnWidthInput!.value)
        saveConfigButton!.onclick = () => console.log('Button save config clicked')
        applyButton!.onclick = () => console.log('Button apply clicked')
        //editorWidget!.onchange = () => console.log('Text changed:', editorWidget!.value)
    }
}