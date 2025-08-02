"use client"

import * as React from "react"
import Link from "next/link"
import { Github, ExternalLink, Code, Info } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProjectDetailsModal from "../ui/custom/project-detail-modal"
import { Project } from "@/types/project"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export default function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = React.useState<string>("All")

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(projects.map((project) => project.category).sort())
    return ["All", ...Array.from(uniqueCategories)]
  }, [])

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") {
      return projects
    }
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="projects"
      className={cn("w-full flex sm:items-center justify-center relative isolate",
        'before:absolute before:inset-0 before:bg-radial before:from-transparent before:to-background before:-z-[1] max-sm:pt-20'
      )}
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-12">
        {/* Left Column: Title, Description, Filters */}
        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
          <div className="space-y-4 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Project</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed bg-background">
              Explore some of my recent projects that showcase my expertise in software development and innovative technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Right Column: Project Cards Carousel */}
        <div className="flex-1 lg:w-1/2 w-full relative flex flex-col gap-2">
          <p className="sm:hidden text-muted-foreground bg-background max-w-max mx-auto">swipe left/right to view other projects</p>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="p-1">
                    <Card className="flex flex-col border hover:border-primary transition-all duration-300 ease-in-out h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                          <Code className="w-6 h-6" />
                        </div>
                        <CardDescription className="text-muted-foreground mt-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.githubLink && (
                            <Button
                              asChild
                              className="flex-1 min-w-[100px] bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:text-white"
                            >
                              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                {"GitHub"}
                              </Link>
                            </Button>
                          )}
                          {project.liveLink && (
                            <Button
                              asChild
                              className="flex-1 min-w-[100px]"
                            >
                              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                {"Live Demo"}
                              </Link>
                            </Button>
                          )}
                          <Button
                            variant="secondary"
                            className="flex-1 min-w-[100px]"
                            onClick={() => handleViewDetails(project)}
                          >
                            <Info className="w-4 h-4 mr-2" />
                            {"Detail"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Position Carousel navigation buttons relative to the Carousel container */}
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </div>
      </div>
      <ProjectDetailsModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
