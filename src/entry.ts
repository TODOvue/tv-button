import type { App, Plugin } from 'vue'
import _TvButton from './components/TvButton.vue'
import './style.scss'

const TvButton = _TvButton as typeof _TvButton & Plugin;
TvButton.install = (app: App) => {
  app.component('TvButton', TvButton)
};

export { TvButton }

export const TvButtonPlugin: Plugin = {
  install: TvButton.install
};
export default TvButton;

declare module 'vue' {
  export interface GlobalComponents {
    TvButton: typeof TvButton;
  }
}
