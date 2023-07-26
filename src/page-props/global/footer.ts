import { FooterProps } from 'src/types/page-props/footer';
import { getFooterData } from 'src/api/footer-props/requests';

export const footer = async (): Promise<FooterProps> => getFooterData();
