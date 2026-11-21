import React, { useState, useEffect } from "react";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";
import { romanticAudio } from "../utils/soundEffects";

export default function Intro({ onBeginStory }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cinematic timed sequence
    const timers = [
      setTimeout(() => setStep(1), 1000),  // "Some stories are planned..."
      setTimeout(() => setStep(2), 2600),  // "Some stories happen unexpectedly..."
      setTimeout(() => setStep(3), 4400),  // "And some stories..."
      setTimeout(() => setStep(4), 5800),  // "Maybe they're written by DESTINY."
      setTimeout(() => setStep(5), 7200),  // Final reveal: "Hey Bujjamma ❤️"
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStart = () => {
    romanticAudio.startAmbientMusic();
    romanticAudio.playHeartChime();
    onBeginStory();
  };

  const handleSkipAnimation = () => {
    setStep(5);
  };

  return (
    <section
      aria-label="Chapter 0: The Invitation"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 40px",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "760px",
          width: "100%",
          padding: "clamp(32px, 7vw, 56px) clamp(20px, 5vw, 44px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          border: "1px solid rgba(216, 180, 119, 0.35)",
          boxShadow: "0 25px 60px rgba(10, 3, 9, 0.8), 0 0 35px rgba(216, 180, 119, 0.18)",
          position: "relative",
        }}
      >
        {/* Skip Sequence button if she wants to jump right into it */}
        {step < 5 && (
          <button
            onClick={handleSkipAnimation}
            style={{
              position: "absolute",
              top: "16px",
              right: "20px",
              fontSize: "0.75rem",
              color: "rgba(250, 220, 232, 0.5)",
              letterSpacing: "0.05em",
              padding: "4px 8px",
            }}
          >
            Skip intro ›
          </button>
        )}

        {/* Small subtle badge */}
        <div
          className="chapter-badge"
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.8s ease",
          }}
        >
          <Sparkles size={14} color="#D8B477" />
          <span>The Story of Us</span>
        </div>

        {/* Progressive cinematic lines */}
        <div
          style={{
            minHeight: "140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          {step >= 1 && (
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
                color: "var(--color-blush)",
                fontStyle: "italic",
                opacity: step === 1 ? 1 : 0.7,
                transition: "all 0.8s ease",
              }}
            >
              "Some stories are planned..."
            </p>
          )}

          {step >= 2 && (
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
                color: "var(--color-blush)",
                fontStyle: "italic",
                opacity: step === 2 ? 1 : 0.7,
                transition: "all 0.8s ease",
              }}
            >
              "Some stories happen unexpectedly..."
            </p>
          )}

          {step >= 3 && (
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "var(--color-cream)",
                letterSpacing: "0.04em",
                fontWeight: 300,
                transition: "all 0.8s ease",
              }}
            >
              And some stories...
            </p>
          )}

          {step >= 4 && (
            <h1
              className="gold-gradient-text"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.3rem, 6.5vw, 3.8rem)",
                fontWeight: 600,
                letterSpacing: "0.02em",
                lineHeight: 1.15,
                transition: "all 1s ease",
                textShadow: "0 0 25px rgba(216, 180, 119, 0.4)",
              }}
            >
              Maybe they're written by DESTINY.
            </h1>
          )}
        </div>

        {/* Big Reveal (Step 5) */}
        <div
          style={{
            opacity: step >= 5 ? 1 : 0,
            transform: step >= 5 ? "translateY(0)" : "translateY(16px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            borderTop: "1px solid rgba(216, 180, 119, 0.2)",
            paddingTop: "24px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 6vw, 3.2rem)",
                color: "var(--color-rose)",
                fontWeight: 600,
                marginBottom: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Hey Bujjamma <Heart size={28} fill="#F28AB2" color="#F28AB2" style={{ animation: "heartBeat 2s infinite" }} />
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                color: "var(--color-cream)",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.7,
                opacity: 0.95,
              }}
            >
              I made a little world just for you. A world that holds a story, some memories, a few smiles, and a whole lot of love.
            </p>
          </div>

          {/* Central Romantic Quote */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(36, 15, 27, 0.6)",
              borderRadius: "16px",
              border: "1px solid rgba(242, 138, 178, 0.25)",
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "clamp(1.05rem, 3vw, 1.35rem)",
                color: "var(--color-gold)",
                lineHeight: 1.5,
              }}
            >
              "{BIRTHDAY_DATA.relationship.tagline}"
            </p>
          </div>

          {/* Enter Button */}
          <button
            onClick={handleStart}
            className="btn-primary"
            style={{
              padding: "1.1rem 2.6rem",
              fontSize: "1.15rem",
              marginTop: "8px",
            }}
          >
            <span>Enter Our Little World</span>
            <Heart size={20} fill="#240F1B" color="#240F1B" />
          </button>
        </div>
      </div>
    </section>
  );
}

