import { useTranslation } from "next-i18next";
import React, { FC, ReactNode } from "react";

interface SliderButtonsWrapperProps {
	children: ReactNode;
	onClick?: () => void;
}

const SliderButtonsWrapper: FC<SliderButtonsWrapperProps> = ({ children, onClick }) => (
	<button
		className="rounded-full border-2 px-4 py-4 text-white text-opacity-60 hover:text-opacity-100"
		onClick={onClick}
	>
		{children}
	</button>
);

interface SliderButtonsProps {
	nextClick?: () => void;
	prevClick?: () => void;
}

export const SliderButtons: FC<SliderButtonsProps> = ({ nextClick, prevClick }) => {
	const { t } = useTranslation("common");

	return (
		<div className="m-auto flex space-x-8 xl:absolute xl:bottom-0 xl:-left-64">
			<SliderButtonsWrapper onClick={prevClick}>
				<span className="sr-only">{t("slider.prevButton")}</span>
				<svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h19" />
				</svg>
			</SliderButtonsWrapper>
			<SliderButtonsWrapper onClick={nextClick}>
				<span className="sr-only">{t("slider.nextButton")}</span>
				<svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				</svg>
			</SliderButtonsWrapper>
		</div>
	);
};
