import React from "react";
import { Sparkles, Heart, Clock, ArrowRight, Gift } from "lucide-react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";
import { romanticAudio } from "../utils/soundEffects";

export default function Countdown({
  days,
  hours,
  minutes,
  seconds,
  onEnterStory,
  onPreviewCelebration,
  forceBirthdayMode,
}) {
  const handleEnter = () => {
    romanticAudio.startAmbientMusic();
    romanticAudio.playHeartChime();
    onEnterStory();
  };

  const timeUnits = [
    { label: "Days", value: String(days).padStart(2, "0") },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Minutes", value: String(minutes).padStart(2, "0") },
    { label: "Seconds", value: String(seconds).padStart(2, "0") },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Decorative Halo */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 90vw)",
          height: "min(500px, 90vw)",
          background: "radial-gradient(circle, rgba(242, 138, 178, 0.15) 0%, rgba(216, 180, 119, 0.08) 50%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Main Glass Card */}
      <div
        className="glass-card"
        style={{
          maxWidth: "680px",
          width: "100%",
          padding: "clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          border: "1px solid rgba(216, 180, 119, 0.3)",
          boxShadow: "0 20px 50px rgba(15, 5, 13, 0.7), 0 0 30px rgba(216, 180, 119, 0.15)",
        }}
      >
        {/* Subtle Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>A Special Day Is Almost Here</span>
        </div>

        {/* Cinematic Title */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 7vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--color-cream)",
              letterSpacing: "-0.01em",
              marginBottom: "8px",
            }}
          >
            November 22, 2026
          </h1>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
              color: "var(--color-rose)",
              letterSpacing: "0.02em",
            }}
          >
            For My Bujjamma ❤️
          </p>
        </div>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            color: "var(--color-blush)",
            maxWidth: "480px",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Destiny is counting down every heartbeat until your birthday officially arrives.
          Every second brings us closer to celebrating you.
        </p>

        {/* 4 Glowing Countdown Clocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(8px, 2.5vw, 16px)",
            width: "100%",
            maxWidth: "520px",
            margin: "8px 0",
          }}
        >
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              style={{
                background: "rgba(36, 15, 27, 0.75)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(216, 180, 119, 0.25)",
                borderRadius: "16px",
                padding: "clamp(12px, 3vw, 18px) 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 20px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  textShadow: "0 0 12px rgba(216, 180, 119, 0.4)",
                }}
              >
                {unit.value}
              </span>
              <span
                style={{
                  fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-blush)",
                  marginTop: "6px",
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          <button
            onClick={handleEnter}
            className="btn-primary"
            style={{ width: "min(340px, 100%)" }}
          >
            <span>Enter Our Little World Early</span>
            <Heart size={18} fill="#240F1B" color="#240F1B" />
          </button>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(250, 220, 232, 0.65)",
              fontStyle: "italic",
            }}
          >
            Can't wait until midnight? You don't have to wait — our story is already here for you.
          </p>

          {/* Test / Preview celebration button */}
          <button
            onClick={onPreviewCelebration}
            className="btn-secondary"
            style={{
              fontSize: "0.8rem",
              padding: "6px 14px",
              marginTop: "4px",
            }}
          >
            <Gift size={14} color="#F28AB2" />
            <span>{forceBirthdayMode ? "Exit Celebration Preview" : "Preview Midnight Celebration Mode ✨"}</span>
          </button>
        </div>

        {/* Small footer note */}
        <div
          style={{
            fontSize: "0.8rem",
            color: "rgba(216, 180, 119, 0.7)",
            letterSpacing: "0.05em",
            borderTop: "1px solid rgba(216, 180, 119, 0.15)",
            paddingTop: "16px",
            width: "100%",
          }}
        >
          Timezone: Indian Standard Time (Asia/Kolkata) • November 22, 2026
        </div>
      </div>
    </div>
  );
}
