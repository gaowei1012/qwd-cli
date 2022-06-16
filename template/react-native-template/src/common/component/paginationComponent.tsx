/*
 * @Author: weiqi
 * @Date: 2022-02-22 15:00:01
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-28 18:09:32
 * @Description: 分页模块,支持native下拉刷新和触底分页
 * @param initCtrl 初始化方法
 * @param getRows 获取列表数据方法
 * @param getCount 获取数据总数方法
 * @param requestCtrl 请求数据方法
 * @param renderItem 渲染列表方法
 * @FilePath: /yl-app/frontend/src/common/component/paginationComponent.tsx
 */

import React, { useState } from 'react';
import { ScrollView, ActivityIndicator, View, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { paginationComponentStyles } from '@/common/styles';
import { PlatformUtils } from '@/common/utils';
import { observer } from 'mobx-react-lite';
import { Empty } from '.';

export const PaginationComponent: React.FC<{
  initCtrl: any;
  getRows: any;
  getCount: any;
  requestCtrl: any;
  renderItem: any;
}> = observer(props => {
  const { initCtrl, getRows, requestCtrl, renderItem } = props;
  const [topRefreshing, setTopRefreshing] = useState<boolean>(false);
  const [bottomRefreshing, setBottomRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const pageCount = 8;
  /**
   * @description:
   * @param {*}
   * @return {*}
   */
  useFocusEffect(
    React.useCallback(() => {
      usePullDownRefresh();
    }, [])
  );

  const requestQuestionnaireList = async (page: number) => {
    await requestCtrl(page, pageCount);
    setPage(page);
  };

  /**
   * 下拉刷新
   */
  const usePullDownRefresh = async () => {
    initCtrl();
    setTopRefreshing(true);
    await requestQuestionnaireList(1);
    setTopRefreshing(false);
  };

  const reachBottomRefresh = async () => {
    setBottomRefreshing(true);
    await requestQuestionnaireList(page + 1);
    setBottomRefreshing(false);
  };

  const _useRedreshByAndroid = (event: any) => {
    const y = event.contentOffset.y;
    const height = event.layoutMeasurement.height;
    const _contentHeight = event.contentSize.height;
    if (y == 0) {
      if (!topRefreshing) {
        usePullDownRefresh();
      }
    } else if (y + height >= _contentHeight - 30) {
      if (!bottomRefreshing) {
        reachBottomRefresh();
      }
    }
  };

  const _useRedreshByIos = (event: any) => {
    const _num = event.contentSize.height - event.layoutMeasurement.height - event.contentOffset.y;
    //下拉刷新
    if (event.contentOffset.y < -100) {
      if (!topRefreshing) {
        usePullDownRefresh();
      }
    } else if (event.contentSize.height > event.layoutMeasurement.height && _num < -50) {
      //触底分页
      if (!bottomRefreshing) {
        reachBottomRefresh();
        console.log('上拉，加载更多评论');
      }
    }
  };

  /**
   * 上拉触底
   */
  const _onScroll = async (e: any) => {
    console.log('page e===>>>>>>>>>>>>>>>>>>>>>>>>>>>>', e);
    const event = e.nativeEvent;
    // console.log(event.contentOffset.y);
    // 如果y < 50，则显示状态栏，否则隐藏
    // StatusBar.setHidden(event.contentOffset.y > 50);
    // 如果拖拽值超过底部50，且当前的scrollview高度大于屏幕高度，则加载更多
    //contentSize scrollView高度
    //layoutMeasurement 屏幕高度
    //contentOffset 下拉偏移
    if (PlatformUtils.getPlatform() == 'android') {
      _useRedreshByAndroid(event);
    } else {
      _useRedreshByIos(event);
    }
  };

  const renderRactivityIndicator = (opt: string) => {
    const _refreshing = opt == 'top' ? topRefreshing : bottomRefreshing;
    const loadingWrap = opt == 'top' ? 'topLoadingWrap' : 'bottomLoadingWrap';
    return (
      <>
        {PlatformUtils.getPlatform() == 'ios' ? (
          <View style={paginationComponentStyles[loadingWrap]}>
            <ActivityIndicator animating={_refreshing} size="large" />
          </View>
        ) : (
          <ActivityIndicator animating={_refreshing} size="large" />
        )}
      </>
    );
  };

  return (
    <ScrollView scrollEventThrottle={200} onScroll={_onScroll}>
      {topRefreshing ? renderRactivityIndicator('top') : null}

      {getRows() ? (
        getRows().length != 0 ? (
          getRows().map((item: any) => {
            return renderItem(item);
          })
        ) : (
          <Empty height={400} />
        )
      ) : (
        <></>
      )}

      {bottomRefreshing ? renderRactivityIndicator('bottom') : null}
    </ScrollView>
  );
});
