import { CommonActions, StackActions } from '@react-navigation/native';
let navigator: any;

const setToLeveNavigator = (navigatorRef: any) => {
  navigator = navigatorRef;
};

const navigate = (routeName: any, params = {}) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};
/**
 * 登录状态改变重新加载tab,加载后goback不会回退到login页面
 * @param routeName
 * @param params
 */
const reset = (routeName: any, params = {}) => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
};

/**
 * 假设有这样的场景，A navigate到B，B完成任务后要到C，C返回的不是B，而是A，此时使用B replace C即可实现需求。
 * @param routeName
 * @param params
 */
const replace = (routeName: any, params = {}) => {
  navigator.dispatch(StackActions.replace(routeName, params));
};

const back = () => {
  navigator.dispatch(CommonActions.goBack());
};

const getRouteParams = () => {
  return navigator.getCurrentRoute().params;
};

export { setToLeveNavigator, replace, reset, back, navigate, getRouteParams, navigator };
