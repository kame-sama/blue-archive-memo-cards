import { createContext } from 'react';

interface SoundContent {
  isSoundOn: boolean;
  setIsSoundOn: (v: boolean) => void;
}

export const SoundContext = createContext<SoundContent>({
  isSoundOn: false,
  setIsSoundOn: () => {},
});
