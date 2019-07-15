// @flow
import { types, flow, getEnv } from 'mobx-state-tree';
import gql from 'graphql-tag';
import { Franchise } from './franchise';

const franchiseNode = `
  idFranchise: id
  idStadium
  idLogo
  nameAbbr
  nameFull
`;

const franchisesQuery = gql`
  query fetchFranchises {
    fetchedResource: franchises {
      nodes {
        ${franchiseNode}
      }
      edges {
        cursor
        node {
          ${franchiseNode}
        }
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
`;

const QueryMap = {
  franchises: franchisesQuery,
};

const playOccurredSubscription = gql`
  subscription {
    playOccurred
  }
`;

const fetchAs = self => flow(function* fetch(resource: string) {
  self.state = 'pending';
  try {
    const {
      data: { fetchedResource },
    } = yield self.api.query({ query: QueryMap[resource], fetchPolicy: 'cache-first' });

    console.log(fetchedResource);

    const { cursor, nodes } = fetchedResource;

    self.setResource(resource, nodes);
    self.state = 'done';
  } catch (error) {
    console.log('in error', error);
    self.state = 'error';
  }
});

export const DomainStore = types
  .model('DomainStore', {
    franchises: types.optional(types.array(Franchise), []),
  })
  .views(self => ({
    get api() {
      return getEnv(self).api;
    },
  }))
  .actions(self => ({
    fetchResources: fetchAs(self),
    setResource: (resource, value) => {
      self[resource] = value;
    },
  }));
