import concatString from 'src/utils/concat-string';
import { ARTICLE_SHORT_DESCRIPTION_LENGTH, ARTICLE_TITLE_LENGTH } from 'src/constants/blog';
import { noImage } from 'src/constants/no-image';

import { HeadProps } from '../../types/page-props/head';
import { Block } from '../../types/page-props/page';
import { DEFAULT_BACKGROUND_COLOUR, DEFAULT_TEXT_COLOUR } from '../../constants/colours';

export const PageDtoToBlocksProps = ({ Blocks: blocks }: any): Block[] =>
    blocks
        .map((block: any) => {
            switch (block.collection) {
                case 'Home_Hero':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'home-hero',
                        heading: block.item.Title,
                        text: block.item.Text,
                        appStoreButtons: block.item.App_Links.map((appLink: any) => ({
                            id: appLink.id,
                            url: appLink.Image_Link_id.URL,
                            ...(appLink.Image_Link_id.Target && {
                                target: appLink.Image_Link_id.Target,
                            }),
                            ...(appLink.Image_Link_id.Ref && { ref: appLink.Image_Link_id.Ref }),
                            ...(appLink.Image_Link_id.Image
                                ? {
                                      image: {
                                          id: appLink.Image_Link_id.Image.id,
                                          alt: appLink.Image_Link_id.Image.title,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${appLink.Image_Link_id.Image.id}`,
                                      },
                                  }
                                : { image: noImage }),
                        })),
                        ...(block.item.Background
                            ? {
                                  background: {
                                      id: block.item.Background.id,
                                      alt: block.item.Background.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`,
                                  },
                              }
                            : { background: noImage }),
                        ...(block.item.Hand
                            ? {
                                  hand: {
                                      id: block.item.Hand.id,
                                      alt: block.item.Hand.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Hand.id}`,
                                  },
                              }
                            : { hand: noImage }),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Text':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'full-width-text',
                        heading: block.item.Title,
                        text: block.item.Text,
                        titleColour: block.item.Title_Colour ?? DEFAULT_TEXT_COLOUR,
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                        backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    };
                case 'Marquee':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'marquee',
                        ...(block.item.Text
                            ? {
                                  items: block.item.Text.map((text: any, id: number) => ({
                                      id,
                                      text: text.Text_Value,
                                  })),
                              }
                            : { items: [] }),
                        reverse: block.item.Direction === 'right-to-left',
                        topColour: block.item.Top_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                        bottomColour: block.item.Bottom_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                        speed: block.item.Speed,
                    };
                case 'Winner_Story_Carousel':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'previous-winners',
                        text: block.item.Text,
                        winners: block.item.Story_Carousel.map((story: any) => ({
                            id: story.id,
                            link: {
                                id: story.id,
                                text: story.Winner_Story_id.Link.Text,
                                url: story.Winner_Story_id.Link.URL,
                                ...(story.Winner_Story_id.Link.Target && {
                                    target: story.Winner_Story_id.Link.Target,
                                }),
                                ...(story.Winner_Story_id.Link.Ref && {
                                    ref: story.Winner_Story_id.Link.Ref,
                                }),
                            },
                            ...(story.Winner_Story_id.Image
                                ? {
                                      image: {
                                          id: story.Winner_Story_id.Image.id,
                                          alt: story.Winner_Story_id.Image.title,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${story.Winner_Story_id.Image.id}`,
                                      },
                                  }
                                : { image: noImage }),
                            title: story.Winner_Story_id.Title,
                        })),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Winner_Carousel':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'spot-winners',
                        winners: block.item.Winner_Carousel.map((winner: any) => ({
                            id: winner.id,
                            ...(winner.Winner_id.Image
                                ? {
                                      image: {
                                          id: winner.Winner_id.Image.id,
                                          alt: winner.Winner_id.Image.title,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${winner.Winner_id.Image.id}`,
                                      },
                                  }
                                : { image: noImage }),
                            name: winner.Winner_id.Name,
                        })),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Screens':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'call-to-action',
                        ...(block.item.Background
                            ? {
                                  background: {
                                      id: block.item.Background.id,
                                      alt: block.item.Background.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`,
                                  },
                              }
                            : { background: noImage }),
                        topContent: block.item.Top_Text,
                        bottomContent: block.item.Bottom_Text,
                        ...(block.item.Logo
                            ? {
                                  logo: {
                                      id: block.item.Logo.id,
                                      alt: block.item.Logo.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Logo.id}`,
                                  },
                              }
                            : { logo: noImage }),
                        appStoreButtons: block.item.App_Links.map((appLink: any) => ({
                            id: appLink.id,
                            url: appLink.Image_Link_id.URL,
                            ...(appLink.Image_Link_id.Target && {
                                target: appLink.Image_Link_id.Target,
                            }),
                            ...(appLink.Image_Link_id.Ref && { ref: appLink.Image_Link_id.Ref }),
                            ...(appLink.Image_Link_id.Image
                                ? {
                                      image: {
                                          id: appLink.Image_Link_id.Image.id,
                                          alt: appLink.Image_Link_id.Image.title,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${appLink.Image_Link_id.Image.id}`,
                                      },
                                  }
                                : { image: noImage }),
                        })),
                        screens: block.item.Screen_Carousel.map((screen: any) => ({
                            id: screen.id,
                            textColour: screen.Screen_id.Text_Colour,
                            title: screen.Screen_id.Title,
                            ...(screen.Screen_id.Image
                                ? {
                                      image: {
                                          id: screen.Screen_id.Image.id,
                                          alt: screen.Screen_id.Image.title,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${screen.Screen_id.Image.id}`,
                                      },
                                  }
                                : { image: noImage }),
                        })),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Article_Carousel':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'article-slider',
                        title: block.item.Title,
                        articles: block.item.Blog_Articles.map((article: any) => ({
                            id: article.id,
                            url: `${process.env.SITE_URL}/article/${article.Blog_Article_id.Slug}`,
                            dateCreated: article.Blog_Article_id.Date,
                            ...(article.Blog_Article_id.Image
                                ? {
                                      image: {
                                          id: article.Blog_Article_id.Image.id,
                                          url: `${process.env.DIRECTUS_BASE_URL}/assets/${article.Blog_Article_id.Image.id}`,
                                          alt: article.Blog_Article_id.Image.title,
                                      },
                                  }
                                : { image: noImage }),
                            title: concatString(
                                article.Blog_Article_id.Title ?? '',
                                ARTICLE_TITLE_LENGTH
                            ),
                            shortDescription: concatString(
                                article.Blog_Article_id.Short_Description ?? '',
                                ARTICLE_SHORT_DESCRIPTION_LENGTH
                            ),
                            categories: [],
                        })),
                        ...(block.item.Background
                            ? {
                                  background: {
                                      id: block.item.Background.id,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`,
                                      alt: block.item.Background.title,
                                  },
                              }
                            : {
                                  background: noImage,
                              }),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Hero':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'hero',
                        heading: block.item.Title,
                        text: block.item.Text,
                        ...(block.item.Background
                            ? {
                                  background: {
                                      id: block.item.Background.id,
                                      alt: block.item.Background.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Background.id}`,
                                  },
                              }
                            : { background: noImage }),
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                    };
                case 'Contact':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'contact',
                        title: block.item.Title,
                        text: block.item.Text,
                        redirectsTo: block.item.Redirects_To,
                        titleColour: block.item.Title_Colour,
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                        backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    };
                case 'Image':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'image',
                        ...(block.item.Image
                            ? {
                                  image: {
                                      id: block.item.Image.id,
                                      alt: block.item.Image.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Image.id}`,
                                  },
                              }
                            : {
                                  image: noImage,
                              }),
                        width: block.item.Width,
                        backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    };
                case 'Two_Column':
                    return {
                        id: block.id,
                        hashAnchor: block.item.Has_Hash_Anchor ? block.item.Hash_Anchor : null,
                        type: 'two-column',
                        reverse: block.item.Direction === 'right-to-left',
                        ...(block.item.Image
                            ? {
                                  image: {
                                      id: block.item.Image.id,
                                      alt: block.item.Image.title,
                                      url: `${process.env.DIRECTUS_BASE_URL}/assets/${block.item.Image.id}`,
                                  },
                              }
                            : { image: noImage }),
                        heading: block.item.Title,
                        text: block.item.Text,
                        titleColour: block.item.Title_Colour ?? DEFAULT_TEXT_COLOUR,
                        textColour: block.item.Text_Colour ?? DEFAULT_TEXT_COLOUR,
                        backgroundColour: block.item.Background_Colour ?? DEFAULT_BACKGROUND_COLOUR,
                    };
                default:
                    return null;
            }
        })
        .filter((block: Block | null) => Boolean(block));

export const PageDtoToHeadProps = (data: any): HeadProps => ({
    metaTitle: data.Meta_Title,
    metaDescription: data.Meta_Description,
    canonical: `${process.env.SITE_URL}${data.Slug !== '' ? `/${data.Slug}` : ''}`,
});
