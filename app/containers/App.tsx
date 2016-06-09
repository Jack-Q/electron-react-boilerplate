import * as React from 'react';
import { Component, PropTypes } from 'react';
import DevTools from "./DevTools";

export default class App extends Component<React.ValidationMap<any>, {}> {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
