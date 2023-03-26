
function AudioFeedComponent(props) {
  return (
    <li>
      <h2>{props.heading}</h2>
      <audio
        controls
        src={props.source}>
        <a href={props.source}>
          Download audio
        </a>
      </audio>
      <input type="text" placeholder="comments" />
    </li>
  )
}

export default AudioFeedComponent;