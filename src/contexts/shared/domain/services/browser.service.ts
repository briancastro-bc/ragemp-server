export interface BrowserService {
  instance: BrowserMp;
  currentRoute?: string;
  openRoute(): void;
  closeRoute(): void;
  toggleActive(): boolean;
}