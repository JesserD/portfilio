import { makeAutoObservable } from 'mobx';

export enum Langauge {
  English = 'en',
  Swedish = 'se',
}

export default class commonStore {
  selectedLangauge: Langauge = Langauge.English;

  constructor() {
    makeAutoObservable(this);
  }

  setLangauge = (langauge: Langauge) => {
    this.selectedLangauge = langauge;
  };
}
