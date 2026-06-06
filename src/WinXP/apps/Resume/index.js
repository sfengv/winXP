import React from 'react';
import resumeSrc from 'assets/shixian-feng-resume-2026-no-phone-email.pdf';

function Resume({ isFocus }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <iframe
        src={resumeSrc}
        frameBorder="0"
        title="Resume"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}
      />
      {!isFocus && (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
      )}
    </div>
  );
}

export default Resume;
