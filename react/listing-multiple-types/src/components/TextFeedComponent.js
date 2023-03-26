
function TextFeedComponent(props) {
  return (
    <li>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
      <input type="text" placeholder="comments" />
    </li>
  )
}

export default TextFeedComponent;