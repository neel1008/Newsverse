

import './App.css';

const Card = ({data}) => {
  // console.log(data)
  return (
    <>
    {data.map((item,i)=>{
      if(!item.urlToImage){
        return null
      }else{
        
        return(
          <div className="card m-3" style={{width: "18rem"}}>
    <img src={item.urlToImage} className="card-img-top" alt="..."/>
    <div className="card-body">
     <a href={item.url} target="_blank" rel="noopener noreferrer"> <h5 className="card-title" style={{ color: "black" }}>{item.title}</h5></a>
      <p className="card-text">{item.description}</p>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
    </div>
  </div>
        )
      }
    })}
    
    </>
  )
}

export default Card
