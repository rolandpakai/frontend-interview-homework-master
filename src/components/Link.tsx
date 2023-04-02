import React, { useRef } from 'react';

import {
  EventArg,
  MeasurementId,
  useEventHandler,
  useObserveTarget,
} from '../logic/event';

type LinkProps = {
  id: number;
  href: string;
  measurementId: MeasurementId;
  className?: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { id, href, measurementId, className, children } = props;
  const targetRef = useRef(null);
  const eventArg = {
    type: undefined,
    brokerId: id,
    measurementId,
  } as EventArg;

  useObserveTarget(targetRef, { ...eventArg, type: 'impression' });

  const useHandleClick = () => {
    useEventHandler({ ...eventArg, type: 'click' });
  };

  return (
    <a
      ref={targetRef}
      href={href}
      onClick={useHandleClick}
      target="_blank"
      rel="nofollow noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default Link;
