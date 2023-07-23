import Image from "./Image";
import useAccountCollections from "../../hooks/get/useAccountCollections";
import { Link } from "react-router-dom";
import Loading from "../functional/Loading";
import {
	IAccountCollection,
	IAccountPublicData,
	ICollectionProps,
	ICollectionsFrame,
} from "../../interface";
import lock from "../../images/lock.png";
import lockOpen from "../../images/lock-open.png";
import pencil from "../../images/pencil.png";
import { useEffect, useState } from "react";
import EditCollection from "./EditCollection";
import CollectionsCollection from "./CollectionsCollection";
import useCountResize from "../../hooks/functions/useCountResize";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";

export default function Collections({
	toShow = -1,
	usersData,
	usersLoad = false,
  ...finalPropsSelectorFactory
}: {
	toShow?: number;
	usersData: IAccountPublicData[];
	usersLoad?: boolean;
}) {
	return (
		<>
			<Loading loading={usersLoad}></Loading>
			<div className='users' {...finalPropsSelectorFactory}>
				{usersData?.map((item, i) => {
					return (
						<Link className='users__user' key={item?.id} to={""}>
							<div className='users__about'>
								<Image
									className='users__img'
									src={item?.profile_image?.medium}
								></Image>
                <div className="users__info">
								  <div className='users__username truncate'>{item?.username}</div>
                  <div className="users__bio truncate">{item?.bio ? item?.bio : '...'}</div>
                </div>
							</div>
              <div className="users__subscribe">
                Subscribe
              </div>
						</Link>
					);
				})}
			</div>
		</>
	);
}
