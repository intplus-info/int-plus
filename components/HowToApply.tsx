'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Explore Job Listings',
    description:
      'Visit our website\'s "careers" page to explore the current job listings. Browse the roles available and select the opportunities aligning with your skills, experience, and career aspirations.',
  },
  {
    number: '02',
    title: 'Review Job Description',
    description:
      'Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.',
  },
  {
    number: '03',
    title: 'Complete the Application Form',
    description:
      'Click the "Apply Now" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.',
  },
  {
    number: '04',
    title: 'Upload Your Documents',
    description:
      'Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.',
  },
  {
    number: '05',
    title: 'Submit Your Application',
    description:
      'Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the "Submit" button to send it to our HR team.',
  },
  {
    number: '06',
    title: 'Interview Process',
    description:
      'If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.',
  },
];

export default function HowToApply() {
  return (
    <section className="bg-background text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How to <span className="text-zinc-400">Apply</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We are excited that you are interested in joining our team at Int+! To apply for any of
            our job listings, please follow the simple steps below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border rounded-xl"
            >
              <div className="grid border-b grid-cols-2">
                <span className="bg-black/40">
                  <p className=" p-6 text-xl font-semibold border-r">Step{step.number}</p>
                </span>
                <span className="bg-gradient-to-r from-[#292929]" />
              </div>

              <div className="mt-6 p-6">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="absolute inset-0 border border-zinc-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border p-12 rounded-xl">
          <div className="inline-flex items-center gap-4 text-xl font-semibold">
            <Image src="/star.svg" alt="star" width={60} height={60} />
            We value your interest in Int+
          </div>
          <p className="mt-4 text-muted-foreground max-w-5xl">
            We value your interest in Int+ and appreciate the time and effort you put into your
            application. Our team looks forward to reviewing your application and finding the best
            talent to join our vibrant and innovative team. Apply now and take the next steps
            towards an exciting and fulfilling career with Int+!
          </p>
        </div>
      </div>
    </section>
  );
}
