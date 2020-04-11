const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const services = await graphql(`
    query {
      allDatoCmsService {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  services.data.allDatoCmsService.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/ServicePostTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  const posts = await graphql(`
    query {
      allDatoCmsPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  posts.data.allDatoCmsPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/PostTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
