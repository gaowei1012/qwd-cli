/*
 * @Author: mingwei
 * @Date: 2022-06-14 11:45:35
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 14:25:03
 * @FilePath: /vite-project/src/stores/news.ts
 * @Description:
 */

import { makeObservable } from "mobx";
import { http } from "../services/http";
import { news, login, change_password } from "../services/apis";

const { get, post, put, del } = http;

export class NewsStore {
  constructor() {
    makeObservable(this, {});
  }

  async request_news_list() {
    const newRes = await get(news, {});
    console.log(newRes);
  }

  async delete_news(new_id: number) {
    const deleteRes = await del(`${news}/${new_id}`);
    console.log(deleteRes);
  }

  async login() {
    const loginRes = await post(login, {
      username: "admin",
      password: "123456",
    });
    console.log(loginRes);
  }

  async change_password() {
    const pwdRes = await put(change_password, {
      old_password: "123",
      new_password: "123",
    });
    console.log(pwdRes);
  }
}
