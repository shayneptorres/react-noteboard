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
    console.log("Edit state was called in the reducer")
    const oldNote = find(notes, {id: noteId})
    const oldNoteIndex = findIndex(notes, {id: noteId})
    if(oldNote.state === "EDITING"){
        const newNote = Object.assign({},oldNote, {state: "DISPLAYING"})
        return [...notes.slice(0,oldNoteIndex),newNote, ...notes.slice(oldNoteIndex, notes.length-1)]
    } else {
        const newNote = Object.assign({},oldNote, {state: "EDITING"})
        return [...notes.slice(0,oldNoteIndex),newNote, ...notes.slice(oldNoteIndex, notes.length-1)]
    }
}