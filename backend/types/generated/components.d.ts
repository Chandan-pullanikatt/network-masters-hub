import type { Schema, Struct } from '@strapi/strapi';

export interface CourseBatch extends Struct.ComponentSchema {
  collectionName: 'components_course_batches';
  info: {
    description: '';
    displayName: 'batch';
    icon: 'calendar';
  };
  attributes: {
    days: Schema.Attribute.String;
    mode: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Online'>;
    name: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<['Filling Fast', 'Open', 'Closed']>;
    time: Schema.Attribute.String;
  };
}

export interface CourseHero extends Struct.ComponentSchema {
  collectionName: 'components_course_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Best Seller'>;
    batches: Schema.Attribute.Component<'course.batch', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    originalPrice: Schema.Attribute.Decimal;
    startDate: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CourseRoadmapItem extends Struct.ComponentSchema {
  collectionName: 'components_course_roadmap_items';
  info: {
    description: '';
    displayName: 'roadmap-item';
    icon: 'map';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    step_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.String;
  };
}

export interface CourseSkill extends Struct.ComponentSchema {
  collectionName: 'components_course_skills';
  info: {
    description: '';
    displayName: 'skill';
    icon: 'shield';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '';
    displayName: 'faq-item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedPolicySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_policy_sections';
  info: {
    description: 'A section in a policy page with an icon, title, and content';
    displayName: 'Policy Section';
    icon: 'layout';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'file-text'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'course.batch': CourseBatch;
      'course.hero': CourseHero;
      'course.roadmap-item': CourseRoadmapItem;
      'course.skill': CourseSkill;
      'shared.faq-item': SharedFaqItem;
      'shared.policy-section': SharedPolicySection;
    }
  }
}
