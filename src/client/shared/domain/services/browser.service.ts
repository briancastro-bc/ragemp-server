export interface BrowserService {
  instance: BrowserMp;
  currentRoute?: string;
  openRoute(route: string): void;
  closeRoute(route: string): void;
  toggleActive(): boolean;
}