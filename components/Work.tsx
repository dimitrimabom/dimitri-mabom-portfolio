import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface WorkProps {
  title: string;
  description: string;
}

export default function Work({ title, description }: WorkProps) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-purple-400/40 via-blue-500/40 to-blue-600/40">
      <Card className="relative bg-slate-950 rounded-lg border-0 overflow-hidden h-full">
        {/* Project Image */}
        <Image
          src="/images/AltPlus-pic.png"
          alt="Project preview"
          width={800}
          height={500}
          className="w-full h-full rounded-md shadow-card dark:shadow-none dark:border-transparent aos-init aos-animate"
          priority
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex flex-col justify-end">
          <div className="p-6 space-y-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">{title}</h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Next.js", "Langchain", "MongoDB", "Supabase", "tailwind"].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-slate-700/50 hover:bg-slate-700/70 text-slate-200 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">0</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span className="text-sm">0</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="gap-1 sm:gap-2 bg-slate-800/50 hover:bg-slate-800/70 text-white border-slate-600 text-xs sm:text-sm">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  GitHub
                </Button>
                <Button size="sm" className="gap-1 sm:gap-2 bg-blue-600/80 hover:bg-blue-600 text-xs sm:text-sm">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}


