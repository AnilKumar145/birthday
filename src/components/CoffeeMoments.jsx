import React, { useState } from "react";
import { Sparkles, ArrowRight, Coffee, Heart } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function CoffeeMoments({ onNext }) {
  const [hasSipped, setHasSipped] = useState(false);
  const [steamPuffs, setSteamPuffs] = useState(0);

  const handleCupClick = () => {
    setHasSipped(true);
    setSteamPuffs((prev) => prev + 1);
    romanticAudio.playCoffeeChime();
  };

  return (
    <section
      aria-label="Chapter 02 — Small Moments, Special Feelings"
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
          maxWidth: "780px",
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
          <span>Chapter 02 — Small Moments, Special Feelings</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            The Coffee Invitations
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            "Coffee thagudama, sir?" ☕
          </p>
        </div>

        {/* Interactive Playful Coffee Cup */}
        <div
          onClick={handleCupClick}
          role="button"
          tabIndex={0}
          aria-label="Interactive coffee cup: click to sip"
          style={{
            cursor: "pointer",
            padding: "24px 32px",
            borderRadius: "24px",
            background: "linear-gradient(145deg, rgba(48, 23, 47, 0.8) 0%, rgba(36, 15, 27, 0.9) 100%)",
            border: "1px solid rgba(216, 180, 119, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            boxShadow: hasSipped
              ? "0 0 30px rgba(242, 138, 178, 0.4), inset 0 0 20px rgba(216, 180, 119, 0.2)"
              : "0 10px 25px rgba(0,0,0,0.3)",
            transition: "all 0.4s ease",
            transform: hasSipped ? "scale(1.02)" : "scale(1)",
          }}
        >
          {/* Animated Steam SVGs */}
          <div
            style={{
              height: "45px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "28px",
                borderRadius: "2px",
                background: "linear-gradient(to top, rgba(255, 245, 236, 0.6), transparent)",
                animation: "steamDrift 2.2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                width: "4px",
                height: "36px",
                borderRadius: "2px",
                background: "linear-gradient(to top, rgba(242, 138, 178, 0.7), transparent)",
                animation: "steamDrift 2.6s ease-in-out infinite 0.4s",
              }}
            />
            <span
              style={{
                width: "4px",
                height: "30px",
                borderRadius: "2px",
                background: "linear-gradient(to top, rgba(216, 180, 119, 0.6), transparent)",
                animation: "steamDrift 2.4s ease-in-out infinite 0.8s",
              }}
            />
          </div>

          {/* Handcrafted Coffee Mug SVG */}
          <div style={{ position: "relative" }}>
            <svg width="120" height="95" viewBox="0 0 120 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="mugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5EC" />
                  <stop offset="100%" stopColor="#FADCE8" />
                </linearGradient>
                <linearGradient id="coffeeLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6F4E37" />
                  <stop offset="100%" stopColor="#3E2723" />
                </linearGradient>
              </defs>
              {/* Mug Body */}
              <rect x="25" y="15" width="60" height="65" rx="8" fill="url(#mugGrad)" stroke="#D8B477" strokeWidth="2.5" />
              {/* Coffee Surface */}
              <ellipse cx="55" cy="22" rx="26" ry="7" fill="url(#coffeeLiquid)" />
              {/* Latte Art Heart */}
              <path
                d="M55 25 C52 21, 48 21, 48 24 C48 26, 55 29, 55 29 C55 29, 62 26, 62 24 C62 21, 58 21, 55 25 Z"
                fill="#FFF5EC"
                opacity="0.85"
              />
              {/* Mug Handle */}
              <path
                d="M85 30 C102 30, 102 60, 85 62"
                stroke="url(#mugGrad)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M85 30 C102 30, 102 60, 85 62"
                stroke="#D8B477"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Mug Saucer */}
              <ellipse cx="55" cy="85" rx="48" ry="7" fill="#FADCE8" stroke="#D8B477" strokeWidth="2" />
              {/* Decorative Gold Stars on Mug */}
              <circle cx="45" cy="50" r="1.5" fill="#D8B477" />
              <circle cx="55" cy="46" r="2" fill="#F28AB2" />
              <circle cx="65" cy="52" r="1.5" fill="#D8B477" />
            </svg>
          </div>

          {/* Interactive Revealed Message */}
          <div
            style={{
              marginTop: "16px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: hasSipped ? "rgba(242, 138, 178, 0.2)" : "rgba(216, 180, 119, 0.12)",
              border: hasSipped ? "1px solid #F28AB2" : "1px solid rgba(216, 180, 119, 0.3)",
              color: hasSipped ? "#FFF5EC" : "#D8B477",
              fontSize: "0.95rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
          >
            {hasSipped ? (
              <span>"One coffee invitation... a thousand little feelings. ☕❤️"</span>
            ) : (
              <span>Click the coffee cup to take a sip ☕</span>
            )}
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
            "Sometimes, the smallest invitations become the sweetest memories."
          </p>

          <p style={{ opacity: 0.9 }}>
            As time passed, whenever an opportunity came, we started talking.
            Whenever our paths crossed, she would affectionately ask me:
          </p>

          <div
            style={{
              fontSize: "1.35rem",
              fontFamily: "var(--font-heading)",
              color: "var(--color-rose)",
              fontWeight: 600,
            }}
          >
            "Coffee thagudama, sir?"
          </div>

          <p style={{ opacity: 0.9 }}>
            She would call me for coffee and look forward to seeing me. Those little invitations and conversations gradually became so deeply meaningful to me.
          </p>

          <p style={{ opacity: 0.9 }}>
            I never openly expressed what I felt inside. There were moments when she asked whether I had ever thought about her in a special way.
            I wanted to express my actual feelings, but I held back and kept them quietly to myself.
          </p>

          {/* Staggered poetic lines */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "16px",
              background: "rgba(36, 15, 27, 0.55)",
              borderRadius: "16px",
              border: "1px solid rgba(216, 180, 119, 0.2)",
              color: "var(--color-blush)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.15rem",
            }}
          >
            <p>One simple coffee invitation...</p>
            <p>One unexpected conversation...</p>
            <p>One familiar face you start looking forward to seeing...</p>
            <p style={{ color: "var(--color-gold)", fontWeight: 600 }}>
              And slowly, someone starts occupying a special corner of your heart.
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
