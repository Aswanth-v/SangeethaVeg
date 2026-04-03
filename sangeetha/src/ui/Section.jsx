const Section = ({ children, bg = "bg-white" }) => {
  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

export default Section