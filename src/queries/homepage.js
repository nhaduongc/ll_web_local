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
              id
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
              id
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
            image, {
              id
            }
          },
          ... on full_width_text {
            __typename,
            title,
            icon {
              id
            },
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
              id
            },
            text,
          }
        }
      }
    }
  }
`