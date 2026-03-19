import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slideList = [
  {
    id: 1,
    name: "slide 1",
    url: "slide-1.jpg",
  },
  {
    id: 2,
    name: "slide 2",
    url: "slide-2.jpg",
  },
  {
    id: 3,
    name: "slide 3",
    url: "slide-3.jpg",
  },
  {
    id: 4,
    name: "slide 4",
    url: "slide-4.jpg",
  },
  {
    id: 5,
    name: "slide 5",
    url: "slide-5.jpg",
  },
]

export function HomeCarousel() {
  return (
    <div className="mx-auto flex justify-center">
      <Carousel
        className="w-full max-w-225 sm:max-w-125 md:max-w-175"
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
      >
        <CarouselContent className="bg-gray-500">
          {slideList.map((slide) => (
            <CarouselItem key={slide.id}>
              <img src={`/${slide.url}`} alt={slide.name} className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer opacity-30" />
        <CarouselNext className="cursor-pointer opacity-30" />
      </Carousel>
    </div>
  )
}
