
export interface IClient {
    type: string,
    payload: any
}

export function clientAction(): IClient {
    return {
        type: 'CLIENT',
        payload: {
            name: 'Leandro Budau de Moraes',
            tel: '3978-8693'
        }
    };
}