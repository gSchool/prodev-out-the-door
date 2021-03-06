import React, { Component } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage';

class VoteApp extends Component {
  render() {
    return (
      <main role="main">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Vote for your fav lang!</h1>
            <h2>Version 2</h2>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <ProgrammingLanguage name="C#" id="csharp" logo="csharp.jpg" />
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage name="Python" id="python" logo="python.png" />
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage name="JavaScript" id="javascript" logo="javascript.png" />
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col-md-4">
              <ProgrammingLanguage name="Go" id="go" logo="go.png" />
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage name="Java" id="java" logo="java.png" />
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage name="Node.js" id="nodejs" logo="nodejs.png" />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

//Cexport the VoteApp class, allows the ReactDOM.render within the index.js file to use it
export default VoteApp;
