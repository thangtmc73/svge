import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"

export default function NewButton() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [url, setURL] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setURL("");
    setContent("");
  }, [popupOpen]);

  return (
    <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
      <DialogTrigger asChild>
        <Button>New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New SVG</DialogTitle>
          <DialogDescription>
            Load content from the public URL or copy-paste the file content.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="url" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="url">Load from URL</TabsTrigger>
            <TabsTrigger value="content">Paste the content</TabsTrigger>
          </TabsList>
          <TabsContent value="url">
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input
                  id="link"
                  placeholder="https://"
                  value={url}
                  onChange={(e) => {
                    setURL(e.target.value)
                  }}
                />
              </div>
              <Button type="submit" size="sm" className="px-3" disabled={!url}>
                Load from URL
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="content">
            <div className="flex flex-col items-end">
              <Textarea
                className="w-full"
                placeholder="<svg><-- content --></svg>"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value)
                }}
              />
              <Button type="submit" size="sm" className="mt-3" disabled={!content}>
                Submit
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
