import VideoComponent from '../VideoComponent'
import '../VideoComponent.css';
function Video () {
    return (
        <>
        <div className="video-title" id='video'>
            <VideoComponent embedId="567166159" />
        </div>    
        </>
    )
}

export default Video;