import './style.css';
import TvButton from './components/TvButton.vue'

(TvButton as any).install = (app: any) => {
  app.component('TvButton', TvButton)
};

export const TvButtonPlugin = {
  install(app: any) {
    app.component('TvButton', TvButton)
  }
}

export { TvButton }
export default TvButton
