import React, { useRef, useState } from "react";

export async function startRecording(setRecorderState) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    const sourceNode = audioContext.createMediaStreamSource(stream);
    const gainNode = audioContext.createGain();
    sourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 0.5;
    setRecorderState((prevState) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
        audioContext: audioContext,
        sourceNode: sourceNode,
        gainNode: gainNode,
      };
    });
  } catch (err) {
    console.log(err);
  }
}

export function saveRecording(recorder) {
  if (recorder.state !== "inactive") recorder.stop();
}
