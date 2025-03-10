import { RocketIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const upcomingProjectType = defineType({
  name: "upcomingProject",
  title: "Upcoming Project",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Circle Dot", value: "CircleDot" },
          { title: "Boxes", value: "Boxes" },
          { title: "Graduation Cap", value: "GraduationCap" },
          { title: "Users", value: "Users" },
          { title: "Shopping Cart", value: "ShoppingCart" },
          { title: "Globe", value: "Globe" },
          { title: "Cloud", value: "Cloud" },
          { title: "Smartphone", value: "Smartphone" },
          { title: "Leaf", value: "Leaf" },
          { title: "Bar Chart", value: "BarChart" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "completion",
      title: "Expected Completion",
      type: "string",
      description: 'e.g., "Q3 2023", "Q1 2024"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return { ...selection, subtitle: subtitle ? `Category: ${subtitle}` : "" }
    },
  },
})

