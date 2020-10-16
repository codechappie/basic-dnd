import React from 'react'

const ContainerDnD = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'flex';

        e.target.appendChild(card);
        // console.log(e.target.);git
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            <div className="title">{props.id}</div>
            {props.children}
        </div>
    )
}

export default ContainerDnD
