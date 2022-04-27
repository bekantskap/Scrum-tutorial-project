export default function ContentBox(props) {
  return (
    <div className="content-box__content">
      <section className="content-box__roles">
        <h2 className="content-box__title">{props.props.firstheader}</h2>
        <p className="content-box__desc">{props.props.firstdesc}</p>
      </section>
      <section className="content-box__roles">
        <h2 className="content-box__title">{props.props.secondheader}</h2>
        <p className="content-box__desc">{props.props.seconddesc}</p>
      </section>
    </div>
  );
}
