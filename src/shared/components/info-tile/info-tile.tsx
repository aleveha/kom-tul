import clsx from "clsx";
import Image from "next/image";
import euLogo from "public/images/eu_flag.jpg";
import { FC } from "react";

type Heading = "h3" | "h4";

interface Props {
	as?: Heading;
	data: string[];
	disableListStyle?: boolean;
	index: number;
	showEuLogo?: boolean;
	title: string;
}

export const InfoTile: FC<Props> = ({ as, data, disableListStyle, index, showEuLogo, title }) => (
	<div className="flex flex-col items-start justify-start space-y-6 md:flex-row md:space-y-2 md:space-x-10">
		<div className={clsx(showEuLogo && "flex items-center space-x-4 md:flex-col md:space-x-0")}>
			<span className="font-tul-mono text-h1 font-bold opacity-30">0{index}</span>
			{showEuLogo && (
				<div className="flex w-16 md:w-[3.75rem]">
					<Image alt="eu flag" className="rounded-lg" src={euLogo} />
				</div>
			)}
		</div>
		<div>
			{as === "h3" ? (
				<h3 className="ui-typo-large mb-5">{title}</h3>
			) : (
				<h4 className="ui-typo-large mb-5">{title}</h4>
			)}
			<ul className={clsx("ui-typo-body space-y-2 opacity-70", !disableListStyle && "list-inside list-disc")}>
				{data.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	</div>
);
