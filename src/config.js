const dev = {
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://brdnaic808.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_uwEBNyC9W",
        APP_CLIENT_ID: "6v7h6ub4uhmi0vqtb518di9nsn",
        IDENTITY_POOL_ID: "us-east-1:ef99775a-e958-4f40-8d69-78b1568b89fc"
    }
};

const prod = {
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://tmje2fl9bi.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Bnxllmhyp",
        APP_CLIENT_ID: "35j36va4sfqpj04lls0l6dd41r",
        IDENTITY_POOL_ID: "us-east-1:3fd7769d-7e1e-4ec6-8403-2561fdd89998"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};