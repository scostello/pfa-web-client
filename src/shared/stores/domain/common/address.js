// @flow
import { types } from 'mobx-state-tree';

export const Address = types.model('Address', {
  streetAddress1: '',
  streetAddress2: '',
  city: '',
  state: '',
  zipCode: '',
  countyFips: '',
  latitude: '',
  longitude: '',
});
