function shuffle(deck: Character[]): Character[] {
  for (let i = deck.length - 1; i >= 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[index]] = [deck[index], deck[i]];
  }

  return deck;
}

export default shuffle;
