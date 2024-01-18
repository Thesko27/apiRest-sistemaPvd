import { useEffect, useState } from "react";
import api from "../services/api";

export default function Categoria() {
    let [users, setUsers] = useState([]);
    const todasCategorias = () => {
        api.get("/categoria ").then((response) => {
            setUsers(response.data);
        });
    };
    useEffect(() => {
        todasCategorias();
    }, []);

    return (
        <main className="bg-gray-500 w-full h-screen">
            <h1>Categoria</h1>
            <ul>
                {users.map((user) => {
                    return <li key={user._id}>{user.descricao}</li>;
                })}
            </ul>
        </main>
    );
}
