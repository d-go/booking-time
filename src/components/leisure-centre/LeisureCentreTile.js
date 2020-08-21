import React, {PropTypes} from 'react';

const LeisureCentreTile = ({centre}) => {
    return (
      <div className="card centre-tile">
        <div className="card-body">
          <h5 className="card-title">{centre.name}</h5>
          <div className="card-text"><span className="bold">Dirección: </span>{centre.address}</div>
          <div className="card-text"><span className="bold">Email: </span>{centre.email}</div>
          <div className="card-text"><span className="bold">Telefono: </span>{centre.phone}</div>
          <div className="card-text"><span className="bold">Giro: </span>{centre.line}</div>
          <div className="center"><a className="btn btn-basic">Info</a></div>
        </div>
      </div>
    );
};

LeisureCentreTile.propTypes = {
    centre: PropTypes.object.isRequired
};

export default LeisureCentreTile;