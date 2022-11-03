import React, {useState, useEffect, useRef} from 'react';

function Form(props) {

    const [inputText, setInputText] = useState("");

    const [id, setId] = useState(1);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText);
        props.onSubmit({
            id: id,
            text: inputText
        });

        setInputText("");
        setId(id + 1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <input className="form-control" type="text" name="text" value={inputText} onChange={handleChange} ref={inputRef}/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-success">Add todo</button>
                </div>
            </div>
        </form>
    )

}

export default Form;
