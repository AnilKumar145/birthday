import React, { useState } from "react";
import { Sparkles, ArrowRight, Heart, Clock, Calendar } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function CreamStoneMemory({ onNext }) {
  const [iceCreamTasted, setIceCreamTasted] = useState(false);

  const handleTasteIceCream = () => {
    setIceCreamTasted(true);
    romanticAudio.playIceCreamChime();
  };

  return (
    <section
      aria-label="Chapter 05 — A Memory Called October 12"
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
          <span>Chapter 05 — A Memory Called October 12</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            October 12: At Cream Stone
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              borderRadius: "999px",
              backgroundColor: "rgba(216, 180, 119, 0.12)",
              border: "1px solid rgba(216, 180, 119, 0.3)",
              color: "var(--color-gold)",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <Calendar size={15} />
            <span>October 12 • Cream Stone • One Cherished Hour</span>
          </div>
        </div>

        {/* Visual Artwork: Cream Stone Dessert Cup + 60-Minute Animated Clock */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 36px)",
            flexWrap: "wrap",
            width: "100%",
            margin: "10px 0",
          }}
        >
          {/* Animated 60-Minute Clock */}
          <div
            style={{
              padding: "20px 24px",
              borderRadius: "24px",
              background: "rgba(36, 15, 27, 0.75)",
              border: "1px solid rgba(216, 180, 119, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", width: "90px", height: "90px" }}>
              <svg width="90" height="90" viewBox="0 0 100 100">
                {/* Clock Face Circle */}
                <circle cx="50" cy="50" r="44" stroke="#D8B477" strokeWidth="2.5" fill="#240F1B" />
                <circle cx="50" cy="50" r="40" stroke="rgba(242, 138, 178, 0.2)" strokeWidth="1" fill="none" />
                
                {/* 12, 3, 6, 9 markers */}
                <line x1="50" y1="12" x2="50" y2="18" stroke="#D8B477" strokeWidth="2" />
                <line x1="88" y1="50" x2="82" y2="50" stroke="#D8B477" strokeWidth="2" />
                <line x1="50" y1="88" x2="50" y2="82" stroke="#D8B477" strokeWidth="2" />
                <line x1="12" y1="50" x2="18" y2="50" stroke="#D8B477" strokeWidth="2" />

                {/* Clock center */}
                <circle cx="50" cy="50" r="3.5" fill="#F28AB2" />

                {/* Hour Hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="28"
                  stroke="#FFF5EC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Minute Hand revolving softly */}
                <line
                  x1="50"
                  y1="50"
                  x2="68"
                  y2="50"
                  stroke="#D8B477"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "50px 50px",
                    animation: "twinkle 4s ease-in-out infinite",
                  }}
                />
              </svg>
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                color: "var(--color-cream)",
                fontWeight: 600,
              }}
            >
              One Precious Hour
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--color-blush)", opacity: 0.8 }}>
              60 Minutes of Pure Sweetness
            </span>
          </div>

          {/* Clickable Elegant Cream Stone Ice Cream Cup */}
          <div
            onClick={handleTasteIceCream}
            role="button"
            tabIndex={0}
            aria-label="Clickable Cream Stone ice cream illustration"
            style={{
              cursor: "pointer",
              padding: "20px 28px",
              borderRadius: "24px",
              background: iceCreamTasted
                ? "linear-gradient(135deg, rgba(48, 23, 47, 0.9) 0%, rgba(68, 28, 58, 0.8) 100%)"
                : "rgba(36, 15, 27, 0.75)",
              border: iceCreamTasted
                ? "1px solid #F28AB2"
                : "1px solid rgba(216, 180, 119, 0.3)",
              boxShadow: iceCreamTasted
                ? "0 0 35px rgba(242, 138, 178, 0.35)"
                : "0 10px 30px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: iceCreamTasted ? "scale(1.02)" : "scale(1)",
            }}
          >
            {/* SVG Ice Cream Cup */}
            <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
              <defs>
                <linearGradient id="creamScoop1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5EC" />
                  <stop offset="100%" stopColor="#FADCE8" />
                </linearGradient>
                <linearGradient id="roseScoop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F28AB2" />
                  <stop offset="100%" stopColor="#D85A88" />
                </linearGradient>
                <linearGradient id="glassBowl" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 245, 236, 0.3)" />
                  <stop offset="100%" stopColor="rgba(216, 180, 119, 0.15)" />
                </linearGradient>
              </defs>

              {/* Cherry on Top */}
              <circle cx="60" cy="18" r="8" fill="#E63946" />
              <path d="M60 14 Q68 4 74 6" stroke="#588157" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="58" cy="16" r="2" fill="#FFF" opacity="0.6" />

              {/* Waffle roll stick */}
              <line x1="72" y1="20" x2="95" y2="4" stroke="#D8B477" strokeWidth="5" strokeLinecap="round" />
              <line x1="74" y1="18" x2="93" y2="6" stroke="#9C7844" strokeWidth="1" strokeDasharray="3 3" />

              {/* Top Scoop (Rose Berry) */}
              <ellipse cx="60" cy="34" rx="26" ry="18" fill="url(#roseScoop)" />
              {/* Left Scoop (Rich Cream) */}
              <ellipse cx="44" cy="46" rx="22" ry="16" fill="url(#creamScoop1)" />
              {/* Right Scoop (Choco Gold) */}
              <ellipse cx="76" cy="46" rx="22" ry="16" fill="#A47551" />

              {/* Chocolate drizzle / gold sparkles */}
              <path d="M38 42 Q60 52 82 42" stroke="#6F4E37" strokeWidth="2.5" fill="none" />
              <circle cx="50" cy="38" r="1.5" fill="#D8B477" />
              <circle cx="68" cy="40" r="1.5" fill="#D8B477" />

              {/* Dessert Glass Bowl */}
              <path d="M22 55 Q60 62 98 55 L86 92 Q60 98 34 92 Z" fill="url(#glassBowl)" stroke="#D8B477" strokeWidth="2" />
              {/* Bowl Stem & Base */}
              <rect x="56" y="94" width="8" height="14" fill="#D8B477" opacity="0.8" />
              <ellipse cx="60" cy="110" rx="24" ry="4" fill="#D8B477" />
            </svg>

            {/* Revealed note or hint */}
            <div
              style={{
                marginTop: "12px",
                padding: "8px 16px",
                borderRadius: "999px",
                background: iceCreamTasted ? "rgba(242, 138, 178, 0.2)" : "rgba(216, 180, 119, 0.15)",
                border: iceCreamTasted ? "1px solid #F28AB2" : "1px solid rgba(216, 180, 119, 0.3)",
                color: iceCreamTasted ? "#FFF5EC" : "#D8B477",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
            >
              {iceCreamTasted ? (
                <span>"Some moments are sweeter than ice cream. And this one will always be special. 🍦❤️"</span>
              ) : (
                <span>Tap the ice cream to reveal our sweet memory 🍦</span>
              )}
            </div>
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
            "And then came October 12..."
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "16px",
              background: "rgba(36, 15, 27, 0.6)",
              borderRadius: "16px",
              border: "1px solid rgba(216, 180, 119, 0.2)",
              color: "var(--color-blush)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
            }}
          >
            <p>One place.</p>
            <p>Two people.</p>
            <p>Approximately one hour.</p>
            <p style={{ color: "var(--color-gold)", fontWeight: 600, marginTop: "4px" }}>
              But memories that feel much bigger than the time we spent together.
            </p>
          </div>

          <p style={{ opacity: 0.9 }}>
            We met at Cream Stone on October 12. We spent about one hour sitting together, sharing that space, sharing that time.
          </p>

          <p style={{ opacity: 0.9 }}>
            It became a truly wonderful, indelible experience for me. Out of all the moments life gives us, that single hour continues to shine brightly in my memory.
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
                color: "var(--color-cream)",
              }}
            >
              "Sometimes, you don't need an entire day to create a memory that stays with you forever."
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
