import { find, findIndex } from 'lodash'

export default function(state={}, action){
    console.log(state, action)
    switch (action.type) {
        case "EDIT_NOTE":
            return state
        case "EDIT_STATE":
            return editState(state,action.noteId)
        default:
            return state
    }
}

function editState(notes, noteId){
    const oldNote = find(notes, {id: noteId})
    const oldNoteIndex = findIndex(notes, {id: noteId})
    if(oldNote.state === "EDITING"){
        const newNote = Object.assign({},oldNote, {state: "DISPLAY"})
        return [...notes.slice(0,oldNoteIndex),newNote, ...notes.slice(oldNoteIndex, notes.length-1)]
    } else {
        const newNote = Object.assign({},oldNote, {state: "EDITING"})
        return [...notes.slice(0,oldNoteIndex),newNote, ...notes.slice(oldNoteIndex, notes.length-1)]
    }
}