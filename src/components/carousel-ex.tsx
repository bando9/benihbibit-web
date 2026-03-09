import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"

const CardHeader = [
  {
    id: 1,
    name: "Header1",
    url: "header-5.png",
  },
  {
    id: 2,
    name: "Header2",
    url: "header-2.png",
  },
  {
    id: 3,
    name: "Header3",
    url: "header-3.png",
  },
  {
    id: 4,
    name: "Header4",
    url: "header-4.png",
  },
  {
    id: 5,
    name: "Header5",
    url: "header-5.png",
  },
]

export function CarouselEx() {
  return (
    <Carousel className="w-full max-w-48 sm:max-w-xs">
      <CarouselContent>
        {CardHeader.map((header) => (
          <CarouselItem key={header.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={`/${header.url}`} alt={header.name} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
