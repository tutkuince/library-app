import {ReturnBook} from "./ReturnBook";
import {useEffect, useState} from "react";
import BookModel from "../../../models/BookModel";

export const Carousel = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:8080/api/books";
            const url: string = `${baseUrl}?page=0&size=9`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.books;

            const loadedBooks: BookModel[] = [];

            for (const key in loadedBooks) {
                loadedBooks.push({
                    id: loadedBooks[key].id,
                    title: loadedBooks[key].title,
                    author: loadedBooks[key].author,
                    description: loadedBooks[key].description,
                    copies: loadedBooks[key].copies,
                    copiesAvailable: loadedBooks[key].copiesAvailable,
                    category: loadedBooks[key].category,
                    img: loadedBooks[key].img
                });
            }
            setBooks(loadedBooks);
            setIsLoading(false);
        };
        fetcBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [])

    return (
        <div className="container mt-5" style={{height: 550}}>
            <div className="homepage-carousel-title">
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block"
                 data-bs-interval="false">
                {/* Desktop */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook/>
                            <ReturnBook/>
                            <ReturnBook/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center align-items-center">
                        <ReturnBook/>
                        <ReturnBook/>
                        <ReturnBook/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Mobile */}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <ReturnBook/>
                </div>
            </div>
            <div className="homepage-carousel-title mt-3">
                <a href="#" className="btn btn-outline-dark btn-lg">Viev More</a>
            </div>
        </div>
    );
}