import { FooterProps } from 'src/types/page-props/footer';
import { noImage } from 'src/constants/no-image';

export const FooterDtoToProps = (data: any): FooterProps => ({
    text: data.Main_Text,
    ...(data.Left_Image && {
        leftImage: {
            id: data.Left_Image.id,
            url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Left_Image.id}`,
            alt: data.Left_Image.title,
        },
    }),
    logo: {
        id: data.Logo.id,
        url: `${process.env.DIRECTUS_BASE_URL}/assets/${data.Logo.id}`,
        alt: data.Logo.title,
    },
    images: data.Images.map((image: any) => ({
        id: image.directus_files_id.id,
        url: `${process.env.DIRECTUS_BASE_URL}/assets/${image.directus_files_id.id}`,
        alt: image.directus_files_id.title,
    })),
    links: data.Links.map((link: any) =>
        link
            ? {
                  id: link.Link_id.id,
                  url: link.Link_id.URL,
                  text: link.Link_id.Text,
              }
            : null
    ),
    socialLinks: data.Social_Links.map((socialLink: any) => ({
        id: socialLink.Image_Link_id.id,
        url: socialLink.Image_Link_id.URL,
        ...(socialLink.Image_Link_id.Ref && {
            ref: socialLink.Image_Link_id.Ref,
        }),
        ...(socialLink.Image_Link_id.Target && {
            target: socialLink.Image_Link_id.Target,
        }),
        ...(socialLink.Image_Link_id.Image
            ? {
                  image: {
                      id: socialLink.Image_Link_id.Image.id,
                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${socialLink.Image_Link_id.Image.id}`,
                      title: socialLink.Image_Link_id.Image.title,
                  },
              }
            : {
                  image: noImage,
              }),
    })),
});
