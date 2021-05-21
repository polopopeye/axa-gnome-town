import retrieveData from '../modules/components/retrieveData';

describe('Test fecth Data from API CONECTION', () => {
  test('Making an Api petition', async () => {
    await retrieveData(function (response) {
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
