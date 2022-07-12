export const WebsiteSettings = `
  query WebsiteSettings {
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