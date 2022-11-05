import React from 'react';

export interface ExampleProps {
  children: string;
}

const Example: React.FC<ExampleProps> = ({ children }) => (
  <p>{children}</p>
);

export default Example;