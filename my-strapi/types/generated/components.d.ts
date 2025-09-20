import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutItems extends Struct.ComponentSchema {
  collectionName: 'components_about_about_items';
  info: {
    description: '';
    displayName: 'AboutItems';
    icon: 'layer';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'>;
    Tag: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    Undertitle: Schema.Attribute.Text;
  };
}

export interface BecomeStreamerBecomeStreamer extends Struct.ComponentSchema {
  collectionName: 'components_become_streamer_become_streamers';
  info: {
    displayName: 'BecomeStreamer';
    icon: 'dashboard';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'faq';
    icon: 'grid';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroHeroInfographik extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_infographiks';
  info: {
    displayName: 'HeroInfographik';
    icon: '';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    displayName: 'seoMeta';
    icon: 'hashtag';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    ogType: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images' | 'files'>;
    structuredData: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    twitterCard: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-items': AboutAboutItems;
      'about.hero': AboutHero;
      'become-streamer.become-streamer': BecomeStreamerBecomeStreamer;
      'faq.faq': FaqFaq;
      'hero.hero-infographik': HeroHeroInfographik;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
