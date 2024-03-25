import { useState, useEffect } from "react";
import Nav from "../nav/Nav";
import axios from "axios";
import completed from "../../../public/img/completed.jpg";
import incomplete from "../../../public/img/incomplete.png";

const TodosComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(reponse => {
            // console.log(reponse);
            // console.log(reponse.data);
            setTodos(reponse.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container">
            <Nav />
            <h1 className="mt-5 mb-4">To do list</h1>
            <div className="row">
                {todos.map(todo => (
                    <div className="col-12 mb-3" key={todo.id}>
                        <div className="card">
                            <div className="card-body d-grid gap-2 d-md-flex justify-content-md-between">
                                <h5 className="card-title">{todo.title}</h5>
                                <img 
                                    src={todo.completed ? completed : incomplete} alt="task completed" width={100} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodosComponent;