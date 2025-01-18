import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, Star, GitFork } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface WorkProps {
  title: string;
  description: string;
}

export default function Work({ title, description }: WorkProps) {
  return (
    <div className="p-[1px] rounded-lg bg-gradient-to-r from-purple-400/40 via-blue-500/40 to-blue-600/40">
      <Card className="p-6 bg-slate-950 rounded-lg border-0">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-slate-400">
            {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "Langchain", "MongoDB", "Supabase", "tailwind"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-800 hover:bg-slate-800/80 text-slate-400"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>0</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>0</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}


