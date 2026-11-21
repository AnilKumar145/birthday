import React, { useMemo } from "react";

export default function FloatingEffects() {
  // Generate stable random positions for stars and petals
  const stars = useMemo(() => {
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: `${(i * 23) % 98 + 1}%`,
      top: `${(i * 37) % 98 + 1}%`,
      size: `${(i % 3) * 1.2 + 1.2}px`,
      duration: `${(i % 5) * 1.2 + 2.5}s`,
      delay: `${(i % 4) * 0.7}s`,
      opacity: (i % 5) * 0.15 + 0.35,
    }));
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${(i * 19) % 92 + 4}%`,
      duration: `${(i % 6) * 2 + 10}s`,
      delay: `${(i % 7) * 1.5}s`,
      size: `${(i % 3) * 6 + 14}px`,
      rotate: `${(i * 45) % 360}deg`,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Subtle vignette gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 30%, transparent 40%, rgba(15, 5, 13, 0.75) 100%)",
        }}
      />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: "#FFF5EC",
            boxShadow: `0 0 6px 1px rgba(216, 180, 119, 0.7)`,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Floating Rose Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          style={{
            position: "absolute",
            left: petal.left,
            top: "-5%",
            width: petal.size,
            height: `calc(${petal.size} * 1.35)`,
            borderRadius: "50% 10% 50% 50%",
            background:
              "linear-gradient(135deg, rgba(242, 138, 178, 0.65) 0%, rgba(200, 70, 110, 0.5) 100%)",
            filter: "drop-shadow(0 2px 5px rgba(36, 15, 27, 0.4))",
            animation: `floatPetal ${petal.duration} cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
            animationDelay: petal.delay,
            transform: `rotate(${petal.rotate})`,
          }}
        />
      ))}
    </div>
  );
}

