const ContentSection = ({ children, className = 'content-section' }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default ContentSection