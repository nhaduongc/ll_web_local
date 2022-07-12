export const PAGE_BUILDER = `
  query {
    homepage {
      page_builder {
        item {
          ... on hero {
            __typename
            title,
            content,
            background_image,
            button_type: button_types,
            buttons {
              buttons_id {
                url,
                text: Text,
                colour
              }
            }
          },
          ... on two_column_text {
            __typename,
            title,
            icon,
            left_column_text,
            right_column_text,
            button_type,
            buttons {
              buttons_id {
                url,
                text: Text,
                colour
              }
            }
          },
          ... on image {
            __typename,
            width,
            image
          },
          ... on full_width_text {
            __typename,
            title,
            icon,
            text,
            button_type,
            buttons {
              buttons_id {
                url,
                text: Text,
                colour
              }
            }
          },
          ... on previous_winners {
            __typename,
            title,
            icon,
            text,
          }
        }
      }
    }
  }
`