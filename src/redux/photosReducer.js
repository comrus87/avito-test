import {userApi} from './../api/api';
import {reset} from 'redux-form';

const SET_PHOTOS = 'gallery/SET_PHOTOS';
const SET_MODAL_PHOTO = 'gallery/SET_MODAL_PHOTO';

let initialState = {
	photos: [],
	photoId: null,
	photoUrl: null,
	comments: []
}

const photosReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_PHOTOS:
			return {
				...state,
				photos: [...action.photos]
			}

		case SET_MODAL_PHOTO:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}

export const setPhotos = photos => ({type: SET_PHOTOS, photos});

export const setModalPhoto = (photoId, photoUrl, comments) => ({type: SET_MODAL_PHOTO, payload: {photoId, photoUrl, comments}});


export const getPhotos = () => async (dispatch) => {
	let data = await userApi.getPhotos();
	  dispatch(setPhotos(data));
};

export const getModalPhoto = photoId => async (dispatch) => {
	let data = await userApi.getModalPhoto(photoId);
	let {id, url, comments} = data;
	dispatch(setModalPhoto(id, url, comments));
};

export const postComment = (id, name, comment) => async (dispatch) => {
	let response = await userApi.setComment(id, name, comment);
	if (response.status === 204) {
		alert('Комментарий отправлен, но сервер присылает 204 статус')
	}
	dispatch(reset('comment'));

};

export default photosReducer