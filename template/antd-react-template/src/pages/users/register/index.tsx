/*
 * @Author: mingwei
 * @Date: 2022-05-10 15:53:32
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-26 15:41:34
 * @FilePath: /hezong/frontend/ms-hezong/src/pages/users/register/index.tsx
 * @Description:
 */

import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input, Button, message } from 'antd'
import LoginBg from '@/assets/images/login_bg.png'
import { RequestBody } from '@/types/business'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/hooks/useStore'
import '@/styles/view-style/users.scss'

const Register: React.FC<{}> = () => {
  const navigate = useNavigate()
  const { authorizationStoreInstance } = useStore()

  /**
   * 注册
   * @param event 表单返回值
   */
  const handleSubmit = async (event: RequestBody) => {
    // if (event.username !== undefined || event.password !== undefined) {
    //   await authorizationStoreInstance.request_register(event)
    //   navigate('/login')
    // } else {
    //   message.warning('必填字段不能为空')
    // }

    try {
      await authorizationStoreInstance.request_register(event)
      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * 渲染登录表单输入框
   * @returns ReactNode
   */
  const loginForm = () => {
    return (
      <Form onFinish={handleSubmit} labelCol={{ span: 3 }}>
        <Form.Item
          rules={[
            {
              required: true,
              message: '账号不能为空',
            },
          ]}
          className='form-item'
          name='username'
          label='账号'
        >
          <Input className='form-input' prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type='text' placeholder='请输入账号' maxLength={11} />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: '密码不能为空' }]} className='form-item' name='password' label='密码'>
          <Input.Password className='form-input' prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码' />
        </Form.Item>
        <Form.Item className='form-item-btn'>
          <Button id='test-form-btn' className='form-btn' block type='primary' htmlType='submit'>
            立即注册
          </Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <div className='container'>
      <div className='left_flow' />
      <div className='content'>
        <img className='img' src={LoginBg} alt='logo' />
        <div className='right_flow'>
          <div className='title_flow'>
            <span className='h4'>欢迎使用，</span>
            <span className='h3_title'>区块链管理平台</span>
          </div>
          <div className='form_wrap'>{loginForm()}</div>
          <span className='tip_text' onClick={() => navigate('/login')}>
            登录
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
