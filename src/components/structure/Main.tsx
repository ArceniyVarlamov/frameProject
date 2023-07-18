import { NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";
import download from "../../images/download.png";
import dots from "../../images/dots.png";
import { useEffect, useState } from "react";
import MainFrame from "./MainFrame";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import CollectionAdd from "./CollectionAdd";

export default function Main({
	framesWidth,
	frames,
	load,
	scrollRef,
}: {
	framesWidth: number;
	frames: IData[];
	load: boolean;
	scrollRef?: React.RefObject<HTMLDivElement>;
}) {

	const [frameId, setFrameId] = useState('');

	const [collectionAddShow, setCollectionAddShow] = useState(false)

	const { accountData } = useAccountStoreInfo()
	
	return (
		<>
			<CollectionAdd
				frameId={frameId}
				show={collectionAddShow}
				setShow={setCollectionAddShow}
				username={accountData?.username}
			></CollectionAdd>
			<div
				ref={scrollRef}
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
								<MainFrame
									item={item}
									load={load}
									frameWidth={framesWidth}
									setCollectionAddShow={setCollectionAddShow}
									setFrameId={setFrameId}
								></MainFrame>
							)}
						</>
					);
				})}
			</div>
			<Loading loading={load}></Loading>
		</>
	);
}
