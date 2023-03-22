const Instructions = () => {
  return (
    <div className="text-center space-y-7 lg:space-y-10">
      <p className="text-base font-bold uppercase text-white/60 lg:text-2xl">How it works</p>
      <h1 className="text-3xl font-extrabold uppercase lg:text-6xl lg:pb-10">Create. Connect. Collect.</h1>
      <div className="md:flex md:gap-5">
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-blue-600 uppercase lg:text-6xl">01</h1>
          <h2 className="text-2xl font-bold uppercase lg:text-3xl">Create your Account</h2>
          <p className="text-sm text-white/60 lg:text-lg">Sign up to create your account, and keep updated so you never miss a drop.</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-blue-600 uppercase lg:text-6xl">02</h1>
          <h2 className="text-2xl font-bold uppercase lg:text-3xl">Connect with the community</h2>
          <p className="text-sm text-white/60 lg:text-lg">Join the <span className="font-bold text-white">DC NFTs Discord</span> to connect with the fan community and discover new stories.</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-blue-600 uppercase lg:text-6xl">03</h1>
          <h2 className="text-2xl font-bold uppercase lg:text-3xl">BUILD YOUR COLLECTION</h2>
          <p className="text-sm text-white/60 lg:text-lg">Explore the marketplace to discover the collections and start building your own.</p>
        </div>
      </div>
    </div>
  )
}

export default Instructions
