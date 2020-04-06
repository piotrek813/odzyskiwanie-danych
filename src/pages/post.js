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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ante
      vitae ante condimentum auctor consequat eu mauris. Proin ultricies
      eleifend massa, at finibus est iaculis in. Maecenas at bibendum lorem,
      malesuada hendrerit sapien. In condimentum libero lorem, vitae auctor leo
      fringilla a. Praesent pharetra risus sed leo tincidunt, id sollicitudin
      massa faucibus. Donec bibendum dolor enim, in condimentum ante ornare
      vitae. Nam aliquet vehicula semper. Cras at arcu elementum tortor
      facilisis tincidunt quis ut diam. Donec malesuada ligula a ligula
      pharetra, at condimentum diam pulvinar. Morbi sed metus sed ligula blandit
      condimentum. Aliquam erat volutpat. Mauris iaculis aliquet diam id
      molestie. Pellentesque pharetra lectus quis leo hendrerit, at feugiat
      tellus condimentum. Curabitur posuere sit amet arcu nec feugiat. Sed et
      nisi a orci rhoncus feugiat id id erat. Pellentesque at sapien posuere
      lacus viverra tempor.
    </p>
    <p>
      Donec eget est ac nibh sodales accumsan eget et lorem. Praesent sed dolor
      leo. Sed eu aliquet eros. Aenean posuere justo vel ex ultricies mattis.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis
      vel tortor et lobortis. Ut et lacus mattis, ornare risus a, euismod nunc.
      Integer dignissim nulla eu ornare dignissim. Vestibulum viverra, nisi eu
      pretium vehicula, enim erat laoreet lectus, nec laoreet ante nisi sed
      libero. Cras viverra vestibulum ex. Sed sed euismod dui. In mollis risus
      diam, ut consequat felis fringilla eget. Morbi malesuada blandit dui quis
      varius. Donec malesuada quam vitae porttitor ultricies. Nam finibus tempus
      quam a porttitor.
    </p>
    <p>
      Fusce nec lectus purus. Cras eleifend purus ac felis vulputate dignissim.
      Pellentesque nibh nisi, vestibulum ac gravida sit amet, dictum at lorem.
      Ut placerat, nunc volutpat faucibus rutrum, metus sapien varius nibh, eu
      pulvinar libero ipsum id ex. Sed sit amet lectus sodales, interdum felis
      vel, auctor erat. Suspendisse in velit semper, fringilla nunc vulputate,
      vehicula velit. Integer ante velit, cursus et gravida ac, semper a eros.
      Ut interdum lacus non metus lobortis lacinia. Proin quis eleifend turpis.
      Nunc non risus suscipit, viverra tortor ac, ullamcorper massa. Suspendisse
      ut metus quis turpis aliquet suscipit. Fusce auctor eros at metus
      elementum viverra. Nullam vitae porttitor libero, sit amet vehicula nisi.
      Maecenas cursus odio quis dignissim commodo.
    </p>
    <p>
      In condimentum consectetur eros, ac eleifend justo vestibulum nec. Morbi
      aliquet varius sapien. Fusce egestas luctus mi, consequat commodo nisl
      sagittis vitae. Sed tincidunt felis non nibh euismod, eu luctus metus
      hendrerit. Vivamus arcu nisi, dictum a bibendum ut, consectetur nec erat.
      Suspendisse placerat lectus non diam tempor suscipit ut sit amet erat.
      Praesent ornare, eros ut blandit vehicula, quam orci cursus lacus, et
      fermentum quam mauris convallis turpis. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
      convallis tellus interdum nunc imperdiet, rutrum pellentesque urna
      volutpat. Sed tristique, erat non fringilla ullamcorper, orci risus
      euismod ex, at varius dui lectus quis massa. Maecenas in nisl in mauris
      semper volutpat eget suscipit eros. Fusce libero risus, tincidunt eu
      congue feugiat, mattis sit amet libero. Sed aliquet leo orci, eget posuere
      nisl euismod at. Phasellus luctus justo et malesuada tincidunt. Sed
      varius, nulla ac euismod consequat, ligula nisl pulvinar tortor, vitae
      tincidunt justo lacus rhoncus magna.
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
