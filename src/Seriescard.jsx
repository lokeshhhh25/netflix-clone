import './Seriescard.css';


function Seriescard(props){
    return (
        <> 
<div className="cards"> 
     <div className="card">
          <img src={props.imgsrc}  alt="my pic"  className="img" ></img>
          <div className="info">
            <span className="category">{props.category} </span>
            <h3 className="title"> {props.title}</h3>
            <a href={props.link} target="efrgtr">
              <button>Watch Now</button>
            </a> 
            
          </div>
     </div>
 </div>
        </>
        

    );
}
export default Seriescard;