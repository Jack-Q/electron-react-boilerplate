import * as React from 'react';
import { Link } from 'react-router';
const styles = require("./Home.css") as {
  // Classs name declared in css file
  container: string,
};


export default class Home extends React.Component<void, void> {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
