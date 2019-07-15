// @flow
import { api } from 'shared/services';
import { DomainStore } from './domain';

export default () => {
  const domain = DomainStore.create(
    {},
    {
      api,
    },
  );

  return {
    domain,
  };
};
