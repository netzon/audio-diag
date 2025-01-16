import "./styles.css";
import { Player } from "webvtt-player";
import { useState } from "react";

export default function App() {
  const [audioFile, setAudioFile] = useState<null | string>(null);
  const [vttFile, setVttFile] = useState<null | string>(null);

  return (
    <div className="App">
      <label htmlFor="audio">Audio File</label>
      <input
        name="audio"
        type="file"
        accept="audio/*"
        onChange={(event) => {
          if (event.target.files) {
            setAudioFile(URL.createObjectURL(event.target.files[0]));
          }
        }}
      />
      <label htmlFor="vtt">Transcript File</label>
      <input
        name="vtt"
        type="file"
        onChange={(event) => {
          if (event.target.files) {
            setVttFile(URL.createObjectURL(event.target.files[0]));
          }
        }}
      />
      {audioFile && vttFile && (
        <Player audio={audioFile} transcript={vttFile} />
      )}
    </div>
  );
}
