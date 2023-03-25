import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Navigation, Pagination, Scrollbar } from "swiper";
import { getJobsByName } from "../../../../JobList/Slices/JobListSlice";
import styles from "./OurFreelancersSlider.module.scss";

const categories = [
  {
    id: 1,
    slogan: "Logo Design",
    href: "https://www.fiverr.com/bruno_malagrino/create-a-logo-design-for-modern-brands?source=hplo_made_on_fiverr&pos=1",
    title: "by bruno_malagrino",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png",
  },
  {
    id: 2,
    slogan: "Packaging Design",
    href: "https://www.fiverr.com/mijalzagier/design-a-stunning-label-and-packaging?source=hplo_made_on_fiverr&pos=8",
    title: "by mijalzagier",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png",
  },
  {
    id: 3,
    slogan: "Illustration",
    href: "https://www.fiverr.com/christophbrandl/create-a-quirky-combination-of-text-and-illustration?source=hplo_made_on_fiverr&pos=11",
    title: "by christophbrandl",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png",
  },
  {
    id: 4,
    slogan: "Logo Design",
    href: "https://www.fiverr.com/eveeelin/do-a-minimalistic-wedding-logo?source=hplo_made_on_fiverr&pos=7",
    title: "eveeelin",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg",
  },
  {
    id: 5,
    slogan: "Social Media Design",
    href: "https://www.fiverr.com/fernandobengua/design-amazing-social-media-content-for-your-business?source=hplo_made_on_fiverr&pos=8",
    title: "by fernandobengua",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png",
  },
  {
    id: 6,
    slogan: "Product Photography",
    href: "https://www.fiverr.com/passionshake/shoot-inspiring-product-photography?source=hplo_made_on_fiverr&pos=4",
    title: "by passionshake",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg",
  },
  {
    id: 7,
    slogan: "Portraits & Caricatures",
    href: "https://www.fiverr.com/noneyn/create-a-portrait-for-you-stylized-or-realistic?source=hplo_made_on_fiverr&pos=3",
    title: "by noneyn",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png",
  },
  {
    id: 8,
    slogan: "Portraits & Caricatures",
    href: "https://www.fiverr.com/annapietrangeli/design-your-printable-or-electronic-book?source=hplo_made_on_fiverr&pos=10",
    title: "by annapietrangeli",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg",
  },
  {
    id: 9,
    slogan: "Animated GIFs",
    href: "https://www.fiverr.com/lamonastudio/create-a-custom-animated-gif?source=hplo_made_on_fiverr&pos=1",
    title: "by lamonastudio",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png",
  },
  {
    id: 10,
    slogan: "Web & Mobile Design",
    href: "https://www.fiverr.com/skydesigner/design-awesome-website-or-landing-page?source=hplo_made_on_fiverr&pos=6",
    title: "by skydesigner",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png",
  },
  {
    id: 11,
    slogan: "Flyer Design",
    href: "https://www.fiverr.com/spickex/design-an-amazing-flyer-or-poster-2b1fde70-8c81-43bd-b6fd-619abf0e9451?source=hplo_made_on_fiverr&pos=11",
    title: "by spickex",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg",
  },
];

export default function OurFreelancersSlider() {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        className={`${styles.mySwiper} overflow-visible`}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Scrollbar, Navigation]}
        slidesPerGroup={3}
        speed={500}
        loop={true}
      >
        {categories &&
          categories.map((item) => (
            <SwiperSlide
              style={{
                cursor: "pointer",
              }}
              key={item.id}
            >
              <div className="w-full max-w-[293px] h-[237px]">
                {/* <div className="absolute top-3 text-left left-[20px]  ">
                  <h6 className="text-white font-medium text-sm ">
                    {item.slogan}
                  </h6>
                  <h3 className="text-white text-lg ">{item.title}</h3>
                </div> */}
                <a href={item.href}><img src={item.imgUrl} alt={item.title} /></a>

                <div className="project-info bg-white">
                  {/* <a href="/fernandobengua?source=hplo_made_on_fiverr&pos=8" className="seller-image">
                    <img alt="Seller profile image" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png" loading="lazy" /></a>
                    <span className="gig-info"><b><a href="/categories/graphics-design/social-media-design?source=hplo_made_on_fiverr&pos=8">Social Media Design</a></b>
                    <a href="">by fernandobengua</a></span> */}
                    <h1>hello</h1>
                    </div>

              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
