import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const posts = [
  {
    title: 'The Importance of Prenatal Care',
    description: 'Understanding why regular checkups during pregnancy are crucial for both mother and baby.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982',
    date: 'April 12, 2024',
  },
  {
    title: 'Empowering Girls Through Education',
    description: 'How education can break the cycle of poverty and create opportunities for young girls.',
    image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f',
    date: 'April 8, 2024',
  },
  {
    title: 'Healthcare Worker Training Initiative',
    description: 'Updates on our program to enhance medical skills in local communities.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    date: 'April 1, 2024',
  },
];

export function Blog() {
  return (
    <div className="container py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Latest Updates</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Stay informed about our initiatives, success stories, and the impact we're
          making in maternal health and girls' education.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}