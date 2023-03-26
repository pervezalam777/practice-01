
function VideoFeedComponent(props) {
  return (
    <li>
      <h2>{props.heading}</h2>
      <video controls width="250">
        <source src={props.source} type="video/mp4" />
        Download the
        <a href={props.source}>MP4</a>
        video.
      </video>
      <input type="text" placeholder="comments" />
    </li>
  )
}

export default VideoFeedComponent;