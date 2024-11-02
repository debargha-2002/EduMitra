import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../../slices/cartSlice"
import CartCourseCard from "./CartCourseCard"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  console.log("cart",cart)
  return (
    <div className="flex flex-1 flex-col">
      {cart.map((course, i) => (
        <CartCourseCard course={course} key={i} cart={cart}/>
      ))}
    </div>
  )
}
