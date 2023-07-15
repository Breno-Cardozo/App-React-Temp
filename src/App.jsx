import React, { useState } from "react";
import fetchData from "./services/api";
import initialdata from "./halpers/initialdata";
import Card from "./components/Card";

function App() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(initialdata);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetchData(city).then((response) => {
            setData(response);
        });
    };

    return (
        <div className="flex flex-col w- h-screen items-center justify-center">
            <h1 className="text-white font-bold mb-4">
                Busque pela temperatura de alguma cidade...
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Cidade"
                    className="p-2 rounded-lg outline-none shadow-2xl"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                ></input>
                <button
                    className="bg-blue-950 p-2 rounded-lg ml-3 text-white font-bold"
                    type="submit"
                >
                    Pesquisar
                </button>
            </form>

            <Card data={data} name="joao" />
        </div>
    );
}

export default App;
