import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import LoadingButton from '../src';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const LoadingButtonExample = require('raw!../src/LoadingButton.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={LoadingButtonExample} scope={{ React, LoadingButton }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
