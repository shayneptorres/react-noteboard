import React from 'react';
import {connect} from 'react-redux';
import NoteCard from './noteCard';
import '../styles/noteBoard.css';

const NoteBoard = ({notes=[]}) => {
    return(
        <div>
            {            
            notes.map((note)=>{
                return (
                    <div className="col-sm-3" key={note.id}>
                        <NoteCard {...note} /> 
                    </div>
                );  
            })}
        </div>
    )
}

function mapStateToProps(state){
    console.log(state)
    return {
        notes: state
    }
}

const visibleNoteboard = connect(mapStateToProps)(NoteBoard);

export default visibleNoteboard


