import { ImageLink } from '../types/image-link';

interface InternalProps {
    buttons: ImageLink[];
}

export const AppStoreButtons = ({ buttons }: InternalProps) => (
    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full justify-center items-center">
        {buttons.map((button) => (
            <a key={button.id} href={button.url} title={button.image.alt}>
                <img
                    src={button.image.url}
                    alt={button.image.alt}
                    className="h-12 w-auto transition-opacity hover:opacity-80"
                />
            </a>
        ))}
    </div>
);
