import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Heart, Mail, MailOpen, FastForward } from "lucide-react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";
import { romanticAudio } from "../utils/soundEffects";

export default function LoveLetter({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    romanticAudio.playHeartChime();
    setVisibleParagraphs(1);
  };

  useEffect(() => {
    if (!isOpen) return;

    // Staggered reveal of paragraphs
    const total = BIRTHDAY_DATA.letter.paragraphs.length;
    if (visibleParagraphs < total) {
      const timer = setTimeout(() => {
        setVisibleParagraphs((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, visibleParagraphs]);

  const handleSkipAnimation = () => {
    setIsOpen(true);
    setVisibleParagraphs(BIRTHDAY_DATA.letter.paragraphs.length);
  };

  return (
    <section
      aria-label="Chapter 07 — A Letter From Your Nani"
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
          maxWidth: "820px",
          width: "100%",
          padding: "clamp(30px, 6vw, 48px) clamp(16px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>Chapter 07 — Straight From The Heart</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            A Letter From Your Nani ❤️
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            Written just for you, my Bujjamma.
          </p>
        </div>

        {/* Envelope Closed State */}
        {!isOpen ? (
          <div
            onClick={handleOpenEnvelope}
            role="button"
            tabIndex={0}
            aria-label="Tap to open the birthday love letter"
            style={{
              cursor: "pointer",
              padding: "40px 30px",
              borderRadius: "24px",
              background: "linear-gradient(145deg, #38152B 0%, #200B1A 100%)",
              border: "1px solid rgba(216, 180, 119, 0.4)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.5), 0 0 25px rgba(216, 180, 119, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              maxWidth: "420px",
              width: "100%",
              transition: "all 0.3s ease",
            }}
          >
            {/* Wax Seal Envelope Icon */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #D8B477 0%, #A87D38 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 20px rgba(216, 180, 119, 0.4)",
                animation: "pulseGlow 2.5s infinite",
              }}
            >
              <Heart size={44} fill="#240F1B" color="#240F1B" />
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.45rem",
                  color: "#FFF5EC",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                Tap to Open Your Letter
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--color-blush)", opacity: 0.85 }}>
                A personal message sealed with love and memories
              </p>
            </div>

            <button className="btn-primary" style={{ padding: "0.75rem 1.8rem", fontSize: "0.95rem" }}>
              <span>Open Envelope</span>
              <MailOpen size={16} />
            </button>
          </div>
        ) : (
          /* Unfolded Cream Parchment Paper Letter */
          <div
            style={{
              width: "100%",
              maxWidth: "680px",
              background: "#FFFDF9",
              color: "#2C1820",
              borderRadius: "18px",
              padding: "clamp(24px, 5vw, 44px) clamp(20px, 5vw, 40px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(216, 180, 119, 0.2)",
              border: "1px solid #D8B477",
              textAlign: "left",
              position: "relative",
              overflow: "hidden",
              animation: "fadeIn 0.6s ease",
            }}
          >
            {/* Top parchment subtle watermark & borders */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(168, 125, 56, 0.25)",
                paddingBottom: "12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.2rem",
                  color: "#A87D38",
                  fontWeight: 700,
                }}
              >
                To My Bujjamma ❤️
              </span>

              {visibleParagraphs < BIRTHDAY_DATA.letter.paragraphs.length && (
                <button
                  onClick={handleSkipAnimation}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.75rem",
                    color: "#8B5E3C",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    background: "rgba(216, 180, 119, 0.2)",
                  }}
                >
                  <FastForward size={13} />
                  <span>Read full letter</span>
                </button>
              )}
            </div>

            {/* Letter Greeting */}
            <h3
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(1.8rem, 4vw, 2.3rem)",
                color: "#7A1C43",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              {BIRTHDAY_DATA.letter.greeting}
            </h3>

            {/* Paragraphs in handwritten font */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(1.3rem, 3.2vw, 1.55rem)",
                lineHeight: 1.5,
                color: "#2C1820",
              }}
            >
              {BIRTHDAY_DATA.letter.paragraphs.slice(0, visibleParagraphs).map((para, idx) => (
                <p key={idx} style={{ animation: "fadeIn 0.5s ease" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Letter Closing and Signature */}
            {visibleParagraphs >= BIRTHDAY_DATA.letter.paragraphs.length && (
              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "16px",
                  borderTop: "1px dashed rgba(168, 125, 56, 0.3)",
                  textAlign: "right",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1.4rem, 3.5vw, 1.7rem)",
                  color: "#7A1C43",
                  fontWeight: 700,
                  animation: "fadeIn 0.8s ease",
                }}
              >
                <div>{BIRTHDAY_DATA.letter.closing}</div>
                <div style={{ marginTop: "4px", whiteSpace: "pre-line" }}>
                  {BIRTHDAY_DATA.letter.signature}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Next Button */}
        {isOpen && (
          <button
            onClick={() => {
              romanticAudio.playHeartChime();
              onNext();
            }}
            className="btn-primary"
            style={{ marginTop: "12px" }}
          >
            <span>See 10 Little Things That Make You Special</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
}
