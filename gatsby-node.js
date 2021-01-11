// this exception for eslint is necessary because of htaccess file
/* eslint-disable no-useless-escape */
const path = require('path');
const fs = require('fs');

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

exports.onPostBuild = ({ store }) => {
  const { program } = store.getState();

  const htContent = `<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off [OR]
    RewriteCond %{HTTP_HOST} ^www\. [NC]
    RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
    RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]
</IfModule>
<IfModule mod_headers.c>
    <FilesMatch "\.(html|json)$">
        Header set Cache-Control "public, max-age=0, must-revalidate"
    </FilesMatch>
    <FilesMatch "\.(js|css)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    <Files sw.js>
        Header set Cache-Control "public, max-age=0, must-revalidate"
    </Files>
</IfModule>`;

  const htStaticContent = `<IfModule mod_headers.c>
  Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>`;

  fs.writeFileSync(
    `${program.directory}/public/.htaccess`,
    htContent,
    (err) => {
      if (err) throw err;
    }
  );
  fs.writeFileSync(
    `${program.directory}/public/static/.htaccess`,
    htStaticContent,
    (err) => {
      if (err) throw err;
    }
  );
};
