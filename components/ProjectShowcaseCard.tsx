'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { categories, Project } from '@/lib/projectData';

export default function ProjectShowcaseCard({
  title,
  img,
  categories: projectCategories,
  description,
  timeTaken,
  startDate,
  completionDate,
  methods,
  technologies,
}: Project) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen container max-w-6xl border rounded-2xl px-4 py-4 md:p-8">
      {/* Hero Section with 3D Mockups */}
      <div className="relative h-[480px] mb-8 rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Image src={img.asset} alt="Project Preview" fill className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Project Details */}
      <Card className="bg-background border-none shadow-none p-0">
        <CardContent className="p-0">
          <div className="flex gap-4 items-center md:items-start justify-between mb-6">
            <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
            <div className="flex gap-2 items-center">
              <span className="hidden md:block">show {isExpanded ? 'less' : 'more'}</span>
              <Button
                variant="ghost"
                size="icon"
                className="bg-gradient-to-br from-white/20 via-background/80 to-background rounded-full border"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <ChevronUp
                  className={`h-4 w-4 transition-all ease-in-out duration-300 ${isExpanded ? 'rotate-180' : ''} `}
                />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {projectCategories.map((category, index) => {
              const categoryInfo = categories.find((c) => c.name === category);
              const Icon = categoryInfo ? categoryInfo.icon : null;
              return (
                <Badge
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground border border-border md:py-2 md:px-4 rounded-full bg-background"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {category}
                </Badge>
              );
            })}
          </div>

          <div className="border rounded-2xl p-4 md:p-8">
            {/* Project Description */}
            <div className="">
              <h2 className="text-lg font-medium mb-2">Project Description</h2>
              <p className="text-zinc-400">{description}</p>
            </div>
            <div
              className={`overflow-hidden transition-all ease-in-out duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              {/* Project Metadata */}
              <div className="grid md:grid-cols-4 gap-6 my-8 border rounded-2xl p-4">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Category</h3>
                  <p className="text-sm">{projectCategories[0]}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Time Taken</h3>
                  <p className="text-sm">{timeTaken}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Start Date</h3>
                  <p className="text-sm">{startDate}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Completion Date</h3>
                  <p className="text-sm">{completionDate}</p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8 border rounded-2xl gap-10 p-4 flex flex-col md:flex-row md:items-center">
                <h2 className="text-lg font-medium">Technologies Used</h2>
                <div className="flex flex-wrap gap-4">
                  {technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="w-fit py-2 px-4 border bg-gradient-to-br from-white/20 via-background/80 to-background rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methods Used */}
              <div className="border rounded-2xl p-4">
                <h2 className="text-lg font-medium mb-4">Methods Used</h2>
                <div className="flex flex-wrap gap-4 md:border rounded-2xl md:p-8">
                  {methods.map((method, index) => (
                    <div className="flex md:items-center gap-2" key={index}>
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-br from-white/20 via-background/80 to-background rounded-full px-4 py-2 border-border"
                      >
                        {method}
                      </Badge>
                      <Separator orientation="vertical" className="hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
