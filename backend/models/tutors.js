module.exports = (sequelize, DataTypes) => {
	
	const Tutors = sequelize.define("Tutors", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone_number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		informations: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	},
	{
		tableName: 'Tutors',
		timestamps: false
	})
	
	return Tutors
}