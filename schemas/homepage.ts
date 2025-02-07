// export const homepage = {
//   name: 'homepage',
//   title: 'Homepage',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Site Title',
//       type: 'string',
//     },
//     {
//       name: 'hero',
//       title: 'Hero Section',
//       type: 'object',
//       fields: [
//         {
//           name: 'visible',
//           title: 'Show Hero Section',
//           type: 'boolean',
//           initialValue: true,
//         },
//         {
//           name: 'heading',
//           title: 'Heading',
//           type: 'string',
//         },
//         {
//           name: 'subheading',
//           title: 'Subheading',
//           type: 'text',
//         },
//         {
//           name: 'image',
//           title: 'Hero Image',
//           type: 'image',
//           options: { hotspot: true },
//         },
//       ],
//     },
//     {
//       name: 'sections',
//       title: 'Page Sections',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'visible',
//               title: 'Show Section',
//               type: 'boolean',
//               initialValue: true,
//             },
//             {
//               name: 'sectionType',
//               title: 'Section Type',
//               type: 'string',
//               options: {
//                 list: [
//                   { title: 'Vision & Mission', value: 'vision' },
//                   { title: 'Programs', value: 'programs' },
//                   { title: 'Beneficiaries', value: 'beneficiaries' },
//                   { title: 'Testimonials', value: 'testimonials' },
//                   { title: 'Custom', value: 'custom' },
//                 ],
//               },
//             },
//             {
//               name: 'title',
//               title: 'Title',
//               type: 'string',
//             },
//             {
//               name: 'description',
//               title: 'Description',
//               type: 'array',
//               of: [{ type: 'block' }],
//             },
//             {
//               name: 'image',
//               title: 'Section Image',
//               type: 'image',
//               options: { hotspot: true },
//             },
//             {
//               name: 'order',
//               title: 'Display Order',
//               type: 'number',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "heroSlider",
      title: "Hero Slider",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(3)
          .error("You must upload exactly 3 images for the Hero Slider."),
    },
    {
      name: "beneficiaries",
      title: "Beneficiaries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "A short title for the beneficiary category.",
              validation: (Rule: any) =>
                Rule.required()
                  .min(3)
                  .max(50)
                  .error("A title of 3–50 characters is required."),
            },
            {
              name: "imageUrl",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule: any) =>
                Rule.required().error(
                  "An image for the beneficiary is required."
                ),
            },
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(3)
          .error(
            "You must provide exactly 3 items for the Beneficiaries section."
          ),
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "text",
              title: "Testimonial Text",
              type: "text",
              validation: (Rule: any) =>
                Rule.required().error("Testimonial text is required."),
            },
            {
              name: "person",
              title: "Person",
              type: "string",
              validation: (Rule: any) =>
                Rule.required().error("The name of the person is required."),
            },
          ],
          preview: {
            select: {
              title: "person",
              subtitle: "text",
              media: "image",
            },
          },
        },
      ],
    },
  ],
};
