// @flow
import { types } from 'mobx-state-tree';
import { Address } from 'shared/stores/domain/common';

export const Stadium = types.model('Stadium', {
  id: types.identifier,
  name: '',
  address: Address,
  yearOpened: types.maybe(types.number),
  capacity: types.maybe(types.number),
});
