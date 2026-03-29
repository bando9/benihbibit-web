import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Outlet } from "react-router"

const slideList = [
  {
    id: 1,
    name: "slide 1",
    url: "https://27hpovti1s.ucarecd.net/67925315-8bd7-40ec-981f-4f82718a44ec/mimipicphotographyXmR3y0bp3Kwunsplash1.jpg",
  },
  {
    id: 2,
    name: "slide 2",
    url: "https://27hpovti1s.ucarecd.net/be09dafb-e845-4d12-8ea5-f9e14144b795/-/preview/667x1000/",
  },
  {
    id: 3,
    name: "slide 3",
    url: "https://27hpovti1s.ucarecd.net/428b882e-6640-4433-9830-3ca20aedc291/-/preview/666x1000/",
  },
  {
    id: 4,
    name: "slide 4",
    url: "https://27hpovti1s.ucarecd.net/d9d0ab7d-d30a-4917-a315-d5c69e05a980/-/preview/684x1000/",
  },
  {
    id: 4,
    name: "slide 4",
    url: "https://27hpovti1s.ucarecd.net/5f972d40-f420-40e6-a174-96ea711002ef/-/preview/666x1000/",
  },
]

function AuthLayout() {
  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden px-30 pt-5 text-center">
      <Outlet />
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
          // fade: true,
        }}
      >
        <CarouselContent className="h-130 w-full rounded-xl object-cover">
          {slideList.map((slide) => (
            <CarouselItem key={slide.id}>
              <img
                src={`${slide.url}`}
                alt={slide.name}
                className="h-130 w-full rounded-xl object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default AuthLayout
