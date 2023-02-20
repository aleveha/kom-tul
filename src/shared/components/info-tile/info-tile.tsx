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
		<span className="font-tul-mono text-h1 font-bold opacity-30">0{index}</span>
		<div>
			{as === "h3" ? (
				<h3 className="ui-typo-large mb-5">{title}</h3>
			) : (
				<h4 className="ui-typo-large mb-5">{title}</h4>
			)}
			<ul
				className={clsx(
					"ui-typo-body mb-5 space-y-2 opacity-70",
					!disableListStyle ? "ml-4 list-disc" : "list-inside",
				)}
			>
				{data.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
			{showEuLogo && (
				<div className="flex items-center space-x-2">
					<div className="flex w-[4.5rem]">
						<Image alt="eu flag" className="rounded-lg" src={euLogo} />
					</div>
					<div className="w-36 text-[0.5rem]">
						<p>EVROPSKA UNIE</p>
						<p>Evropsky fond pro regionalni rozvoj</p>
						<p>Operacni program Podnikáni a&nbsp;inovace pro konkurenceschopnost</p>
					</div>
				</div>
			)}
		</div>
	</div>
);
