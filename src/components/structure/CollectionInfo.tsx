import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import conditional from "../../utils/functional/condition";
import { useEffect, useRef, useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import useAccountCollection from "../../hooks/get/useAccontCollection";
import { IAccountCollection, IData } from "../../interface";
import { Link } from "react-router-dom";
import useAccountCollectionPhotoes from "../../hooks/get/useAccountCollectionPhotoes";
import arrowDown from "../../images/Arrow-down.png";
import options from "../../images/options.png";
import { useDispatch } from "react-redux";
import { setFramesCollectionsWidth } from "../../store/variablesSlice";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";
import Loading from "../functional/Loading";

export default function CollectionInfo({
	id,
	...props
}: {
	id: string | null | undefined;
}) {
	const { dataCollection, load } = useAccountCollection(id);

	const { framesCollectionsWidth } = useVariablesStoreInfo();

	const [thinks, setThinks] = useState(false);
	const [description, setDescription] = useState(false);
	const [actions, setActions] = useState(false);
	const [framesWidth, setFramesWidth] = useState(framesCollectionsWidth);

	const RangeRef = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	const onChangeRange = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(setFramesCollectionsWidth(RangeRef?.current?.value));
		setFramesWidth(+e.currentTarget.value);
	};

	return (
		<>
			<Loading loading={load}></Loading>
			<div className='collection'>
				<div className='collection__account'>
					<Image
						className='collection__account-image'
						to={`/account/${dataCollection?.user?.username}`}
						src={dataCollection?.user?.profile_image?.medium}
					></Image>
					<div className='collection__by'>
						Collection by {dataCollection?.user?.username}
					</div>
				</div>
				<div className='collection__about'>
					<div className='collection__name'>{dataCollection?.title}</div>
					<div className='collection__thinks'>
						<svg
							style={{
								backgroundColor: thinks ? "var(--black-08-opacity-color)" : "",
								fill: thinks ? "var(--white-color)" : "",
							}}
							onClick={() => setThinks(!thinks)}
							className='collection__arrow-down'
							height='16'
							width='16'
							viewBox='0 0 24 24'
							aria-hidden='true'
							aria-label=''
							role='img'
						>
							<path d='M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'></path>
						</svg>
						{thinks && (
							<div className='collection__open'>
								<div className='collection__action'>Actions</div>
								<div className='collection__share'>Share</div>
							</div>
						)}
					</div>
				</div>
				{dataCollection?.description && <div className='collection__description'>
					{conditional({
						src: dataCollection?.description,
						slice: description ? undefined : 100,
					})}
					<img
						style={{ transform: description ? "rotate(90deg)" : "" }}
						className='collection__description-arrow'
						onClick={() => setDescription(!description)}
						src={arrowDown}
						alt='>'
					/>
				</div>}
				<div className='collection__info'>
					<div className='collection__photos'>
						{dataCollection?.total_photos} frames
					</div>
					<div className='collection__actions'>
						<img
							className='collection__toggle-img'
							style={{ transform: actions ? "rotate(90deg)" : "" }}
							onClick={() => setActions(!actions)}
							src={options}
							alt='+'
						/>
						<div
							className='collection__settings'
							style={{ display: actions ? "" : "none" }}
						>
							<p className='collection__settings-main-text'>Settings</p>
							<p className='collection__settings-pre-text'>Frames width</p>
							<div className='collection__range'>
								<input
									onChange={onChangeRange}
									list='values'
									ref={RangeRef}
									min={200}
									max={400}
									defaultValue={framesCollectionsWidth}
									step={10}
									type='range'
									className='collection__range-input'
								></input>
								<div className='collection__range-value'>{framesWidth}px</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
