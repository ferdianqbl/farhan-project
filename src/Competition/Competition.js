import React from "react";
import "./Competition.css";

const Competition = ({ data }) => {
  return (
    <div className="competition" id="competition">
      <h1 className="competition-title">Kompetisi</h1>
      <div className="container">
        <h1 className="competition-subtitle">Pilih Cabang Kompetisi</h1>
        <div className="row align-items-start">
          {data.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-sm-6"
                key={`card-item-${item.name}-${index}`}
              >
                <div className="cardCompetition">
                  <div className="card-img">
                    <img
                      src={process.env.PUBLIC_URL + item.imgUrl}
                      alt={`card-ic-${item.name}`}
                      className="img-icon"
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-body-text">{item.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Competition;
