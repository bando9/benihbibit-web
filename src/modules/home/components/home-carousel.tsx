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
    url: "https://27hpovti1s.ucarecd.net/e6207706-998b-4b65-9e7f-9fdc82772f21/slide1.jpg",
  },
  {
    id: 2,
    name: "slide 2",
    url: "https://27hpovti1s.ucarecd.net/cff470c4-e8e6-4a4b-bd25-1a25a8183445/slide2.jpg",
  },
  {
    id: 3,
    name: "slide 3",
    url: "https://27hpovti1s.ucarecd.net/4e57d3db-2e4e-4685-879c-c51565298011/slide3.jpg",
  },
  {
    id: 4,
    name: "slide 4",
    url: "https://27hpovti1s.ucarecd.net/fe1a63a8-fa57-43d5-89cd-398d2834c6d2/slide4.jpg",
  },
  {
    id: 5,
    name: "slide 5",
    url: "https://27hpovti1s.ucarecd.net/2e143921-77bd-44a8-8840-cf4cfd1a5657/slide5.jpg",
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
              <img src={`${slide.url}`} alt={slide.name} className="w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer opacity-30" />
        <CarouselNext className="cursor-pointer opacity-30" />
      </Carousel>
    </div>
  )
}
