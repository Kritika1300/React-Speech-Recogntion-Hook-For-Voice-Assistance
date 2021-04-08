import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";
const microPhoneIcon = "data:image/png;base64,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";
function App() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={microPhoneIcon} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default App;