import {atom} from 'recoil';

export const tokenState = atom({
  key: 'tokenState',
  default: '',
});

export const sessionState = atom({
  key: 'sessionState',
  default: '',
});
