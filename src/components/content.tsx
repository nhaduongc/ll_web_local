interface InternalProps {
  html: string,
  className?: string
}

export const Content = ({html, className}: InternalProps) => (
    <div className={`content ${className}`} dangerouslySetInnerHTML={{__html: html}}/>
)


