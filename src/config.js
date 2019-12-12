export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-ong"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ouzhfru8b3.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_TWEl5S07c",
        APP_CLIENT_ID: "35um5tdu5v98bj9hip9tfcurrm",
        IDENTITY_POOL_ID: "us-east-1:17d7e4db-43d6-4784-9243-73318a1a1a65"
    }
};