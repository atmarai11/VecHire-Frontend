import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import {useToasts} from 'react-toast-notifications';
import './practice.css';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';


function switcher(obj)
{
    var objContainer=['oneA','twoA','threeA','fourA'];
    var objId=obj.target.id;
    for(var i=0; i<objContainer.length; i++)
    {
        if(objContainer[i] == objId)
        {
            if(i != 3)
            {
                var val=document.querySelector('#'+objId).value;
                if(val.length > 0)
                {
                    document.querySelector('#'+objContainer[i+1]).focus();
                }
            }
        }
    }
}
const useStyles = makeStyles((theme) => ({
  
  }));

const EffectCheck = () => {
    const classes = useStyles();
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
      } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: top100Films,
        getOptionLabel: (option) => option.title,
      }); 
//     let {addToast} = useToasts();
//     let [adDetail,setAdDetail] = useState({
//        "title":"",
//        "description":"",
//        "image":""
//    })


//    const adData = (e)=>{
//         var {name,value} = e.target;
       
//         setAdDetail(
//            { ...adDetail,
//             [name]:value
//            }
//         )
//    }
//    const imgData = (e)=>{
//        var {name,files} = e.target;
//         setAdDetail(
//             {
//                 ...adDetail,
//                 [name]:files[0]
//             }
//         )
//    }

//    const onFormSubmit = (e)=>{
//        e.preventDefault();
//        let formData = new FormData();
//        formData.append('adImage',adDetail['image']);
//        formData.append('title',adDetail['title']);
//        formData.append('description',adDetail['description']);
//        const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     };
//        axios.post(process.env.REACT_APP_URL+'add/Ad',formData,config).then((response)=>{
//          let apiResponse = response.data;
//          if(apiResponse.success == true)
//          {
//             addToast(`${apiResponse.message}`,{
//                 "appearance":"success",
//                 autoDismiss:true
//             })
//          }
//          else
//          {
//             addToast(`${apiResponse.message}`,{
//                 "appearance":"warning",
//                 autoDismiss:true
//             }) 
//          }
//        }).catch((err)=>{
//            console.log(err.response);
//        })
//    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                    <Col lg={8}>
                        {/* <form method = "post">
                            <div className="inputDetails">
                                <input type="text" maxLength="1" className="form-control" id="oneA" required autoFocus onInput={(event)=>{switcher(event)}}/>
                                <input type="text" maxLength="1" className="form-control" id="twoA" required onInput={(event)=>{switcher(event)}}/>
                                <input type="text" maxLength="1" className="form-control" id="threeA" required onInput={(event)=>{switcher(event)}}/>
                                <input type="text" maxLength="1" className="form-control" id="fourA" required onInput={(event)=>{switcher(event)}}/>
                            </div>
                        </form> */}


                        {/* <form method="post" style={{padding:"20px"}} onSubmit={(event)=>{onFormSubmit(event)}}>
                            <div className="form-group">
                                <label> Image Title </label>
                                <input type="text" className="form-control" name="title" value={adDetail['title']} onChange={(event)=>{adData(event)}} id="title"/>
                            </div>
                            <div className="form-group">
                                <label> Image Description </label>
                                <input type="text" className="form-control" name="description" value={adDetail['description']} onChange={(event)=>{adData(event)}} id="description"/>
                            </div>
                          
                            <div className="form-group">
                                <label> Image </label>
                                <input type="file" className="form-control-file" name="image" onChange={(event)=>{imgData(event)}} id="image"/>
                            </div>
                            <div className="text-center">
                            <button className="btn btn-lg btn-primary mt-3" name="adAddition" style={{width:"100px"}} type="submit"> Add </button>
                            </div>
                        </form> */}
                        <div {...getRootProps()}>
                  
        <input className={`${classes.input}`} className="form-control" {...getInputProps()} placeholder="Search in VecHire"/>
      </div>
      {groupedOptions.length > 0 ? (
        <div className={classes.listbox} {...getListboxProps()}  className="output-box">
          {groupedOptions.map((option, index) => (
            <div {...getOptionProps({ option, index })} className="search__items">
                <Container fluid>
                    <Row>
                        <Col lg={2}>
                            <div className="imgg">
                                <img src="futsal.png" alt="image" className="d-block"/>
                            </div>
                        </Col>
                        <Col lg={10}>
                         <p style={{position:"relative",top:"30px"}}>{option.title}</p>
                        </Col>
                    </Row>
                </Container>
               
            </div>
           
          ))}
        </div>
      ) : null}    


                    </Col>

                    <Col>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="Images/banner.jpg"class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                            <img src="Images/banner3.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                            <img src="Images/banner2.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  

export default EffectCheck
