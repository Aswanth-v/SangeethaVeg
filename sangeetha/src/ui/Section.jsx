const Section = ({ children}) => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-2">
        {children}
      </div>
    </section>
  )
}

export default Section