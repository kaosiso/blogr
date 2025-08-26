import React from 'react'

const getRelativeTime = (date) => {
  const postDate = new Date(date);
  const now = new Date();
  const diffMs = now - postDate; // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffSec < 60) return `${diffSec} sec${diffSec > 1 ? "s" : ""} ago`;
  if (diffMin < 60) return `${diffMin} min${diffMin > 1 ? "s" : ""} ago`;
  if (diffHrs < 24) return `${diffHrs} hr${diffHrs > 1 ? "s" : ""} ago`;
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};

export default getRelativeTime
