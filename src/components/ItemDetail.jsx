import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail ({ item }) {
    return (
        <div className="item-detail">
            <div className="left">
                <div className="img-detail-container">
                    <img className="img-detail-container-img" src={ item?.image } alt="imagen-del-producto"/>
                </div>
            </div>
            <div>
                <div className="right">
                    <div className="info-container">
                        <h2> { item?.title} </h2>
                        <p>{ item?.price}</p>
                        <div className="count-container">
                        <ItemCount stock={5} initial={1}/>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ItemDetail;