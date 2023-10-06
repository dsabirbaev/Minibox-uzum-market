
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

const Intro = () => {
    return (
        <section className="pb-[48px]">
            <div className="container">
                <Carousel
                    className="rounded-xl h-[413px]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src={slider1}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={slider2}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={slider3}
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
        </section>
    );
};

export default Intro;