import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import "./recorder.css";
const VoiceRecorder = () => {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  return (
    <section className="voice-recorder">
      {/* <h1 className="title">Voice Recorder</h1> */}
      <div className="recorder-container mt-3">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
    </section>
  );
};

export default VoiceRecorder;
