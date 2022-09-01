import clsx from "clsx";
import { FC } from "react";

interface Props {
	data: string[];
	disableListStyle?: boolean;
	index: number;
	title: string;
}

export const InfoTile: FC<Props> = ({ data, disableListStyle, index, title }) => (
	<div className="flex flex-col items-start justify-start space-y-6 md:flex-row md:space-y-2 md:space-x-10">
		<span className="font-tul-mono text-h1 font-bold opacity-30">0{index}</span>
		<div>
			<h4 className="ui-typo-large mb-5">{title}</h4>
			<ul
				className={clsx(
					"ui-typo-body ml-4 space-y-2 opacity-70",
					!disableListStyle && "list-outside list-disc",
				)}
			>
				{data.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	</div>
);
