//functions, variables, etc... which become available in all tests

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
}

global.localStorage = localStorageMock
