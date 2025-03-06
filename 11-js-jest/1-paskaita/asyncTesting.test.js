const fetchData = require('./asyncTesting');

test('fetches data successfuly', async () => {
    const data = await fetchData();
    expect(data).toBe('Data loaded');
})