import React from "react";
import { Sparkles, ArrowRight, Heart, Calendar, Sun, Compass } from "lucide-react";
import { romanticAudio } from "../utils/soundEffects";

export default function OurJourney({ onNext, meetingTimeLeft }) {
  return (
    <section
      aria-label="Chapter 06 — And Here We Are..."
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
          <span>Chapter 06 — And Here We Are...</span>
        </div>

        {/* Title */}
        <div>
          <h2 className="chapter-title">
            Our Little World
          </h2>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
              color: "var(--color-rose)",
              marginTop: "4px",
            }}
          >
            Real, honest, and quietly beautiful.
          </p>
        </div>

        {/* Dynamic November 29 Upcoming Meeting Banner (Active only while in the future) */}
        {meetingTimeLeft && meetingTimeLeft.isUpcoming && (
          <div
            style={{
              width: "100%",
              maxWidth: "540px",
              padding: "16px 20px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(216, 180, 119, 0.15) 0%, rgba(242, 138, 178, 0.15) 100%)",
              border: "1px solid rgba(216, 180, 119, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(216, 180, 119, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D8B477",
                }}
              >
                <Calendar size={20} />
              </div>
              <div>
                <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#F28AB2", fontWeight: 600 }}>
                  Upcoming Memory
                </div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "#FFF5EC", fontWeight: 600 }}>
                  Sunday, November 29
                </div>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(36, 15, 27, 0.8)",
                border: "1px solid rgba(216, 180, 119, 0.3)",
                color: "#D8B477",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <span>{meetingTimeLeft.days}d {meetingTimeLeft.hours}h away</span>
              <Sparkles size={13} color="#D8B477" />
            </div>
          </div>
        )}

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
            "Our story hasn't been a perfect straight line."
          </p>

          <p style={{ opacity: 0.9 }}>
            There have been smiles, surprises, emotions, misunderstandings, and moments that taught us more about each other.
            We have had our quiet days, our little disagreements, and moments where things felt complicated.
          </p>

          <p style={{ opacity: 0.9 }}>
            Yet through all these moments, one thing remains deeply meaningful to me:
            <strong style={{ color: "var(--color-rose)" }}> The genuine happiness of having you in my life.</strong>
          </p>

          <p style={{ opacity: 0.9 }}>
            I have never experienced this particular kind of affection, tenderness, and emotional connection before.
            And deep down, I believe you too have felt something special in the care and honesty we share.
          </p>

          {/* Hopeful poetic lines */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "18px",
              background: "rgba(36, 15, 27, 0.6)",
              borderRadius: "16px",
              border: "1px solid rgba(216, 180, 119, 0.2)",
              color: "var(--color-blush)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
            }}
          >
            <p>"I'm excited about the memories we haven't created yet."</p>
            <p>"One more Sunday to look forward to..."</p>
            <p>"One more opportunity to smile together."</p>
            <p style={{ color: "var(--color-gold)", fontWeight: 600 }}>
              "One more chapter waiting to be written."
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
          <span>Read Your Birthday Letter</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
