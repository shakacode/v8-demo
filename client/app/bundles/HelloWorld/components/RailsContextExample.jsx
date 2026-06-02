import React from 'react';

/**
 * This is an example of a React on Rails "Generator Function"
 * @param props
 * @param railsContext
 * @constructor
 */
const RailsContextExample = (props, railsContext) => (
  <div>
    <p>props are: {JSON.stringify(props)}</p>
    <p>railsContext is:
      {JSON.stringify({ ...railsContext, serverSide: false})}}
    </p>
  </div>
);

/*
 * Note, serverSide is modified in the railsContext so that it always prints as false
 */

export default RailsContextExample;
