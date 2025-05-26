const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: 'Tomas',
                    last: 'Tomauskas'
                },
                picture: {
                    large: 'img-url'
                },
                login: {
                    username: 'Tomukas'
                }
            },
                   {
                name: {
                    first: 'Tomas',
                    last: 'Tomauskas'
                },
                picture: {
                    large: 'img-url'
                },
                login: {
                    username: 'Tomukas'
                }
            },
                   {
                name: {
                    first: 'Tomas',
                    last: 'Tomauskas'
                },
                picture: {
                    large: 'img-url'
                },
                login: {
                    username: 'Tomukas'
                }
            },
                   {
                name: {
                    first: 'Tomas',
                    last: 'Tomauskas'
                },
                picture: {
                    large: 'img-url'
                },
                login: {
                    username: 'Tomukas'
                }
            },
                   {
                name: {
                    first: 'Tomas',
                    last: 'Tomauskas'
                },
                picture: {
                    large: 'img-url'
                },
                login: {
                    username: 'Tomukas'
                }
            }
        ]
    }
}

export default {
    get:  jest.fn().mockResolvedValue(mockResponse)
};

