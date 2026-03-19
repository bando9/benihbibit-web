import {
  RiCustomerServiceLine,
  RiReplay30Fill,
  RiSecurePaymentLine,
  RiTruckLine,
} from "@remixicon/react"

function FeatureServices() {
  return (
    <div className="mt flex justify-evenly">
      <div className="flex items-center justify-center space-x-2">
        <RiTruckLine size={35} />
        <div>
          <h3 className="font-bold">Fast Delivery</h3>
          <p className="text-muted-foreground">Minimum order Rp. 200k</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <RiCustomerServiceLine size={35} />
        <div>
          <h3 className="font-bold">24/7 Support</h3>
          <p className="text-muted-foreground">Contact us 24 Hours</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <RiSecurePaymentLine size={35} />
        <div>
          <h3 className="font-bold">Pay Security</h3>
          <p className="text-muted-foreground">100% Secure Payment</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <RiReplay30Fill size={35} />
        <div>
          <h3 className="font-bold">Easy Returns</h3>
          <p className="text-muted-foreground">Within 30 days</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureServices
