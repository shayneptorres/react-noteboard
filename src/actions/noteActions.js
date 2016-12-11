export const editNote = (note, notes) => {
    console.log("You clicked " + note.title + " to edit it")
    return {
        type: "EDIT_NOTE",
        payload: {note, notes}
    }
}

export function editState(noteId){
    return {
        type: 'EDIT_STATE',
        noteId
    }
}