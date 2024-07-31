import React from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const CustomStepProgressBar = ({ percent }) => {

  const DotSize = '1.25rem';

  return (
    <ProgressBar
      percent={percent}
      filledBackground="#E2E53F"
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: DotSize,
            height: DotSize,
            color: 'white',
            borderRadius: '50%',
            backgroundColor: accomplished ? '#E2E53F' : '#d9d9d9',
          }}
        />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: DotSize,
              height: DotSize,
              color: 'white',
              borderRadius: '50%',
              backgroundColor: accomplished ? '#E2E53F' : '#c7d78f',
            }}
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: DotSize,
              height: DotSize,
              color: 'white',
              borderRadius: '50%',
              backgroundColor: accomplished ? '#E2E53F' : '#c7d78f',
            }}
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: DotSize,
              height: DotSize,
              color: 'white',
              borderRadius: '50%',
              backgroundColor: accomplished ? '#E2E53F' : '#c7d78f',
            }}
          />
        )}
      </Step>
    </ProgressBar>
  );
};

export default CustomStepProgressBar;
