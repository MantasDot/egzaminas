import { useState, useEffect } from "react";

function Modal({ id, book, editBook, hideModal }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [discount_price, setDiscountPrice] = useState("");

  useEffect(() => {
    setTitle(book.title);
    setSale(book.sale)
    setPrice(book.price);
    setDiscountPrice(book.discount_price);
  }, [book]);

  const control = (e, what) => {
    switch (what) {
      case "title":
        setTitle(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "discount_price":
        setDiscountPrice(e.target.value);
        break;
      case "sale":
        setSale(e.target.value);
        break;
    }
  };

  const edit = () => {
    editBook(id, {
      title: title,
      price: price,
      sale: sale,
      discount_price: discount_price
    });
    hideModal();
    setTitle("");
    setPrice("");
    setDiscountPrice("");
    setSale("");
  };

  if (id === 0) {
    return null;
  }

  return (
    <div className="edit-modal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3">
              <div className="card-body">
                <h5 className="card-tittle">Edit Book</h5>
                <div className="form-group">
                  <label>title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "title")}
                    value={title}
                  />
                  <small className="form-text text-muted">
                    Edit book title
                  </small>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "price")}
                    value={price}
                  />
                  <small className="form-text text-muted">
                    Edit price
                  </small>
                </div>
                <div className="form-group">
                  <label>Discount price</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "discount_price")}
                    value={discount_price}
                  />
                  <small className="form-text text-muted">
                    Edit discount price
                  </small>
                </div>
                <div className="form-group">
                  <label>Sale</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "sale")}
                    value={sale}
                  />
                  <small className="form-text text-muted">
                    Edit if book on/off sale
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-info m-1"
                  onClick={edit}
                >
                  Edit Book
                </button>
                <button
                  type="button"
                  className="btn btn-danger m-1"
                  onClick={hideModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;