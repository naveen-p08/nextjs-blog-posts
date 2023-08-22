const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const {env} = require("react-syntax-highlighter/.eslintrc");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return (
            {
                env: {
                    mongodb_username: "blogsite",
                    mongodb_password: "jqvpsR9Wu7hh7we2",
                    mongodb_clustername: "cluster0",
                }
            }
        )
    }

    return {
      env: {
        mongodb_username: "blogsite",
        mongodb_password: "jqvpsR9Wu7hh7we2",
        mongodb_clustername: "cluster0",
      },
    };

};