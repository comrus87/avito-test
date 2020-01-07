import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://boiling-refuge-66454.herokuapp.com/images/'
})

export const userApi = {
	getPhotos () {
		return instance.get().then(response => response.data);
	},

	getModalPhoto (photoId) {
		return instance.get(`${photoId}`).then(response => response.data);
	},

	setComment (id, name, comment) {
		return instance.post(`${id}/comments`, {name, comment});
	}
};

