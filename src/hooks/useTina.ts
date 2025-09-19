import { useTina } from 'tinacms/dist/react';
import { client } from '../../tina/__generated__/client';

export const useHeroContent = () => {
  const { data } = useTina({
    query: `
      query GetHero($relativePath: String!) {
        hero(relativePath: $relativePath) {
          title
          subtitle
          heroImage
          phoneNumber
          rating {
            stars
            reviewCount
          }
          keyBenefits {
            benefit
          }
          serviceAreas
        }
      }
    `,
    variables: { relativePath: 'hero.json' },
    data: {},
  });

  return data?.hero;
};

export const useContactContent = () => {
  const { data } = useTina({
    query: `
      query GetContact($relativePath: String!) {
        contact(relativePath: $relativePath) {
          phoneNumber
          email
          address {
            street
            city
            state
            zipCode
          }
          serviceAreas
        }
      }
    `,
    variables: { relativePath: 'contact.json' },
    data: {},
  });

  return data?.contact;
};

export const useServicesContent = () => {
  const { data } = useTina({
    query: `
      query GetServices {
        servicesConnection {
          edges {
            node {
              id
              title
              description
              image
              icon
            }
          }
        }
      }
    `,
    variables: {},
    data: {},
  });

  return data?.servicesConnection?.edges?.map(edge => edge.node) || [];
};

export const useTestimonialsContent = () => {
  const { data } = useTina({
    query: `
      query GetTestimonials {
        testimonialsConnection {
          edges {
            node {
              id
              name
              rating
              text
              timeAgo
              badges {
                beforeAfter
                commercial
                aboveAndBeyond
                savedMoney
              }
            }
          }
        }
      }
    `,
    variables: {},
    data: {},
  });

  return data?.testimonialsConnection?.edges?.map(edge => edge.node) || [];
};