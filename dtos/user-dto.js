// DTO stands for Data Transfer Object
module.exports = class UserDto {
	email;
	id;
	
	constructor (model) {
		this.email = model.email;
		this.id = model._id;
	}
	
};