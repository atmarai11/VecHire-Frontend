import React from 'react'

const ViewDocuments = (props) => {
    let {requestt} = props;
    return (
        <React.Fragment>
            <div class="modal fade" id={`document${requestt._id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Document of the vehicle </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <p>Registration:</p>
        <div className="imagee">
            <img src={`http://localhost:90/${requestt.cv}`} alt="img" className="d-block"/>
        </div>
        <p>Insurance:</p>
        <div className="imagee">
            <img src={`http://localhost:90/${requestt.citizenShip}`} alt="img" className="d-block"/>
        </div>
      </div>
      </div>
      </div>
      </div>
        </React.Fragment>
    )
}

export default ViewDocuments
