export default function SubHero({ eyebrow, title, titleLime, lede, bgImage }) {
  return (
    <section className="subhero" style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="lede">{lede}</p>
      </div>
    </section>
  )
}
