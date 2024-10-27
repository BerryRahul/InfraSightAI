const Login = () => {
  return (
    <section className=" bg-zinc-600">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566438503908-4f8377461f58?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9yb250byUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse container">
          <div className="text-center lg:text-left container w-2/3 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-zinc-200 w-3/4">Administrator login to InfraSight AI</h1>
            <p className="py-6 text-zinc-200">
              Login to your account to monitor your infrastructure in real-time with AI assisted suggestions based on previous network data to avoid network issues due to weather conditions.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
