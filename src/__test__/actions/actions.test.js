import actions from '../../actions';
import GnomeMock from '../../__mocks__/GnomeMock';

describe('Check Actions', () => {
  test('setData Action', () => {
    const payload = GnomeMock;
    const expected = {
      type: 'SET_DATA',
      payload,
    };
    expect(actions.setData(payload)).toEqual(expected);
  });
});
