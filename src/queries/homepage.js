export const Homepage = `
  query {
    homepage {
      page_builder {
        item {
          ... on hero {
            __typename
            title,
            content,
            background_image {
              id,
              title
            },
            button_type,
            buttons {
              buttons_id {
                url,
                text,
                colour
              }
            }
          },
          ... on two_column_text {
            __typename,
            title,
            icon {
              id,
              title
            },
            left_column_text,
            right_column_text,
            button_type,
            buttons {
              buttons_id {
                url,
                text,
                colour
              }
            }
          },
          ... on image {
            __typename,
            width,
            leaves_border,
            image, {
              id,
              title
            }
          },
          ... on full_width_text {
            __typename,
            title,
            icon {
              id,
              title
            },
            intro_text,
            text,
            button_type,
            buttons {
              buttons_id {
                url,
                text,
                colour
              }
            }
          },
          ... on previous_winners {
            __typename,
            title,
            icon {
              id,
              title
            },
            intro_text,
          }
        }
      }
    },
    winners {
      id,
      name,
      quote,
      image {
        id,
        title
      },
      has_button,
      button_url
    }
  }
`