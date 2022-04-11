import { makeAutoObservable, reaction } from 'mobx';
import { AppData } from '../models/Interfaces';
import { Langauge } from '../models/Language';
import DataEnglish from '../../data/en';
import DataSwedish from '../../data/sv';

export default class commonStore {
  selectedLangauge: Langauge = window.localStorage.getItem('language') === Langauge.Swedish ? Langauge.Swedish : Langauge.English;
  data: AppData = DataEnglish;

  constructor() {
    window.document.title = window.document.title + ' | ' + this.data.sideBarData.name + ' ' + this.data.sideBarData.surname;
    this.refreshData();
    makeAutoObservable(this);
    reaction(() => this.selectedLangauge, (selectedLangauge) => {
      if (selectedLangauge) window.localStorage.setItem('language', selectedLangauge);
    });
  }

  private refreshData = () => {
    this.data =
      this.selectedLangauge === Langauge.English
        ? DataEnglish
        : DataSwedish;
    document.documentElement.lang = this.selectedLangauge;
  };
  setLangauge = (langauge: Langauge) => {
    this.selectedLangauge = langauge;
    this.refreshData();
  };
}
