import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './TestPage.css';

const quizData = [
    {
        question: "Mitä on medialukutaito?",
        options: { a: "Se on kykyä ymmärtää mediaa sekä arvioida kriittisesti sen sisältöjä.", b: "Se on kykyä lukea median sisältöä nopeasti ja tehokkaasti.", c: "Se on kykyä luoda laadukasta ja puolueetonta mediasisältöä." },
        correctAnswer: 'a',
        feedback: {
            a: "OIKEIN! Medialukutaito kiteytettynä on kykyä ymmärtää mediaa sekä arvioida kriittisesti sen sisältöjä. Tämän testin onkin tarkoitus selvittää, kuinka hyvä medialukutaito sinulla on. Siis eteenpäin!",
            b: "VÄÄRIN! Nopeus ja tehokkuus eivät ole tärkeitä medialukutaidon kriteerejä. Sen sijaan medialukutaidosta on kyse sisällön. Oikea vastaus oli sen sijaan A. Medialukutaito kiteytettynä on kykyä ymmärtää mediaa sekä arvioida kriittisesti sen sisältöjä. Tämän testin onkin tarkoitus selvittää, kuinka hyvä medialukutaito sinulla on. Siis eteenpäin!",
            c: "VÄÄRIN! Medialukutaidosta ei ole kyse laadukkaan ja puolueettoman mediasisällön luomisesta, mutta kyvystä tunnistaa sellainen sisältö sekä lähteet, jotka luovat tällaista sisältöä. Oikea vastaus oli sen sijaan A. Medialukutaito kiteytettynä on kykyä ymmärtää mediaa sekä arvioida kriittisesti sen sisältöjä. Tämän testin onkin tarkoitus selvittää, kuinka hyvä medialukutaito sinulla on. Siis eteenpäin!"
        }
    },
    {
        question: "Mitkä seuraavista tekijöistä lähtökohtaisesti heikentää uutisen luotettavuutta?",
        options: { a: "Uutisen lukeminen vaatii maksua sivustolla.", b: "Uutinen on oikaistu aikaisemmin.", c: "Uutisessa käytetään nimetöntä lähdettä." },
        correctAnswer: 'c',
        feedback: {
            a: "VÄÄRIN! Uutisen maksullisuus ei lähtökohtaisesti vaikuta sen luotettavuuteen. Uutismedioiden ylläpitäminen ja jatkuva sisällöntuotto vaatii resursseja, jota saadaan usein lukijoilta esimerkiksi säännöllisten tilausmaksujen muodossa. Oikea vastaus olisi ollut sen sijaan C. Nimettömien lähteiden käyttö heikentää uutisen luotettavuutta, sillä nimettömän lähteen asemaa ja asiantuntemusta annettuun tietoon liittyen sekä tiedon antamisen motiiveja ei voida tällöin tarkistaa.",
            b: "VÄÄRIN! Jos uutinen on oikaistu aikaisemmin, se tarkoittaa sitä, että uutisen sisältöä on korjattu aikaisemmasta versiosta. Tällöin uutinen sisältää sen käsittelemän aiheen kannalta oikeinta ja uusinta informaatiota tehden uutisesta vain täsmemmän ja luotettavemman oikaisemattomaan versioon nähden. Oikea vastaus olisi ollut sen sijaan C. Nimettömien lähteiden käyttö heikentää uutisen luotettavuutta, sillä nimettömän lähteen asemaa ja asiantuntemusta annettuun tietoon liittyen sekä tiedon antamisen motiiveja ei voida tällöin tarkistaa.",
            c: "OIKEIN! Nimettömien lähteiden käyttö heikentää uutisen luotettavuutta, sillä nimettömän lähteen asemaa ja asiantuntemusta annettuun tietoon liittyen sekä tiedon antamisen motiiveja ei voida tällöin tarkistaa."
        }
    },
    {
        question: "Tekoälyllä on helppo luoda hyvin realistisia kuvia nykyään. Niillä on helppo huijata ihmisiä ja levittää valheellista tietoa. Erotatko aidon kuvan tekoälyn teettämistä kuvista? Valitse seuraavista kuvista AITO kuva.",
        image: "/testai.jpeg",
        options: { a: "Metsäpolku", b: "Merinäkymä", c: "Auringonlasku" },
        correctAnswer: 'b',
        feedback: {
            a: "VÄÄRIN! Tämä on tekoälyn tekemä kuva. Tekoälyn tekemän kuvan voi usein tunnistaa muun muassa yksityiskohtien puutteista, omituisesta valaistuksesta tai heijastuksesta tai ei-järkeenkäyvistä kohdista.",
            b: "OIKEIN! Tekoälyn tekemän kuvan voi usein tunnistaa muun muassa yksityiskohtien puutteista, omituisesta valaistuksesta tai heijastuksesta tai ei-järkeenkäyvistä kohdista.",
            c: "VÄÄRIN! Tämä on tekoälyn tekemä kuva. Tekoälyn tekemän kuvan voi usein tunnistaa muun muassa yksityiskohtien puutteista, omituisesta valaistuksesta tai heijastuksesta tai ei-järkeenkäyvistä kohdista."
        }
    },
    {
        question: "Kuvassa on osa erästä uutisartikkelia, jossa näkyy muun muassa sen otsikko ja johon sisältyy video. Mitä kuvan perusteella voidaan sanoa?",
        image: "/nasa.png",
        options: { a: "Nasa on kuvannut videon mustasta aukosta.", b: "Nasa on onnistunut matkaamaan mustaan aukkoon.", c: "Ei voida sanoa kumpaakaan edellä mainituista." },
        correctAnswer: 'c',
        feedback: {
            a: "VÄÄRIN! Älä anna clickbait-otsikoiden johtaa harhaan! Nasa ei ole onnistunut matkaamaan mustaan aukkoon tai lähelle sitä eikä ole kuvannut videota mustaa aukosta.",
            b: "VÄÄRIN! Älä anna clickbait-otsikoiden johtaa harhaan! Nasa ei ole onnistunut matkaamaan mustaan aukkoon tai lähelle sitä eikä ole kuvannut videota mustaa aukosta.",
            c: "OIKEIN! Nasa ei ole onnistunut matkaamaan mustaan aukkoon tai lähelle sitä eikä ole kuvannut videota mustaa aukosta."
        }
    },
    {
        question: "Onko seuraava lähde lähtökohtaisesti luotettava?",
        image: "/description.png",
        options: { a: "Kyllä.", b: "Ei.", c: "Ei voida sanoa." },
        correctAnswer: 'b',
        feedback: {
            a: "VÄÄRIN! Artikkelia ei voida lähtökohtaisesti luotettavana tai objektiivisena, sillä se on rahoitettu eli joku taho – tässä tapauksessa elektroniikkayritys – on maksanut rahaa siitä, että toimittaja kirjoittaa ylistävän artikkelin. Lisäksi dataa ja tilastoja saatetaan esittää vääristetysti tavalla, joka parantaa lukijan mielikuvaa tuotteesta. Somevaikuttajien käyttö mainonnassa on yleensä kaupallista yhteistyötä eli he saavat rahaa tuotteen mainostamisesta, jolloin heidän mielipiteensä eivät ole täysin puolueettomia.",
            b: "OIKEIN! Artikkelia ei voida lähtökohtaisesti luotettavana tai objektiivisena, sillä se on rahoitettu eli joku taho – tässä tapauksessa elektroniikkayritys – on maksanut rahaa siitä, että toimittaja kirjoittaa ylistävän artikkelin. Lisäksi dataa ja tilastoja saatetaan esittää vääristetysti tavalla, joka parantaa lukijan mielikuvaa tuotteesta. Somevaikuttajien käyttö mainonnassa on yleensä kaupallista yhteistyötä eli he saavat rahaa tuotteen mainostamisesta, jolloin heidän mielipiteensä eivät ole täysin puolueettomia.",
            c: "VÄÄRIN! Artikkelia ei voida lähtökohtaisesti luotettavana tai objektiivisena, sillä se on rahoitettu eli joku taho – tässä tapauksessa elektroniikkayritys – on maksanut rahaa siitä, että toimittaja kirjoittaa ylistävän artikkelin. Lisäksi dataa ja tilastoja saatetaan esittää vääristetysti tavalla, joka parantaa lukijan mielikuvaa tuotteesta. Somevaikuttajien käyttö mainonnassa on yleensä kaupallista yhteistyötä eli he saavat rahaa tuotteen mainostamisesta, jolloin heidän mielipiteensä eivät ole täysin puolueettomia."
        }
    },
    {
        question: "Mikä seuraavista väitteistä pitää paikkansa?",
        options: { a: "Luotettava media (esimerkiksi Yle) voi levittää valeuutisia eteenpäin. ", b: "Misinformaatio tarkoittaa tahallisesti levitettyä väärää tietoa, ja disinformaatio tarkoittaa tahattomasti levitettyä väärää tietoa.  ", c: "Evästeiden kieltäminen alustalla estää täysin sen, että käyttäjän toimintaa alustalla voidaan analysoida ja hyödyntää algoritmeissa." },
        correctAnswer: 'a',
        feedback: {
            a: "OIKEIN! Myös luotettava media saattaa vahingossa levittää valeuutisia eteenpäin. Kun julkaisun sisältämä informaatio paljastuu virheelliseksi, virheet korjataan ja uutinen päivitetään mahdollisimman pian – tätä tapahtumaa kutsutaan oikaisuksi.",
            b: "VÄÄRIN! Misinformaatio tarkoittaa TAHATTOMASTI levitettyä väärää tietoa, kun taas disinfromaatio tarkoittaa TAHALLISESTI levitettyä väärää tietoa. Käsitteet sekoitetaan usein keskenään, siksi niiden ero on hyvä tietää. Oikea vastaus olisi ollut A. Myös luotettava media saattaa vahingossa levittää valeuutisia eteenpäin. Kun julkaisun sisältämä informaatio paljastuu virheelliseksi, virheet korjataan ja uutinen päivitetään mahdollisimman pian – tätä tapahtumaa kutsutaan oikaisuksi.",
            c: "VÄÄRIN! Käyttäjän toimintaa voidaan evästeiden kieltämisestä huolimatta silti seurata monin muin keinoin. Vaikka siis kieltäisit evästeet sivulta, saamasi sisältö on silti todennäköisesti hyvin personoitua.Oikea vastaus olisi ollut A. Myös luotettava media saattaa vahingossa levittää valeuutisia eteenpäin. Kun julkaisun sisältämä informaatio paljastuu virheelliseksi, virheet korjataan ja uutinen päivitetään mahdollisimman pian – tätä tapahtumaa kutsutaan oikaisuksi."
        }
    },
    {
        question: "Mikä seuraavista väitteistä EI pidä paikkansa?",
        options: { a: "Valeuutinen on tarkoituksellisesti väärää ja harhaanjohtavaa tietoa sisältävää raportointia.", b: "Propaganda on tiedon järjestelmällistä levitystä, jolla pyritään vaikuttamaan mielipiteisiin laajalla mittakaavalla.", c: "Luotettavan median kolumni (esimerkiksi HS) on lähtökohtaisesti luotettavampi lähde kuin tutkivan journalismin artikkeli." },
        correctAnswer: 'c',
        feedback: {
            a: "VÄÄRIN! Väite pitää kyllä paikkansa. Sen sijaan oikea vastaus on C. Kolumnit ovat mielipidekirjoituksia, jotka sisältävät kirjoittajan omia näkemyksiä ja arvioita. Eli vaikka kolumni julkaistaisiin luotettavassa mediassa, se sisältää subjektiivisia mielipiteitä, eikä pyri välttämättä objektiivisuuteen. Tutkiva journalismi pyrkii tuomaan julkisuuteen piilossa olevia totuuksia, korruptiota ja muita yhteiskunnallisesti merkittäviä asioita objektiivisesti tutkimustyön kautta. Täten siis tutkiva journalismin artikkeli on lähtökohtaisesti kolumnia luotettavampi lähde.",
            b: "VÄÄRIN! Väite pitää kyllä paikkansa. Sen sijaan oikea vastaus on C. Kolumnit ovat mielipidekirjoituksia, jotka sisältävät kirjoittajan omia näkemyksiä ja arvioita. Eli vaikka kolumni julkaistaisiin luotettavassa mediassa, se sisältää subjektiivisia mielipiteitä, eikä pyri välttämättä objektiivisuuteen. Tutkiva journalismi pyrkii tuomaan julkisuuteen piilossa olevia totuuksia, korruptiota ja muita yhteiskunnallisesti merkittäviä asioita objektiivisesti tutkimustyön kautta. Täten siis tutkiva journalismin artikkeli on lähtökohtaisesti kolumnia luotettavampi lähde.",
            c: "OIKEIN! Kolumnit ovat mielipidekirjoituksia, jotka sisältävät kirjoittajan omia näkemyksiä ja arvioita. Eli vaikka kolumni julkaistaisiin luotettavassa mediassa, se sisältää subjektiivisia mielipiteitä, eikä pyri välttämättä objektiivisuuteen. Tutkiva journalismi pyrkii tuomaan julkisuuteen piilossa olevia totuuksia, korruptiota ja muita yhteiskunnallisesti merkittäviä asioita objektiivisesti tutkimustyön kautta. Täten siis tutkiva journalismin artikkeli on lähtökohtaisesti kolumnia luotettavampi lähde."
        }
    },
    {
        question: "Seuraavassa on kuvaukset kolmen eri henkilön mediankulutuksesta. Valitse vaihtoehto, joka on medialukutaidon ja kuplautumisen ehkäisemisen kannalta paras tapa kuluttaa mediaa. ",
        options: { a: "Konsta seuraa uutisia eri aiheista aktiivisesti Iltalehdestä. Hän on omistautunut uutisten lukemiselle sen verran, että on tilannut Iltalehden maksullisen sisällön. Hän jakaa myös paljon Iltalehden uutisia sosiaalisessa mediassa ja keskustelee näistä muun muassa kavereidensa kanssa heidän vastatessa näihin.", b: "Ohto seuraa uutisia säännöllisesti jonkin verran lähes joka päivä. Hän selaa uutisia kaikista aihepiireistä sieltä kuin täältä: MTV:ltä, IS:stä, TikTokista ja paperisista sanomalehdistä esimerkiksi. Hän myös tykkää puhua uutisista ja maailman tapahtumista muiden kanssa, kuten työpaikallaan.", c: "Peppi käyttää sosiaalista mediaa monta tuntia päivittäin ja saakin uutisensa pääosin sosiaalisen mediansa uutissyötteestä. Hän käyttää kuitenkin monia eria somealustoja. Syötteeseensä hän saa muun muassa uutisia niin esimerkiksi Yleltä ja Helsingin Sanomilta kuin hänen seuraamiltaan vaikuttajilta ja aktivisteilta." },
        correctAnswer: 'b',
        feedback: {
            a: "VÄÄRIN! Konstan aktiivinen uutisten seuraaminen sekä omistautuneisuus ovat hyviä asioita, mutta hän lukee uutisia pelkästään yhdestä lähteestä, mikä saattaa yksipuolistaa paljonkin hänen näkemyksiään. Oikea vastaus olisi ollut B. Ohto lukee uutisia säännöllisesti useista eri lähteistä ja puhuu uutisista eri ihmisten kanssa, jolloin hän saa mahdollisimman monipuolisen kuvan asioista ja tapahtumista. ",
            b: "OIKEIN! Ohto lukee uutisia säännöllisesti useista eri lähteistä ja puhuu uutisista eri ihmisten kanssa, jolloin hän saa mahdollisimman monipuolisen kuvan asioista ja tapahtumista. ",
            c: "VÄÄRIN! Vaikka Peppi käyttääkin sosiaalista mediaa paljon ja saa uutisia sinne useista lähteistä, hänen uutissyötteensä on kuitenkin personoitu ja manipuloitu Pepin kuluttuman sisällön perusteella. Hän saa vain hänen näkemyksiään vahvistavaa sisältöä, jolloin hänen maailmankuva kapenee ja yksipuolistuu. Oikea vastaus olisi ollut B. Ohto lukee uutisia säännöllisesti useista eri lähteistä ja puhuu uutisista eri ihmisten kanssa, jolloin hän saa mahdollisimman monipuolisen kuvan asioista ja tapahtumista."
        }
    }
];


function TestPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const testContentRef = useRef(null); 
    const feedbackRef = useRef(null); 

    const handleOptionClick = (option) => {
        if (!showFeedback) {  
            setSelectedOption(option);
            setShowFeedback(true);
            if (option === quizData[currentQuestionIndex].correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }
            setTimeout(() => {
                feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    };

    const handleNextQuestion = () => {
        setShowFeedback(false);
        setSelectedOption('');
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setShowResults(true);
        }
        setTimeout(() => {
            if (testContentRef.current) {
                const elementRect = testContentRef.current.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.scrollY;
                window.scrollTo({
                    top: absoluteElementTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <div>
            <Navbar />
            <div ref={testContentRef} className='test-content'>
                {!showResults && (
                    <div className="question-section">
                        <div className="question-count">
                            <span>Kysymys {currentQuestionIndex + 1}/{quizData.length}</span>
                        </div>
                        <div className="question-text">{quizData[currentQuestionIndex].question}</div>
                        {quizData[currentQuestionIndex].image && (
                            <div className="image-container">
                                <img src={quizData[currentQuestionIndex].image} alt="Supplementary content" />
                            </div>
                        )}
                        <div className="answer-section">
                            {Object.entries(quizData[currentQuestionIndex].options).map(([key, value]) => (
                                <div className="option" key={key}>
                                    <button onClick={() => handleOptionClick(key)}
                                            className={showFeedback && key === selectedOption ? (key === quizData[currentQuestionIndex].correctAnswer ? 'correct' : 'incorrect') : ''}
                                            disabled={showFeedback}>
                                        {key.toUpperCase()}
                                    </button>
                                    <div className="option-description">{value}</div>
                                </div>
                            ))}
                        </div>
                        {showFeedback && (
                            <div ref={feedbackRef} className={`feedback ${selectedOption === quizData[currentQuestionIndex].correctAnswer ? 'correct' : 'incorrect'}`}>
                                {quizData[currentQuestionIndex].feedback[selectedOption]}
                            </div>
                        )}
                        {showFeedback && (
                            <button className="next-button" onClick={handleNextQuestion}>
                                {currentQuestionIndex === quizData.length - 1 ? "Testin tulokset" : "Seuraava kysymys"}
                            </button>
                        )}
                    </div>
                )}
                {showResults && (
                    <div className="results-section">
                        <div className="result-message">
                            <h1>Tuloksesi: {score}/8</h1> <br/><br/>
                            {score >= 0 && score <= 3 && "Voi ei! Sinulla on heikko medialukutaito. Et välttämättä tajua paljoa mediasta, mutta ei hätää: koskaan ei ole liian myöhäistä opetella puhaltamaan omia kuplia. Meidän sivuillamme on runsaasti hyödyllistä tietoa ja teemme runsaasti sisältöä, jolla pääset alkuun medialukutaitosi kehittämisessä. Tsekkaa meidän infopaketti tästä. Ota haltuun meidän somet: Instagram: @omassakuplassa TikTok @omassakuplassa Me Ylellä luomme objektiivista ja puolueetonta tuoretta sisältöä uusista tapahtumista kotimaassa sekä maailmalla. Meidän uutisia lukemalla edes vähän ja säännöllisesti pääset hyvin jo ajantasalle ympärillä tapahtuvasta.Kannattaa tietenkin lukea muualtakin monipuolisesti uutisia!"}
                            {score >= 4 && score <= 5 && "Ei paha! Sinulla on ihan OK medialukutaito. Medialukutaitosi on ihan OK, mutta siinä on kehitettävän varaa. Et ehkä tiedä kaikkea, mutta tiedät jo jotain mediasta sekä sen kuluttamisesta – se on hyvä alku. Voisit hyötyä ja kehittyä paljon meidän sivuillemme sekä muualle sosiaaliseen mediaan luomastamme sisällöstä.Tsekkaa meidän infopaketti tästä.Ota haltuun meidän somet:Instagram: @omassakuplassaTikTok @omassakuplassaMuista suhtautua kriittisesti lukemaasi sisältöön sekä sen luotettavuuteen ja kuluttaa mediaa eri lähteistä eikä vain parista. Me Ylellä pyrimme luomaan objektiivista ja puolueetonta tuoretta sisältöä uusista tapahtumista kotimaassa sekä maailmalla."}
                            {score >= 6 && score <= 7 && "Jee! Sinulla on hyvä medialukutaito!   Tiedät jo paljon mediasta ja ymmärrät sitä hyvin. Kehitettävää on enimmillään vähän. Kiinnitä huomiota jatkossa mediaa lukiessasi etenkin niiden kysymyksien aspekteihin, jotka sait väärin. Hienosäätelyä medialukutaitoon liittyen voit oppia muun muassa meidän informatiivisesta kontentista somessa.   Ota haltuun meidän somet:    Instagram: @omassakuplassa  TikTok @omassakuplassa" }
                            {score === 8 && ( <> Onnittelut! Sinulla on erinomainen medialukutaito. <br/><br/> Sinulla on selvästi homma täysin hallussa. Osaat nähdä klikkiotsikoiden taakse, tunnistaa luotettavan tai epäluotettavan lähteen, suhtautua kuluttamaasi sisältöön kriittisesti ja pysyä kaukana kuplasta. Tiedät niin median hyvät kuin pahat, osaat soveltaa niitä mediankäytössäsi ja puhallat omat kuplasi! </> )}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default TestPage;