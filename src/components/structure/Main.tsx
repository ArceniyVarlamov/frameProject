import { NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";
import download from "../../images/download.png";
import dots from "../../images/dots.png";
import { useState } from "react";
import MainFrame from "./MainFrame";

export default function Main({
	framesWidth,
	frames,
	load,
}: {
	framesWidth: number;
	frames: IData[];
	load: boolean;
}) {
	
	return (
		<>
			<div
				className='main'
				style={{
					// Отвечает за длину каждого фрейма
					gridTemplateColumns: `repeat(auto-fill, ${framesWidth}px)`,
				}}
				>
				{frames?.map((item, i) => {
					return (
						<>
							{!load && (
								<MainFrame item={item} load={load} frameWidth={framesWidth}></MainFrame>
							)}
						</>
					);
				})}
			</div>
			<Loading loading={load}></Loading>
		</>
	);
}
