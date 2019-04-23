import exampleVideoData from '../data/exampleVideoData.js';
import videoListEntry from './VideoListEntry.js';

console.log(exampleVideoData);

var VideoList = (props) => {
  const videos = props.videos;
  let listItems = videos.map((video) =>
    <ListItem key={video.toString()}
      value={video} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
};



// class VideoList extends React.Component(){
//   constructor(props){
//     super(props);
//   }
//   render(){
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
//   }
// }

// ReactDOM.render(<>);
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
