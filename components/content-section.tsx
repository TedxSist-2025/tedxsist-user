interface ContentSectionProps {
  title: string
  content: string
}

export default function ContentSection({ title, content }: ContentSectionProps) {
  return (
    <section id={title} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground">{content}</p>
    </section>
  )
}

