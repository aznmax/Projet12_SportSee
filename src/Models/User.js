/**
 * @param  {Array} infos
 * @param  {Array} activities
 * @param  {Array} sessions
 * @param  {Array} performances
 * @
 */// Class User we need on the Dashboard component to create a new user when we fetch his datas
class User {
	constructor(infos, activities, sessions, performances) {
		this.infos = infos.data;
		this.activities = activities.data;
		this.sessions = sessions.data;
		this.performances = performances.data
	}

	getFirstName = () => {
		return this.infos.userInfos.firstName;
	}

	getNutriment = (name) => {
		return this.infos.keyData[name];
	}
}

export default User;