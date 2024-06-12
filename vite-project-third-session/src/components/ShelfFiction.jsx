import {Book} from "./Book"

export function ShelfFiction(){
    return (
        <div className="shelf">
            <h1>Fiction</h1>
            <Book book_title="The Hobbit" book_author="J R R Tolkien" book_publisher="abc" book_imageURL="https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0" />
            <Book book_title="The Lord of the Rings" book_author="J R R Tolkien" book_publisher="abc" book_imageURL="https://th.bing.com/th/id/OIP.kIfx-8GhAWZxwSpLwjPb_AHaLH?rs=1&pid=ImgDetMain" />
            <Book book_title="Christine" book_author="Stephen King" book_publisher="abc" book_imageURL="https://th.bing.com/th/id/R.7c8e4e67066e3cd69e3e93b399d25e4e?rik=Q%2fsRRsb7%2bS9EBg&pid=ImgRaw&r=0" />
        </div>
    )
}