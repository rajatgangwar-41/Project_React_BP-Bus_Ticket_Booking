import { AppLayout } from "../layout"
import { DiscountCard } from "."
import { discountData } from "../constants"

const Discount = () => {
  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-neutral-800">
          Offers &<span className="text-primary"> Discounts Coupons</span>
        </h1>
      </div>
      {/* Discount Card */}
      <ul className="w-full grid grid-cols-3 gap-10">
        {discountData.map((discount, index) => {
          return (
            <li key={index}>
              <DiscountCard
                title={discount.title}
                discount={discount.discount}
                couponCode={discount.coupon_code}
                validity={discount.last_date}
                imgUrl={discount.img_url}
              />
            </li>
          )
        })}
      </ul>
    </AppLayout>
  )
}

export default Discount
