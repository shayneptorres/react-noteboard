import { find, findIndex } from 'lodash'

export default function(state={}, action){
    switch (action.type) {
        case "EDIT_NOTE":
            return state
        case "EDIT_STATE":
            return editState(state,action.noteId, action.newNoteString)
        default:
            return state
    }
}

function editState(notes, noteId, newNoteSting){
    const oldNote = find(notes, {id: noteId})
    const oldNoteIndex = findIndex(notes, {id: noteId})
    const newNote = Object.assign({},oldNote, {description: newNoteSting["newNote"]})
    var newNotes = [...notes]
    newNotes[oldNoteIndex] = newNote
    return [...newNotes]
}