export interface IData {
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
		self: string | null;
		html: string | null;
		photos: string | null;
		likes: string | null;
		portfolio: string | null;
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
	tags: { custom: string[] | []; aggregated: string[] | []};
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
