interface InternalProps {
    html: string;
    className?: string;
}

export const FeatureContent = ({ html, className }: InternalProps) => (
    <div className={`feature-content ${className}`} dangerouslySetInnerHTML={{ __html: html }} />
);
