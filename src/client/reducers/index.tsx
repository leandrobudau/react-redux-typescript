import { StoreState } from '../store/index';
import { IClient } from '../actions/index';

export function clientReducers(state = {
    name: 'Leandro',
    tel: '3978-0143'
}, action: IClient): StoreState {
    switch (action.type) {
        case 'CLIENT':
            return action.payload;
        default:
            return state;
    }
}