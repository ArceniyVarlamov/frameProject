import useAccountCurrent from "./../../hooks/get/useAccountCurrent";
import conditional from "./../../utils/functional/condition";
import { useState } from "react";
import arrow from "../../images/Arrow-down.png";
import Following from "./Following";
import Image from "./Image";
import Collections from "./Collections";
import { IAccountPublicData } from "../../interface";
import AccountInfo from "./AccountInfo";

export default function Account({
	accountData,
	className,
}: {
	accountData: IAccountPublicData | undefined;
	className?: string;
}) {

	return (
		<>
			<AccountInfo accountData={accountData} />
			<Collections username={accountData?.username} toShow={6} />
		</>
	);
}
