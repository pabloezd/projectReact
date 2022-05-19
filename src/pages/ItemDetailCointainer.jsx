import React from "react";
import { useContext, useState, useMemo, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from ".././components/ItemDetail";
import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';


function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
                {
                id: 1,
                title: 'Amoladora 500W',
                price: 73000,
                stock: 100,
                image: 'https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW831_10.jpg',
            },
            {
                id: 2,
                title: 'Sierra 650W',
                price: 58000,
                stock: 100,
                image: 'https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW300_1L.jpg',
            },
            {
                id: 3,
                title: 'Taladro 710W',
                price: 22000,
                stock: 100,
                image: 'https://adamimages.sbdinc.com/GEM/Dewalt/1000x1000_72r/DW505_1.jpg',
            },
                ];
        const item = productsList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    console.log('Se renderizo ItemDetailContainer');

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [id]);

    const memoizedItem = useMemo(() => item, [item]); // Retorna una version memorizada de item

    return (
        <div className='item-detail-container'>
            <ItemDetail item={memoizedItem} />
        </div>
    )
}

export default ItemDetailContainer