import React, { ReactNode, FC } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

// Take in all context and return them as indiv components
// Will loop through all components that are passed as props, and nest them inside each other
export default function ComposeContext(props: IComposeContext) {
  const { components = [], children } = props;
  return (
    <>
      {components.reduceRight((acc, CurrComp: any) => {
        return <CurrComp>{acc}</CurrComp>;
      }, children)}
    </>
  );
}
