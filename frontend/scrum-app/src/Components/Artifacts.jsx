export default function Artifacts() {
  return (
    <div className="guide-card__wrapper">
      <section className="guide-full__container">
        <h1 className="guide-full__title">Artefakter</h1>
        <div className="guide-full__content">
          <div className="content-box__content">
            <section className="content-box__roles">
              <h2 className="content-box__title">Produktbacklog</h2>
              <p className="content-box__desc">
                Produktbacklogen är en ordnad lista som innehåller alla
                utvecklingspunkter som vi i nuläget vet att vi vill förändra på
                vår produkt. Det är ett levande dokument och Produktägaren
                håller ansvaret för dess innehåll och ordning. Både prioritering
                och innehåll kan och bör skifta över tid, men det är alltså
                enbart Produktägaren som tillåter dessa ändringar.
              </p>
            </section>
            <section className="content-box__roles">
              {/* <img
                className="content-box__img"
                alt="product backlog"
                src={'../img/backlog.png'}
            ></img> */}
              <h2 className="content-box__title">Sprintbacklog</h2>
              <p className="content-box__desc">
                Innehållet i en Sprintbacklog är de uppgifter som
                Utvecklingsteamet bedömt att de kommer att leverera inom ramen
                för en Sprint. Varje enskild uppgift måste vara tydligt
                definierad. Detta både i vilka förväntningar finns på uppgiftens
                utkomst, men också hur teamet själva definierar den som färdig.
                Genom att följa Sprintbacklogen under Sprintens gång, visar vi
                hur Utvecklingsteamet gör framsteg. Den visar också vilka
                problem som uppstår och när.
              </p>
            </section>
            <section className="content-box__roles">
              {/* <img
                className="content-box__img"
                alt="product backlog"
                src={'../img/increment.png'}
            ></img> */}
              <h2 className="content-box__title">Inkrement</h2>
              <p className="content-box__desc">
                Ett inkrement är den samlade produkt som uppstår efter en
                Sprint, då vi uppdaterar produkten med Sprintens uppgifter
              </p>
            </section>
          </div>
        </div>
        <img
          className="content-box__img"
          alt="product backlog"
          src={'../img/ScrumArtifacts.png'}
        ></img>
      </section>
    </div>
  );
}
