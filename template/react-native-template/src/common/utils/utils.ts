/*
 * @Author: mingwei
 * @Date: 2022-03-24 16:20:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-22 13:32:30
 * @FilePath: /yl-app/frontend/src/common/utils/utils.ts
 * @Description:
 */
import { PlatformUtils } from './platform';
import moment from 'moment';
import _ from 'lodash';
import cnchar from 'cnchar';
import 'cnchar-poly';
import { PolyMap } from '@/config/polyMap';
class Utils {
  /**
   * 判断奇数偶数
   * @param num 需要判断的数
   * @returns boolean
   */
  static JudgeParity(num: number) {
    return num % 2 == 0 ? 0 : 1;
  }

  /**
   * 判断对象是否为空
   * @param obj 传入对象
   * @returns boolean
   */
  static isEmptyObj(obj: any) {
    return JSON.stringify(obj) != '{}' ? true : false;
  }

  static isIndexOutbound(idx: number, array: any[]) {
    if (idx < 0 || idx > array.length - 1) {
      throw '数组越界';
    }
    return false;
  }

  static initValue(arg: any) {
    let dataType = Object.prototype.toString.call(arg);
    switch (dataType) {
      case '[object Boolean]':
        return false;
      case '[object String]':
        return '';
      case '[object Array]':
        return [];
      case '[object Number]':
        return 0;
      default:
        throw 'unsupport data type';
    }
  }

  static returnKeyType() {
    return PlatformUtils.getPlatform() == 'ios' ? 'done' : 'previous';
  }

  static formatDate(utcDate: string) {
    // 处理时间转换问题
    // 将 utc 转为北京时间
    let date = new Date(utcDate);
    date.setHours(date.getHours() - 8);
    return moment(date).format('YYYY-MM-DD HH:mm');
  }

  /**
   * 处理索引列表显示的数据
   * @param targetData 需要处理的源数据
   * @returns
   */
  static formatTargetData(targetData: any[]) {
    cnchar.setSpellDefault(PolyMap);
    let _sortTargetData = _.sortBy(targetData, node => {
      return cnchar.spell(node.title);
    });
    let _targetData = _.groupBy(_sortTargetData, node => {
      return cnchar.spell(node.title, 'first')[0];
    });
    let _targetHeaderData = _.map(_targetData, (value, key) => {
      return key;
    });
    return { _targetHeaderData, _targetData };
  }

  /**
   * 生成A-Z,字符
   * @returns string['Q','D']
   */
  static getEN() {
    let arr: any = [];
    for (let i = 65; i < 91; i++) arr.push(String.fromCharCode(i));
    return arr;
  }

  static getDateDiff(dateTimeStamp: any) {
    dateTimeStamp = moment(dateTimeStamp);
    var result = '刚刚';
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var now: any = moment();
    var diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
      return;
    }
    var monthC = Math.floor(diffValue / month);
    var weekC = Math.floor(diffValue / (7 * day));
    var dayC = Math.floor(diffValue / day);
    var hourC = Math.floor(diffValue / hour);
    var minC = Math.floor(diffValue / minute);
    if (monthC >= 1) {
      result = '' + monthC + '月前';
    } else if (weekC >= 1) {
      result = '' + weekC + '周前';
    } else if (dayC >= 1) {
      result = '' + dayC + '天前';
    } else if (hourC >= 1) {
      result = '' + hourC + '小时前';
    } else if (minC >= 1) {
      result = '' + minC + '分钟前';
    }

    return result;
  }
}

export { Utils };
