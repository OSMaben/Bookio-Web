import { useState, useEffect } from "react";
import ProductPlaceholder from "../assets/images/product-item2.jpg";
import axios from "axios";

export default function Books() {
  const [Books, SetBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        console.log(response.data);
        SetBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Featured Books</h2>
              </div>
              <div className="product-list">
                {loading ? (
                  <div>Loading books...</div>
                ) : (
                  <div className="row">
                    {Books.map((book) => (
                      <div className="col-md-3" key={book.id.S}>
                        <div className="product-item">
                          <figure className="product-style">
                            <img
                              src={book.imageUrl?.S || ProductPlaceholder} // Access the 'S' property
                              alt={book.title?.S || "Book"} // Access the 'S' property
                              className="product-item"
                            />
                            <button
                              type="button"
                              className="add-to-cart"
                              data-product-tile="add-to-cart"
                            >
                              Add to Cart
                            </button>
                          </figure>
                          <figcaption>
                            <h3>{book.title?.S || "Unknown Title"}</h3> {/* Access the 'S' property */}
                            <span>{book.author?.S || "Unknown Author"}</span> {/* Access the 'S' property */}
                            <div className="item-price">${book.price?.N || "N/A"}</div> {/* Access the 'N' property */}
                          </figcaption>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="btn-wrap align-right">
                <a href="#" className="btn-accent-arrow">
                  View all products <i className="icon icon-ns-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
