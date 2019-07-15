// @flow
import { types } from 'mobx-state-tree';
import { PersonName } from './person-name';

export const Person = types.model('Person', {
  id: types.identifier,
  name: PersonName,
  dob: types.maybe(types.Date),
});
