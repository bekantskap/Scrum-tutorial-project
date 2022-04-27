export default function GuideCard(props) {
  return (
    <div className={`guide-card__wrapper ${props.mirrored ? 'mirrored' : ''}`}>
      <section className="guide-card__container">
        <div className="guide-card__content">
          <h2 className="guide-card__title">{props.title}</h2>
          <p className="guide-card__desc">{props.desc}</p>
          <p>{props.descsecond}</p>
          <p>{props.descThird}</p>
        </div>
      </section>
    </div>
  );
}
