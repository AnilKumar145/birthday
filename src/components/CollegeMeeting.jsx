import React, { useState } from "react";
import { Sparkles, ArrowRight, Heart, MapPin, School, Laptop } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function CollegeMeeting({ onNext }) {
  const [sparkActivated, setSparkActivated] = useState(false);

  const handleTriggerSpark = () => {
    setSparkActivated(true);
    romanticAudio.playHeartChime();
  };

  return (
    <section
      aria-label="Chapter 01 — An Unexpected Beginning"
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
          padding: "clamp(30px, 6vw, 50px) clamp(20px, 5vw, 44px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>Chapter 01 — An Unexpected Beginning</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            The Day Our Paths Crossed
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              borderRadius: "999px",
              backgroundColor: "rgba(242, 138, 178, 0.12)",
              border: "1px solid rgba(242, 138, 178, 0.25)",
              color: "var(--color-rose-soft)",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <School size={15} />
            <span>SVC College, Tirupati • Student Hackathon Presentations</span>
          </div>
        </div>

        {/* Abstract Cinematic SVG Artwork: College Corridor, Hackathon Stage & Golden Connecting Light */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "260px",
            borderRadius: "20px",
            background: "linear-gradient(180deg, #1A0A16 0%, #2A1226 100%)",
            border: "1px solid rgba(216, 180, 119, 0.25)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
          onClick={handleTriggerSpark}
          title="Click to trace the golden beam of destiny"
        >
          <svg
            viewBox="0 0 600 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3A1733" />
                <stop offset="100%" stopColor="#1E0B1B" />
              </linearGradient>
              <linearGradient id="stageGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D8B477" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D8B477" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F28AB2" />
                <stop offset="50%" stopColor="#FFF5EC" />
                <stop offset="100%" stopColor="#D8B477" />
              </linearGradient>
              <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Architectural Corridor Columns & Arches */}
            <path d="M40 260 V60 Q100 40 160 60 V260" stroke="rgba(216, 180, 119, 0.18)" strokeWidth="2" fill="none" />
            <path d="M160 260 V60 Q220 40 280 60 V260" stroke="rgba(216, 180, 119, 0.15)" strokeWidth="2" fill="none" />
            <path d="M320 260 V60 Q380 40 440 60 V260" stroke="rgba(216, 180, 119, 0.15)" strokeWidth="2" fill="none" />
            <path d="M440 260 V60 Q500 40 560 60 V260" stroke="rgba(216, 180, 119, 0.18)" strokeWidth="2" fill="none" />

            {/* Ceiling perspective lines */}
            <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(216, 180, 119, 0.12)" strokeDasharray="4 4" />
            <line x1="300" y1="20" x2="300" y2="80" stroke="rgba(216, 180, 119, 0.2)" />

            {/* Subtle Hackathon Stage Screen */}
            <rect x="230" y="70" width="140" height="75" rx="6" fill="#140612" stroke="rgba(242, 138, 178, 0.3)" />
            <rect x="245" y="85" width="60" height="4" rx="2" fill="rgba(216, 180, 119, 0.4)" />
            <rect x="245" y="95" width="105" height="3" rx="1.5" fill="rgba(255, 245, 236, 0.2)" />
            <rect x="245" y="103" width="85" height="3" rx="1.5" fill="rgba(255, 245, 236, 0.2)" />
            <rect x="245" y="111" width="95" height="3" rx="1.5" fill="rgba(255, 245, 236, 0.2)" />
            <text x="300" y="132" fill="rgba(216, 180, 119, 0.7)" fontSize="8" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">HACKATHON 2026</text>

            {/* Stage ambient spotlight */}
            <polygon points="210,260 260,145 340,145 390,260" fill="url(#stageGlow)" />

            {/* Left Silhouette: She (Professor at SVC College) */}
            <g transform="translate(140, 150)">
              {/* Soft glow behind her */}
              <circle cx="20" cy="30" r="35" fill="rgba(242, 138, 178, 0.15)" filter="url(#goldGlowFilter)" />
              {/* Head */}
              <circle cx="20" cy="18" r="10" fill="#FADCE8" opacity="0.9" />
              {/* Hair silhouette */}
              <path d="M12 18 C12 8, 28 8, 28 18 C28 28, 26 34, 25 36 C24 33, 21 31, 16 32 C13 32, 12 26, 12 18 Z" fill="#421E3B" />
              {/* Elegant attire/saree drape silhouette */}
              <path d="M12 30 C15 28, 25 28, 28 30 L32 90 L8 90 Z" fill="#6A2E5B" opacity="0.95" />
              <path d="M16 32 L31 75" stroke="#D8B477" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
              <text x="20" y="105" fill="#F28AB2" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Her (Professor)</text>
            </g>

            {/* Right Silhouette: Anil / Nani (Student Mentor from TalentShala Global) */}
            <g transform="translate(420, 150)">
              {/* Soft glow behind him */}
              <circle cx="20" cy="30" r="35" fill="rgba(216, 180, 119, 0.15)" filter="url(#goldGlowFilter)" />
              {/* Head */}
              <circle cx="20" cy="18" r="10" fill="#FFF5EC" opacity="0.9" />
              {/* Hair */}
              <path d="M11 16 C11 10, 29 10, 29 16 C29 17, 27 15, 20 15 C13 15, 11 16, 11 16 Z" fill="#240F1B" />
              {/* Blazer / Mentor attire */}
              <path d="M10 28 L30 28 L34 90 L6 90 Z" fill="#3B1C33" opacity="0.95" />
              <path d="M20 28 L20 75" stroke="#D8B477" strokeWidth="1.2" opacity="0.7" />
              <text x="20" y="105" fill="#D8B477" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Me (TalentShala)</text>
            </g>

            {/* Golden Connecting Beam / Spark of Destiny */}
            <path
              d="M175 180 C260 140, 340 140, 425 180"
              stroke={sparkActivated ? "url(#sparkGrad)" : "rgba(216, 180, 119, 0.35)"}
              strokeWidth={sparkActivated ? "3.5" : "1.5"}
              strokeDasharray={sparkActivated ? "none" : "5 5"}
              filter={sparkActivated ? "url(#goldGlowFilter)" : "none"}
            />

            {/* Stardust particles along the curve */}
            <circle cx="230" cy="162" r={sparkActivated ? "4" : "2"} fill="#F28AB2" filter="url(#goldGlowFilter)" />
            <circle cx="300" cy="150" r={sparkActivated ? "6" : "3"} fill="#FFF5EC" filter="url(#goldGlowFilter)" />
            <circle cx="370" cy="162" r={sparkActivated ? "4" : "2"} fill="#D8B477" filter="url(#goldGlowFilter)" />

            {/* Heart at the center when activated */}
            {sparkActivated && (
              <g transform="translate(290, 138) scale(0.8)">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
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
              color: sparkActivated ? "#D8B477" : "rgba(250, 220, 232, 0.6)",
              letterSpacing: "0.04em",
            }}
          >
            {sparkActivated
              ? "✨ The spark was ignited — destiny made our paths cross"
              : "Tap the corridor illustration to illuminate destiny's spark ✨"}
          </div>
        </div>

        {/* Narrative Flow */}
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
            "Who would have thought that a professional visit to a college could become the beginning of such a beautiful story?"
          </p>

          <p style={{ opacity: 0.9 }}>
            She was working as a professor at <strong style={{ color: "#F28AB2" }}>SVC College, Tirupati</strong>.
            I had travelled there as a student mentor representing <strong style={{ color: "#D8B477" }}>TalentShala Global</strong>.
            Our paths crossed right in the middle of student hackathon presentations.
          </p>

          <p style={{ opacity: 0.9 }}>
            "Among all those presentations, conversations, and familiar faces, one person quietly became special to me."
          </p>

          <p style={{ opacity: 0.9 }}>
            I still remember that very first meeting. I developed a special feeling when I saw her. I couldn't explain it at that time.
            I simply felt something positive and comforting. I had no idea how important this unexpected encounter would eventually become.
          </p>

          <div
            style={{
              padding: "16px 20px",
              background: "rgba(36, 15, 27, 0.6)",
              borderRadius: "14px",
              borderLeft: "3px solid var(--color-rose)",
              marginTop: "4px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "var(--color-blush)",
              }}
            >
              "Sometimes, destiny doesn't announce itself. It simply introduces two people."
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

