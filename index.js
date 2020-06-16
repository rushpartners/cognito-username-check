exports.handler = (event, context, callback) => {
    if (RegExp('^[a-zA-z0-9]*$').test(event.userName) !== true) {
        var error = new Error("[USERNAME] only letters and numbers allowed");

        // Return error to Amazon Cognito
        callback(error, event);
    }

    // Return to Amazon Cognito
    callback(null, event);
};
