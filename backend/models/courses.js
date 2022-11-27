module.exports = (sequelize, DataTypes) => {
	
	const Courses = sequelize.define("Courses", {
		course_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{
		tableName: 'Courses',
		timestamps: false
	})
	
	return Courses
}