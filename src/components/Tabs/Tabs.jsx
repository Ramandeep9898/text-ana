import React, { useState } from "react";
import { TextInput } from "../Input/TextInput";
import { TextArea } from "../Input/TextArea";

import "./tab.css";
const TABS = [
  {
    tabName: "text",
    label: "Word Input",
  },
  {
    tabName: "paragraph",
    label: "Paragraph",
  },
];

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("text");
  return (
    <div className="tab-container">
      <div className="tabs">
        {TABS.map((tab, index) => (
          <button
            key={index}
            className={
              selectedTab === tab.tabName
                ? "tab tab-active"
                : "tab tab-inactive"
            }
            onClick={() => setSelectedTab(tab.tabName)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {selectedTab === "text" && <TextInput />}
      {selectedTab === "paragraph" && <TextArea />}
    </div>
  );
};
