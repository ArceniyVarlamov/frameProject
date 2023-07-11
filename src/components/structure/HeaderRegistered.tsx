import { Link, NavLink } from "react-router-dom";
import useAccountInfo from "../../utils/info/useAccountStoreInfo";
import useCheckRegister from "./../../utils/registration/useCheckRegister";
import Image from "./Image";
import { addFramesRedirect } from "../../store/framesSlice";
import { useDispatch } from "react-redux";
import useAccountCurrent from "../../hooks/get/useAccountCurrent";
import bell from "../../images/bell.png";
import mail from "../../images/mail.png";
import arrow from '../../images/Arrow-down.png'
import useAccountStoreInfo from "../../utils/info/useAccountStoreInfo";
import { useState } from "react";
import useVariablesStoreInfo from "../../utils/info/useVariablesStoreInfo";
import useSearchPhotos from "../../hooks/get/useSearchPhotos";
import { ISearchPhotos } from "../../interface";

export default function HeaderRegistered() {
	const dispatch = useDispatch();
	
	const [q, setQ] = useState('')
	const [photos, setPhotos] = useState(true)
	
	const { accountInfo } = useAccountStoreInfo()
	const { searchPerSearch } = useVariablesStoreInfo()

	// const {data: PhotosData, load: photosLoad} = useSearchPhotos(q, searchPerSearch, photos)
	const data = {
    "total": 9696,
    "total_pages": 1940,
    "results": [
        {
            "id": "4HG5hlhmZg8",
            "slug": "4HG5hlhmZg8",
            "created_at": "2017-08-28T05:45:18Z",
            "updated_at": "2023-07-11T00:02:13Z",
            "promoted_at": "2017-08-29T12:49:49Z",
            "width": 2995,
            "height": 4492,
            "color": "#0c2640",
            "blur_hash": "LJCH1x%M?ZXU4mo$t8o$Mbr=M{s8",
            "description": null,
            "alt_description": "photo of people crossing road",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1503899036084-c55cdd92da26"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/4HG5hlhmZg8",
                "html": "https://unsplash.com/photos/4HG5hlhmZg8",
                "download": "https://unsplash.com/photos/4HG5hlhmZg8/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA",
                "download_location": "https://api.unsplash.com/photos/4HG5hlhmZg8/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwxfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA"
            },
            "likes": 1988,
            "liked_by_user": false,
            "current_user_collections": [
                {
                    "id": "N8dERqiW7Sg",
                    "title": "tokyo",
                    "description": null,
                    "published_at": "2023-02-21T12:02:57Z",
                    "last_collected_at": "2023-07-09T18:40:40Z",
                    "updated_at": "2023-07-09T18:40:40Z",
                    "curated": false,
                    "featured": false,
                    "total_photos": 5,
                    "private": false,
                    "share_key": "5b8634b09cf581b7e453d9906a39a78e",
                    "tags": [
                        {
                            "type": "search",
                            "title": "tokyo"
                        },
                        {
                            "type": "landing_page",
                            "title": "wallpaper",
                            "source": {
                                "ancestry": {
                                    "type": {
                                        "slug": "wallpapers",
                                        "pretty_slug": "HD Wallpapers"
                                    }
                                },
                                "title": "Hd wallpapers",
                                "subtitle": "Download free wallpapers",
                                "description": "Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
                                "meta_title": "Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
                                "meta_description": "Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
                                "cover_photo": {
                                    "id": "VEkIsvDviSs",
                                    "slug": "VEkIsvDviSs",
                                    "created_at": "2018-10-23T05:38:21Z",
                                    "updated_at": "2023-07-10T07:04:56Z",
                                    "promoted_at": "2018-10-24T13:12:35Z",
                                    "width": 5000,
                                    "height": 3333,
                                    "color": "#f3c0c0",
                                    "blur_hash": "LlLf,=%2WBax}nfhfkj[^iW.WBof",
                                    "description": "Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
                                    "alt_description": "a mountain with a pink sky above the clouds",
                                    "urls": {
                                        "raw": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
                                        "full": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                        "regular": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                        "small": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                        "thumb": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd"
                                    },
                                    "links": {
                                        "self": "https://api.unsplash.com/photos/VEkIsvDviSs",
                                        "html": "https://unsplash.com/photos/VEkIsvDviSs",
                                        "download": "https://unsplash.com/photos/VEkIsvDviSs/download",
                                        "download_location": "https://api.unsplash.com/photos/VEkIsvDviSs/download"
                                    },
                                    "likes": 1096,
                                    "liked_by_user": false,
                                    "current_user_collections": [],
                                    "sponsorship": null,
                                    "topic_submissions": {
                                        "nature": {
                                            "status": "approved",
                                            "approved_on": "2020-04-06T14:20:12Z"
                                        },
                                        "wallpapers": {
                                            "status": "approved",
                                            "approved_on": "2020-04-06T14:20:09Z"
                                        }
                                    },
                                    "premium": false,
                                    "plus": false,
                                    "user": {
                                        "id": "1oL7MvktvW4",
                                        "updated_at": "2023-07-01T02:07:07Z",
                                        "username": "borisbaldinger",
                                        "name": "Boris Baldinger",
                                        "first_name": "Boris",
                                        "last_name": "Baldinger",
                                        "twitter_username": "borisbaldinger",
                                        "portfolio_url": "https://www.boris-baldinger.com",
                                        "bio": "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
                                        "location": "Switzerland",
                                        "links": {
                                            "self": "https://api.unsplash.com/users/borisbaldinger",
                                            "html": "https://unsplash.com/@borisbaldinger",
                                            "photos": "https://api.unsplash.com/users/borisbaldinger/photos",
                                            "likes": "https://api.unsplash.com/users/borisbaldinger/likes",
                                            "portfolio": "https://api.unsplash.com/users/borisbaldinger/portfolio",
                                            "following": "https://api.unsplash.com/users/borisbaldinger/following",
                                            "followers": "https://api.unsplash.com/users/borisbaldinger/followers"
                                        },
                                        "profile_image": {
                                            "small": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                            "medium": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                            "large": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                        },
                                        "instagram_username": "borisbaldinger",
                                        "total_collections": 3,
                                        "total_likes": 71,
                                        "total_photos": 16,
                                        "accepted_tos": true,
                                        "for_hire": true,
                                        "social": {
                                            "instagram_username": "borisbaldinger",
                                            "portfolio_url": "https://www.boris-baldinger.com",
                                            "twitter_username": "borisbaldinger",
                                            "paypal_email": null
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "type": "search",
                            "title": "japan"
                        },
                        {
                            "type": "landing_page",
                            "title": "city",
                            "source": {
                                "ancestry": {
                                    "type": {
                                        "slug": "wallpapers",
                                        "pretty_slug": "HD Wallpapers"
                                    },
                                    "category": {
                                        "slug": "travel",
                                        "pretty_slug": "Travel"
                                    },
                                    "subcategory": {
                                        "slug": "city",
                                        "pretty_slug": "City"
                                    }
                                },
                                "title": "Hd city wallpapers",
                                "subtitle": "Download free city wallpapers",
                                "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                                "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                                "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                                "cover_photo": {
                                    "id": "Nyvq2juw4_o",
                                    "slug": "Nyvq2juw4_o",
                                    "created_at": "2016-11-01T00:26:28Z",
                                    "updated_at": "2023-07-07T15:01:00Z",
                                    "promoted_at": "2016-11-01T00:26:28Z",
                                    "width": 3465,
                                    "height": 2131,
                                    "color": "#0c2640",
                                    "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                                    "description": "City architecture and skyscrapers near waterfront",
                                    "alt_description": "white and brown city buildings during daytime",
                                    "urls": {
                                        "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                        "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                        "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                        "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                        "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                                    },
                                    "links": {
                                        "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                        "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                        "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                        "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                                    },
                                    "likes": 3472,
                                    "liked_by_user": false,
                                    "current_user_collections": [],
                                    "sponsorship": null,
                                    "topic_submissions": {},
                                    "premium": false,
                                    "plus": false,
                                    "user": {
                                        "id": "1--L3vNK0TA",
                                        "updated_at": "2023-07-01T07:40:45Z",
                                        "username": "peterlaster",
                                        "name": "Pedro Lastra",
                                        "first_name": "Pedro",
                                        "last_name": "Lastra",
                                        "twitter_username": null,
                                        "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                        "bio": null,
                                        "location": null,
                                        "links": {
                                            "self": "https://api.unsplash.com/users/peterlaster",
                                            "html": "https://unsplash.com/@peterlaster",
                                            "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                            "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                            "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                            "following": "https://api.unsplash.com/users/peterlaster/following",
                                            "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                        },
                                        "profile_image": {
                                            "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                            "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                            "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                        },
                                        "instagram_username": null,
                                        "total_collections": 10,
                                        "total_likes": 46,
                                        "total_photos": 86,
                                        "accepted_tos": false,
                                        "for_hire": false,
                                        "social": {
                                            "instagram_username": null,
                                            "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                            "twitter_username": null,
                                            "paypal_email": null
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "type": "search",
                            "title": "urban"
                        },
                        {
                            "type": "search",
                            "title": "town"
                        }
                    ],
                    "links": {
                        "self": "https://api.unsplash.com/collections/N8dERqiW7Sg",
                        "html": "https://unsplash.com/collections/N8dERqiW7Sg/tokyo",
                        "photos": "https://api.unsplash.com/collections/N8dERqiW7Sg/photos",
                        "related": "https://api.unsplash.com/collections/N8dERqiW7Sg/related"
                    }
                }
            ],
            "sponsorship": null,
            "topic_submissions": {
                "digital-screens": {
                    "status": "approved",
                    "approved_on": "2022-07-21T09:04:51Z"
                },
                "nature": {
                    "status": "approved",
                    "approved_on": "2020-04-06T14:20:18Z"
                },
                "street-photography": {
                    "status": "approved",
                    "approved_on": "2021-06-23T10:42:43Z"
                },
                "wallpapers": {
                    "status": "approved",
                    "approved_on": "2020-04-06T14:20:09Z"
                }
            },
            "user": {
                "id": "zU-QdLalzNQ",
                "updated_at": "2023-07-01T06:21:56Z",
                "username": "erikeae",
                "name": "Erik Eastman",
                "first_name": "Erik",
                "last_name": "Eastman",
                "twitter_username": "erikdatrilla",
                "portfolio_url": "http://erikeae.com",
                "bio": "Visual Mind-bender. More on Instagram @erikeae\r\n\r\n",
                "location": "Toronto ",
                "links": {
                    "self": "https://api.unsplash.com/users/erikeae",
                    "html": "https://unsplash.com/@erikeae",
                    "photos": "https://api.unsplash.com/users/erikeae/photos",
                    "likes": "https://api.unsplash.com/users/erikeae/likes",
                    "portfolio": "https://api.unsplash.com/users/erikeae/portfolio",
                    "following": "https://api.unsplash.com/users/erikeae/following",
                    "followers": "https://api.unsplash.com/users/erikeae/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1494550768750-c00cadf70697?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1494550768750-c00cadf70697?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1494550768750-c00cadf70697?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "erikeae",
                "total_collections": 0,
                "total_likes": 166,
                "total_photos": 55,
                "accepted_tos": false,
                "for_hire": false,
                "social": {
                    "instagram_username": "erikeae",
                    "portfolio_url": "http://erikeae.com",
                    "twitter_username": "erikdatrilla",
                    "paypal_email": null
                }
            },
            "tags": [
                {
                    "type": "search",
                    "title": "japan"
                },
                {
                    "type": "search",
                    "title": "tokyo"
                },
                {
                    "type": "landing_page",
                    "title": "city",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "wallpapers",
                                "pretty_slug": "HD Wallpapers"
                            },
                            "category": {
                                "slug": "travel",
                                "pretty_slug": "Travel"
                            },
                            "subcategory": {
                                "slug": "city",
                                "pretty_slug": "City"
                            }
                        },
                        "title": "Hd city wallpapers",
                        "subtitle": "Download free city wallpapers",
                        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                        "cover_photo": {
                            "id": "Nyvq2juw4_o",
                            "slug": "Nyvq2juw4_o",
                            "created_at": "2016-11-01T00:26:28Z",
                            "updated_at": "2023-07-07T15:01:00Z",
                            "promoted_at": "2016-11-01T00:26:28Z",
                            "width": 3465,
                            "height": 2131,
                            "color": "#0c2640",
                            "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                            "description": "City architecture and skyscrapers near waterfront",
                            "alt_description": "white and brown city buildings during daytime",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                            },
                            "likes": 3472,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {},
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "1--L3vNK0TA",
                                "updated_at": "2023-07-01T07:40:45Z",
                                "username": "peterlaster",
                                "name": "Pedro Lastra",
                                "first_name": "Pedro",
                                "last_name": "Lastra",
                                "twitter_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "bio": null,
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/peterlaster",
                                    "html": "https://unsplash.com/@peterlaster",
                                    "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                    "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                    "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                    "following": "https://api.unsplash.com/users/peterlaster/following",
                                    "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": null,
                                "total_collections": 10,
                                "total_likes": 46,
                                "total_photos": 86,
                                "accepted_tos": false,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": null,
                                    "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            "id": "layMbSJ3YOE",
            "slug": "layMbSJ3YOE",
            "created_at": "2018-10-31T04:23:38Z",
            "updated_at": "2023-07-11T08:05:15Z",
            "promoted_at": null,
            "width": 7767,
            "height": 5039,
            "color": "#0c738c",
            "blur_hash": "LFDThmxCz[M_^Qvzsp$f3onnotnT",
            "description": null,
            "alt_description": "people walking on road near well-lit buildings",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540959733332-eab4deabeeaf"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/layMbSJ3YOE",
                "html": "https://unsplash.com/photos/layMbSJ3YOE",
                "download": "https://unsplash.com/photos/layMbSJ3YOE/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA",
                "download_location": "https://api.unsplash.com/photos/layMbSJ3YOE/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwyfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA"
            },
            "likes": 2535,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "AW1Lyy6xtN0",
                "updated_at": "2023-07-11T10:06:34Z",
                "username": "jezar",
                "name": "Jezael Melgoza",
                "first_name": "Jezael",
                "last_name": "Melgoza",
                "twitter_username": "jezaelmelgoza",
                "portfolio_url": "https://www.lyonpixel.com",
                "bio": "Mexico ❤️. Worker in Korea and Japan.\r\nAnimation, webmaster and photo.",
                "location": "Morelia",
                "links": {
                    "self": "https://api.unsplash.com/users/jezar",
                    "html": "https://unsplash.com/@jezar",
                    "photos": "https://api.unsplash.com/users/jezar/photos",
                    "likes": "https://api.unsplash.com/users/jezar/likes",
                    "portfolio": "https://api.unsplash.com/users/jezar/portfolio",
                    "following": "https://api.unsplash.com/users/jezar/following",
                    "followers": "https://api.unsplash.com/users/jezar/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "Jezar.mx",
                "total_collections": 4,
                "total_likes": 85,
                "total_photos": 291,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "Jezar.mx",
                    "portfolio_url": "https://www.lyonpixel.com",
                    "twitter_username": "jezaelmelgoza",
                    "paypal_email": null
                }
            },
            "tags": [
                {
                    "type": "landing_page",
                    "title": "city",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "wallpapers",
                                "pretty_slug": "HD Wallpapers"
                            },
                            "category": {
                                "slug": "travel",
                                "pretty_slug": "Travel"
                            },
                            "subcategory": {
                                "slug": "city",
                                "pretty_slug": "City"
                            }
                        },
                        "title": "Hd city wallpapers",
                        "subtitle": "Download free city wallpapers",
                        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                        "cover_photo": {
                            "id": "Nyvq2juw4_o",
                            "slug": "Nyvq2juw4_o",
                            "created_at": "2016-11-01T00:26:28Z",
                            "updated_at": "2023-07-07T15:01:00Z",
                            "promoted_at": "2016-11-01T00:26:28Z",
                            "width": 3465,
                            "height": 2131,
                            "color": "#0c2640",
                            "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                            "description": "City architecture and skyscrapers near waterfront",
                            "alt_description": "white and brown city buildings during daytime",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                            },
                            "likes": 3472,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {},
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "1--L3vNK0TA",
                                "updated_at": "2023-07-01T07:40:45Z",
                                "username": "peterlaster",
                                "name": "Pedro Lastra",
                                "first_name": "Pedro",
                                "last_name": "Lastra",
                                "twitter_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "bio": null,
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/peterlaster",
                                    "html": "https://unsplash.com/@peterlaster",
                                    "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                    "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                    "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                    "following": "https://api.unsplash.com/users/peterlaster/following",
                                    "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": null,
                                "total_collections": 10,
                                "total_likes": 46,
                                "total_photos": 86,
                                "accepted_tos": false,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": null,
                                    "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                },
                {
                    "type": "landing_page",
                    "title": "person",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "images",
                                "pretty_slug": "Images"
                            },
                            "category": {
                                "slug": "people",
                                "pretty_slug": "People"
                            }
                        },
                        "title": "People images & pictures",
                        "subtitle": "Download free people images",
                        "description": "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
                        "meta_title": "People Pictures [HQ] | Download Free Images on Unsplash",
                        "meta_description": "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
                        "cover_photo": {
                            "id": "PmNjS6b3XP4",
                            "slug": "PmNjS6b3XP4",
                            "created_at": "2017-04-20T22:04:07Z",
                            "updated_at": "2023-07-07T07:01:27Z",
                            "promoted_at": "2017-04-21T16:00:49Z",
                            "width": 4630,
                            "height": 3087,
                            "color": "#a6d9d9",
                            "blur_hash": "LjI=x%:QUbv#NHWVa}kCt7jFjZfQ",
                            "description": "Summer in France with baby",
                            "alt_description": "woman carrying baby while walking",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492725764893-90b379c2b6e7"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/PmNjS6b3XP4",
                                "html": "https://unsplash.com/photos/PmNjS6b3XP4",
                                "download": "https://unsplash.com/photos/PmNjS6b3XP4/download",
                                "download_location": "https://api.unsplash.com/photos/PmNjS6b3XP4/download"
                            },
                            "likes": 2711,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {
                                "current-events": {
                                    "status": "approved",
                                    "approved_on": "2021-03-01T12:52:57Z"
                                }
                            },
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "7S_pCRiCiQo",
                                "updated_at": "2023-07-02T21:53:04Z",
                                "username": "thedakotacorbin",
                                "name": "Dakota Corbin",
                                "first_name": "Dakota",
                                "last_name": "Corbin",
                                "twitter_username": "thedakotacorbin",
                                "portfolio_url": null,
                                "bio": "Husband | Father | Creator",
                                "location": "Utah, United States",
                                "links": {
                                    "self": "https://api.unsplash.com/users/thedakotacorbin",
                                    "html": "https://unsplash.com/@thedakotacorbin",
                                    "photos": "https://api.unsplash.com/users/thedakotacorbin/photos",
                                    "likes": "https://api.unsplash.com/users/thedakotacorbin/likes",
                                    "portfolio": "https://api.unsplash.com/users/thedakotacorbin/portfolio",
                                    "following": "https://api.unsplash.com/users/thedakotacorbin/following",
                                    "followers": "https://api.unsplash.com/users/thedakotacorbin/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/profile-1688334779765-edbf1229e3fa?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": "thedakotacorbin",
                                "total_collections": 0,
                                "total_likes": 1,
                                "total_photos": 44,
                                "accepted_tos": true,
                                "for_hire": true,
                                "social": {
                                    "instagram_username": "thedakotacorbin",
                                    "portfolio_url": null,
                                    "twitter_username": "thedakotacorbin",
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                },
                {
                    "type": "search",
                    "title": "road"
                }
            ]
        },
        {
            "id": "tKCd-IWc4gI",
            "slug": "tKCd-IWc4gI",
            "created_at": "2019-04-09T08:16:28Z",
            "updated_at": "2023-07-10T23:07:22Z",
            "promoted_at": null,
            "width": 3247,
            "height": 4329,
            "color": "#264040",
            "blur_hash": "LFCY%PEg4:Sh^iNbIpW;0#xFo|n%",
            "description": "Shinjuku Yakitori Alley (Memory Lane / Piss Alley), Tokyo, Japan. I'm always excited to see how people are using my photos out there in the world. If you've used one of my images in your project - tag me or send me a message so I can check it out. Instagram: @yoavaziz Email: yoavaziz@gmail.com",
            "alt_description": "men in black suits standing in the hallway",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1554797589-7241bb691973?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1554797589-7241bb691973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1554797589-7241bb691973"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/tKCd-IWc4gI",
                "html": "https://unsplash.com/photos/tKCd-IWc4gI",
                "download": "https://unsplash.com/photos/tKCd-IWc4gI/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA",
                "download_location": "https://api.unsplash.com/photos/tKCd-IWc4gI/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHwzfHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA"
            },
            "likes": 1820,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "ddtwtuKgf5Y",
                "updated_at": "2023-07-10T18:13:00Z",
                "username": "yoavaziz",
                "name": "Yoav Aziz",
                "first_name": "Yoav",
                "last_name": "Aziz",
                "twitter_username": "yoavaziz",
                "portfolio_url": "https://www.instagram.com/yoavaziz/",
                "bio": "I'm always excited to see how people are using my photos out there in the world. If you've used one of my images in your project - don't be shy! Tag me or send me a message so I can check it out. \r\n   Instagram: @yoavaziz  Email: yoavaziz@gmail.com",
                "location": "Tel Aviv",
                "links": {
                    "self": "https://api.unsplash.com/users/yoavaziz",
                    "html": "https://unsplash.com/@yoavaziz",
                    "photos": "https://api.unsplash.com/users/yoavaziz/photos",
                    "likes": "https://api.unsplash.com/users/yoavaziz/likes",
                    "portfolio": "https://api.unsplash.com/users/yoavaziz/portfolio",
                    "following": "https://api.unsplash.com/users/yoavaziz/following",
                    "followers": "https://api.unsplash.com/users/yoavaziz/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1664990441175-ef7c0d5d3747image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1664990441175-ef7c0d5d3747image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1664990441175-ef7c0d5d3747image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "yoavaziz",
                "total_collections": 7,
                "total_likes": 152,
                "total_photos": 449,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "yoavaziz",
                    "portfolio_url": "https://www.instagram.com/yoavaziz/",
                    "twitter_username": "yoavaziz",
                    "paypal_email": null
                }
            },
            "tags": [
                {
                    "type": "landing_page",
                    "title": "city",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "wallpapers",
                                "pretty_slug": "HD Wallpapers"
                            },
                            "category": {
                                "slug": "travel",
                                "pretty_slug": "Travel"
                            },
                            "subcategory": {
                                "slug": "city",
                                "pretty_slug": "City"
                            }
                        },
                        "title": "Hd city wallpapers",
                        "subtitle": "Download free city wallpapers",
                        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                        "cover_photo": {
                            "id": "Nyvq2juw4_o",
                            "slug": "Nyvq2juw4_o",
                            "created_at": "2016-11-01T00:26:28Z",
                            "updated_at": "2023-07-07T15:01:00Z",
                            "promoted_at": "2016-11-01T00:26:28Z",
                            "width": 3465,
                            "height": 2131,
                            "color": "#0c2640",
                            "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                            "description": "City architecture and skyscrapers near waterfront",
                            "alt_description": "white and brown city buildings during daytime",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                            },
                            "likes": 3472,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {},
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "1--L3vNK0TA",
                                "updated_at": "2023-07-01T07:40:45Z",
                                "username": "peterlaster",
                                "name": "Pedro Lastra",
                                "first_name": "Pedro",
                                "last_name": "Lastra",
                                "twitter_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "bio": null,
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/peterlaster",
                                    "html": "https://unsplash.com/@peterlaster",
                                    "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                    "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                    "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                    "following": "https://api.unsplash.com/users/peterlaster/following",
                                    "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": null,
                                "total_collections": 10,
                                "total_likes": 46,
                                "total_photos": 86,
                                "accepted_tos": false,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": null,
                                    "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                },
                {
                    "type": "search",
                    "title": "alley"
                },
                {
                    "type": "search",
                    "title": "street"
                }
            ]
        },
        {
            "id": "7H77FWkK_x4",
            "slug": "7H77FWkK_x4",
            "created_at": "2018-09-04T22:08:18Z",
            "updated_at": "2023-07-09T21:04:25Z",
            "promoted_at": null,
            "width": 4721,
            "height": 5115,
            "color": "#0c738c",
            "blur_hash": "LKF#tH-psS,?3?oJWVNbIVs.$*n$",
            "description": null,
            "alt_description": "architectural photo of tower between buildings",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1536098561742-ca998e48cbcc"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/7H77FWkK_x4",
                "html": "https://unsplash.com/photos/7H77FWkK_x4",
                "download": "https://unsplash.com/photos/7H77FWkK_x4/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA",
                "download_location": "https://api.unsplash.com/photos/7H77FWkK_x4/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw0fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA"
            },
            "likes": 2810,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "AW1Lyy6xtN0",
                "updated_at": "2023-07-11T10:06:34Z",
                "username": "jezar",
                "name": "Jezael Melgoza",
                "first_name": "Jezael",
                "last_name": "Melgoza",
                "twitter_username": "jezaelmelgoza",
                "portfolio_url": "https://www.lyonpixel.com",
                "bio": "Mexico ❤️. Worker in Korea and Japan.\r\nAnimation, webmaster and photo.",
                "location": "Morelia",
                "links": {
                    "self": "https://api.unsplash.com/users/jezar",
                    "html": "https://unsplash.com/@jezar",
                    "photos": "https://api.unsplash.com/users/jezar/photos",
                    "likes": "https://api.unsplash.com/users/jezar/likes",
                    "portfolio": "https://api.unsplash.com/users/jezar/portfolio",
                    "following": "https://api.unsplash.com/users/jezar/following",
                    "followers": "https://api.unsplash.com/users/jezar/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1511465047921-6b140eb0210b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "Jezar.mx",
                "total_collections": 4,
                "total_likes": 85,
                "total_photos": 291,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "Jezar.mx",
                    "portfolio_url": "https://www.lyonpixel.com",
                    "twitter_username": "jezaelmelgoza",
                    "paypal_email": null
                }
            },
            "tags": [
                {
                    "type": "search",
                    "title": "tokyo"
                },
                {
                    "type": "landing_page",
                    "title": "city",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "wallpapers",
                                "pretty_slug": "HD Wallpapers"
                            },
                            "category": {
                                "slug": "travel",
                                "pretty_slug": "Travel"
                            },
                            "subcategory": {
                                "slug": "city",
                                "pretty_slug": "City"
                            }
                        },
                        "title": "Hd city wallpapers",
                        "subtitle": "Download free city wallpapers",
                        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                        "cover_photo": {
                            "id": "Nyvq2juw4_o",
                            "slug": "Nyvq2juw4_o",
                            "created_at": "2016-11-01T00:26:28Z",
                            "updated_at": "2023-07-07T15:01:00Z",
                            "promoted_at": "2016-11-01T00:26:28Z",
                            "width": 3465,
                            "height": 2131,
                            "color": "#0c2640",
                            "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                            "description": "City architecture and skyscrapers near waterfront",
                            "alt_description": "white and brown city buildings during daytime",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                            },
                            "likes": 3472,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {},
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "1--L3vNK0TA",
                                "updated_at": "2023-07-01T07:40:45Z",
                                "username": "peterlaster",
                                "name": "Pedro Lastra",
                                "first_name": "Pedro",
                                "last_name": "Lastra",
                                "twitter_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "bio": null,
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/peterlaster",
                                    "html": "https://unsplash.com/@peterlaster",
                                    "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                    "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                    "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                    "following": "https://api.unsplash.com/users/peterlaster/following",
                                    "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": null,
                                "total_collections": 10,
                                "total_likes": 46,
                                "total_photos": 86,
                                "accepted_tos": false,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": null,
                                    "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                },
                {
                    "type": "search",
                    "title": "tokyo tower"
                }
            ]
        },
        {
            "id": "yVUQlyRlJSw",
            "slug": "cars-on-road-between-high-rise-buildings-during-night-time-yVUQlyRlJSw",
            "created_at": "2020-09-25T14:08:56Z",
            "updated_at": "2023-07-11T13:15:15Z",
            "promoted_at": "2020-09-28T05:56:20Z",
            "width": 5304,
            "height": 7952,
            "color": "#0c2640",
            "blur_hash": "L75Ew7ScD}rWrqWVg4oL9pohw~kW",
            "description": "Tokyo by night near Asakusa",
            "alt_description": "cars on road between high rise buildings during night time",
            "urls": {
                "raw": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601042879364-f3947d3f9c16"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/cars-on-road-between-high-rise-buildings-during-night-time-yVUQlyRlJSw",
                "html": "https://unsplash.com/photos/cars-on-road-between-high-rise-buildings-during-night-time-yVUQlyRlJSw",
                "download": "https://unsplash.com/photos/yVUQlyRlJSw/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA",
                "download_location": "https://api.unsplash.com/photos/yVUQlyRlJSw/download?ixid=M3w0MDEwNzZ8MHwxfHNlYXJjaHw1fHx0b2t5b3xlbnwwfHx8fDE2ODkwOTE4NDB8MA"
            },
            "likes": 2989,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "6gM9sUEzy0c",
                "updated_at": "2023-07-03T20:39:03Z",
                "username": "valentinbvs",
                "name": "Valentin BEAUVAIS",
                "first_name": "Valentin",
                "last_name": "BEAUVAIS",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "So i will publish my leftover photo from time to time, don't expect a nice profil just random photos ",
                "location": "Nantes_ France",
                "links": {
                    "self": "https://api.unsplash.com/users/valentinbvs",
                    "html": "https://unsplash.com/@valentinbvs",
                    "photos": "https://api.unsplash.com/users/valentinbvs/photos",
                    "likes": "https://api.unsplash.com/users/valentinbvs/likes",
                    "portfolio": "https://api.unsplash.com/users/valentinbvs/portfolio",
                    "following": "https://api.unsplash.com/users/valentinbvs/following",
                    "followers": "https://api.unsplash.com/users/valentinbvs/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1601317268149-07a55da09b42image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1601317268149-07a55da09b42image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1601317268149-07a55da09b42image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "valentin.senshu",
                "total_collections": 0,
                "total_likes": 54,
                "total_photos": 16,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "valentin.senshu",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "tags": [
                {
                    "type": "search",
                    "title": "tokyo"
                },
                {
                    "type": "landing_page",
                    "title": "city",
                    "source": {
                        "ancestry": {
                            "type": {
                                "slug": "wallpapers",
                                "pretty_slug": "HD Wallpapers"
                            },
                            "category": {
                                "slug": "travel",
                                "pretty_slug": "Travel"
                            },
                            "subcategory": {
                                "slug": "city",
                                "pretty_slug": "City"
                            }
                        },
                        "title": "Hd city wallpapers",
                        "subtitle": "Download free city wallpapers",
                        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
                        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
                        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
                        "cover_photo": {
                            "id": "Nyvq2juw4_o",
                            "slug": "Nyvq2juw4_o",
                            "created_at": "2016-11-01T00:26:28Z",
                            "updated_at": "2023-07-07T15:01:00Z",
                            "promoted_at": "2016-11-01T00:26:28Z",
                            "width": 3465,
                            "height": 2131,
                            "color": "#0c2640",
                            "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
                            "description": "City architecture and skyscrapers near waterfront",
                            "alt_description": "white and brown city buildings during daytime",
                            "urls": {
                                "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
                                "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                                "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                                "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                                "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
                            },
                            "links": {
                                "self": "https://api.unsplash.com/photos/Nyvq2juw4_o",
                                "html": "https://unsplash.com/photos/Nyvq2juw4_o",
                                "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
                                "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
                            },
                            "likes": 3472,
                            "liked_by_user": false,
                            "current_user_collections": [],
                            "sponsorship": null,
                            "topic_submissions": {},
                            "premium": false,
                            "plus": false,
                            "user": {
                                "id": "1--L3vNK0TA",
                                "updated_at": "2023-07-01T07:40:45Z",
                                "username": "peterlaster",
                                "name": "Pedro Lastra",
                                "first_name": "Pedro",
                                "last_name": "Lastra",
                                "twitter_username": null,
                                "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                "bio": null,
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/peterlaster",
                                    "html": "https://unsplash.com/@peterlaster",
                                    "photos": "https://api.unsplash.com/users/peterlaster/photos",
                                    "likes": "https://api.unsplash.com/users/peterlaster/likes",
                                    "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
                                    "following": "https://api.unsplash.com/users/peterlaster/following",
                                    "followers": "https://api.unsplash.com/users/peterlaster/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": null,
                                "total_collections": 10,
                                "total_likes": 46,
                                "total_photos": 86,
                                "accepted_tos": false,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": null,
                                    "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        }
                    }
                },
                {
                    "type": "search",
                    "title": "japon"
                }
            ]
        }
    ]
	} as unknown as ISearchPhotos

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQ(e.target.value)
	}

	return (
		<div className='header'>
			<div className='header__container '>
				<Image
					to='/'
					className='header__logo truncate'
					onClick={() => dispatch(addFramesRedirect())}
				></Image>
				<Link to='/create' className='header__create header__create-reg truncate'>
					Create
				</Link>
				<input
					type='text'
					placeholder='Search'
					className='truncate header__search'
					onChange={inputHandler}
				></input>
				<div className='header__notifications'>
					<Image
						src={bell}
					></Image>
				</div>
				<div className='header__messages'>
					<Image
						src={mail}
					></Image>
				</div>
				<div className='header__account'>
					<Image to='/me' src={accountInfo?.profile_image?.medium} color={"var(--main-color)"}></Image>
				</div>

				<div className='header__accounts'>
					<Image
						src={arrow}
					></Image>
				</div>
			</div>
		</div>
	);
}
