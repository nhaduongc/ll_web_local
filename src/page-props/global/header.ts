import { HeaderProps } from 'src/types/page-props/header';
import { getHeaderData } from 'src/api/header-props/requests';

export const header = async (): Promise<HeaderProps> => getHeaderData();
