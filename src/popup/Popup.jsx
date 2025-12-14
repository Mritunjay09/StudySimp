import { useState } from "react";
import {
  Clock,
  Settings,
  BarChart3,
  Code,
  Bold,
  StickyNote,
} from "lucide-react";
import Note from "./components/Note";
import LeetCode from "./components/LeetCode";
import SettingsPanel from "./components/SettingsPanel";
import Stats from "./components/Stats";
import Focus from "./components/Focus";
import "../styles.css";

export default function Popup() {
  const [activeTab, setActiveTab] = useState("focus");

  return (
    <section
      style={{
        fontFamily:
          'Inter, system-ui, -apple-system, Roboto, "Helvetica Neue", Arial',
        height: "500px",
        width: "450px",
      }}
    >
      <div className="header">
        {/* header with logo, title and streak  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 4,
            gap: 75,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            padding: 8,
            borderRadius: 12,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6666 30L36.6666 20L26.6666 10M13.3333 10L3.33325 20L13.3333 30"
                stroke="#1E1E1E"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 style={{ marginLeft: 0, fontSize: 18 }}>DevFlow Notes</h1>
          </div>
          <div style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            🔥 Streak: 1 days
          </div>
        </div>
        <p
          style={{
            marginLeft: 6,
            marginTop: 8,
            color: "#555",
            fontSize: 16,
            fontWeight: Bold,
          }}
        >
          Focus : Code : Learn
        </p>
      </div>
      {/* Navigation */}
      <div className="tabs-wrapper">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "notes" ? "active" : ""}`}
            onClick={() => setActiveTab("notes")}
          >
            <StickyNote style={{ width: "1rem", height: "1rem" }} />
            Notes
          </button>

          <button
            className={`tab ${activeTab === "leetcode" ? "active" : ""}`}
            onClick={() => setActiveTab("leetcode")}
          >
            <Code style={{ width: "1rem", height: "1rem" }} />
            LeetCode
          </button>

          <button
            className={`tab ${activeTab === "focus" ? "active" : ""}`}
            onClick={() => setActiveTab("focus")}
          >
            <Clock style={{ width: "1rem", height: "1rem" }} />
            Focus
          </button>

          <button
            className={`tab ${activeTab === "status" ? "active" : ""}`}
            onClick={() => setActiveTab("status")}
          >
            <BarChart3 style={{ width: "1rem", height: "1rem" }} />
            Status
          </button>

          <button
            className={`tab ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings style={{ width: "1rem", height: "1rem" }} />
            Settings
          </button>
        </div>
        <div class="content-container">
          <div
            className={`tab-content ${activeTab === "notes" ? "active" : ""}`}
          >
            <Note />
          </div>
          <div
            className={`tab-content ${
              activeTab === "leetcode" ? "active" : ""
            }`}
          >
            <LeetCode />
          </div>
          <div
            className={`tab-content ${activeTab === "focus" ? "active" : ""}`}
          >
            <Focus />
          </div>
          <div
            className={`tab-content ${activeTab === "status" ? "active" : ""}`}
          >
            <Stats />
          </div>
          <div
            className={`tab-content ${
              activeTab === "settings" ? "active" : ""
            }`}
          >
            <SettingsPanel />
          </div>
        </div>
      </div>
      {/* Saved Notes Grouped */}
    </section>
  );
}
