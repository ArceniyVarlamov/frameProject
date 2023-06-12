export interface IData {
	profile_image: any;
	id: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string | "";
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	categories: string[];
	likes: number;
	liked_by_user: boolean;
	alt_description: string;
	current_user_collections: string[];
	user: {
		id: string;
		updated_at: string;
		username: string;
		location: string | null;
		portfolio_url: string;
		bio: string;
		total_photos: number;
		total_likes: number;
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
	};
	location: {
		name: string;
		city: string;
		country: string;
	};
	views: number;
	downloads: number;
	topics: string[];
}

export interface IAccountLinks {
	followers: string | null;
	following: string | null;
	html: string | null;
	likes: string | null;
	photos: string | null;
	portfolio: string | null;
	self: string | null;
}

export interface IAccountPublicData {
	bio: string | null;
	confirmed: string | null;
	dmca_verification: string | null;
	downloads: string | null;
	email: string | null;
	first_name: string | null;
	followed_by_user: boolean;
	followers_count: number | 0;
	following_count: number | 0;
	for_hire: boolean;
	id: string | null;
	instagram_username: string | null;
	last_name: string | null;
	links: {
		followers: string | null;
		following: string | null;
		html: string | null;
		likes: string | null;
		photos: string | null;
		portfolio: string | null;
		self: string | null;
	};
	location: string | null;
	meta: { index: boolean };
	name: string | null;
	numeric_id: number | 0;
	photos: string[] | [];
	portfolio_url: string | null;
	profile_image: {
		large: string | null;
		medium: string | null;
		small: string | null;
	};
	social: {
		instagram_username: string | null;
		portfolio_url: string | null;
		twitter_username: string | null;
		paypal_email: string | null;
	};
	tags: { custom: string[] | []; aggregated: string[] | [] };
	total_collections: number | 0;
	total_likes: number | 0;
	total_photos: number | 0;
	twitter_username: string | null;
	uid: string | null;
	unlimited_uploads: boolean;
	unread_highlight_notifications: boolean;
	unread_in_app_notifications: boolean;
	updated_at: string | null;
	uploads_remaining: number | 0;
	username: string | null;
}

export interface ICollectionsFrame {
	blur_hash: string | null;
	created_at: string | null;
	id: string | null;
	updated_at: string | null;
	urls: {
		full: string | null;
		raw: string | null;
		regular: string | null;
		small: string | null;
		small_s3: string | null;
		thumb: string | null;
	};
}

export interface IAccountCollection {
	cover_photo: {
		alt_description: string | null;
		blur_hash: string | null;
		color: string | null;
		created_at: string | null;
		description: string | null;
		height: number | null;
		id: string | null;
		liked_by_user: boolean;
		likes: number | null;
		promoted_at: string | null;
		sponsorship: string | null;
		updated_at: string | null;
		urls: {
			raw: string | null;
			full: string | null;
			regular: string | null;
			small: string | null;
			thumb: string | null;
		};
		user: {
			id: string | null;
			updated_at: string | null;
			username: string | null;
			name: string | null;
			first_name: string | null;
		};
		width: number | null;
	};
	curated: boolean;
	description: string | null;
	featured: boolean;
	id: string | null;
	last_collected_at: string | null;
	links: {
		self: string | null;
		html: string | null;
		photos: string | null;
		related: string | null;
	};
	preview_photos: ICollectionsFrame[];
	private: boolean;
	published_at: string | null;
	share_key: string | null;
	tags: { type: string | null; title: string | null }[];
	title: string | null;
	total_photos: number | null;
	updated_at: string | null;
}

export interface IFirebaseUser {
	accessToken: string;
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	stsTokenManager: {
		accessToken: string;
		refreshToken: string;
	};
	uid: string;
}

export interface IUnsplashUser {
	access_token: string;
	token_type: string;
	scope: string;
	created_at: number;
	refresh_token: string;
}
