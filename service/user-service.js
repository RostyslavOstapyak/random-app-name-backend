const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
	async registration (email, password) {
		const candidate = await UserModel.findOne({email});
		if (candidate) {
			throw new Error(`User already exist`);
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const user = await UserModel.create({email, hashPassword});
		
		const userDto = new UserDto(user); // generates obj {id, email}
		const tokens = tokenService.generateTokens({...userDto});
		// userDto is instance of UserDto class.
		// That's why we change it to be regular object
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		
		return {
			...tokens,
			user: userDto,
		};
	}
};

module.exports = new UserService();