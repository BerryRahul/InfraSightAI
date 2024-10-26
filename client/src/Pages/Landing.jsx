const Landing = () => {
  return (
    <div className="landing">
      <section className="landing-section-1">
        <div
          className="hero bg-base-200 min-h-screen"
          style={{
            backgroundImage: "url(/torontoSkyline.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay backdrop-blur-md"></div>
          <div className="hero-content text-center relative z-10 container">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-zinc-300">InfraSightAI</h1>
              <p className="py-6">
                Your telecommunication infrastructure monitoring solution.
                Monitor your infrastructure in real-time and get notified of any
                issues.
              </p>
              <div className="flex flex-col gap-y-4 items-center">
                <button className="btn btn-primary text-zinc-100">Administrator Login</button>
                <button className="btn btn-primary text-zinc-100">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section-2 bg-zinc-200">
        <div className="hero min-h-screen container">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold h2 text-zinc-700">Network Status AI assistant</h1>
              <p className="py-6 w-2/3 h3 text-zinc-500">
                Get the previous network to weather data, the current network status, and use AI to get suggestiosn based on previous network data to avoid network issues due to weather conditions.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
