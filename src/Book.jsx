import { useEffect, useState } from "react";

function Book({ book, deleteBook, showModal }) {
  
    ;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card m-3">
        <div className="card-body">
          <h3 className="card-tittle">{book.title}</h3>
          <h6>Kaina {book.price} Eur.</h6>

          <h5>Discount price: {book.discount_price} Eur.</h5>

          <h6>
          
        
         Is book on sale ?: {book.sale}
      
          </h6>

          <div className="form-group mt-3">
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={() => deleteBook(book.id)}
            >
              Trinti
            </button>
            <button
              type="button"
              className="btn btn-success m-1"
              onClick={() => showModal(book.id)}
            >
              Redaguoti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
