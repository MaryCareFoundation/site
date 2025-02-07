export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  content
}`;

export const homepageQuery = `*[_type == "homepage"][0] {
  title,
  hero {
    visible,
    heading,
    subheading,
    "imageUrl": image.asset->url
  },
  "sections": sections[] | order(order asc) {
    _key,
    visible,
    sectionType,
    title,
    description,
    "imageUrl": image.asset->url,
    order
  }
}`;

export const galleryQuery = `*[_type == "gallery"] {
  _id,
  "imageUrl": image.asset->url,
  "alt": image.alt,
  "caption": image.caption,
  category
} | order(_createdAt desc)`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "mainImageUrl": mainImage.asset->url,
  publishedAt,
  category,
  content,
  excerpt
}`; 