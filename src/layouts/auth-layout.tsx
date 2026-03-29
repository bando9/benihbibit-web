import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden px-30 pt-5 text-center">
      <Outlet />
      <img
        src="https://27hpovti1s.ucarecd.net/67925315-8bd7-40ec-981f-4f82718a44ec/mimipicphotographyXmR3y0bp3Kwunsplash1.jpg"
        alt="background"
        className="h-130 w-full rounded-xl object-cover"
      />
    </div>
  )
}

export default AuthLayout
