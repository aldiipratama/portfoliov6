"use client"

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
  longDescription?: string // New field for more detailed description
  features?: string[] // New field for project features
}

interface ProjectDetailsModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!project) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] flex flex-col overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">{project.description}</DialogDescription>
        </DialogHeader>

        <Separator className="bg-gray-700" />

        <div className="grid gap-4 h-full">
          {project.longDescription && (
            <div>
              <h3 className="text-xl font-semibold mb-2">{"Tentang Proyek"}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>
          )}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2 mt-4">{"Fitur Utama"}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold mb-2 mt-4">{"Teknologi Digunakan"}</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          {project.githubLink && (
            <Button
              asChild
              variant="outline"
              className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:text-white"
            >
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {"GitHub"}
              </Link>
            </Button>
          )}
          {project.liveLink && (
            <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {"Live Demo"}
              </Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
