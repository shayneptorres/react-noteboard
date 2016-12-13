import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editState} from '../actions/noteActions'
import {Form, Field} from 'simple-react-forms';
var ptypes = React.PropTypes
import '../styles/noteCard.css';


class NoteCard extends Component {
    constructor(){
        super()
        this.state = {
            editing: false
        }
    }

    displayForm(){
        return (
            <div className="note-card-body">
            <Form ref='noteForm'>
                <Field
                    name='newNote'
                    label='Enter a note'
                    type='text'
                />
            </Form>
                <div>
                    <button type="" className="btn btn-warning" onClick={ this.exitEditMode.bind(this) }>X</button>    
                </div>
            </div>
        )
    }

    displayNote(){
        return (

            <div className="note-card-body">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <div>
                    <button className="btn btn-success" onClick = { this.enterEditMode.bind(this) } >Edit note</button>
                </div>
            </div>
        );
    }

    enterEditMode(){
        this.setState({
            editing: true
        })
    }

    exitEditMode(){
        let { handleClick } = this.props
        let newNoteString = this.refs['noteForm'].getFormValues()
        console.log(this.refs['noteForm'].getFormValues());
        handleClick(this.props.id, "edit", newNoteString)
        this.setState({
            editing: false
        })
    }

    render(){
        console.log(this.props.state)
        if (this.state.editing){
            return this.displayForm()
        } else {
            return this.displayNote()
        }
    }
}



// const NoteCard = ({id=0,title="No title",description="No description", handleClick, state="EDITING"}) => {
//     if(state === "EDITING"){
//         return (
//             <div className="note-card-body">
//             <textarea></textarea>
//                 <div>
//                     <button type="" className="btn btn-warning" onClick={ () => handleClick(id, "end-edit",Form.refs) }>X</button>    
//                 </div>
//             </div>
//         )
//     } else {
        
//     }
// }

function mapStateToProps(state){
    console.log(state)
    return {
    }
}

function mapDispatchToProps(dispatch){
    return {
        handleClick: (id, state, newNoteString) => {
            switch (state) {
                case "edit":
                console.log("mapDispatchToProps:",newNoteString["newNote"])
                    dispatch(editState(id, newNoteString))
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
