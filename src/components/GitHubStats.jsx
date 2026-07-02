function GitHubStats() {
  return (
    <section className="github-stats" id="github">
      <h2>GitHub Stats</h2>

      <div className="stats-container">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Sujayraghuwanshi&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Sujayraghuwanshi&theme=tokyonight"
          alt="GitHub Streak"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sujayraghuwanshi&layout=compact&theme=tokyonight"
          alt="Top Languages"
        />
      </div>
    </section>
  );
}

export default GitHubStats;