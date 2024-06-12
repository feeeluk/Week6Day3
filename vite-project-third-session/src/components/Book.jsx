import { useState } from "react"

export function Book({book_title, book_publisher, book_author, book_imageURL}){

    const [count, setCount] = useState(0)

    return (
    
        <div className="book">
            <h2>Title: {book_title}</h2>
            <h3>Author: {book_author}</h3>
            <h4>Publisher: {book_publisher}</h4>
            <img src={book_imageURL} alt="Front cover" onClick={() =>{
                setCount(count + 1)
            }} />

            <p>Likes = {count}</p>
        </div>
    )
}