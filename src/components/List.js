import React, {useEffect, useState} from "react";
import Form from "./Form";
import Todo from "./Todo";

function List() {

    const getLocalItems = () => {
        let lists = localStorage.getItem('items');
        return lists ? JSON.parse(lists) : [];
    }

    const [items, setItems] = useState(getLocalItems);

    const [todoUpdate, setTodoUpdate] = useState({});

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
    }, [items]);

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

    const handleEdit = (itemId) => {
        setEditMode(true);
        setTodoUpdate(items.find(item => item.id === itemId));
    }

    const updateItem = (itemToUpdate) => {
        console.log(itemToUpdate.id, itemToUpdate.text);
        if (!itemToUpdate.text || /^\s*$/.test(itemToUpdate.text)) {
            return;
        }

        setItems(prev => prev.map(item => (item.id === itemToUpdate.id ? itemToUpdate : item)));
        setEditMode(false);
        setTodoUpdate({});
    }

    const cancelUpdate = () => {
        setEditMode(false);
        setTodoUpdate({});
    }

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    return (

        <div className="my-5">
            <div className="">
                <h1 className="mb-5">Todo app</h1>
                <Form todo={todoUpdate} editMode={editMode} onSubmit={editMode ? updateItem : addItem} cancelUpdate={cancelUpdate}/>
            </div>
            <div className="mt-5">
                { items.length ? '' : 'Nothing to do'}
                <Todo todos={items} completeTodo={completeItem} removeTodo={handleDelete} handleEdit={handleEdit}/>
            </div>
        </div>

    )
}

export default List;
