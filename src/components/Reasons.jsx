import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Smile,
  Coffee,
  MessageCircleHeart,
  HeartHandshake,
  Eye,
  HeartPulse,
  Star,
  Compass,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";
import { romanticAudio } from "../utils/soundEffects";

// Icon mapping
const iconMap = {
  Smile,
  Sparkles,
  Coffee,
  MessageCircleHeart,
  HeartHandshake,
  Eye,
  HeartPulse,
  Star,
  Compass,
  Crown,
};

export default function Reasons({ onNext }) {
  const [revealedIds, setRevealedIds] = useState([]);

  const toggleCard = (id) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((item) => item !== id));
      romanticAudio.playCardFlipSound();
    } else {
      const nextList = [...revealedIds, id];
      setRevealedIds(nextList);
      romanticAudio.playCardFlipSound();
      if (nextList.length === BIRTHDAY_DATA.reasons.length) {
        romanticAudio.playHeartChime();
      }
    }
  };

  const handleRevealAll = () => {
    setRevealedIds(BIRTHDAY_DATA.reasons.map((r) => r.id));
    romanticAudio.playHeartChime();
  };

  return (
    <section
      aria-label="Chapter 08 — 10 Little Things That Make You Special"
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
          maxWidth: "960px",
          width: "100%",
          padding: "clamp(30px, 6vw, 48px) clamp(16px, 5vw, 36px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>Chapter 08 — 10 Little Things That Make You Special</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            10 Little Things That Make You Special
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            Things I quietly adore about my Bujjamma.
          </p>
        </div>

        {/* Progress Tracker Pill & Reveal All Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              background: "rgba(36, 15, 27, 0.75)",
              border: "1px solid rgba(216, 180, 119, 0.3)",
              color: "#FFF5EC",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            <Heart size={15} fill="#F28AB2" color="#F28AB2" />
            <span>
              {revealedIds.length} of {BIRTHDAY_DATA.reasons.length} Reasons Unfolded
            </span>
          </div>

          {revealedIds.length < BIRTHDAY_DATA.reasons.length && (
            <button
              onClick={handleRevealAll}
              className="btn-secondary"
              style={{ fontSize: "0.8rem", padding: "6px 14px" }}
            >
              <span>Reveal All Cards ✨</span>
            </button>
          )}
        </div>

        {/* 10 Interactive Flip / Reveal Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          {BIRTHDAY_DATA.reasons.map((reason, index) => {
            const isFlipped = revealedIds.includes(reason.id);
            const IconComponent = iconMap[reason.icon] || Heart;

            return (
              <div
                key={reason.id}
                onClick={() => toggleCard(reason.id)}
                role="button"
                tabIndex={0}
                aria-label={`Reason ${reason.id}: ${reason.title}. Tap to ${isFlipped ? "hide" : "reveal"}.`}
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  background: isFlipped
                    ? "linear-gradient(145deg, rgba(56, 21, 43, 0.95) 0%, rgba(36, 15, 27, 0.95) 100%)"
                    : "linear-gradient(145deg, rgba(36, 15, 27, 0.7) 0%, rgba(26, 10, 22, 0.7) 100%)",
                  border: isFlipped
                    ? "1px solid rgba(242, 138, 178, 0.5)"
                    : "1px solid rgba(216, 180, 119, 0.22)",
                  boxShadow: isFlipped
                    ? "0 10px 25px rgba(242, 138, 178, 0.2)"
                    : "0 6px 18px rgba(0,0,0,0.25)",
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "180px",
                  position: "relative",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isFlipped ? "translateY(-3px)" : "none",
                }}
              >
                {/* Number Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "14px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(216, 180, 119, 0.5)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  #{String(index + 1).padStart(2, "0")}
                </span>

                {/* Card Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: isFlipped
                      ? "rgba(242, 138, 178, 0.2)"
                      : "rgba(216, 180, 119, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    color: isFlipped ? "#F28AB2" : "#D8B477",
                    transition: "all 0.3s ease",
                  }}
                >
                  <IconComponent size={24} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    color: isFlipped ? "#FFF5EC" : "var(--color-cream)",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Subtitle / Description */}
                {!isFlipped ? (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-blush)",
                      opacity: 0.75,
                      marginTop: "4px",
                    }}
                  >
                    Tap to reveal ❤️
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-blush)",
                      lineHeight: 1.6,
                      marginTop: "8px",
                      animation: "fadeIn 0.3s ease",
                    }}
                  >
                    {reason.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Next to Birthday Finale Button */}
        <button
          onClick={() => {
            romanticAudio.playHeartChime();
            onNext();
          }}
          className="btn-primary"
          style={{ marginTop: "16px", padding: "1rem 2.4rem" }}
        >
          <span>One Last Thing, Bujjamma... Make A Wish ✨</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
