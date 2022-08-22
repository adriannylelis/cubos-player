import './style.css'
import Next from '../../assets/next.svg'
import Pause from '../../assets/pause.svg'
import Play from '../../assets/play.svg'
import Previous from '../../assets/previous.svg'
import Stop from '../../assets/stop.svg'
import { useRef } from 'react'


export default function Controls({
    audioRef,
    currentMusic,
    icon,
    setIconBtn,
    handleChangeMusic
}) {

    let intervalProgress = null;
    const progressRef = useRef(null);

    function playPause() {

        intervalProgress = setInterval(() => {

            if (audioRef.current.paused) {
                clearInterval(intervalProgress)
            }

            const duration = audioRef.current.duration / 60;
            const currentProgress = ((audioRef.current.currentTime / 60) * 100) / duration;

            progressRef.current.style.width = `${currentProgress}%`
        }, 1000)

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIconBtn('pause')
            return;
        }

        audioRef.current.pause()
        setIconBtn('play')

    }

    return (
        <div className='container-controls'>
            <div className='preview-name'>
                <h2>{currentMusic.title}</h2>
                <strong>{currentMusic.artist}</strong>
            </div>
            <div className='container-player'>
                <div className='container-buttons'>
                    <img
                        src={Stop}
                        alt=''
                        className='btn-control'
                    />
                    <img
                        src={Previous}
                        alt=''
                        className='btn-control'
                        onClick={() => handleChangeMusic('previous')}
                    />
                    <img
                        src={icon === 'pause' ? Pause : Play}
                        alt=''
                        className='play-pause'
                        onClick={() => playPause()}
                    />
                    <img
                        src={Next}
                        alt=''
                        className='btn-control'
                        onClick={() => handleChangeMusic('next')}

                    />
                </div>
                <div className='container-progress'>
                    <strong className='start'>0</strong>
                    <div className='container-line'>
                        <div className='progress-line'></div>
                        <div
                            className='progress-line-color'
                            ref={progressRef}
                        >

                        </div>
                    </div>
                    <strong className='end'>3:45</strong>
                </div>
            </div>
            <div className='empty'>

            </div>
        </div>


    )
}