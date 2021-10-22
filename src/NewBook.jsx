import { useState } from "react";

function NewBook({ addBook }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [sale, setSale] = useState("");

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

  const insert = () => {
    addBook({
      title: title,
      price: price,
      discountPrice: discountPrice,
      sale: sale,
    });
    setTitle("");
    setPrice("");
    setDiscountPrice("");
    setSale("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card m-3">
              <div className="card-body">
                <h5 className="card-tittle">New Book</h5>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "title")}
                    value={title}
                  />
                  <small className="form-text text-muted">
                    Enter new book title
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
                    Enter price
                  </small>
                </div>
                <div className="form-group">
                  <label>Discout price</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "discount_price")}
                    value={discountPrice}
                  />
                  <small className="form-text text-muted">
                    Enter book discounted price
                  </small>
                </div>
                <div className="form-group">
                  <label>Is book on sale ?</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => control(e, "sale")}
                    value={sale}
                  />
                  <small className="form-text text-muted">
                    Is book on sale ?
                  </small>
                </div>
                <button type="button" className="btn btn-info" onClick={insert}>
                  Pridėti knygą
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBook;
