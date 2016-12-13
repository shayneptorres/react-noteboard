export const editNote = (note, notes) => {
    console.log("You clicked " + note.title + " to edit it")
    return {
        type: "EDIT_NOTE",
        payload: {note, notes}
    }
}

export function editState(noteId, newNoteString){
     console.log("noteAction:",newNoteString)
    return {
        type: 'EDIT_STATE',
        noteId, 
        newNoteString
    }
}