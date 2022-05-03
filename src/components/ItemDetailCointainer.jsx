import React from "react";
import { useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail";

function getItem() {
    const myPromise = new Promise((resolve, reject)=> {
        const item = {
            id: 1,
            title: 'Amoladora 500W',
            price: 2900,
            stock: 100,
            image: 'https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW831_10.jpg',
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
    return myPromise
}

function ItemDetailContainer() {

    const [item, setItem] = useState({});

    useEffect (() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrió un error, revisar la consola');
            });
    }, []);
    
    return (
        <div className="item-detail-container"> 
            <ItemDetail item={item} />
        </div>
    )
    }

export default ItemDetailContainer;