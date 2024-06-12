import {Book} from "./Book"

export function ShelfNonFiction(){
    return (
        <div className="shelf">
            <h1>Non-Fiction</h1>
            <Book book_title="A Brief History of Time" book_author="Stephen Hawking" book_publisher="abc" book_imageURL="https://productimages.worldofbooks.com/0553176986.jpg" />
            <Book book_title="Hiroshima" book_author="John Hersey" book_publisher="abc" book_imageURL="https://upload.wikimedia.org/wikipedia/en/e/e6/HiroshimaBook.jpg" />
            <Book book_title="How to Win Friends and Influence People" book_author="Dake Carnegie" book_publisher="abc" book_imageURL="https://pictures.abebooks.com/isbn/9781451612578-uk.jpg" />
        </div>
    )
}