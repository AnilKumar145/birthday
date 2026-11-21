import React, { useState } from "react";
import { Sparkles, ArrowRight, Heart, MapPin, Navigation } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function BengaluruJourney({ onNext }) {
  const [distanceActive, setDistanceActive] = useState(false);

  const handlePulseDistance = () => {
    setDistanceActive(true);
    romanticAudio.playHeartChime();
  };

  return (
    <section
      aria-label="Chapter 03 — When Distance Entered the Story"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 20px 50px",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "clamp(30px, 6vw, 48px) clamp(20px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>Chapter 03 — When Distance Entered the Story</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            The Bengaluru Goodbye
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            "When will you come back? When will I see you again?"
          </p>
        </div>

        {/* Cinematic Illustration: Sunset-to-Night Departure Scene & Connected Golden Distance Line */}
        <div
          onClick={handlePulseDistance}
          role="button"
          tabIndex={0}
          aria-label="Interactive map: tap to see golden connection across distance"
          style={{
            width: "100%",
            maxWidth: "620px",
            height: "260px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #3A102E 0%, #220A1E 45%, #120512 100%)",
            border: "1px solid rgba(216, 180, 119, 0.25)",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.6)",
          }}
        >
          <svg
            viewBox="0 0 620 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A2E50" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#4A163B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#170617" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F28AB2" />
                <stop offset="50%" stopColor="#D8B477" />
                <stop offset="100%" stopColor="#FFF5EC" />
              </linearGradient>
              <filter id="roadGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Sunset Horizon glow */}
            <rect x="0" y="0" width="620" height="260" fill="url(#sunsetGrad)" />
            <path d="M0 160 Q310 130 620 160 L620 260 L0 260 Z" fill="#180717" opacity="0.9" />

            {/* Distant Hills / Twilight silhouettes */}
            <path d="M0 160 Q80 140 180 155 Q280 135 380 150 Q480 130 620 155 L620 260 L0 260 Z" fill="#240C22" opacity="0.6" />

            {/* Railway / Highway Curving Path */}
            <path
              d="M110 190 Q310 90 510 190"
              stroke={distanceActive ? "url(#railGrad)" : "rgba(216, 180, 119, 0.35)"}
              strokeWidth={distanceActive ? "3.5" : "2"}
              strokeDasharray={distanceActive ? "none" : "6 4"}
              filter={distanceActive ? "url(#roadGlow)" : "none"}
            />

            {/* Train / Transit light streaks */}
            <circle cx="280" cy="138" r="4" fill="#FFF5EC" filter="url(#roadGlow)" opacity="0.9" />
            <circle cx="340" cy="142" r="3" fill="#D8B477" filter="url(#roadGlow)" opacity="0.8" />

            {/* Point 1: Tirupati (Where Bujjamma is) */}
            <g transform="translate(110, 190)">
              <circle cx="0" cy="0" r="24" fill="rgba(242, 138, 178, 0.15)" filter="url(#roadGlow)" />
              <circle cx="0" cy="0" r="12" fill="#F28AB2" />
              <circle cx="0" cy="0" r="5" fill="#FFF5EC" />
              {/* Location Pin Label */}
              <text x="0" y="-18" fill="#FADCE8" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Tirupati</text>
              <text x="0" y="24" fill="#F28AB2" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Her World ❤️</text>
            </g>

            {/* Point 2: Bengaluru (Where Anil had to go) */}
            <g transform="translate(510, 190)">
              <circle cx="0" cy="0" r="24" fill="rgba(216, 180, 119, 0.15)" filter="url(#roadGlow)" />
              <circle cx="0" cy="0" r="12" fill="#D8B477" />
              <circle cx="0" cy="0" r="5" fill="#FFF5EC" />
              {/* Location Pin Label */}
              <text x="0" y="-18" fill="#FFF5EC" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Bengaluru</text>
              <text x="0" y="24" fill="#D8B477" fontSize="10" fontFamily="sans-serif" textAnchor="middle">My Thoughts with Her</text>
            </g>

            {/* Pulsing Love connection traveling over the distance */}
            {distanceActive && (
              <g transform="translate(305, 118)">
                <circle cx="0" cy="0" r="18" fill="rgba(242, 138, 178, 0.3)" filter="url(#roadGlow)" />
                <path
                  d="M0 -6 C-5 -13, -13 -13, -13 -5 C-13 3, 0 12, 0 12 C0 12, 13 3, 13 -5 C13 -13, 5 -13, 0 -6 Z"
                  fill="#F28AB2"
                />
              </g>
            )}
          </svg>

          {/* Interactive Hint */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: "0.75rem",
              color: distanceActive ? "#D8B477" : "rgba(250, 220, 232, 0.6)",
              letterSpacing: "0.04em",
            }}
          >
            {distanceActive
              ? "✨ Distance never diminished the bond — it only made it clearer"
              : "Tap to feel the golden thread connecting across miles ✨"}
          </div>
        </div>

        {/* Narrative */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "680px",
            textAlign: "center",
            lineHeight: 1.8,
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            color: "var(--color-cream)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.2rem, 3.2vw, 1.45rem)",
              color: "var(--color-gold)",
              fontStyle: "italic",
            }}
          >
            "Sometimes, you understand the value of someone's presence a little more when they are about to leave."
          </p>

          <p style={{ opacity: 0.9 }}>
            Eventually, my work took me toward Bengaluru. When I told her I was leaving, I noticed how emotional she became.
          </p>

          <p style={{ opacity: 0.9 }}>
            She looked at me and asked those heartfelt questions:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "16px",
              background: "rgba(36, 15, 27, 0.65)",
              borderRadius: "16px",
              border: "1px solid rgba(242, 138, 178, 0.25)",
              color: "var(--color-blush)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.25rem",
              fontStyle: "italic",
            }}
          >
            <p>"When will you come back?"</p>
            <p>"When will I see you again?"</p>
          </div>

          <p style={{ opacity: 0.9 }}>
            Those simple questions stayed with me through every kilometer of that journey.
            That made me realize how much those everyday meetings and conversations had started to matter.
            Even then, I still hadn't fully voiced what was resting inside my heart.
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: "rgba(36, 15, 27, 0.6)",
              borderRadius: "14px",
              borderLeft: "3px solid var(--color-gold)",
              marginTop: "4px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "var(--color-cream)",
              }}
            >
              "Maybe some goodbyes make us understand what our hearts were trying to say all along."
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            romanticAudio.playHeartChime();
            onNext();
          }}
          className="btn-primary"
          style={{ marginTop: "12px" }}
        >
          <span>Continue Our Story</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

