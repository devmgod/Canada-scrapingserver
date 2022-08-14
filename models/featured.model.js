module.exports = (sequelize, Sequelize) => {
    const Featured = sequelize.define("featured", {
        poster: {
            type: Sequelize.STRING,
            unique: true
        },

        title: {
            type: Sequelize.STRING,
        },

        year: {
            type: Sequelize.STRING,
        },
        runtime: {
            type: Sequelize.STRING,
        },

        genres: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        language: {
            type: Sequelize.STRING,
        },
        videourl: {
            type: Sequelize.STRING,
        },
        filecode: {
            type: Sequelize.STRING,
        },
        iframurl: {
            type: Sequelize.STRING,
            unique: true
        },
    });

    return Featured;
};