import { Slider } from "@shared/ui/slider/slider";
import { useTranslation } from "next-i18next";
import image1 from "public/images/homepage/homepage1.jpg";
import image2 from "public/images/homepage/homepage2.jpg";
import image3 from "public/images/homepage/homepage3.jpg";
import image4 from "public/images/homepage/homepage4.jpg";
import image5 from "public/images/homepage/homepage5.jpg";
import image6 from "public/images/homepage/homepage6.jpg";
import React, { FC } from "react";

const images = [image1, image2, image3, image4, image5, image6];

export const AboutSection: FC = () => {
	const { t } = useTranslation("homepage");
	return (
		<div className="bg-tulViolet pt-20 pb-10 lg:pb-20">
			<div className="ui-container flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20">
				<div className="lg:col-span-5 lg:w-2/5">
					<h3 className="ui-typo-h3 mb-5 text-white">{t("aboutSection.title")}</h3>
					<p className="ui-typo-body tracking-wider text-white sm:text-justify">{t("aboutSection.text")}</p>
				</div>
				<div className="lg:col-span-7 lg:w-3/5">
					<Slider slides={images} />
				</div>
			</div>
		</div>
	);
};
