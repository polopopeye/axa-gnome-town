import reducer from '../../reducers';
import GnomeMock from '../../__mocks__/GnomeMock';
import initialState from '../../initialState';

describe('Check Reducers', () => {
  test('Check Return initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Checking SET_DATA', () => {
    const payload = GnomeMock;
    const action = {
      type: 'SET_DATA',
      payload,
    };
    const expected = {
      myList: [],
      resultsPerPage: 5,
      query: ' ',
      Brastlewark: GnomeMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
