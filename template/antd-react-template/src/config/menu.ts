/*
 * @Author: mingwei
 * @Date: 2022-06-28 11:50:28
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 11:50:28
 * @FilePath: /dg-cli/template/antd-react-template/src/config/menu.ts
 * @Description:
 */
type MenuType = {
  name: string;
  icon: string;
  path?: string;
  subs?: Array<MenuType>;
};

export const menu: Array<MenuType> = [
  {
    name: '发布管理',
    icon: 'https://dunlin-1303111169.cos.ap-shanghai.myqcloud.com/side_icon/cms-publish/publish.png',
    subs: [],
  },
];
