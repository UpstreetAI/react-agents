import React from 'react';
import type {
  AgentObjectData,
} from '../../types';
import {
  featureRenderers,
} from '../../util/agent-features-renderer';

// defaults

type ConfigAgentComponentProps = {
  config?: AgentObjectData;
};

/**
 * Renders the default agent components.
 * @returns The JSX elements representing the default agent components.
 */
export const ConfigAgentComponents = (props: ConfigAgentComponentProps) => {
  const features = props.config?.features ?? {};
  return (
    <>
      {Object.keys(features).map((key) => {
        const value = features[key];
        const FeatureRenderer = featureRenderers[key];
        return (
          <FeatureRenderer {...value} key={key} />
        );
      })}
    </>
  );
};