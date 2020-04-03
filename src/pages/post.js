import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PostTemplate from 'templates/PostTemplate';

const PostPage = ({ data }) => (
  <PostTemplate
    date="2020-12-21"
    data={data}
    heading="Odzyskiwanie danych z dysku SSD"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
      libero sed odio lobortis, eget laoreet risus egestas. Aliquam non diam sit
      amet nunc porttitor porttitor. Pellentesque turpis odio, feugiat quis
      sapien et, aliquam suscipit lacus. Mauris massa erat, facilisis eget
      maximus non, blandit eget eros. Praesent eget viverra risus, non pretium
      arcu. Nullam condimentum nulla enim, varius tempor lorem dictum in.
      Praesent tincidunt enim quis elit facilisis mattis. Nullam vitae magna
      diam. Aliquam tempus aliquam nibh a dictum. Donec sit amet mi lacus.
      Aliquam fringilla arcu non nulla gravida vestibulum. Cras non sem sed sem
      dictum fermentum quis eget dolor. Maecenas id iaculis odio, eu fringilla
      lacus. Etiam condimentum venenatis enim eget ultrices. Nulla ac elit quis
      nisi egestas efficitur. Pellentesque dictum arcu eget quam placerat,
      pharetra mollis est luctus. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nam laoreet accumsan elit sed rutrum. Aenean sagittis
      sollicitudin eros, vel pulvinar ex rhoncus sed. Morbi condimentum faucibus
      justo at dictum. Aliquam laoreet vel ante quis consectetur. Duis nulla
      libero, volutpat sit amet orci at, varius aliquam orci. Morbi posuere
      libero nibh, nec lobortis dui efficitur a. Maecenas tincidunt, sapien sed
      pretium sollicitudin, orci risus ornare justo, sed fringilla nisi nisl et
      magna. Etiam lorem velit, finibus vitae condimentum sed, vehicula at sem.
      Nam sed ex erat. Morbi pulvinar metus sit amet felis ornare lobortis.
      Donec a posuere diam. Praesent enim arcu, mattis nec mi ut, volutpat
      consectetur ligula. Nulla fringilla dui vulputate, sollicitudin nulla
      vitae, sodales lorem. Vivamus rhoncus a turpis non auctor. Phasellus
      dictum sem ex, ut accumsan neque vestibulum non. Mauris malesuada nunc
      scelerisque suscipit ultricies. Mauris id volutpat mauris, sit amet
      lobortis turpis. Etiam sed erat facilisis, placerat mi sit amet, maximus
      tellus. Aenean dapibus justo et dui sollicitudin pharetra. Vivamus pretium
      molestie velit, id blandit ligula posuere sit amet. Nulla sodales viverra
      sapien, nec tincidunt lectus euismod sit amet. Etiam mattis tempus enim in
      sollicitudin. Maecenas sollicitudin pulvinar blandit. Sed malesuada tortor
      at nisl semper elementum. Sed faucibus commodo egestas. Aliquam id
      suscipit metus. Etiam tincidunt mollis consectetur. Etiam molestie dui
      quis pretium malesuada. Maecenas pulvinar felis facilisis, lobortis mauris
      sit amet, ultrices risus. Etiam porta, tellus eget efficitur condimentum,
      orci mauris sodales tellus, sit amet molestie nulla magna ut nisi.
      Praesent non fermentum lorem, vel pulvinar purus. Nullam auctor iaculis
      tellus, quis bibendum sapien posuere sit amet. Quisque in nunc at elit
      rutrum condimentum in id nunc. Fusce est lacus, dignissim in pharetra eu,
      ultricies nec odio.
    </p>
  </PostTemplate>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "post.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 50) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

PostPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PostPage;
