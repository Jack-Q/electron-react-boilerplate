import * as React from 'react';
import { Component } from 'react';
import DevTools from "./DevTools";


export default class App extends Component<{children: React.ReactChild}, {}> {

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
