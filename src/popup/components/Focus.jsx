import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Coffee, Brain } from "lucide-react";

export default function Focus() {
  const settings = {
    workDuration: 60,
    breakDuration: 5,
  };

  const [sessionType, setSessionType] = useState("work");
  const [isActive, setIsActive] = useState(false);
  const [sessionStart, setSessionStart] = useState(null);
  const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60);

  const resetTimer = () => {
    setIsActive(false);
    setSessionStart(null);

    setTimeLeft(
      sessionType === "work"
        ? settings.workDuration * 60
        : settings.breakDuration * 60
    );
  };

  const switchSession = () => {
    setIsActive(false);
    setSessionStart(null);

    const newType = sessionType === "work" ? "break" : "work";
    setSessionType(newType);

    setTimeLeft(
      newType === "work"
        ? settings.workDuration * 60
        : settings.breakDuration * 60
    );
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const isWork = sessionType === "work";

  return (
    <div className="focusContainer">
      {/* Session Type Indicator */}
      <div className={`sessionBadge ${isWork ? "work" : "break"}`}>
        {isWork ? <Brain className="icon" /> : <Coffee className="icon" />}
        <span>{isWork ? "Focus Time" : "Break Time"}</span>
      </div>

      {/* Timer Display */}
      <div className="timer">
        {Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, "0")}
        :{(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? <Pause /> : <Play />}
        </button>
        <button onClick={resetTimer}>
          <RotateCcw />
        </button>
        <button onClick={switchSession}>
          {isWork ? <Brain /> : <Coffee />}
        </button>
      </div>

      {/* Focus Time  */}
      <div className="focusTimeContainer"></div>
    </div>
  );
}
