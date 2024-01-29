import React, { useState } from "react";
import Data from "./Data";

export default function Work() {
  const [count, setcount] = useState(Array(4).fill(0)); // Initialize count array

  const [cart, setcart] = useState([
    {
      phone:
        "https://images.samsung.com/pk/smartphones/galaxy-s23/images/galaxy-s23-highlights-color-back-lavender-s.jpg",
      name: "Samsung Galaxy",
      price: 30000,
    },
    {
      phone:
        "https://lh3.googleusercontent.com/RCpAMtM9AnLkN7ieohtKg8-alFDueYDu6MzF_0URz1pubadrK7jmAnKU_aBv8j5dre7m9iJ_ZgOrSlYJWWUzB7kZ1srvA2qwce4",
      name: "Google Pixel",
      price: 40000,
    },
    {
      phone:
        "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-14-Pro-Max-128GB-Deep-Purple_b46ed667-9c6b-46ae-9ba8-354c022748e8.91311ac5a801f617a7cbf901a4f4b81d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "IPhone 14 Pro",
      price: 150000,
    },
    {
      phone:
        "https://www.digitaltrends.com/wp-content/uploads/2023/07/OnePlus-12-5K1.jpg?p=1",
      name: "One Plus 12 ",
      price: 50000,
    },
  ]);

  let [expense, setexpense] = useState(0);

  function inc(itemprice, i) {
    const updatedCount = [...count];
    updatedCount[i]++;
    setcount(updatedCount);
    setexpense(expense + itemprice);
  }

  function dec(itemprice, i) {
    if (count[i] > 0) {
      const updatedCount = [...count];
      updatedCount[i]--;
      setcount(updatedCount);
      setexpense(expense - itemprice);
    }
  }

  function del(i) {
    let update = [...cart];
    update.splice(i, 1);
    setcart(update);
    setexpense(expense - cart[i].price);
  }

  function delall() {
    setcart([]);
    setexpense(0);
    setcount(Array(4).fill(0)); // Reset count array
  }

  return (
    <>
      <div className="h-[auto] w-[100%] bg-[silver]">
        <div className="h-[15vh] w-[100%] bg-[blue] flex justify-center items-center">
          <h1 className="text-[45px] font-semibold  text-[white]">
            Shopping Craft
          </h1>
        </div>

        <div className="flex justify-center  items-center ">
          <div >
            {cart.map((item, i) => (
              <Data
                key={i}
                {...item}
                ondelete={() => del(i)}
                oninc={() => inc(item.price, i)}
                ondec={() => dec(item.price, i)}
                ondelall={delall}
                count={count[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
