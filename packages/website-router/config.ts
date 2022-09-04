export type RewriteRecord = { rewrite: string; crispSegments?: string[]; sitemap?: boolean };
export type RedirectRecord = { redirect: string; status?: number };
export type WebsiteRecord = RewriteRecord | RedirectRecord;

export const jsonConfig = {
  // Change if you wish to invalidate/drop all caches for all websites
  cacheStorageId: 53,
  clientToWorkerMaxAge: 60,
  cfFetchCacheTtl: 60,
  gaTrackingId: 'G-VN2KZS6FK4',
  crispWebsiteId: 'af9adec5-ddfa-4db9-a4a3-25769daf2fc2',
  fallbackRoute: <RewriteRecord>{
    rewrite: 'guild-dev-website.pages.dev',
    crispSegments: ['guild-website'],
  },
  mappings: <Record<string, WebsiteRecord>>{
    // Rewrites
    '/graphql/codegen': {
      rewrite: 'graphql-code-generator.pages.dev',
      crispSegments: ['codegen'],
      sitemap: true,
    },
    '/graphql/yoga': {
      redirect: `https://the-guild.dev/graphql/yoga-server`,
      rewrite: 301,
    },
    '/graphql/yoga-server': {
      rewrite: `graphql-yoga.pages.dev`,
      crispSegments: ['yoga'],
    },
    // TODO: Replace with rewrite when this is ready
    '/graphql/mesh': {
      redirect: 'https://graphql-mesh.com',
      status: 302,
      // rewrite: 'graphql-mesh.com',
      // crispSegments: ['mesh'],
    },
    '/graphql/config': {
      redirect: 'https://graphql-config.com',
      status: 302,
      // rewrite: 'graphql-config.com',
      // crispSegments: ['config'],
    },
    '/graphql/envelop': {
      redirect: 'https://envelop.dev',
      status: 302,
      // rewrite: 'envelop.dev',
      // crispSegments: ['envelop'],
    },
    '/graphql/modules': {
      redirect: 'https://graphql-modules.com',
      status: 302,
      // rewrite: 'graphql-modules.com',
      // crispSegments: ['modules'],
    },
    '/graphql/scalars': {
      redirect: 'https://graphql-scalars.dev',
      status: 302,
      // rewrite: 'graphql-scalars.dev',
      // crispSegments: ['scalars'],
    },
    '/graphql/sofa-api': {
      redirect: 'https://sofa-api.com',
      status: 302,
      // rewrite: 'sofa-api.com',
      // crispSegments: ['sofa'],
    },
    '/graphql/inspector': {
      redirect: 'https://graphql-inspector.com',
      status: 302,
      // rewrite: 'graphql-inspector.com',
      // crispSegments: ['inspector'],
    },
    '/graphql/tools': {
      redirect: 'https://graphql-tools.com',
      status: 302,
      // rewrite: 'graphql-tools.com',
      // crispSegments: ['tools'],
    },
    '/graphql/apollo-angular': {
      redirect: 'https://apollo-angular.com',
      status: 302,
      // rewrite: 'apollo-angular.com',
      // crispSegments: ['apollo-angular'],
    },
    // Redirects
    '/graphql/hive': {
      redirect: 'https://graphql-hive.com',
    },
    '/graphql/eslint': {
      redirect: 'https://github.com/B2o5T/graphql-eslint',
      status: 302,
    },
    '/bob': {
      redirect: 'https://github.com/kamilkisiela/bob',
    },
    '/chat': {
      redirect: 'https://go.crisp.chat/chat/embed/?website_id=af9adec5-ddfa-4db9-a4a3-25769daf2fc2',
    },
  },
};

export type InjectedJsonConfig = typeof jsonConfig;
