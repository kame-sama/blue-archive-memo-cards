function shuffle(deck: Character[]): Character[] {
  const copy: Character[] = [...deck];

  for (let i = copy.length - 1; i >= 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[index]] = [copy[index], copy[i]];
  }

  return copy;
}

export default shuffle;
