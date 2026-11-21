import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, RotateCcw, Gift, Flame } from "lucide-react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";
import { romanticAudio } from "../utils/soundEffects";

export default function BirthdayCake({ onReplayStory }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWishes, setShowWishes] = useState(false);

  const triggerFireworks = () => {
    // Elegant golden and rose fireworks confetti burst
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#D8B477", "#F28AB2", "#FFF5EC"],
    });
    fire(0.2, {
      spread: 60,
      colors: ["#FADCE8", "#FFD700", "#F4978E"],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#FFF", "#F28AB2", "#D8B477"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#D8B477", "#FFF5EC"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#F28AB2", "#D8B477"],
    });
  };

  const handleMakeWish = () => {
    if (candlesBlown) return;

    romanticAudio.playBlowCandleSound();
    setCandlesBlown(true);

    setTimeout(() => {
      triggerFireworks();
      setShowWishes(true);
    }, 400);

    // Secondary celebratory bursts
    setTimeout(triggerFireworks, 1600);
    setTimeout(triggerFireworks, 3200);
  };

  return (
    <section
      aria-label="Chapter 09 — Make Your Birthday Wish"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 20px 60px",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "840px",
          width: "100%",
          padding: "clamp(32px, 6vw, 52px) clamp(16px, 5vw, 44px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          border: candlesBlown
            ? "1px solid rgba(242, 138, 178, 0.6)"
            : "1px solid rgba(216, 180, 119, 0.35)",
          boxShadow: candlesBlown
            ? "0 25px 65px rgba(10, 3, 9, 0.8), 0 0 45px rgba(216, 180, 119, 0.3)"
            : "0 20px 50px rgba(10, 3, 9, 0.7)",
          transition: "all 0.6s ease",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>The Birthday Finale • Make Your Wish</span>
        </div>

        {/* Title */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
              color: "var(--color-cream)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {BIRTHDAY_DATA.finalMessage.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.6rem, 4vw, 2.3rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            Happy Birthday, Bujjamma ❤️
          </p>
        </div>

        {/* Beautiful Illustrated 3-Tier Cake with Glowing Flickering Candles */}
        <div
          onClick={handleMakeWish}
          role="button"
          tabIndex={0}
          aria-label="Interactive birthday cake: click to blow out candles and make a wish"
          style={{
            cursor: candlesBlown ? "default" : "pointer",
            position: "relative",
            width: "280px",
            height: "230px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "10px 0",
            userSelect: "none",
          }}
        >
          {/* Animated Candles on Top */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              position: "absolute",
              top: "12px",
              zIndex: 3,
            }}
          >
            {[0, 1, 2].map((candleIndex) => (
              <div
                key={candleIndex}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Flame / Smoke */}
                {!candlesBlown ? (
                  <div
                    style={{
                      width: "12px",
                      height: "18px",
                      borderRadius: "50% 50% 35% 35%",
                      background: "radial-gradient(ellipse at 50% 80%, #FFF5EC 0%, #FFD166 40%, #EF476F 90%)",
                      boxShadow: "0 0 14px 4px rgba(255, 209, 102, 0.8)",
                      animation: `candleFlicker ${1.8 + candleIndex * 0.3}s ease-in-out infinite`,
                      marginBottom: "2px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "6px",
                      height: "16px",
                      background: "radial-gradient(circle, rgba(255, 245, 236, 0.8), transparent)",
                      borderRadius: "50%",
                      animation: "smokeCurl 1.8s ease-out forwards",
                      marginBottom: "4px",
                    }}
                  />
                )}

                {/* Candle Wick */}
                <div style={{ width: "2px", height: "5px", background: "#333" }} />

                {/* Candle Stick */}
                <div
                  style={{
                    width: "8px",
                    height: "32px",
                    background:
                      candleIndex === 1
                        ? "linear-gradient(to bottom, #D8B477, #A87D38)"
                        : "linear-gradient(to bottom, #F28AB2, #D85A88)",
                    borderRadius: "3px 3px 0 0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier) */}
          <div
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "14px 14px 0 0",
              background: "linear-gradient(180deg, #FFF5EC 0%, #FADCE8 100%)",
              border: "1.5px solid #D8B477",
              borderBottom: "none",
              position: "relative",
              zIndex: 2,
              boxShadow: "inset 0 -4px 6px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0 10px",
            }}
          >
            <span style={{ fontSize: "10px" }}>💖</span>
            <span style={{ fontSize: "10px" }}>✨</span>
            <span style={{ fontSize: "10px" }}>💖</span>
          </div>

          {/* Tier 2 (Middle Tier) */}
          <div
            style={{
              width: "180px",
              height: "54px",
              borderRadius: "16px 16px 0 0",
              background: "linear-gradient(180deg, #F28AB2 0%, #D85A88 100%)",
              border: "2px solid #D8B477",
              borderBottom: "none",
              position: "relative",
              zIndex: 1,
              boxShadow: "inset 0 4px 6px rgba(255,255,255,0.2), inset 0 -4px 8px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0 16px",
            }}
          >
            <span style={{ color: "#FFF5EC", fontSize: "12px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>
              BUJJAMMA
            </span>
          </div>

          {/* Tier 3 (Bottom Tier) */}
          <div
            style={{
              width: "240px",
              height: "64px",
              borderRadius: "18px 18px 0 0",
              background: "linear-gradient(180deg, #30172F 0%, #240F1B 100%)",
              border: "2.5px solid #D8B477",
              borderBottom: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.5), inset 0 2px 4px rgba(216, 180, 119, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#D8B477", fontSize: "13px", letterSpacing: "2px", fontWeight: 600 }}>
              ★ 22 • NOVEMBER ★
            </span>
          </div>

          {/* Golden Platter Base */}
          <div
            style={{
              width: "280px",
              height: "14px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #B89255 0%, #D8B477 50%, #B89255 100%)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Wishes List */}
        {!candlesBlown ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                color: "var(--color-gold)",
                fontStyle: "italic",
              }}
            >
              "If I could make one birthday wish for you, it would be this..."
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "16px",
                background: "rgba(36, 15, 27, 0.6)",
                borderRadius: "16px",
                border: "1px solid rgba(216, 180, 119, 0.2)",
                fontSize: "1.05rem",
                color: "var(--color-blush)",
                lineHeight: 1.6,
              }}
            >
              {BIRTHDAY_DATA.finalMessage.wishes.map((wish, idx) => (
                <p key={idx}>{wish}</p>
              ))}
            </div>

            <button
              onClick={handleMakeWish}
              className="btn-primary"
              style={{
                marginTop: "16px",
                padding: "1.1rem 2.8rem",
                fontSize: "1.15rem",
              }}
            >
              <Sparkles size={20} />
              <span>Make Your Birthday Wish ✨</span>
            </button>
          </div>
        ) : (
          /* Final Revealed Note (After blowing candles) */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: "100%",
              maxWidth: "660px",
              animation: "fadeIn 0.8s ease",
            }}
          >
            <div
              style={{
                padding: "clamp(24px, 5vw, 36px)",
                background: "linear-gradient(135deg, rgba(48, 23, 47, 0.9) 0%, rgba(36, 15, 27, 0.95) 100%)",
                borderRadius: "24px",
                border: "1.5px solid #F28AB2",
                boxShadow: "0 0 35px rgba(242, 138, 178, 0.35)",
                lineHeight: 1.8,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  color: "#D8B477",
                  marginBottom: "14px",
                  fontWeight: 600,
                }}
              >
                May All Your Heart's Wishes Come True ✨
              </h3>

              <p
                style={{
                  fontSize: "clamp(1rem, 2.8vw, 1.15rem)",
                  color: "var(--color-cream)",
                  whiteSpace: "pre-line",
                  marginBottom: "20px",
                }}
              >
                {BIRTHDAY_DATA.finalMessage.revealedNote}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(216, 180, 119, 0.25)",
                  paddingTop: "16px",
                  fontFamily: "'Caveat', cursive",
                  fontSize: "1.6rem",
                  color: "var(--color-rose)",
                  whiteSpace: "pre-line",
                  fontWeight: 700,
                }}
              >
                {BIRTHDAY_DATA.finalMessage.signoff}
              </div>
            </div>

            {/* Replay Story Button */}
            <button
              onClick={() => {
                romanticAudio.playHeartChime();
                onReplayStory();
              }}
              className="btn-primary"
              style={{
                padding: "1rem 2.6rem",
                fontSize: "1.1rem",
              }}
            >
              <RotateCcw size={18} />
              <span>Replay Our Story ❤️</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
