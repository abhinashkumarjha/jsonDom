import React, { useState } from 'react';
import Form from "@rjsf/core";
import './App.css';
import * as Schema1 from './JSONschemas/JSONschema1';
import * as Schema2 from './JSONschemas/JSONschema2';

const log = (type) => console.log.bind(console, type);

const App = () => {

  const [schema, setSchema] = useState({
    schema: {},
    uiSchema: {}
  });

  const [showUploadOption, setUploadOption ] = useState(true)

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-header-checkbox">
          <input type="radio" id="schema1" name="schema" value="schema1" />
          <label for="schema1">Schema 1</label>
          <input type="radio" id="schema2" name="schema" value="schema2" />
          <label for="female">Schema 2</label>
          <input type="radio" id="custom" name="schema" value="custom" />
          <label for="custom">Upload Custom</label>
        </div>
        { showUploadOption ? <input type="file"/>:''}
      </div>
      <div className="app-body">
        <Form 
          schema={Schema1.schema}
          uiSchema={Schema1.uiSchema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} 
        />
      </div>
    </div>
  );
}

export default App;
