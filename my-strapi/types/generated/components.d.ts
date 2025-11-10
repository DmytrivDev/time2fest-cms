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

export interface AboutAmbasadors extends Struct.ComponentSchema {
  collectionName: 'components_about_ambasadors';
  info: {
    displayName: 'Ambasadors';
    icon: 'dashboard';
  };
  attributes: {
    AmbasadorsList: Schema.Attribute.Component<'about.ambasadors-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    Tag: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AboutAmbasadorsList extends Struct.ComponentSchema {
  collectionName: 'components_about_ambasadors_lists';
  info: {
    displayName: 'AmbasadorsList';
    icon: 'bulletList';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
  };
}

export interface AboutCto extends Struct.ComponentSchema {
  collectionName: 'components_about_ctos';
  info: {
    displayName: 'CTO';
    icon: 'dashboard';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.Text;
    Title1: Schema.Attribute.Text;
    Title2: Schema.Attribute.Text;
  };
}

export interface AboutFaq extends Struct.ComponentSchema {
  collectionName: 'components_about_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'dashboard';
  };
  attributes: {
    FAQList: Schema.Attribute.Component<'about.faq-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AboutFaqList extends Struct.ComponentSchema {
  collectionName: 'components_about_faq_lists';
  info: {
    displayName: 'FAQList';
    icon: 'bulletList';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.Text;
  };
}

export interface AboutFreePlan extends Struct.ComponentSchema {
  collectionName: 'components_about_free_plans';
  info: {
    displayName: 'FreePlan';
    icon: 'dashboard';
  };
  attributes: {
    FreePlanList: Schema.Attribute.Component<'about.free-plan-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    Title: Schema.Attribute.String;
    Undertitle: Schema.Attribute.String;
  };
}

export interface AboutFreePlanList extends Struct.ComponentSchema {
  collectionName: 'components_about_free_plan_lists';
  info: {
    displayName: 'FreePlanList';
    icon: 'bulletList';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface AboutPaidPlan extends Struct.ComponentSchema {
  collectionName: 'components_about_paid_plans';
  info: {
    displayName: 'PaidPlan';
    icon: 'dashboard';
  };
  attributes: {
    PaidPlanList: Schema.Attribute.Component<'about.paid-plan-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    Price: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AboutPaidPlanList extends Struct.ComponentSchema {
  collectionName: 'components_about_paid_plan_lists';
  info: {
    displayName: 'PaidPlanList';
    icon: 'bulletList';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutSteps extends Struct.ComponentSchema {
  collectionName: 'components_about_steps';
  info: {
    displayName: 'Steps';
    icon: 'dashboard';
  };
  attributes: {
    StrpsList: Schema.Attribute.Component<'about.strps-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    Title: Schema.Attribute.String;
  };
}

export interface AboutStrpsList extends Struct.ComponentSchema {
  collectionName: 'components_about_strps_lists';
  info: {
    displayName: 'StrpsList';
    icon: 'bulletList';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutTechnic extends Struct.ComponentSchema {
  collectionName: 'components_about_technics';
  info: {
    displayName: 'Technic';
    icon: 'dashboard';
  };
  attributes: {
    TechnicList: Schema.Attribute.Component<'about.technic-list', true>;
    Title: Schema.Attribute.String;
    Undertitle: Schema.Attribute.String;
  };
}

export interface AboutTechnicList extends Struct.ComponentSchema {
  collectionName: 'components_about_technic_lists';
  info: {
    displayName: 'TechnicList';
    icon: 'bulletList';
  };
  attributes: {
    Item: Schema.Attribute.String;
  };
}

export interface AboutWay extends Struct.ComponentSchema {
  collectionName: 'components_about_ways';
  info: {
    displayName: 'Way';
    icon: 'dashboard';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonTarget: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ButtonText: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    WayList: Schema.Attribute.Component<'about.way-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface AboutWayList extends Struct.ComponentSchema {
  collectionName: 'components_about_way_lists';
  info: {
    displayName: 'WayList';
    icon: 'bulletList';
  };
  attributes: {
    Item: Schema.Attribute.String;
  };
}

export interface AboutWhyWe extends Struct.ComponentSchema {
  collectionName: 'components_about_why_wes';
  info: {
    displayName: 'WhyWe';
    icon: 'dashboard';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    WhyWeList: Schema.Attribute.Component<'about.why-we-list', true>;
  };
}

export interface AboutWhyWeList extends Struct.ComponentSchema {
  collectionName: 'components_about_why_we_lists';
  info: {
    description: '';
    displayName: 'WhyWeList';
    icon: 'bulletList';
  };
  attributes: {
    Desc: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AmbassadorHero extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
  };
  attributes: {
    HeroList: Schema.Attribute.Component<'ambassador.hero-list', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    Tag: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface AmbassadorHeroList extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_hero_lists';
  info: {
    displayName: 'HeroList';
    icon: 'dashboard';
  };
  attributes: {
    Name: Schema.Attribute.Text;
    Text: Schema.Attribute.Text;
  };
}

export interface AmbassadorStreaam extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_streaams';
  info: {
    displayName: 'Streaam';
    icon: 'dashboard';
  };
  attributes: {
    BottomText: Schema.Attribute.String;
    StreamList: Schema.Attribute.Component<'ambassador.stream-list', true>;
    Title: Schema.Attribute.String;
  };
}

export interface AmbassadorStreamList extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_stream_lists';
  info: {
    displayName: 'StreamList';
    icon: 'bulletList';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AmbassadorWhatBecome extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_becomes';
  info: {
    displayName: 'WhatBecome';
    icon: 'dashboard';
  };
  attributes: {
    Title: Schema.Attribute.String;
    WhatBecomeList: Schema.Attribute.Component<
      'ambassador.what-become-list',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface AmbassadorWhatBecomeList extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_become_lists';
  info: {
    displayName: 'WhatBecomeList';
    icon: 'bulletList';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AmbassadorWhatDo extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_dos';
  info: {
    displayName: 'WhatDo';
    icon: 'dashboard';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    WhatDoList: Schema.Attribute.Component<'ambassador.what-do-list', true>;
  };
}

export interface AmbassadorWhatDoList extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_do_lists';
  info: {
    displayName: 'WhatDoList';
    icon: 'bulletList';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Name: Schema.Attribute.Text & Schema.Attribute.Required;
    Text: Schema.Attribute.Text;
  };
}

export interface AmbassadorWhatGet extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_gets';
  info: {
    displayName: 'WhatGet';
    icon: 'dashboard';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
    WhatGetList: Schema.Attribute.Component<'ambassador.what-get-list', true>;
  };
}

export interface AmbassadorWhatGetList extends Struct.ComponentSchema {
  collectionName: 'components_ambassador_what_get_lists';
  info: {
    displayName: 'WhatGetList';
    icon: 'bulletList';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Text: Schema.Attribute.Text;
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

export interface CountryGallery extends Struct.ComponentSchema {
  collectionName: 'components_country_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    Photos: Schema.Attribute.Media<'images', true>;
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

export interface GeneralSocials extends Struct.ComponentSchema {
  collectionName: 'components_general_socials';
  info: {
    displayName: 'Socials';
    icon: 'bulletList';
  };
  attributes: {
    Link: Schema.Attribute.String;
  };
}

export interface GeneralSocialsLinks extends Struct.ComponentSchema {
  collectionName: 'components_general_socials_links';
  info: {
    displayName: 'SocialsLinks';
    icon: 'bulletList';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface GeneralTextComponent extends Struct.ComponentSchema {
  collectionName: 'components_general_text_components';
  info: {
    displayName: 'TextComponent';
    icon: 'bulletList';
  };
  attributes: {
    Text: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface GeneralTimezoneDetail extends Struct.ComponentSchema {
  collectionName: 'components_general_timezone_details';
  info: {
    description: '';
    displayName: 'TimezoneDetail';
    icon: 'bulletList';
  };
  attributes: {
    Ambassador: Schema.Attribute.Boolean;
    VebCamera: Schema.Attribute.Boolean;
    Zone: Schema.Attribute.String;
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

export interface ProfileBanner extends Struct.ComponentSchema {
  collectionName: 'components_profile_banners';
  info: {
    displayName: 'Banner';
    icon: 'apps';
  };
  attributes: {
    Title: Schema.Attribute.Text;
  };
}

export interface ProfileSlider extends Struct.ComponentSchema {
  collectionName: 'components_profile_sliders';
  info: {
    displayName: 'Slider';
    icon: 'apps';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface ProfileVideo extends Struct.ComponentSchema {
  collectionName: 'components_profile_videos';
  info: {
    displayName: 'Video';
    icon: 'chartBubble';
  };
  attributes: {
    CountryCode: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    VideoID: Schema.Attribute.String;
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
      'about.ambasadors': AboutAmbasadors;
      'about.ambasadors-list': AboutAmbasadorsList;
      'about.cto': AboutCto;
      'about.faq': AboutFaq;
      'about.faq-list': AboutFaqList;
      'about.free-plan': AboutFreePlan;
      'about.free-plan-list': AboutFreePlanList;
      'about.hero': AboutHero;
      'about.paid-plan': AboutPaidPlan;
      'about.paid-plan-list': AboutPaidPlanList;
      'about.steps': AboutSteps;
      'about.strps-list': AboutStrpsList;
      'about.technic': AboutTechnic;
      'about.technic-list': AboutTechnicList;
      'about.way': AboutWay;
      'about.way-list': AboutWayList;
      'about.why-we': AboutWhyWe;
      'about.why-we-list': AboutWhyWeList;
      'ambassador.hero': AmbassadorHero;
      'ambassador.hero-list': AmbassadorHeroList;
      'ambassador.streaam': AmbassadorStreaam;
      'ambassador.stream-list': AmbassadorStreamList;
      'ambassador.what-become': AmbassadorWhatBecome;
      'ambassador.what-become-list': AmbassadorWhatBecomeList;
      'ambassador.what-do': AmbassadorWhatDo;
      'ambassador.what-do-list': AmbassadorWhatDoList;
      'ambassador.what-get': AmbassadorWhatGet;
      'ambassador.what-get-list': AmbassadorWhatGetList;
      'become-streamer.become-streamer': BecomeStreamerBecomeStreamer;
      'country.gallery': CountryGallery;
      'faq.faq': FaqFaq;
      'general.socials': GeneralSocials;
      'general.socials-links': GeneralSocialsLinks;
      'general.text-component': GeneralTextComponent;
      'general.timezone-detail': GeneralTimezoneDetail;
      'hero.hero-infographik': HeroHeroInfographik;
      'profile.banner': ProfileBanner;
      'profile.slider': ProfileSlider;
      'profile.video': ProfileVideo;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
