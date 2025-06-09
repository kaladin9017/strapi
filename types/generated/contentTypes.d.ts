import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiListeningContentListeningContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'listening_contents';
  info: {
    description: 'Listening exercises and audio content';
    displayName: 'Listening Content';
    pluralName: 'listening-contents';
    singularName: 'listening-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<
      ['STANDARD', 'REGIONAL', 'INTERNATIONAL', 'MIXED']
    > &
      Schema.Attribute.Required;
    additionalMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos',
      true
    >;
    assessmentCriteria: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<{
        comprehension: {
          criteria: {
            A1: 'Can understand familiar words and very basic phrases concerning themselves, their family and immediate concrete surroundings when people speak slowly and clearly';
            A2: 'Can understand phrases and the highest frequency vocabulary related to areas of most immediate personal relevance';
            B1: 'Can understand the main points of clear standard speech on familiar matters regularly encountered in work, school, leisure';
            B2: 'Can understand extended speech and lectures and follow even complex lines of argument provided the topic is reasonably familiar';
            C1: 'Can understand extended speech even when it is not clearly structured and when relationships are only implied';
            C2: 'Can understand any kind of spoken language, whether live or broadcast, delivered at fast native speed';
          };
          weight: 30;
        };
        detailRecognition: {
          criteria: {
            A1: 'Can recognize familiar words and very basic phrases';
            A2: 'Can catch the main point in short, clear, simple messages and announcements';
            B1: 'Can understand the main point of many radio or TV programmes on current affairs or topics of personal or professional interest';
            B2: 'Can understand most TV news and current affairs programmes';
            C1: 'Can understand a wide range of recorded and broadcast audio material';
            C2: 'Can understand with ease virtually any kind of spoken language';
          };
          weight: 25;
        };
        inference: {
          criteria: {
            A1: 'Can understand very basic instructions and directions';
            A2: 'Can understand simple directions and instructions';
            B1: 'Can understand the main points of clear standard speech on familiar matters';
            B2: 'Can understand the main ideas of propositionally and linguistically complex speech';
            C1: 'Can understand implicit meaning and recognize a wide range of idiomatic expressions';
            C2: 'Can understand with ease any kind of spoken language, including abstract, complex or specialized topics';
          };
          weight: 25;
        };
        noteTaking: {
          criteria: {
            A1: 'Can recognize numbers, prices, times and dates';
            A2: 'Can understand enough to be able to meet needs of a concrete type';
            B1: 'Can understand enough to follow extended speech on abstract and complex topics';
            B2: 'Can understand enough to follow extended speech on abstract and complex topics beyond their own field';
            C1: 'Can understand enough to follow extended speech on abstract and complex topics beyond their own field';
            C2: 'Can understand with ease any kind of spoken language, including abstract, complex or specialized topics';
          };
          weight: 20;
        };
      }>;
    audioFile: Schema.Attribute.Media<'audios'> & Schema.Attribute.Required;
    audioType: Schema.Attribute.Enumeration<
      [
        'CONVERSATION',
        'MONOLOGUE',
        'LECTURE',
        'INTERVIEW',
        'NEWS',
        'ANNOUNCEMENT',
        'INSTRUCTION',
        'PRESENTATION',
      ]
    > &
      Schema.Attribute.Required;
    cefrLevel: Schema.Attribute.Enumeration<
      ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    > &
      Schema.Attribute.Required;
    comprehensionQuestions: Schema.Attribute.JSON & Schema.Attribute.Required;
    contentType: Schema.Attribute.Enumeration<
      ['LESSON', 'PRACTICE', 'ASSESSMENT', 'REVIEW']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    culturalNotes: Schema.Attribute.RichText;
    day: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
          min: 1;
        },
        number
      >;
    duration: Schema.Attribute.Integer & Schema.Attribute.Required;
    estimatedTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    examType: Schema.Attribute.Enumeration<['CELPIP', 'TEF']> &
      Schema.Attribute.Required;
    inferenceQuestions: Schema.Attribute.JSON;
    keyVocabulary: Schema.Attribute.JSON & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['ENGLISH', 'FRENCH']> &
      Schema.Attribute.Required;
    learningObjectives: Schema.Attribute.JSON & Schema.Attribute.Required;
    learningPath: Schema.Attribute.Enumeration<
      ['THREE_MONTH', 'SIX_MONTH', 'TEN_MONTH']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::listening-content.listening-content'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    relatedContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::listening-content.listening-content'
    >;
    speakingSpeed: Schema.Attribute.Enumeration<['SLOW', 'NORMAL', 'FAST']> &
      Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    transcript: Schema.Attribute.RichText;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    week: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 40;
          min: 1;
        },
        number
      >;
  };
}

export interface ApiReadingContentReadingContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'reading_contents';
  info: {
    description: 'Reading exercises and texts';
    displayName: 'Reading Content';
    pluralName: 'reading-contents';
    singularName: 'reading-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos',
      true
    >;
    assessmentCriteria: Schema.Attribute.JSON & Schema.Attribute.Required;
    cefrLevel: Schema.Attribute.Enumeration<
      ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    > &
      Schema.Attribute.Required;
    comprehensionQuestions: Schema.Attribute.JSON & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    contentType: Schema.Attribute.Enumeration<
      ['LESSON', 'PRACTICE', 'ASSESSMENT', 'REVIEW']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    criticalThinkingQuestions: Schema.Attribute.JSON;
    culturalNotes: Schema.Attribute.RichText;
    day: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
          min: 1;
        },
        number
      >;
    estimatedTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    examType: Schema.Attribute.Enumeration<['CELPIP', 'TEF']> &
      Schema.Attribute.Required;
    grammarFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    keyVocabulary: Schema.Attribute.JSON & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['ENGLISH', 'FRENCH']> &
      Schema.Attribute.Required;
    learningObjectives: Schema.Attribute.JSON & Schema.Attribute.Required;
    learningPath: Schema.Attribute.Enumeration<
      ['THREE_MONTH', 'SIX_MONTH', 'TEN_MONTH']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::reading-content.reading-content'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    relatedContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::reading-content.reading-content'
    >;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    textLength: Schema.Attribute.Integer & Schema.Attribute.Required;
    textType: Schema.Attribute.Enumeration<
      [
        'NARRATIVE',
        'DESCRIPTIVE',
        'EXPOSITORY',
        'ARGUMENTATIVE',
        'INSTRUCTIONAL',
        'DIALOGUE',
        'NEWS',
        'ACADEMIC',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    week: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 40;
          min: 1;
        },
        number
      >;
  };
}

export interface ApiSpeakingContentSpeakingContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'speaking_contents';
  info: {
    description: 'Speaking exercises and prompts';
    displayName: 'Speaking Content';
    pluralName: 'speaking-contents';
    singularName: 'speaking-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos',
      true
    >;
    assessmentCriteria: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<{
        fluency: {
          criteria: {
            A1: 'Can manage very short, isolated, mainly pre-packaged utterances';
            A2: 'Can make themselves understood in short utterances, even though pauses, false starts and reformulation are very evident';
            B1: 'Can keep going comprehensibly, even though pausing for grammatical and lexical planning and repair is very evident';
            B2: 'Can produce stretches of language with a fairly even tempo';
            C1: 'Can express themselves fluently and spontaneously, almost effortlessly';
            C2: 'Can express themselves spontaneously at length with a natural colloquial flow';
          };
          weight: 20;
        };
        grammar: {
          criteria: {
            A1: 'Uses some simple structures correctly, but still systematically makes basic mistakes';
            A2: 'Uses some simple structures correctly, but still systematically makes basic mistakes';
            B1: 'Uses reasonably accurately a repertoire of frequently used patterns';
            B2: 'Shows a relatively high degree of grammatical control';
            C1: 'Consistently maintains a high degree of grammatical accuracy';
            C2: 'Maintains consistent grammatical control of complex language';
          };
          weight: 20;
        };
        pronunciation: {
          criteria: {
            A1: 'Pronunciation of a very limited repertoire of learned words and phrases can be understood with some effort';
            A2: 'Pronunciation is generally clear enough to be understood despite a noticeable foreign accent';
            B1: 'Pronunciation is clearly intelligible even if a foreign accent is sometimes evident';
            B2: 'Has a clear, natural pronunciation and intonation';
            C1: 'Can vary intonation and place sentence stress correctly in order to express finer shades of meaning';
            C2: 'Can vary intonation and place sentence stress correctly in order to express finer shades of meaning';
          };
          weight: 20;
        };
        taskCompletion: {
          criteria: {
            A1: 'Can interact in a simple way provided the other person talks slowly and clearly';
            A2: 'Can communicate in simple and routine tasks requiring a simple and direct exchange of information';
            B1: 'Can deal with most situations likely to arise while travelling in an area where the language is spoken';
            B2: 'Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible';
            C1: 'Can express ideas fluently and spontaneously without much obvious searching for expressions';
            C2: 'Can take part effortlessly in any conversation or discussion and have a good familiarity with idiomatic expressions';
          };
          weight: 20;
        };
        vocabulary: {
          criteria: {
            A1: 'Has a basic vocabulary repertoire of isolated words and phrases';
            A2: 'Has sufficient vocabulary for basic needs';
            B1: 'Has enough vocabulary to express themselves with some circumlocutions';
            B2: 'Has a good range of vocabulary for most topics';
            C1: 'Has a good command of a broad lexical repertoire';
            C2: 'Has a good command of idiomatic expressions and colloquialisms';
          };
          weight: 20;
        };
      }>;
    cefrLevel: Schema.Attribute.Enumeration<
      ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    > &
      Schema.Attribute.Required;
    commonMistakes: Schema.Attribute.JSON;
    contentType: Schema.Attribute.Enumeration<
      ['LESSON', 'PRACTICE', 'ASSESSMENT', 'REVIEW']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
          min: 1;
        },
        number
      >;
    estimatedTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    evaluationRubric: Schema.Attribute.JSON & Schema.Attribute.Required;
    examType: Schema.Attribute.Enumeration<['CELPIP', 'TEF']> &
      Schema.Attribute.Required;
    fluencyMarkers: Schema.Attribute.JSON & Schema.Attribute.Required;
    grammarFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    instructions: Schema.Attribute.RichText;
    interactionType: Schema.Attribute.Enumeration<
      ['INDIVIDUAL', 'PAIR', 'GROUP', 'CLASS']
    > &
      Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['ENGLISH', 'FRENCH']> &
      Schema.Attribute.Required;
    learningObjectives: Schema.Attribute.JSON & Schema.Attribute.Required;
    learningPath: Schema.Attribute.Enumeration<
      ['THREE_MONTH', 'SIX_MONTH', 'TEN_MONTH']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::speaking-content.speaking-content'
    > &
      Schema.Attribute.Private;
    modelResponse: Schema.Attribute.RichText & Schema.Attribute.Required;
    preparationTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    prompt: Schema.Attribute.RichText & Schema.Attribute.Required;
    pronunciationFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    relatedContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::speaking-content.speaking-content'
    >;
    requiredElements: Schema.Attribute.JSON & Schema.Attribute.Required;
    speakingTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    speakingType: Schema.Attribute.Enumeration<
      [
        'PRESENTATION',
        'CONVERSATION',
        'INTERVIEW',
        'DESCRIPTION',
        'OPINION',
        'STORYTELLING',
        'DEBATE',
        'ROLE_PLAY',
      ]
    > &
      Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    targetDuration: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vocabularyFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    week: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 40;
          min: 1;
        },
        number
      >;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    description: 'Tags for organizing content';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    canDoStatement: Schema.Attribute.Text & Schema.Attribute.Required;
    cefrLevel: Schema.Attribute.Enumeration<
      ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    examType: Schema.Attribute.Enumeration<['CELPIP', 'TEF']> &
      Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['ENGLISH', 'FRENCH']> &
      Schema.Attribute.Required;
    learningPath: Schema.Attribute.Enumeration<
      ['THREE_MONTH', 'SIX_MONTH', 'TEN_MONTH']
    > &
      Schema.Attribute.Required;
    listeningContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::listening-content.listening-content'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    readingContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::reading-content.reading-content'
    >;
    skillCategory: Schema.Attribute.Enumeration<
      [
        'GRAMMAR',
        'VOCABULARY',
        'PRONUNCIATION',
        'FLUENCY',
        'COMPREHENSION',
        'INTERACTION',
        'PRODUCTION',
        'STRATEGIES',
      ]
    > &
      Schema.Attribute.Required;
    speakingContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::speaking-content.speaking-content'
    >;
    topic: Schema.Attribute.Enumeration<
      [
        'PERSONAL',
        'PUBLIC',
        'OCCUPATIONAL',
        'EDUCATIONAL',
        'CULTURAL',
        'SOCIAL',
        'PROFESSIONAL',
        'ACADEMIC',
      ]
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    writingContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::writing-content.writing-content'
    >;
  };
}

export interface ApiWritingContentWritingContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'writing_contents';
  info: {
    description: 'Writing exercises and prompts';
    displayName: 'Writing Content';
    pluralName: 'writing-contents';
    singularName: 'writing-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    additionalMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos',
      true
    >;
    assessmentCriteria: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<{
        coherence: {
          criteria: {
            A1: 'Can link words or groups of words with very basic linear connectors';
            A2: 'Can link a series of shorter, discrete simple elements into a connected, linear sequence';
            B1: 'Can link a series of shorter, discrete elements into a connected, linear sequence';
            B2: 'Can use a limited number of cohesive devices to link sentences';
            C1: 'Can use a variety of linking words efficiently';
            C2: 'Can create coherent and cohesive text making full and appropriate use of a variety of organizational patterns';
          };
          weight: 25;
        };
        grammar: {
          criteria: {
            A1: 'Uses basic sentence patterns with memorized phrases';
            A2: 'Uses some simple structures correctly, but still systematically makes basic mistakes';
            B1: 'Uses reasonably accurately a repertoire of frequently used patterns';
            B2: 'Shows a relatively high degree of grammatical control';
            C1: 'Consistently maintains a high degree of grammatical accuracy';
            C2: 'Maintains consistent grammatical control of complex language';
          };
          weight: 25;
        };
        taskCompletion: {
          criteria: {
            A1: 'Can write simple isolated phrases and sentences';
            A2: 'Can write a series of simple phrases and sentences linked with simple connectors';
            B1: 'Can write straightforward connected text on topics which are familiar or of personal interest';
            B2: 'Can write clear, detailed text on a wide range of subjects';
            C1: 'Can write clear, well-structured text on complex subjects';
            C2: 'Can write clear, smoothly flowing text in an appropriate style';
          };
          weight: 25;
        };
        vocabulary: {
          criteria: {
            A1: 'Has a basic vocabulary repertoire of isolated words and phrases';
            A2: 'Has sufficient vocabulary for basic needs';
            B1: 'Has enough vocabulary to express themselves with some circumlocutions';
            B2: 'Has a good range of vocabulary for most topics';
            C1: 'Has a good command of a broad lexical repertoire';
            C2: 'Has a good command of idiomatic expressions and colloquialisms';
          };
          weight: 25;
        };
      }>;
    cefrLevel: Schema.Attribute.Enumeration<
      ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    > &
      Schema.Attribute.Required;
    commonMistakes: Schema.Attribute.JSON;
    contentType: Schema.Attribute.Enumeration<
      ['LESSON', 'PRACTICE', 'ASSESSMENT', 'REVIEW']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
          min: 1;
        },
        number
      >;
    estimatedTime: Schema.Attribute.Integer & Schema.Attribute.Required;
    examType: Schema.Attribute.Enumeration<['CELPIP', 'TEF']> &
      Schema.Attribute.Required;
    grammarFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    language: Schema.Attribute.Enumeration<['ENGLISH', 'FRENCH']> &
      Schema.Attribute.Required;
    learningObjectives: Schema.Attribute.JSON & Schema.Attribute.Required;
    learningPath: Schema.Attribute.Enumeration<
      ['THREE_MONTH', 'SIX_MONTH', 'TEN_MONTH']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::writing-content.writing-content'
    > &
      Schema.Attribute.Private;
    modelAnswer: Schema.Attribute.RichText & Schema.Attribute.Required;
    prompt: Schema.Attribute.RichText & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    relatedContent: Schema.Attribute.Relation<
      'manyToMany',
      'api::writing-content.writing-content'
    >;
    requiredElements: Schema.Attribute.JSON & Schema.Attribute.Required;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    targetLength: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vocabularyFocus: Schema.Attribute.JSON & Schema.Attribute.Required;
    week: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 40;
          min: 1;
        },
        number
      >;
    writingType: Schema.Attribute.Enumeration<
      [
        'EMAIL',
        'LETTER',
        'ESSAY',
        'REPORT',
        'STORY',
        'DESCRIPTION',
        'OPINION',
        'FORMAL',
        'INFORMAL',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::listening-content.listening-content': ApiListeningContentListeningContent;
      'api::reading-content.reading-content': ApiReadingContentReadingContent;
      'api::speaking-content.speaking-content': ApiSpeakingContentSpeakingContent;
      'api::tag.tag': ApiTagTag;
      'api::writing-content.writing-content': ApiWritingContentWritingContent;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
