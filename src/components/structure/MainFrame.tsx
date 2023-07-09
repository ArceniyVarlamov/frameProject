import { NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";
import download from "../../images/download.png";
import dots from "../../images/dots.png";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

export default function MainFrame({
	item,
	load,
	frameWidth,
}: {
	item: IData;
	load: boolean;
	frameWidth: number;
}) {
	const dispatch = useDispatch();
	// Переменная появления опций на фрейме при наведении
	const [frameOptions, setFrameOptions] = useState(false);
	// Переменная событий фрейма
	const [frameActions, setFrameActions] = useState(false);
	// Переменная хеша (сужения качества) картинки
	const [frameHash, setFrameHash] = useState(false);

	const frameHeight = Math.round(
		item?.height / 100 <= 25 ? 35 : item?.height / 100,
	);

	return (
		<>
			<div
				className='main__frame'
				style={{
					backgroundColor: item?.color,
					// Отвечает за высоту каждого фрейма
					gridRowEnd: `span ${frameHeight}`,
				}}
				key={item?.id}
			>
				<div
					onMouseEnter={() => {
						setFrameOptions(true);
					}}
					onMouseLeave={() => {
						setFrameOptions(false);
					}}
					className='main__link'
				>
					{!frameHash && (
						<Image
							to={`/frame/${item?.id}`}
							src={item?.urls?.regular}
							className='main__img'
							onClick={() =>
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								})
							}
							style={{
								backgroundColor: item?.color,
							}}
						/>
					)}
					{frameHash && (
						<Blurhash
							className='main__img'
							style={{
								height: "100%",
								width: "100%",
								borderRadius: "var(--main-frames-border-radius)",
							}}
							hash={item?.blur_hash}
							resolutionX={32}
							resolutionY={32}
							punch={1}
						/>
					)}
					{(frameOptions || frameActions) && !frameHash && (
						<>
							<div className='main__options-save truncate'>Save</div>
							<div
								className='main__options-bottom'
								style={{
									margin: !frameActions
										? "10px 0"
										: "calc(var(--frame-options-bottom-height) + var(--frame-options-margin)) 0 var(--frame-options-margin) 0",
								}}
							>
								<div
									className='main__options-actions'
									onClick={() => setFrameActions(!frameActions)}
								>
									<Image src={dots} />
									{frameActions && (
										<div className='main__actions'>
											<div className='main__actions-title'>Actions</div>
											<div
												className='main__actions-hide'
												onClick={() => {
													setFrameActions(false);
													setFrameHash(!frameHash);
												}}
											>
												Hide frame
											</div>
										</div>
									)}
								</div>
								<div className='main__options-download'>
									<Image src={download} to={item?.links?.download} />
								</div>
							</div>
						</>
					)}
					{frameHash && (
						<div className='main__hash'>
							<div className='main__hash-text'>
								It's clear! You will no longer see this Frame.
							</div>
							<div
								className='main__hash-cancel'
								onClick={() => setFrameHash(false)}
							>
								Cancel
							</div>
						</div>
					)}
				</div>
				<NavLink
					className='main__author'
					to={`/account/${item?.user?.username}`}
				>
					<p className='main__author-username'>{item?.user?.username}</p>
					<Image
						src={item?.user?.profile_image?.medium}
						className='main__author-img'
					/>
				</NavLink>
			</div>
			<Loading loading={load}></Loading>
		</>
	);
}
