import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Heart, Check, RotateCcw, MessageSquare, ShieldCheck } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function DoubleTickMoment({ onNext }) {
  // Chat animation stages:
  // 0: Message sent, single grey tick
  // 1: The anxious wait & thoughts ("Just one tick...")
  // 2: Test message sent to friend (network is fine)
  // 3: The magic: avatar blooms + second tick appears + DOUBLE TICK!
  // 4: Celebration particles & destiny realization
  const [sceneStage, setSceneStage] = useState(0);
  const [autoPlayActive, setAutoPlayActive] = useState(true);

  useEffect(() => {
    if (!autoPlayActive) return;

    const t1 = setTimeout(() => {
      setSceneStage(1);
    }, 2200);

    const t2 = setTimeout(() => {
      setSceneStage(2);
    }, 4500);

    const t3 = setTimeout(() => {
      setSceneStage(3);
      romanticAudio.playDoubleTickChime();
    }, 7200);

    const t4 = setTimeout(() => {
      setSceneStage(4);
    }, 9400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [autoPlayActive]);

  const handleReplay = () => {
    setSceneStage(0);
    setAutoPlayActive(false);
    setTimeout(() => {
      setAutoPlayActive(true);
    }, 100);
  };

  const handleManualAdvance = (stage) => {
    setSceneStage(stage);
    if (stage === 3) {
      romanticAudio.playDoubleTickChime();
    }
  };

  return (
    <section
      aria-label="Chapter 04 — A Message, A Moment, A Little Destiny"
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
          padding: "clamp(30px, 6vw, 48px) clamp(20px, 5vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          border: "1px solid rgba(216, 180, 119, 0.3)",
          boxShadow: sceneStage >= 3
            ? "0 25px 60px rgba(10, 3, 9, 0.8), 0 0 40px rgba(242, 138, 178, 0.3)"
            : "0 20px 50px rgba(10, 3, 9, 0.7)",
          transition: "all 0.6s ease",
        }}
      >
        {/* Badge */}
        <div className="chapter-badge">
          <Sparkles size={14} color="#D8B477" />
          <span>Chapter 04 — A Message, A Moment, A Little Destiny</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            The Single Tick That Became Double Tick
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "var(--color-blush)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A heartbeat moment where seconds felt like hours, and destiny answered back.
          </p>
        </div>

        {/* Fictional Stylized Phone / Chat Canvas */}
        <div
          style={{
            width: "100%",
            maxWidth: "460px",
            borderRadius: "28px",
            background: "linear-gradient(180deg, #1A0B17 0%, #2A1125 100%)",
            border: sceneStage >= 3
              ? "2px solid #F28AB2"
              : "2px solid rgba(216, 180, 119, 0.3)",
            boxShadow: sceneStage >= 3
              ? "0 0 35px rgba(242, 138, 178, 0.35), 0 15px 40px rgba(0,0,0,0.6)"
              : "0 15px 40px rgba(0,0,0,0.5)",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Stylized Phone Top Bar */}
          <div
            style={{
              padding: "14px 18px",
              background: "rgba(36, 15, 27, 0.95)",
              borderBottom: "1px solid rgba(216, 180, 119, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Contact Avatar */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: sceneStage >= 3
                  ? "linear-gradient(135deg, #F28AB2, #D8B477)"
                  : "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: sceneStage >= 3 ? "0 0 15px rgba(242, 138, 178, 0.6)" : "none",
                transition: "all 0.8s ease",
              }}
            >
              {sceneStage >= 3 ? (
                <Heart size={20} fill="#FFF5EC" color="#FFF5EC" style={{ animation: "heartBeat 1.5s infinite" }} />
              ) : (
                <span style={{ fontSize: "1.1rem", opacity: 0.4 }}>👤</span>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ textAlign: "left", flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.15rem",
                  color: "#FFF5EC",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Bujjamma ❤️</span>
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: sceneStage >= 3 ? "#F28AB2" : "rgba(250, 220, 232, 0.4)",
                  fontWeight: 500,
                  transition: "color 0.5s ease",
                }}
              >
                {sceneStage >= 3 ? "Connected • Profile Visible" : "Last seen recently"}
              </div>
            </div>

            {/* Replay Button in Header */}
            <button
              onClick={handleReplay}
              title="Replay this moment"
              style={{
                padding: "6px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#D8B477",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RotateCcw size={15} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              padding: "24px 18px",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "14px",
              position: "relative",
            }}
          >
            {/* Subtle background stars inside chat screen */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.15,
                background: "radial-gradient(#D8B477 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                pointerEvents: "none",
              }}
            />

            {/* Test Message Note to Friend (Stage 2) */}
            {sceneStage >= 2 && (
              <div
                style={{
                  alignSelf: "center",
                  padding: "4px 12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(36, 15, 27, 0.8)",
                  border: "1px solid rgba(216, 180, 119, 0.2)",
                  fontSize: "0.75rem",
                  color: "rgba(250, 220, 232, 0.7)",
                  fontStyle: "italic",
                  animation: "fadeIn 0.5s ease",
                }}
              >
                (Sent test message to a friend — double ticks confirmed network was fine)
              </div>
            )}

            {/* The Famous Message Bubble: "Hi Madam" */}
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "75%",
                background: sceneStage >= 3
                  ? "linear-gradient(135deg, #4A1B3B 0%, #30172F 100%)"
                  : "rgba(48, 23, 47, 0.9)",
                border: sceneStage >= 3
                  ? "1px solid rgba(242, 138, 178, 0.45)"
                  : "1px solid rgba(216, 180, 119, 0.2)",
                borderRadius: "18px 18px 4px 18px",
                padding: "12px 16px",
                boxShadow: sceneStage >= 3 ? "0 4px 20px rgba(242, 138, 178, 0.25)" : "0 4px 12px rgba(0,0,0,0.3)",
                transition: "all 0.5s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  color: "#FFF5EC",
                  fontWeight: 600,
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                "Hi Madam"
              </div>

              {/* Status Row with Ticks */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "4px",
                  fontSize: "0.75rem",
                }}
              >
                <span style={{ color: "rgba(250, 220, 232, 0.5)", fontSize: "0.7rem" }}>
                  Delivered
                </span>

                {/* Ticks representation */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  {sceneStage < 3 ? (
                    // Single grey tick
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#9E9E9E",
                        transition: "all 0.3s ease",
                      }}
                      title="Single tick (Sent)"
                    >
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                  ) : (
                    // Double pink/gold tick!
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#F28AB2",
                        animation: "rosePulse 2s infinite",
                        marginLeft: "-2px",
                      }}
                      title="Double tick (Delivered & Unblocked!)"
                    >
                      <Check size={16} strokeWidth={2.5} style={{ marginRight: "-8px" }} />
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Heartbeat Status announcement inside the phone */}
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "12px",
                background: sceneStage >= 3
                  ? "rgba(242, 138, 178, 0.15)"
                  : "rgba(36, 15, 27, 0.7)",
                border: sceneStage >= 3
                  ? "1px solid rgba(242, 138, 178, 0.4)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: sceneStage >= 3 ? "#FFF5EC" : "rgba(250, 220, 232, 0.65)",
                transition: "all 0.5s ease",
              }}
            >
              {sceneStage === 0 && "Waiting for connection..."}
              {sceneStage === 1 && "Just one tick... Was it a network issue?"}
              {sceneStage === 2 && "Holding on to a small hope..."}
              {sceneStage >= 3 && (
                <span
                  style={{
                    color: "#D8B477",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Wait... DOUBLE TICK! ❤️ Profile is visible!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Narrative & Storytelling */}
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
            "Sometimes, the smallest moments create the biggest memories."
          </p>

          <p style={{ opacity: 0.9 }}>
            After I went to Bengaluru, we eventually started talking more personally. She began opening up about her life.
            There was one day when I had expressed my feelings and things became complicated between us.
          </p>

          <p style={{ opacity: 0.9 }}>
            Later, with a quiet and hesitant heart, I sent her that simple message: <strong style={{ color: "var(--color-rose)" }}>"Hi Madam"</strong>.
          </p>

          <p style={{ opacity: 0.9 }}>
            I noticed that the message showed only one tick. I believed I had been blocked. Still, deep inside, I held on to a tiny hope that somehow my words would reach her.
          </p>

          <p style={{ opacity: 0.9 }}>
            To check if it was merely a network glitch, I messaged a friend — that message showed double ticks immediately. My heart sank.
          </p>

          {/* The Turning Point */}
          <div
            style={{
              padding: "18px 24px",
              background: "linear-gradient(135deg, rgba(48, 23, 47, 0.8) 0%, rgba(36, 15, 27, 0.9) 100%)",
              borderRadius: "18px",
              border: "1px solid rgba(242, 138, 178, 0.35)",
              boxShadow: "0 8px 25px rgba(242, 138, 178, 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                color: "var(--color-cream)",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Then something unexpected happened.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-blush)",
                lineHeight: 1.7,
              }}
            >
              I opened her profile again moments later. Suddenly, her display picture was right there, visible once more.
              And my message had quietly changed to <strong style={{ color: "var(--color-gold)" }}>double ticks</strong>.
              She had unblocked me, and the message was delivered.
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontSize: "1.25rem",
              color: "var(--color-gold)",
              fontWeight: 500,
              padding: "0 10px",
            }}
          >
            "I don't know whether to call it coincidence or destiny. But that little double tick became one of my most unforgettable moments."
          </p>
        </div>

        {/* Action Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "8px",
          }}
        >
          <button onClick={handleReplay} className="btn-secondary">
            <RotateCcw size={16} />
            <span>Replay This Heartbeat Moment</span>
          </button>

          <button
            onClick={() => {
              romanticAudio.playHeartChime();
              onNext();
            }}
            className="btn-primary"
          >
            <span>Continue Our Story</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
