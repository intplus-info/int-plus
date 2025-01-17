import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowRight, Briefcase, BriefcaseBusiness, Phone, } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    icon: Briefcase,
    title: "Careers At Int+",
    description:
      "At Int+, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
    link: "/careers",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "At Int+, we value your inquiries, feedback, and collaborations. Whether you are interested in our technological services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team. Connect with us through any of the channels below, and we'll be delighted to assist you on your technological journey.",
    link: "/contact",
  },
];

const teamMembers = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Jane Doe",
    position: "Chief Executive Officer",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "John Smith",
    position: "Chief Technology Officer",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Emily Davis",
    position: "Head of Marketing",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Michael Johnson",
    position: "Lead Software Engineer",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    name: "Sophia Martinez",
    position: "Product Manager",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    name: "Emily Davis",
    position: "Head of Marketing",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    name: "Michael Johnson",
    position: "Lead Software Engineer",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    name: "Sophia Martinez",
    position: "Product Manager",
  },
];

const TeamMembers = () => {
  return (
    <section className="py-16 container">
      <motion.div
        className="mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="title mb-4">
          <span className="text-muted-foreground">Our</span>{" "}
          <span className="text-white">Team Members</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We are a passionate team of creative minds, tech enthusiasts, and
          digital strategists, dedicated to empowering businesses and
          individuals in the digital realm. With a customer-centric approach
          and a focus on innovation, we are committed to being at the forefront
          of the ever-evolving technological landscape.
        </p>
      </motion.div>

      <div className="mx-auto grid gap-4 mt-16 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4  items-start">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative h-fit sm:h-[300px] flex items-center justify-center overflow-hidden group border border-b-0 bg-gradient-to-b from-background to-background dark:from-background dark:to-background rounded-[calc(1.5rem-1px)] p-px"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full w-full bg-background rounded-[calc(1.5rem-1px)] bg-[url('/bg-small.svg')]">
              <div className=" bg-gradient-to-b from-background/10 via-background/70 to-background h-full w-full absolute top-0 left-0 z-0" />
              <div className="flex flex-col items-center justify-center space-y-4 py-10 px-14 text-center h-full relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black rounded-full animate-pulse group-hover:animate-none" />
                  <div className="relative z-10 rounded-full border border-zinc-800 p-4">
                    <Avatar>
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-[-10px] border border-zinc-800 rounded-full" />
                  <div className="absolute inset-[-18px] border border-zinc-800 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <div
                  className="border bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-full text-xs font-medium text-white px-4 py-2"
                >
                  {member.position}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>



      <div className="mt-20 text-center text-lg font-semibold">
        See These Pages
      </div>

      <div className="mx-auto grid gap-8 mt-8 xl:grid-cols-2 items-start">
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="relative h-fit sm:h-[500px] flex items-center justify-center overflow-hidden border border-b-0 bg-gradient-to-b from-background to-background dark:from-background dark:to-background rounded-[calc(1.5rem-1px)] p-px"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-background rounded-[calc(1.5rem-1px)] bg-[url('/bg-small.svg')]">
              <div className=" bg-gradient-to-b from-background/10 via-background/70 to-background h-full w-full absolute top-0 left-0 z-0" />
              <div className="flex flex-col items-center justify-center space-y-4 py-10 px-6 md:px-14 text-center h-full relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black rounded-full animate-pulse group-hover:animate-none" />
                  <div className="relative z-10 rounded-full border border-zinc-800 p-4">
                    <service.icon fill="white" stroke="black" className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute inset-0 border border-zinc-800 rounded-full animate-ping opacity-20" />
                  <div className="absolute inset-[-10px] border border-zinc-800 rounded-full" />
                  <div className="absolute inset-[-18px] border border-zinc-800 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-zinc-400">{service.description}</p>
                <Button
                  variant="outline"
                  className="h-[56px] w-[171px] group"
                >
                  <Link href={service.link} className="flex w-full items-center">
                    View page
                    <span className="ml-2 flex items-center justify-center p-4 w-[54px] h-[38px] rounded-full bg-[#1A1A1A] group-hover:translate-x-[8px] transition-all duration-300 ease-in-out">
                      <ArrowRight size={12} strokeWidth={2} />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
