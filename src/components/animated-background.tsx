export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[100px] animate-float" />
      <div
        className="absolute top-1/3 right-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-[100px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-sky-400/10 blur-[100px] animate-float"
        style={{ animationDelay: '4s' }}
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
    </div>
  )
}
