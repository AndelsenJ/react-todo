import React, {useState} from "react";
import Form from "./Form";
import Todo from "./Todo";

function List() {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        if (!item.text || /^\s*$/.test(item.text)) {
            return;
        }
        const newItems = [item, ...items];
        setItems(newItems);
        console.log(item, ...items);
    }

    const completeItem = (id) => {
        let updatedItems = items.map(item => {
            if (item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });

        setItems(updatedItems);
    }

    const updateItem = (itemId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
    }

    const cancelUpdate = () => {

    }

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    return (

        <div className="my-5">
            <div className="">
                <h1 className="mb-5">Todo app</h1>
                <Form onSubmit={addItem}/>
            </div>
            <div className="mt-5">
                { items.length ? '' : 'Nothing to do'}
                <Todo todos={items} completeTodo={completeItem} removeTodo={handleDelete} updateTodo={updateItem}/>
            </div>
        </div>

    )
}

export default List;
