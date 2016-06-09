import developmentStore from './configureStore.development';
import productionStore from './configureStore.production';

export default (initialStore = undefined) => {
  if (process.env.NODE_ENV === 'production') {
    return productionStore(initialStore);
  } else {
    return developmentStore(initialStore);
  }
}