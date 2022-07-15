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
      }
    }
  }
`