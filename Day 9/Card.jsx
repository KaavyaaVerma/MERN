import React from 'react'

const Card = (props) => {
    const {id, title, description, price, brand, category, thumbnail } = props;
    return (
<div>
    <div className="card m-2" style={{width: "18rem" , height:"30rem"}}>
            <img src={thumbnail} className="card-img-top"height={"230px"} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="">
                <div>Price: {price}Rs.</div>
                <div>Brand: {brand}</div>
                <div>Category: {category}</div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Card