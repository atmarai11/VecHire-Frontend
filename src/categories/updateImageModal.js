import axios from 'axios';
import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {useToasts} from 'react-toast-notifications';

const UpdateImageModal = (props) => {
    let {addToast} = useToasts();
    let [futsalImage,setFutsalImage] = useState({
        "id":props.futsal._id,
        "image":props.futsal.futsalImage,
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }
    })

    const setImage = (e,fid)=>{
        var {name,files} = e.target;
        var holder = document.querySelector(`#getImg${fid}`);
        holder.src = URL.createObjectURL(files[0]);
        setFutsalImage(
            {
                ...futsalImage,
                [name]:files[0]
            }
        )
    }

    const changeImage = (e)=>{
        e.preventDefault();
        var files = new FormData();
        files.append('id',futsalImage.id);
        files.append('image',futsalImage.image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.put(process.env.REACT_APP_URL+"futsal/updateImg",files,futsalImage.config).then((response)=>{
            let responseHolder = response.data;
            if(responseHolder.success == true)
            {
              addToast(responseHolder.message,{
                  appearance:"success",
                  autoDismiss:true
              })
            }
            else
            {
                addToast(responseHolder.message,{
                    appearance:"danger",
                    autoDismiss:true
                })
            }
        }).catch((err)=>{
            console.log(err.response());
        })
    }
  
    return (
        <React.Fragment>
                <div className="modal fade" id={`updateImage${props.futsal._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content modal__design">
      <div className="modal-header">
        <h5 className="modal-title text-white" id="exampleModalLabel">{props.futsal.futsalName}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="text-white">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form method="post" onSubmit={changeImage}>
          <input type="hidden" value={props.futsal._id} name="id"/>
          <Container fluid>
              <Row>
                  <Col lg={6} md={6} xs={12}>
                  <p className="text-white">Previous Image</p>
          
                    <img src={process.env.REACT_APP_URL+`${props.futsal.futsalImage}`} className="d-block w-50 h-50" alt={props.futsal.futsalName}/>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                  <p className="text-white">New Image</p>
          
                 <img src="" id={`getImg${props.futsal._id}`} className="d-block w-50 h-50"/>
                  </Col>
              </Row>
          </Container>
        
          
          <div className="form-group">
              <label> Image Src </label>
              <input type="file" name="image" onChange={(event)=>{setImage(event,props.futsal._id)}} className="form-control-file text-white"/>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-large w-50" name="updateImage"> Update </button>
            </div>                                  
        </form>
      </div>
      </div>
      </div>
      </div> 
        </React.Fragment>
    )
}

export default UpdateImageModal
