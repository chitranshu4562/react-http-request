import classes from './MovieForm.module.css';
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import React, {useState} from "react";
import axios from "axios";

const MovieForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [date, setDate] = useState('');
    const changeHandler = (identifier, value) => {
        if (identifier === 'NAME') {
            setName(value);
        } else if (identifier === 'DESCRIPTION') {
            setDescription(value);
        } else if (identifier === 'DIRECTOR') {
            setDirector(value);
        } else {
            setDate(value);
        }
    }
    const resetFormHandler = () => {
        setName('');
        setDescription('');
        setDirector('');
        setDate('');
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (!name || !description) {
            console.log('form is invalid')
            return;
        }
        const formData = {
            name: name,
            description: description,
            director: director,
            date: date
        }
        resetFormHandler();
        props.onAddMovie(formData);
    }
    return <Card classes={`p-2 ${props.classes}`}>
        <h4 className="d-flex justify-content-center align-items-center">Add new movie</h4>
        <form>
            <div className="row">
                <div className="my-1 col-12 col-lg-6">
                    <input type="text" className="form-control" placeholder="Enter movie name"
                           value={name} onChange={(e) => {
                        changeHandler('NAME', e.target.value)
                    }} autoFocus/>
                    {!name && <small style={{color: 'red'}}>*Name is mandatory</small>}
                </div>
                <div className="my-1 col-12 col-lg-6">
                    <input type="text" className="form-control" placeholder="Enter movie description"
                           value={description} onChange={(e) => {
                        changeHandler('DESCRIPTION', e.target.value)
                    }}/>
                    {!description && <small style={{color: 'red'}}>*Description is mandatory</small>}
                </div>
                <div className="my-1 col-12 col-lg-6">
                    <input type="text" className="form-control" placeholder="Enter director name"
                           value={director} onChange={(e) => {
                        changeHandler('DIRECTOR', e.target.value)
                    }}/>
                </div>
                <div className="my-1 col-12 col-lg-6">
                    <input type="date" className="form-control" placeholder="Enter date"
                           value={date} onChange={(e) => {
                        changeHandler('DATE', e.target.value)
                    }}/>
                </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '10px'}}>
                <Button name="Add Movie" type="submit" classes={`${classes.btn} ${(!!name && !!description) ? '' : classes.disabledButton}`} click={submitHandler}></Button>
            </div>
        </form>
    </Card>
};
export default MovieForm;