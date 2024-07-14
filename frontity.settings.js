const settings = {
  name: 'calcasfrontend',
  state: {
    frontity: {
      url: 'https://test.frontity.org',
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development',
    },
  },
  packages: [
    {
      name: 'calcas-theme',
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'https://test.frontity.org',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
