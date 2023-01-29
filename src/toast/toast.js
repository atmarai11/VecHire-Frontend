import React,{useState,useEffect} from 'react';
// import PropTypes from 'prop-types';
import './toast.css';

const Toast = (props)=>{
    // Toast.defaultProps = {
    //     position: 'bottom-right'
    // }
    
    // Toast.propTypes = {
    //     toastList: PropTypes.array.isRequired,
    //     position: PropTypes.string
    // }
    const {toastList,position,autoDelete,autoDeleteTime} = props;
    const [list,setList] = useState(toastList);

    useEffect(
        ()=>{
            setList(toastList)
        },[toastList,list]
    );
    const deleteToast = id => {
        const index = list.findIndex(e => e.id === id);
        list.splice(index, 1);
        const toastListItem = toastList.findIndex(e => e.id === id);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }   
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(autoDelete == true && toastList.length > 0 && list.length > 0)
            {
                deleteToast(toastList[0].id);
            }
        },autoDeleteTime);
        return ()=>{
            clearInterval(interval);
        }
    },[])
    
    return (
       
        <React.Fragment>
            <div className={`notification-container ${position}`}>
            
            {
                list.map(
                    (toast,i)=>{
                      
                        return(
                        <div key={i} className={`notification toast ${position}`} style={{ backgroundColor: toast.backgroundColor }}>
                    <button onClick={()=>{deleteToast(toast.id)}}>
                        X
                    </button>
                    
                <div className="notification-image">
                    <img src={toast.icon} alt="" />
                </div>
                <div>
                    <p className="notification-title">{toast.title}</p>
                    <p className="notification-message">{toast.description}</p>
                </div>
                </div>   
                        ) 
                    }
                )
            }
                
            </div>
        </React.Fragment>
    )
}

export default Toast;