import { HeaderProps } from '../../types/page-props/header';
import { noImage } from '../../constants/no-image';

export const HeaderDtoToProps = (data: any): HeaderProps => ({
    logo: data.Logo
        ? {
              id: data.Logo.id,
              url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Logo.id}`,
              alt: data.Logo.title,
          }
        : noImage,
    links: data.Links.map((link: any) =>
        link
            ? {
                  id: link.Link_id.id,
                  url: link.Link_id.URL,
                  text: link.Link_id.Text,
              }
            : null
    ),
});
