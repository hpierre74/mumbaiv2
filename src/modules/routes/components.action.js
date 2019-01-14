import Article from '../../components/article.component';

export const GET_COMPONENT_SUCCESS = 'components/GET_COMPONENT_SUCCESS';

export const getComponents = () => dispatch => {
  dispatch({
    type: GET_COMPONENT_SUCCESS,
    name: 'Home',
    component: Article,
  });
};
