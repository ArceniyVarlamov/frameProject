import { NavLink, useNavigate } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";
import download from "../../images/download.png";
import dots from "../../images/dots.png";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import CollectionAdd from "./CollectionAdd";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";

export default function MainFrame({
	item,
	load,
	frameWidth,
	setFrameId,
	setCollectionAddShow,
}: {
	item: IData;
	load: boolean;
	frameWidth: number;
	setCollectionAddShow: (value: boolean) => void;
	setFrameId?: (value: string) => void;
}) {
	const { isRegistered } = useAccountStoreInfo();

	// Переменная появления опций на фрейме при наведении
	const [frameOptions, setFrameOptions] = useState(false);
	// Переменная событий фрейма
	const [frameActions, setFrameActions] = useState(false);
	// Переменная хеша (сужения качества) картинки
	const [frameHash, setFrameHash] = useState(false);
	// Переменная отправки лайка
	const [postLike, setPostLike] = useState(item?.liked_by_user);

	const frameHeight = Math.round(
		item?.height / 100 <= 25 ? 35 : item?.height / 100,
	);

	const navigate = useNavigate();

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
							{!!!isRegistered && setFrameId && (
								<div
									className='main__options-save truncate'
									onClick={() => setCollectionAddShow(true)}
								>
									Save
								</div>
							)}
							{!!!isRegistered && (
								<svg
									className='main__options-like'
									style={{
										fill: postLike ? "var(--grey250-color)" : "var(--grey190-color)",
									}}
									onClick={() => setPostLike(!postLike)}
									viewBox='0 0 16 16'
								>
									{" "}
									<path
										fill-rule='evenodd'
										d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
									/>{" "}
								</svg>
							)}
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
								<div
									className='main__options-download'
									onClick={() => navigate(item?.links?.download)}
								>
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
