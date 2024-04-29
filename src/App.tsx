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
  const [data, setData] = useState<Character[]>();
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const clicked = useRef(new Set<string>());

  useEffect(() => {
    fetchDataFromApi().then((response) => {
      setData(response);
    });
  }, []);

  const handleCardClick = function (id: string) {
    if (clicked.current.has(id)) {
      if (score > best) setBest(score);
      setScore(0);
      setData(shuffle(data!));
      clicked.current.clear();
    } else {
      clicked.current.add(id);
      if (clicked.current.size === 12) {
        setScore(0);
        setBest(12);
        clicked.current.clear();
      } else {
        setScore(score + 1);
      }

      setData(shuffle(data!));
    }
  };

  return (
    <Layout>
      <Header>
        <Score score={score}>Current:</Score>
        <Score score={best}>Best:</Score>
      </Header>
      <Main>
        {data ? (
          data?.map((d) => (
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
