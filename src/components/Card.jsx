const Card = ({title,img,desc, redirect}) => {
    console.log(title);
    return(
        <div className='folioCard'>
            <img src={img}></img>
            <h4>{title}</h4>
            <p>{desc}</p>
            <button onClick={redirect}>Go</button>
        </div>
    )
}

export default Card