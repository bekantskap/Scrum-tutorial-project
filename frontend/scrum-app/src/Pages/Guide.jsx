import GuideCard from '../Components/GuideCard';
import GuideCardFull from '../Components/GuideCardFull';
import GuideHero from '../Components/GuideHero';
import Artifacts from '../Components/Artifacts';
import GuideCardSummary from '../Components/GuideCardSummary';

export default function Guide() {
  const mirrored = true;

  return (
    <main className="guide-container">
      <GuideHero />
      <GuideCard
        mirrored={mirrored}
        title={'Vad är Scrum?'}
        desc={
          'Till att börja med är Scrum ett stort ämne, men låt oss kondensera det lite och lära oss det väsentliga. Ett sätt att definiera det är att Scrum är ett agilt tillvägagångssätt för mjukvaruutveckling, där saker och ting börjar enkelt, från planering, till utveckling, till testning, och till produktion. Och från det steget följs det av att man samlar in feedback och upprepar processen om och om igen, tills projektet är klart.'
        }
        descsecond={
          'Vidare är en av de stora skillnaderna från traditionell projektmetodik är att Scrums ramverk är uppbyggt på empirism. Det innebär att man tar beslut utifrån tidigare erfarenheter och information man faktiskt kan bekräfta. Inga “vi är helt säkra på att det här är det bästa sedan skivat bröd, så vi bygger allt på en gång”-projekt, alltså. Tvärtom vill vi skapa en kultur som inlemmar “vi tror att det här är en grym idé, men vi utvecklar lite i taget”.'
        }
      />
      <GuideCard
        title={'Agil Estimering'}
        desc={
          'I början görs en uppskattning av hela teamet under sprint planning. Syftet med uppskattningen är att bestämma prioritet för olika user stories inför sprinten och teamets förmåga att leverera under sprintens tid.'
        }
        descsecond={
          'Uppskattningen av user stories görs i termer av svårighetsgraden för var och en av dessa. För att bedöma svårighetsgraden används en särskild skala.'
        }
        descThird={
          'Några exempel på skalor som kan användas är klädstorlekar(S-XXXXL), fibonacci(1, 2, 3, 5, 8, 13, 21, 34, etc.) eller så använder man sig av 1-10 i sin enkelhet.'
        }
      />
      <GuideCardFull
        title={'Roller'}
        firstheader={'Scrum Master'}
        firstdesc={
          'Scrum masters underlättar teamen och funkar som en bro mellan produktägaren och teamet.'
        }
        secondheader={'Product Owner'}
        seconddesc={
          'Produktägaren tar med de ljusa idéerna till bordet och ger mjukvarukraven för backlogen. Produktägaren kan också representera kunderna och deras behov, där konceptet för produkten eller en funktion börjar ta form.'
        }
        thirdheader={'Team'}
        thirddesc={
          'De ser till att målet uppnås. Teammedlemmar arbetar med användarberättelserna och flyttar uppgifter från att göra och driver det till gjort (beroende på hur organisationen definierar gjort är det en uppsättning kriterier som en uppgift måste uppfylla för att kunna anses vara utförd).'
        }
      />
      <GuideCard
        mirrored={mirrored}
        title={'Planning Poker'}
        desc={
          'I Planning Poker skapas uppskattningar för user stories genom att spela planeringspoker. Hela Scrum-teamet är involverat och det resulterar i snabba men tillförlitliga uppskattningar.'
        }
        descsecond={
          'Planning Poker spelas med en kortlek. Eftersom Fibonacci-sekvensen används har korten nummer - 1, 2, 3, 5, 8, 13, 21, 34, etc. Dessa nummer representerar story points. Varje spelare har en kortlek. Siffrorna på korten ska vara tillräckligt stora för att vara synliga för alla lagmedlemmar när en av teammedlemmarna håller upp ett kort.'
        }
        descThird={
          'Varje spelare väljer ett kort som representerar dennes uppskattning. Kort visas inte förrän alla spelare har gjort ett urval. När alla har valt vänds alla kort samtidigt och hålls uppe så att alla spelare kan se varje uppskattning. I den första omgången är det mycket troligt att uppskattningarna varierar. De spelare som har lagt sig högt och lågt förklarar orsaken till deras uppskattningar. Man bör se till att alla diskussioner endast är avsedda för förståelse och att ingenting ska tas personligen. Moderatorn måste se till att detta följs.'
        }
      />

      <GuideCard
        title={'Projektledare VS Scrum Master'}
        desc={
          'Projektledare spelar en viktig roll i stora projekt som täcks av flera team. Det är då kompetensen hos en projektledare kommer väl till pass: de koordinerar arbetet i många team, samarbetar kring resursbehov och kombinerar tidslinjer.'
        }
        descsecond={
          'Scrum Masterns ansvar är inte direkt förenat med en leverans. Det beror på att Scrum Masters aktiviteter förändras varje dag, beroende på teamets behov. Teamet förlitar sig på Scrum Master för att hjälpa dem att få sitt arbete gjort och skydda dem mot yttre krafter eller blockerare. Tanken här är att Scrum Master stöttar teamet till mållinjen i ett framgångsrikt projekt.'
        }
      />
      <Artifacts />
      <GuideCard
        title={'Från idé till utveckling'}
        desc={
          'Vanligtvis är produktägarna upphovsmännen till produktidéer. De är visionärerna som kan se möjligheter och behov som de vill uppfylla och erbjuda marknaden. Från denna punkt specificeras produktkraven, mestadels hålls ett möte med scrummasters och/eller teammedlemmar för att bygga produktbackloggen.'
        }
        descsecond={
          'Vid starten av varje dag hålls ett scrum, som är ett 15-minutersmöte om vad teamet just avslutade igår, vad de jobbar med, och diskutera blockeringarna och försöka lösa det om det finns, så att de kan börja dagen mer effektivt.'
        }
        descThird={
          'Alla framsteg återspeglas på ett Burndown-diagram, som spårar antalet uppgifter som teamet slutfört över tiden, eller lagets genomsnittliga hastighet.'
        }
      />
      <GuideCard
        mirrored={mirrored}
        title={'Sprint'}
        desc={
          'Från denna punkt fylls Sprint-backloggen med en lista av "user-stories". En sprint har ett tidsspann på cirka 1-4 veckor där teammedlemmarna utvecklar och förverkligar "user-stories".'
        }
        descsecond={
          'Under sprinten återspeglar Scrum-tavlan också arbetets framsteg, baserat på vad som ännu finns att göra, vad som är pågående och färdigställt eller done. Att något ses som done beror på de kriterier som ställs för en uppgift och om den är uppfylld.'
        }
        descThird={
          'I slutet av en sprint kommer sprintrecensionen. Det är då den gångna spurten diskuteras och analyseras. Teamet visar också upp produkten eller funktionen för produktägaren. En retrospektiv sprint görs också där teamet och scrummästaren diskuterar den tidigare spurten och saker som har gått fel så att de kan förhindra det nästa sprint.'
        }
      />
      <GuideCard
        title={'User Stories'}
        desc={
          'En user story är den minsta sysslan i ett agilt ramverk. Det är ett slutmål, inte en funktion, uttryckt ur användarens perspektiv.'
        }
        descsecond={
          'Det är alltså en informell, allmän förklaring av en mjukvarufunktion skriven ur slutanvändarens eller kundens perspektiv.'
        }
        descThird={
          'Syftet med en användarberättelse är att artikulera hur ett arbete kommer att leverera ett visst värde tillbaka till kunden. Observera att "kunder" inte behöver vara externa slutanvändare i traditionell mening, de kan också vara interna kunder eller kollegor inom din organisation som är beroende av ditt team.'
        }
      />
      <GuideCardSummary
        title={'Sammanfattning'}
        firstdesc={
          'Scrum är ett ramverk som hjälper team att arbeta tillsammans. Ungefär som ett fotbollslag som tränar för den stora matchen, uppmuntrar scrum till att lära sig genom erfarenheter, att organisera sig medan man arbetar med ett problem och reflektera över sina vinster och förluster för att kontinuerligt förbättras.'
        }
        seconddesc={
          'Även om den scrum oftast används av mjukvaruutvecklare, kan dess principer och lärdomar tillämpas på alla typer av lagarbete. Detta är en av anledningarna till att scrum är så populärt. Ofta betraktat som ett agilt ramverk för projektledning, beskriver scrum möten, verktyg och roller som samverkar för att hjälpa team att strukturera och hantera sitt arbete.'
        }
      />
    </main>
  );
}
