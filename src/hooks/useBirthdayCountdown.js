import { useState, useEffect } from "react";
import { BIRTHDAY_DATA } from "../data/birthdayContent";

export function useBirthdayCountdown() {
  // Target: November 22, 2026, 00:00:00 IST (UTC+05:30)
  const targetTimestamp = new Date(BIRTHDAY_DATA.her.targetDateISO).getTime();
  const nextMeetingTimestamp = new Date(BIRTHDAY_DATA.relationship.nextMeetingDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
    isBirthday: false,
  });

  const [meetingTimeLeft, setMeetingTimeLeft] = useState({
    days: 0,
    hours: 0,
    isUpcoming: false,
  });

  // Allows user to bypass countdown or preview birthday celebration
  const [hasEnteredEarly, setHasEnteredEarly] = useState(false);
  const [forceBirthdayMode, setForceBirthdayMode] = useState(false);

  useEffect(() => {
    function calculateTimes() {
      const now = Date.now();
      const diff = targetTimestamp - now;

      if (diff <= 0) {
        // It is already midnight or past midnight!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalMs: 0,
          isBirthday: true,
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          totalMs: diff,
          isBirthday: false,
        });
      }

      // Calculate upcoming Nov 29 meeting
      const meetingDiff = nextMeetingTimestamp - now;
      if (meetingDiff > 0) {
        const mDays = Math.floor(meetingDiff / (1000 * 60 * 60 * 24));
        const mHours = Math.floor((meetingDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setMeetingTimeLeft({
          days: mDays,
          hours: mHours,
          isUpcoming: true,
        });
      } else {
        setMeetingTimeLeft({
          days: 0,
          hours: 0,
          isUpcoming: false,
        });
      }
    }

    calculateTimes();
    const interval = setInterval(calculateTimes, 1000);
    return () => clearInterval(interval);
  }, [targetTimestamp, nextMeetingTimestamp]);

  const enterEarly = () => setHasEnteredEarly(true);
  const toggleForceBirthdayMode = () => setForceBirthdayMode((prev) => !prev);

  // Active birthday mode is true if date reached OR forced for preview
  const isCelebrationActive = timeLeft.isBirthday || forceBirthdayMode;

  return {
    ...timeLeft,
    isCelebrationActive,
    hasEnteredEarly,
    enterEarly,
    forceBirthdayMode,
    toggleForceBirthdayMode,
    meetingTimeLeft,
  };
}
