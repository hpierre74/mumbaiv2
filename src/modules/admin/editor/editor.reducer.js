import { TOGGLE_CONTENT_MODAL } from './editor.action';

const initialState = {
  submitContentModal: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CONTENT_MODAL:
      return {
        ...state,
        submitContentModal: !state.submitContentModal,
      };
    default:
      return state;
  }
}
