module.exports = (sequelize, DataTypes) => {
	
	const Users = sequelize.define("Users", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password_hash: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		type: {
			type: DataTypes.ENUM('Student', 'Tutor'),
			allowNull: true,
		}
	},
	{
		tableName: 'Users',
		timestamps: false
	})
	
	return Users
}