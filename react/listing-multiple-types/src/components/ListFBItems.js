import { fbFeed } from '../constants/facebook'

import TextFeedComponent from "./TextFeedComponent";
import ImageFeedComponent from "./ImageFeedComponent";
import AudioFeedComponent from "./AudioFeedComponent";
import VideoFeedComponent from "./VideoFeedComponent";


function ListFBItems() {
  function renderFeed(feed) {
    console.log(feed)
    switch(feed.type) {
      case 'text':
        return <TextFeedComponent key={feed.id} {...feed} />;
      case 'image':
        return <ImageFeedComponent key={feed.id} {...feed} />;
      case 'audio':
        return <AudioFeedComponent key={feed.id} {...feed} />
      case 'video':
        return <VideoFeedComponent key={feed.id} {...feed} />;
      default: 
        return <li key={`${parseInt(Math.random()*100)}/${Date.now()}`}>Not defined</li>
    }
  }

  return (
    <ul>
      {
        fbFeed.data.map(renderFeed)
      }
    </ul>
  )
}

export default ListFBItems;