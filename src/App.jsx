import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BIRTHDAY_DATA } from "./data/birthdayContent";
import { useBirthdayCountdown } from "./hooks/useBirthdayCountdown";
import FloatingEffects from "./components/FloatingEffects";
import MusicControl from "./components/MusicControl";
import ProgressIndicator from "./components/ProgressIndicator";
import Countdown from "./components/Countdown";
import Intro from "./components/Intro";
import CollegeMeeting from "./components/CollegeMeeting";
import CoffeeMoments from "./components/CoffeeMoments";
import BengaluruJourney from "./components/BengaluruJourney";
import DoubleTickMoment from "./components/DoubleTickMoment";
import CreamStoneMemory from "./components/CreamStoneMemory";
import OurJourney from "./components/OurJourney";
import LoveLetter from "./components/LoveLetter";
import Reasons from "./components/Reasons";
import BirthdayCake from "./components/BirthdayCake";
import "./App.css";

export default function App() {
  const {
    days,
    hours,
    minutes,
    seconds,
    isCelebrationActive,
    hasEnteredEarly,
    enterEarly,
    forceBirthdayMode,
    toggleForceBirthdayMode,
    meetingTimeLeft,
  } = useBirthdayCountdown();

  // Active chapter index (0 through 9)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  // Determine whether to show countdown or the story experience
  const showCountdown = !isCelebrationActive && !hasEnteredEarly;

  const goToNextChapter = () => {
    if (currentChapterIndex < BIRTHDAY_DATA.chapters.length - 1) {
      setCurrentChapterIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectChapter = (index) => {
    setCurrentChapterIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReplayStory = () => {
    setCurrentChapterIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showCountdown) return;
      if (e.key === "ArrowRight") {
        goToNextChapter();
      } else if (e.key === "ArrowLeft") {
        goToPrevChapter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showCountdown, currentChapterIndex]);

  return (
    <div className="app-container">
      {/* Ambient background particles & starry night */}
      <FloatingEffects />

      {/* Floating ambient music control */}
      <MusicControl />

      {/* Chapter Progress & Navigation Bar */}
      <ProgressIndicator
        chapters={BIRTHDAY_DATA.chapters}
        currentChapterIndex={currentChapterIndex}
        onSelectChapter={handleSelectChapter}
        onNext={goToNextChapter}
        onPrev={goToPrevChapter}
        hasEnteredStory={!showCountdown}
      />

      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {showCountdown ? (
          <Countdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            onEnterStory={enterEarly}
            onPreviewCelebration={toggleForceBirthdayMode}
            forceBirthdayMode={forceBirthdayMode}
          />
        ) : (
          <div key={currentChapterIndex}>
            {currentChapterIndex === 0 && <Intro onBeginStory={goToNextChapter} />}
            {currentChapterIndex === 1 && <CollegeMeeting onNext={goToNextChapter} />}
            {currentChapterIndex === 2 && <CoffeeMoments onNext={goToNextChapter} />}
            {currentChapterIndex === 3 && <BengaluruJourney onNext={goToNextChapter} />}
            {currentChapterIndex === 4 && <DoubleTickMoment onNext={goToNextChapter} />}
            {currentChapterIndex === 5 && <CreamStoneMemory onNext={goToNextChapter} />}
            {currentChapterIndex === 6 && (
              <OurJourney onNext={goToNextChapter} meetingTimeLeft={meetingTimeLeft} />
            )}
            {currentChapterIndex === 7 && <LoveLetter onNext={goToNextChapter} />}
            {currentChapterIndex === 8 && <Reasons onNext={goToNextChapter} />}
            {currentChapterIndex === 9 && <BirthdayCake onReplayStory={handleReplayStory} />}
          </div>
        )}
      </main>

      {/* Discreet footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 10,
          padding: "24px 16px 36px",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "rgba(250, 220, 232, 0.45)",
          borderTop: "1px solid rgba(216, 180, 119, 0.1)",
        }}
      >
        <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-gold)", marginBottom: "4px" }}>
          MAYBE IT WAS DESTINY ❤️
        </p>
        <p>Dedicated to Bujjamma • Created with all my love by Nani (Anil)</p>
        <p style={{ fontSize: "0.75rem", marginTop: "4px", opacity: 0.7 }}>
          November 22, 2026 • Always & Forever
        </p>
      </footer>
    </div>
  );
}
