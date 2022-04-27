import ContentBox from './ContentBox';

export default function GuideCardFull(props) {
  return (
    <div className="guide-card__wrapper">
      <section className="guide-full__container">
        <h1 className="guide-full__title">{props.title}</h1>
        <div className="guide-full__content">
          <ContentBox props={props} />
        </div>
      </section>
    </div>
  );
}
