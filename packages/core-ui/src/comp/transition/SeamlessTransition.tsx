import Grow from '@mui/material/Grow';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export enum SeamlessTransitionComp {
  First = 'fst',
  Second = 'snd',
}

export type SeamlessTransitionChildProps = {
  st: SeamlessTransitionComp;
  style: React.CSSProperties;
};

export type Props = {
  transitionIndicator: boolean;
  firstComp: React.ReactElement;
  secondComp: React.ReactElement;
};

export default function SeamlessTransition({ transitionIndicator, firstComp, secondComp }: Props) {
  const isFirstRender = useRef(true);
  const [transitionIn, setTransitionIn] = useState(true);
  const [renderFirstComp, setRenderFirstComp] = useState(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setTransitionIn(false);
  }, [transitionIndicator]);

  const handleOnExit = useCallback((el: HTMLElement) => {
    setRenderFirstComp(SeamlessTransitionComp.First !== el.dataset.st);
    setTransitionIn(true);
  }, []);

  return (
    <Grow in={transitionIn} onExit={handleOnExit}>
      {renderFirstComp
        ? React.cloneElement(firstComp, { st: SeamlessTransitionComp.First })
        : React.cloneElement(secondComp, { st: SeamlessTransitionComp.Second })}
    </Grow>
  );
}
