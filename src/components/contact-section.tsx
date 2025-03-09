import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out to me through any of the following
                channels. I'm always open to discussing new projects,
                opportunities, or just having a chat about DevOps and cloud
                technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary" />
                <span>devops@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com/in/devops-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/devops-engineer
                </a>
              </div>
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com/devops-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/devops-engineer
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TwitterIcon className="h-5 w-5 text-primary" />
                <a
                  href="https://twitter.com/devops_engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @devops_engineer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
