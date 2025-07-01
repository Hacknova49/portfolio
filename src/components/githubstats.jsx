import React from 'react';

export default function GitHubStats() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src="https://github-readme-stats.vercel.app/api?username=Hacknova49&show_icons=true&theme=dark"
        alt="GitHub stats"
        loading="lazy"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hacknova49&layout=compact&theme=dark"
        alt="Top Languages"
        loading="lazy"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
}
