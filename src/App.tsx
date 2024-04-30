import './style.css';
import { useState, useEffect, useRef } from 'react';
import fetchDataFromApi from './util/fetch-data-from-api';
import shuffle from './util/shuffle';
import {
  Card,
  Header,
  Layout,
  Loader,
  Main,
  Score,
} from './components/components';
import '@fontsource-variable/noto-sans-jp';

function App() {
  const [deck, setDeck] = useState<Character[]>();
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const clicked = useRef(new Set<string>());
  const data = useRef<Character[]>([]);

  useEffect(() => {
    fetchDataFromApi().then((response) => {
      data.current = response;
      setDeck(data.current.slice(0, 4));
    });
  }, []);

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
  };

  return (
    <Layout>
      <Header>
        <Score score={score}>Current:</Score>
        <Score score={best}>Best:</Score>
      </Header>
      <Main>
        {deck ? (
          deck?.map((d) => (
            <Card key={d.id} data={d} onClickHandler={handleCardClick} />
          ))
        ) : (
          <Loader />
        )}
      </Main>
    </Layout>
  );
}

export default App;
