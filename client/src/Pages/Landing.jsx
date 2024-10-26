const Landing = () => {
  return (
    <div className="landing">
      <section className="landing-section-1">
        <div className="hero min-h-screen">
          <div
            className="background-blur min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1566438503908-4f8377461f58?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9yb250byUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D)",
              filter: "blur(5px)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          ></div>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-zinc-300">InfraSightAI</h1>
              <p className="py-6">
                Your telecommunication infrastructure monitoring solution.
                Monitor your infrastructure in real-time and get notified of any
                issues.
              </p>
              <div className="flex flex-col gap-y-4 items-center">
                <button className="btn btn-primary text-zinc-100">
                  Administrator Login
                </button>
                <button className="btn btn-primary text-zinc-100">
                  Learn more
                </button>
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
              <h1 className="text-5xl font-bold h2 text-zinc-700">
                Network Status AI assistant
              </h1>
              <p className="py-6 w-2/3 h3 text-zinc-500">
                Get the previous network to weather data, the current network
                status, and use AI to get suggestions based on previous network
                data to avoid network issues due to weather conditions.
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
