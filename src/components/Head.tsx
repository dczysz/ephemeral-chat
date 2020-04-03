import React from 'react';

export interface Props {
  title: string;
  page?: string;
}

const Head: React.FC<Props> = ({ title, page }) => {
  const animateTitle = (title: string, timeMs = 50, last = 0) => {
    if (!title.length) return;

    const index = last + 1;
    document.title = title.substring(0, index) + ' |';

    if (index < title.length) {
      setTimeout(() => animateTitle(title, timeMs, index), timeMs);
    } else {
      // document.title = title;
    }
  };

  animateTitle(title);

  return null;
};

export default Head;
