import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music, Heart } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleToggleAudio = () => {
    if (!hasInteracted || !isPlaying) {
      romanticAudio.startAmbientMusic();
      setIsPlaying(true);
      setIsMuted(false);
      setHasInteracted(true);
      romanticAudio.playHeartChime();
    } else {
      const muted = romanticAudio.toggleMute();
      setIsMuted(muted);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <button
        onClick={handleToggleAudio}
        aria-label={isMuted || !isPlaying ? "Play Romantic Ambience" : "Mute Music"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "999px",
          background: "rgba(48, 23, 47, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(216, 180, 119, 0.35)",
          color: isMuted || !isPlaying ? "#FADCE8" : "#D8B477",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
          fontSize: "0.85rem",
          fontWeight: 500,
          transition: "all 0.3s ease",
        }}
      >
        {isPlaying && !isMuted ? (
          <>
            {/* Animated Equalizer Waves */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                height: "14px",
                marginRight: "2px",
              }}
            >
              <span
                style={{
                  width: "2px",
                  height: "12px",
                  backgroundColor: "#D8B477",
                  borderRadius: "1px",
                  animation: "twinkle 0.8s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  width: "2px",
                  height: "8px",
                  backgroundColor: "#F28AB2",
                  borderRadius: "1px",
                  animation: "twinkle 0.6s ease-in-out infinite 0.2s",
                }}
              />
              <span
                style={{
                  width: "2px",
                  height: "14px",
                  backgroundColor: "#D8B477",
                  borderRadius: "1px",
                  animation: "twinkle 1s ease-in-out infinite 0.4s",
                }}
              />
            </div>
            <Volume2 size={16} color="#D8B477" />
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}>Music: On</span>
          </>
        ) : (
          <>
            <Music size={15} color="#F28AB2" />
            <span style={{ fontSize: "0.8rem", color: "#FADCE8" }}>Play Music</span>
            <VolumeX size={15} color="#F28AB2" style={{ opacity: 0.8 }} />
          </>
        )}
      </button>
    </div>
  );
}

