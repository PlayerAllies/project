import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Streamers() {
  const streamers = [
    { name: "Nylkam", url: "https://www.twitch.tv/nylkam", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/nylkam-profile_image-70fa267e8d8f9a0c-300x300.png" },
    { name: "Nylkam", url: "https://www.twitch.tv/nylkam", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/nylkam-profile_image-70fa267e8d8f9a0c-300x300.png" },
    { name: "Nylkam", url: "https://www.twitch.tv/nylkam", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/nylkam-profile_image-70fa267e8d8f9a0c-300x300.png" },
  ];

  return (
    <section id="streamers" className="container mx-auto py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Streamers Participantes</h2>
      <Swiper spaceBetween={20} slidesPerView={3} loop={true}>
        {streamers.map((s, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              <img src={s.avatar} alt={s.name} className="w-24 h-24 rounded-full mb-2" />
              <p className="text-center">{s.name}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
