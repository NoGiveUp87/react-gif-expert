import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const onAddCategory = () => {
    //     setCategories(['Valorant', ...categories]); // Añade 'Valorant' al final de la lista
    //     // setCategories(cat => [...categories, 'Valorant']);
    // }

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    console.log(categories);

    return (
        <>

            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // AddCategory setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)} 
            />

            {/* Listado de Gif */}

            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map(category => (
                    // <li key={category}>{category}</li>
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }

            {/* Gif Item */}

        </>
    )
}