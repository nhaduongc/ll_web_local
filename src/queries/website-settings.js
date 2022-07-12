export const WEBSITE_SETTINGS = `
  query {
    website_settings {
      social_icons {
        social_icons_id {
          icon,
          url,
          name
        }
      }
    }
  }
`