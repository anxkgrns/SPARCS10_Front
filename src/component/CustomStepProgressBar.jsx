import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class CustomStepProgressBar extends React.Component {
  render() {
    return (
        <ProgressBar percent={25}>
        <Step>
          {({ accomplished, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default CustomStepProgressBar;