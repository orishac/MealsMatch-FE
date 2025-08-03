import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "./styles.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Category {
  name: string;
  icon: string;
}

const CategoriesCarousel = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const icons = import.meta.glob<{ default: string }>(
      "../../assets/CategoriesIcons/*.svg",
      { eager: true }
    );

    const loadedCategories: Category[] = Object.entries(icons).map(
      ([path, mod]) => {
        const fileName = path
          .split("/")
          .pop()
          ?.replace(".svg", "")
          .replace(/_/g, " ") || "";

        const displayName = fileName
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return {
          name: displayName,
          icon: mod.default,
        };
      }
    );

    setCategories(loadedCategories);
  }, []);

  return (
    <div className="carouselWrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation
        className="categoriesCarousel"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="categorySlide">
              <div className="circle">
                <img src={category.icon} alt={category.name} />
              </div>
              <p className="categoryName">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesCarousel;
