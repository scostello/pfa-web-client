// @flow
import { types } from 'mobx-state-tree';
import { Franchise } from './franchises';

export const DomainStore = types.model('DomainStore', {
  franchises: types.array(Franchise),
});
