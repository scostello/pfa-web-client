// @flow
import { types } from 'mobx-state-tree';
import { Person } from 'shared/stores/domain/common';
import { Stadium } from 'shared/stores/domain/stadium';

export const Franchise = types.model('Franchise', {
  idFranchise: types.identifier,
  currentStadium: types.maybe(types.reference(Stadium)),
  currentOwner: types.maybe(types.reference(Person)),
  teamAbbr: '',
  teamFull: '',
  activeFrom: types.maybe(types.number),
  activeTo: types.maybe(types.number),
});

export default Franchise;
