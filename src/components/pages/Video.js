import VideoComponent from '../VideoComponent'
import '../VideoComponent.css';
function Video () {
    return (
        <>
        <div className="video-title" id='video'>
            <h1>Prezentacja wyników</h1>
        </div>    
            <VideoComponent embedId="rokGy0huYEA" />
        </>
    )
}

export default Video;