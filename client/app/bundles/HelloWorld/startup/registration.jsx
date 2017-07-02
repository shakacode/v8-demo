import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import RailsContextExample from '../components/RailsContextExample';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  RailsContextExample,
});
