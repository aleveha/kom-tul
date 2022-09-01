import { SliderButtons } from "@shared/ui/slider/buttons";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import React, { FC, useCallback } from "react";

interface Props {
	slides: StaticImageData[];
}

export const Slider: FC<Props> = ({ slides }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

	return (
		<div className="flex flex-col space-y-10 xl:relative">
			<div className="overflow-hidden rounded-3xl" ref={emblaRef}>
				<div className="flex">
					{slides.map(image => (
						<div className="flex flex-0-0-100" key={image.src}>
							<Image alt="" src={image} />
						</div>
					))}
				</div>
			</div>
			<SliderButtons nextClick={scrollNext} prevClick={scrollPrev} />
		</div>
	);
};
