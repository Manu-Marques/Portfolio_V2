import "./styles.css"
import recommandation from "../../../src/assets/recommandation1.png";
import recommandation2 from "../../../src/assets/recommandation2.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';


export default function Recommandations() {
    return (
        <div className="recommandations">
            <div className="recommandations-titles">
                <h1 className="recommandations-title">Recommandations</h1>
            </div>
            <Swiper
                className="recommandations-swiper"
                modules={[Zoom, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div className="recommandations-container">
                    <SwiperSlide>
                        <div className="recommandations-image">
                            <img className="recommandations-img" src={recommandation} alt="recommandation"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="recommandations-image">
                            <img className="recommandations-img" src={recommandation2} alt="recommandation"></img>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
    )
}