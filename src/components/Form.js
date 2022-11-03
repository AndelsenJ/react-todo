import React, {useEffect, useState} from 'react';

function Form(props) {

    const [inputText, setInputText] = useState('');

    const [id, setId] = useState(1);

    const editMode = props.editMode;

    useEffect(() => {
        setInputText(props.todo ? props.todo.text : '');
    }, [props.todo]);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: id,
            text: inputText
        });

        setInputText("");
        setId(id + 1);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: props.todo.id,
            text: inputText
        });

        setInputText("");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setInputText("");
        props.cancelUpdate();
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="col">
                    <input className="form-control" type="text" name="text" value={inputText} onChange={handleChange}/>
                </div>
                <div className="col-auto">
                    { !editMode ? (
                        <button className="btn btn-success">Add todo</button>
                    ) : (
                        <>
                            <button className="btn btn-primary me-4" onClick={handleUpdate}>Update</button>
                            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                        </>
                    )}
                </div>
            </div>

        </form>
    )

}

export default Form;
