export const WebsiteSettings = `
  query {
    website_settings {
      social_icons {
        social_icons_id {
          icon {
            id
          },
          url,
          name
        }
      },
      logo {
        id,
        title
      },
      header_buttons {
        buttons_id {
          url,
          text,
          colour
        }
      },
      footer_links
    }
  }
`