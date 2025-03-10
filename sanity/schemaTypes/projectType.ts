import { DocumentIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "img",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "E-commerce", value: "E-commerce" },
          { title: "Web Design & Development", value: "Web Design & Development" },
          { title: "SaaS", value: "SaaS" },
          { title: "Mobile App", value: "Mobile App" },
          { title: "Energy", value: "Energy" },
          { title: "Dashboard", value: "Dashboard" },
          { title: "Health & Fitness", value: "Health & Fitness" },
          { title: "Business", value: "Business" },
          { title: "Technology", value: "Technology" },
          { title: "Design", value: "Design" },
          { title: "Web App", value: "Web App" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeTaken",
      title: "Time Taken",
      type: "string",
      description: 'e.g., "3 Months"',
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      description: 'e.g., "January 2022"',
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "string",
      description: 'e.g., "April 2022"',
    }),
    defineField({
      name: "methods",
      title: "Methods Used",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g., "Agile Development", "User Testing"',
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g., "React", "Node.js", "MongoDB"',
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "categories.0",
      media: "img",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return { ...selection, subtitle: subtitle ? `Category: ${subtitle}` : "" }
    },
  },
})

