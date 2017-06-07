import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const MODAL_OPEN = "base/modal/MODAL_OPEN";
const MODAL_CLOSE = "base/modal/MODAL_CLOSE";

export const openModal = createAction(MODAL_OPEN);
export const closeModal = createAction(MODAL_CLOSE);

const initialState = Map({
    login: Map({
        open: false,
    })
});

export default handleActions({
    [MODAL_OPEN]: (state, action) => {
        const { modalName, data } = action.payload;

        return state.mergeIn([modalName], {
            open: true,
            ...data
        });
    },
    [MODAL_CLOSE]: (state, action) => {
        // modalName 모달을 숨긴다
        const modalName = action.payload;
        return state.setIn([modalName, 'open'], false);
    }
}, initialState);