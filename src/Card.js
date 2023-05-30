import Images from "./Images";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="pic">
          <Images imgsrc={props.imgsrc}/>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <a href={props.link}>
            <button className="clickme">Watch Now </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card;