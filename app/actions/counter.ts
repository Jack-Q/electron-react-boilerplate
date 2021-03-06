export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = () => ({ type: INCREMENT_COUNTER });

export const decrement = () => ({ type: DECREMENT_COUNTER });

export const incrementIfOdd = () => {
  return (
    dispatch: (dispatchType: { type: string }) => void,
    getState: () => { counter: number }
  ) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

export const incrementAsync = (delay: number = 1000) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};
