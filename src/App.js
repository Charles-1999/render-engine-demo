/* 第一小题示例代码 */
// import React, { Component } from 'react';
// import { Form, Input, Checkbox, Button } from 'antd'
// import './App.css';

// class App extends Component {
//   // 请根据 schema.js 描述的页面，实现 render 方法，渲染出指定的页面
//   render() {
//     return (
//       <Form
//         name='basic'
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 8 }}
//         initialValues={{ remember: true }}>
//         <Form.Item
//           label='用户名'
//           name='username'
//           rules={[{ required: true, message: '请输入你的用户名!' }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label='密码'
//           name='password'
//           rules={[{ required: true, message: '请输入你的密码!' }]}>
//           <Input.Password />
//         </Form.Item>
//         <Form.Item
//           name='remember'
//           valuePropName='checked'
//           wrapperCol={{ offset: 8, span: 8 }}>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>
//         <Form.Item
//           wrapperCol={{ offset: 8, span: 8 }}>
//           <Button
//             type='primary'
//             htmlType='submit'>
//             提交
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// export default App;


/* 第二小题示例代码 */
import { Button, Form, Input, Checkbox } from 'antd';
import schema from './schema';
import RenderEngine from './render-engine';
import './App.css';

const components = { Button, Form, Input, Checkbox };
// 渲染引擎的输入为页面描述 schema 和组件依赖的映射 components
const re = new RenderEngine(schema, components);
const App = re.createApp();

export default App;