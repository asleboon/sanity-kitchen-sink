export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebe53efb310582a984a8530',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-taqa4jx6',
                  apiId: 'ae1890e8-8aac-43f8-8446-bf4f4d0d7533'
                },
                {
                  buildHookId: '5ebe53f0b31058e3354a8962',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-16dgb1op',
                  apiId: '24764645-e580-4ae5-969d-6d295f6e21c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/asleboon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-16dgb1op.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
