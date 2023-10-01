module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_email: {
        type: Sequelize.STRING,
        unique: true,
      },
      user_password: {
        type: Sequelize.STRING,
      },
      user_image: {
        type: Sequelize.STRING,
      },
      total_orders: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      last_logged_in: {
        type: Sequelize.DATE,
      },
    });
  
    return User;
  };
  