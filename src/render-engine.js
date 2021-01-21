import React from 'react';

export default class RenderEngine {
  constructor(schema, components) {
    this.schema = schema;
    this.components = components;
  }

  /**
   * 解析组件
   * @param {String} componentName 
   */
  parseComponet(componentName) {
    const componentNameList = Object.keys(this.components);

    // 在提供的组件中
    if (componentNameList.some((item) => componentName.startsWith(item))) {
      // 某类的子标签
      if (componentName.includes('.')) {
        const [tag, subTag] = componentName.split('.');
        return this.components[tag][subTag];
      }

      return this.components[componentName];
    }

    return componentName;
  }

  /**
   * 渲染节点
   * @param {Array} children 
   */
  render(children) {
    // 如果为空数组，直接退出
    if (!children) return;

    return children.map((child) => {
      // 文本节点
      if (typeof child === 'string') return child;

      return React.createElement(
        this.parseComponet(child.componentName),
        child.props,
        this.render(child.children)
      );
    });
  }

  createApp() {
    const schema = this.schema;
    return () => this.render([schema]);
  }
}
