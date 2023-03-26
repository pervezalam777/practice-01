
function ImageFeedComponent(props) {
  return (
    <li>
      <h2>{props.heading}</h2>
      <ul>
        {
          props.images.map((src, index) => {
            return(
              <li key={`${index}/${Date.now()}`}>
                <img src={src} alt={`${src} / ${index}`} />
              </li>
            )
          })
        }
        
       {/* <li>   
          <img src="" alt="two" />
        </li> */}
      </ul>
      <input type="text" placeholder="comments" />
    </li>
  )
}

export default ImageFeedComponent;