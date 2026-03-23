import {
  RiCustomerServiceLine,
  RiReplay30Fill,
  RiSecurePaymentLine,
  RiTruckLine,
} from "@remixicon/react"

const services = [
  {
    id: 1,
    title: "Fast Delivery",
    describe:
      "Free shipping on orders over Rp.200k. Seeds arrive fresh and ready to plant.",
    icon: RiTruckLine,
  },
  {
    id: 2,
    title: "24/7 Support",
    describe:
      "Expert gardening advice available 7 days a week via chat or phone",
    icon: RiCustomerServiceLine,
  },
  {
    id: 3,
    title: "Pay Security",
    describe:
      "Your transactions are protected by industry-standard encryption and secure payment gateways.",
    icon: RiSecurePaymentLine,
  },
  {
    id: 4,
    title: "Easy Returns",
    describe: "Return within 30 days for a full refund, no question asked.",
    icon: RiReplay30Fill,
  },
]

function FeatureServices() {
  return (
    <div className="mx-15">
      <div>
        <h3 className="text-sm">Why Choose Us</h3>
        <h3 className="text-2xl font-semibold">Growing Made Simple</h3>
      </div>
      <div className="grid grid-cols-1 gap-8 px-10 py-16 md:grid-cols-4">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="rounded-2xl bg-accent p-4 text-primary">
                <service.icon size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800">
                  {service.title}
                </h3>
                <p className="max-w-50 text-sm leading-relaxed text-slate-600">
                  {service.describe}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureServices
