/*
 * @Author: weiqi
 * @Date: 2022-02-25 19:02:26
 * @LastEditors: weiqi
 * @LastEditTime: 2022-02-25 19:16:28
 * @Description: file content
 * @FilePath: /yl-mobile/frontend/src/common/utils/validator/inputs.ts
 */
import validator from 'validator'

 class inputsValidator {
  // 检查字符串是否是手机号码
  isMobilePhone = (phone: string) => {
    if (!validator.isMobilePhone(phone, 'zh-CN')) throw '手机号码格式错误,不支持非大陆手机号'
    return this;
  }

  // 检查字符串是否是电子邮件
  isEmail= (email: string) => {
    if (!validator.isEmail(email)) throw '邮箱格式错误'
    return this;
  }
  // 检查字符串是否是有效的身份证代码
  isIdentityCard=(str: string) => {
    if (!validator.isIdentityCard(str, 'any') || str.length!=18) throw '身份证格式错误,不支持非大陆身份证'
    return this;
  }
  isOpt=(opt: string) =>{
    if (opt.length != 6) throw '验证码格式错误'
    return this;
  }
  isPassword=(pwd:string)=>{
    if (!validator.isLength(pwd, { min: 6, max: 12 })) throw '密码长度错误:密码需要在6到12位之间'
    return this;
  }
  isEmpty=(field:string,str:string)=>{
    if (validator.isEmpty(str)) throw `[${field}]不能为空`
    return this;
  }
}

export const inputValidatorInstance = new inputsValidator()