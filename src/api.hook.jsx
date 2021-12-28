import { useEffect, useState } from "react";
import Checkbox from "react-custom-checkbox";

const ApiHook = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [toDos, setToDos] = useState("");
    const [toDoValues, setToDoValue] = useState([]);
    const [error, setError] = useState(false);

    const getToDoBody = (result) => {
        if (result != null) {
            let output = [];
            let checked;
            let description;
            let head;
            for (let i = 0; i < 4; i++) {
                var rand = result[Math.floor((Math.random() * result.length))];
                checked = rand.completed;
                if ((Math.random() < 0.25 ? true : false)) {
                    description = rand.title;
                }
                else {
                    description = "";
                }
                head = result[Math.floor((Math.random() * result.length))].title
                output.push({ id: i, head: head, checked: checked, description: description })
            }
            setToDoValue(output);
            console.log(output)
        }
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setToDos(result);
                getToDoBody(result);
            })
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);
        if (error) {
            return (
                <div className="toDo">
                    <h3>
                        Ошибка: {error.message}
                    </h3>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div className="toDo">
                    <h3>
                        Loading...
                    </h3>
                </div>
            )
        }
        else {
            return (
                <>
                    {toDoValues.map((dos) => (
                        <div className="toDo" key={dos.id}>
                            <Checkbox
                                name="my-input"
                                checked={dos.checked ? true : false}
                                style={{ backgroundColor: "#FF8469", border: 0, marginRight: "15px" }}
                                borderColor="none"
                                borderRadius={6}
                                borderWidth={0}
                                icon={<img src="/checkbox.png" style={{ width: 12 }} alt="" />}
                            >
                            </Checkbox>
                            <div className="toDo__text" >
                                <h3 id={dos.id} className={dos.checked ? "checked" : ""}>
                                    {dos.head}
                                </h3>
                                <p>{dos.description}</p>
                            </div>
                        </div>))}
                </>
            );
        }
    }



    export default ApiHook;
