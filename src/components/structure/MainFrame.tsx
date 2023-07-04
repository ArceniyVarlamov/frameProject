import { NavLink } from "react-router-dom";
import { addFramesRedirect } from "../../store/framesSlice";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { IData } from "../../interface";
import Loading from "./../functional/Loading";
import download from "../../images/download.png";
import dots from "../../images/dots.png";
import { useState } from "react";

export default function MainFrame({
	item,
	load,
}: {
	item: IData;
	load: boolean;
}) {
	const dispatch = useDispatch();
	const [frameOptions, setFrameOptions] = useState(false);
  const [frameActions, setFrameActions] = useState(false)

	return (
		<>
			<div
				className='main__frame'
				style={{
					backgroundColor: item?.color,
					// Отвечает за высоту каждого фрейма
					gridRowEnd: `span ${Math.round(
						item?.height / 100 <= 25 ? 35 : item?.height / 100,
					)}`,
				}}
				key={item?.id}
			>
				<div
        //TODO здесь проблема, решить
					onClick={() => dispatch(addFramesRedirect())}
					onMouseEnter={() => {
						setFrameOptions(true);
					}}
					onMouseLeave={() => {
						setFrameOptions(false);
					}}
					className='main__link'
				>
					<Image
						to={`/frame/${item?.id}`}
						src={item?.urls?.regular}
						className='main__img'
						style={{
							backgroundColor: item?.color,
						}}
					/>

					{(frameOptions || frameActions) && (
						<>
							<div className='main__options-save'>Save</div>
							<div className='main__options-bottom'>
								<div className='main__options-actions' onClick={() => setFrameActions(!frameActions)}>
									<img src={dots} alt='...' />
								</div>
								<div className='main__download'>
									<img src={download} alt='...' />
								</div>
							</div>
              {frameActions && (
                <div className="main__actions">
                  <div className="main__actions-title">Actions</div>
                  <div className="main__actions-hide">Hide frame</div>
                  
                </div>
                
              )}
						</>
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
