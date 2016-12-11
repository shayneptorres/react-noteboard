import React from 'react';
import {connect} from 'react-redux';
import {editState} from '../actions/noteActions'
import '../styles/noteCard.css';

const NoteCard = ({id=0,title="No title",description="No description", handleClick, state="EDITING"}) => {
    if(state === "EDITING"){
        return (
            <div className="note-card-body">
                <textarea></textarea>
                <div>
                    <button type="" className="btn btn-warning" onClick={ () => handleClick(id, "end-edit") }>X</button>    
                </div>
            </div>
        )
    } else {
        return (
        <div className="note-card-body">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <button className="btn btn-success" onClick={ () => handleClick(id, "edit") }>Edit note</button>
            </div>
        </div>
    );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
    }
}

function mapDispatchToProps(dispatch){
    
    return {
        handleClick: (id, state) => {
            switch (state) {
                case "edit":
                    dispatch(editState(id))
                    break;
                case "end-edit":
                    dispatch(editState(id))
                    break;
                default:
                    break;
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteCard);
