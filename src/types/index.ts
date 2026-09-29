export type ActivePage = 'home' | 'features' | 'integrations' | 'compare' | 'docs';

export type FeatureTab = 'pim-mdm' | 'visual-builder' | 'api-gateway' | 'mobile-factory';

export type ComparePlatform = 'bubble' | 'pimcore' | 'contentful';

export interface ServiceEndpoint {
  port: number;
  name: string;
  role: string;
  url: string;
  status: 'ready' | 'active' | 'standby';
}
