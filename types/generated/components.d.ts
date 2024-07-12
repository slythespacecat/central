import type { Schema, Attribute } from '@strapi/strapi';

export interface BestInstallersCaliforniaBestInstallersCalifornia
  extends Schema.Component {
  collectionName: 'components_best_installers__californias';
  info: {
    displayName: 'best_installers_california';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    picture: Attribute.Media;
    theme: Attribute.Enumeration<['light', 'dark', 'any']>;
    category: Attribute.String;
  };
}

export interface BestInstallersTexasBestInstallersTexas
  extends Schema.Component {
  collectionName: 'components_best_installers_texas_best_installers_texas';
  info: {
    displayName: 'best_installers_texas';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    picture: Attribute.Media;
    theme: Attribute.Enumeration<['light', 'dark', 'any']>;
  };
}

export interface BestPanelsBestPanels extends Schema.Component {
  collectionName: 'components_best_panels_best_panels';
  info: {
    displayName: 'best_panels';
  };
  attributes: {
    name: Attribute.String;
    picture: Attribute.Media;
    category: Attribute.String;
    theme: Attribute.Enumeration<['light', 'dark', 'any']>;
  };
}

export interface BestSolarCompaniesBestSolarCompanies extends Schema.Component {
  collectionName: 'components_best_companies_best_solar_companies';
  info: {
    displayName: 'best_solar_companies';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    picture: Attribute.Media;
    category: Attribute.String;
    theme: Attribute.Enumeration<['dark', 'light', 'any']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'best-installers-california.best-installers-california': BestInstallersCaliforniaBestInstallersCalifornia;
      'best-installers-texas.best-installers-texas': BestInstallersTexasBestInstallersTexas;
      'best-panels.best-panels': BestPanelsBestPanels;
      'best-solar-companies.best-solar-companies': BestSolarCompaniesBestSolarCompanies;
    }
  }
}
