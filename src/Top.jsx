function Top({ sort, booksCount, avgPrice, }) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-tittle">Rušiuoti pagal:</h5>
                  <button
                    type="button"
                    className="btn btn-info m-1"
                    onClick={() => sort("title")}
                  >
                    Pavadinimą
                  </button>
                  <button
                    type="button"
                    className="btn btn-info m-1"
                    onClick={() => sort("price")}
                  >
                    Kainą
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-tittle">Rūšiavimas</h5>
                  <h6>Bendras knygų kiekis:{booksCount} </h6>
                  {avgPrice.map((avg) => (
                    <h6 style={{ color: "gray" }} key={avg.price}> Kainų vidurkis : {avg.price} {avg.count} Eur.
                    </h6>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Top;
  