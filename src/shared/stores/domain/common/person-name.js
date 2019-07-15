// @flow
import { types } from 'mobx-state-tree';

export const PersonName = types.model('PersonName', {
  title: types.maybe(types.string),
  first: types.maybe(types.string),
  middle: types.maybe(types.string),
  last: types.maybe(types.string),
  suffix: types.maybe(types.string),
});
