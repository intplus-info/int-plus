import { CircleDot, Boxes, GraduationCap, Users } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  icon: React.ReactNode
  title: string
  category: string
  completion: string
  description: string
}

const projects: Project[] = [
  {
    icon: <CircleDot className="w-6 h-6" />,
    title: "Healthcare Platform Enhancement",
    category: "Web Development",
    completion: "Q3 2023",
    description:
      "Our team is collaborating with a leading healthcare provider to enhance their existing platform. The project aims to bring user-centric design solutions while ensuring compliance with industry standards. Our work involves detailed study along with innovative platform level modifications to ensure the platform's capabilities and revolutionize healthcare accessibility for users.",
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: "AI-Driven Marketing Automation",
    category: "Digital Marketing",
    completion: "Q1 2024",
    description:
      "We're partnering with a dynamic marketing agency to develop an AI-driven marketing automation platform. This innovative solution will help businesses streamline their marketing efforts through intelligent automation, campaign monitoring, and automated campaign management. The project promises to revolutionize the digital marketing landscape and drive unprecedented results in marketing ROI.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educational Learning App",
    category: "E-commerce",
    completion: "Q4 2024",
    description:
      "We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will incorporate features to raise awareness about eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to developing solutions that will shape the future.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Engagement Portal",
    category: "Web Development",
    completion: "Q4 2024",
    description:
      "Our team is excited to be part of a community-driven initiative to develop an engagement portal that connects residents with local services, events, and resources. The platform will foster community interaction, enhance civic relationship, and improve the quality of life for residents. This project demonstrates our dedication to using technology for positive social impact.",
  },
]

export default function UpcomingProjects() {
  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 md:pb-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="title">
            Upcoming <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="mx-auto text-muted-foreground md:text-lg max-w-2xl xl:max-w-4xl">
            At our core, we are continuously working on exciting new ventures to push the boundaries of digital innovation and deliver exceptional solutions to our clients. While we are thrilled to share our upcoming projects with you, we understand the importance of confidentiality and safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming projects while keeping crucial details confidential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg p-6  transition-colors border
                  ${index === 1 || index === 3 ? 'bg-gradient-to-bl from-gray-800/20 via-background to-background'
                  :
                  'bg-gradient-to-br from-gray-800/20 via-background to-background'}
                 `}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-zinc-800 p-2 rounded-full">
                  {project.icon}
                </div>
                <h3 className="text-lg font-medium">{project.title}</h3>
              </div>

              <div className=" grid grid-cols-2 text-sm text-muted-foreground border border-muted-foreground/20 rounded-lg mb-4 p-2">
                <div className='p-4 border-r border-muted-foreground/20'>
                  <div className="mb-1">Category</div>
                  <div className='text-white'>{project.category}</div>
                </div>
                <div className='p-4'>
                  <div className="mb-1">
                    Expected Completion
                  </div>
                  <div className='text-white'>{project.completion}</div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground border border-muted-foreground/20 rounded-lg p-4">
                <div className="text-[0.65rem] uppercase mb-1">
                  Project Description
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

