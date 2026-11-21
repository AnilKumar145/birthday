import React from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function ProgressIndicator({
  chapters,
  currentChapterIndex,
  onSelectChapter,
  onNext,
  onPrev,
  hasEnteredStory,
}) {
  if (!hasEnteredStory) return null;

  const currentChapter = chapters[currentChapterIndex] || chapters[0];
  const progressPercent = Math.min(
    100,
    Math.round(((currentChapterIndex + 1) / chapters.length) * 100)
  );

  return (
    <nav
      aria-label="Story chapter navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: "linear-gradient(to bottom, rgba(24, 8, 18, 0.95) 0%, rgba(36, 15, 27, 0.8) 75%, transparent 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "12px 16px 18px",
        borderBottom: "1px solid rgba(216, 180, 119, 0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Top row: controls + chapter title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Previous button */}
          <button
            onClick={onPrev}
            disabled={currentChapterIndex === 0}
            aria-label="Previous Chapter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              borderRadius: "8px",
              fontSize: "0.8rem",
              color: currentChapterIndex === 0 ? "rgba(250, 220, 232, 0.3)" : "#FADCE8",
              cursor: currentChapterIndex === 0 ? "default" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeft size={16} />
            <span style={{ display: "none", sm: "inline" }}>Back</span>
          </button>

          {/* Current Chapter Badge & Title */}
          <div
            style={{
              textAlign: "center",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#D8B477",
                fontWeight: 600,
              }}
            >
              <span>Chapter {currentChapter.number}</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span style={{ color: "#F28AB2" }}>{currentChapterIndex + 1} of {chapters.length}</span>
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.05rem",
                color: "#FFF5EC",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: 600,
              }}
            >
              {currentChapter.title}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            disabled={currentChapterIndex === chapters.length - 1}
            aria-label="Next Chapter"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              borderRadius: "8px",
              fontSize: "0.8rem",
              color: currentChapterIndex === chapters.length - 1 ? "rgba(250, 220, 232, 0.3)" : "#FADCE8",
              cursor: currentChapterIndex === chapters.length - 1 ? "default" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ display: "none", sm: "inline" }}>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Progress track & Chapter dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginTop: "2px",
          }}
        >
          {chapters.map((chap, idx) => {
            const isActive = idx === currentChapterIndex;
            const isCompleted = idx < currentChapterIndex;
            return (
              <button
                key={chap.id}
                onClick={() => onSelectChapter(idx)}
                aria-label={`Go to Chapter ${chap.number}: ${chap.title}`}
                style={{
                  height: "6px",
                  width: isActive ? "24px" : "8px",
                  borderRadius: "999px",
                  backgroundColor: isActive
                    ? "#D8B477"
                    : isCompleted
                    ? "#F28AB2"
                    : "rgba(250, 220, 232, 0.25)",
                  boxShadow: isActive ? "0 0 8px rgba(216, 180, 119, 0.6)" : "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: 0,
                  border: "none",
                }}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}

