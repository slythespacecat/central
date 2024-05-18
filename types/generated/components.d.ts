import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicContentDynamicContent extends Schema.Component {
  collectionName: 'components_dynamic_content_dynamic_contents';
  info: {
    displayName: 'Dynamic_Content';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic-content.dynamic-content': DynamicContentDynamicContent;
    }
  }
}
