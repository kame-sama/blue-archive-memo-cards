import './style.css';
import { useState, useEffect, useRef } from 'react';
import fetchDataFromApi from './util/fetch-data-from-api';
import shuffle from './util/shuffle';
import {
  Card,
  ErrorLanding,
  Footer,
  Header,
  Layout,
  Loader,
  Main,
  Score,
} from './components/components';
import '@fontsource-variable/noto-sans-jp';
import './App.css';
import useSound from 'use-sound';
import clickSound from '/click.wav.mp3';
import { SoundContext } from './context/SoundContext';

function App() {
  const [deck, setDeck] = useState<Character[]>();
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const clicked = useRef(new Set<string>());
  const data = useRef<Character[]>([]);
  const currentScoreRef = useRef<HTMLDivElement>(null);
  const bestScoreRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [playClickSound] = useSound(clickSound);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetchDataFromApi()
      .then((response) => {
        data.current = response;
        setDeck(data.current.slice(0, 4));
      })
      .catch((error) => {
        if (error instanceof Error) setFetchError(true);
      });
  }, []);

  useEffect(() => {
    currentScoreRef.current?.classList.add('scale-up');
    const timeoutId = setTimeout(() => {
      currentScoreRef.current?.classList.remove('scale-up');
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [score]);

  useEffect(() => {
    bestScoreRef.current?.classList.add('scale-up');
    const timeoutId = setTimeout(() => {
      bestScoreRef.current?.classList.remove('scale-up');
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [best]);

  useEffect(() => {
    cardsRef.current?.classList.add('fade');
    const timeoutId = setTimeout(() => {
      cardsRef.current?.classList.remove('fade');
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [deck]);

  const handleCardClick = function (id: string) {
    if (clicked.current.has(id)) {
      if (score > best) setBest(score);
      setScore(0);
      setDeck(shuffle(data.current.slice(0, 4)));
      clicked.current.clear();
    } else {
      clicked.current.add(id);
      if (clicked.current.size === deck!.length) {
        if (deck!.length === 12) {
          setScore(0);
          setBest(score + 1);
          setDeck(shuffle(data.current.slice(0, 4)));
        } else {
          setScore(score + 1);
          setDeck(shuffle(data.current.slice(0, deck!.length + 2)));
        }

        clicked.current.clear();
      } else {
        setScore(score + 1);
        setDeck(shuffle(deck!.slice(0)));
      }
    }

    if (isSoundOn) playClickSound();
  };

  if (fetchError) {
    return <ErrorLanding />;
  }

  return (
    <SoundContext.Provider value={{ isSoundOn, setIsSoundOn }}>
      <Layout>
        <Header>
          <Score score={score} ref={currentScoreRef}>
            Current:
          </Score>
          <Score score={best} ref={bestScoreRef}>
            Best:
          </Score>
        </Header>
        <Main ref={cardsRef}>
          {deck ? (
            deck?.map((d) => (
              <Card key={d.id} data={d} onClickHandler={handleCardClick} />
            ))
          ) : (
            <Loader />
          )}
        </Main>
        <Footer />
      </Layout>
    </SoundContext.Provider>
  );
}

export default App;
