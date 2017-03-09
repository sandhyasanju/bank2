var user = require("./statementSchema");

exports.miniStatement = function(request, response) {
    user.find({ accountNumber: request.params.id }, function(error, data) {
        if (error) {
            console.log("error while executing the query");
            throw error;
        } else if (data[0] != null) {
            objId = data[0]._id;
            transferredArray = data[0].transfered;
            receivedArray = data[0].received;
            console.log(objId);
            if (transferredArray.toAccountNumber == null && received.fromAccountNumber == null) {
                consol.log("no transactions done yet");
            } else {
                statementArray.push(transferredArray);
                statementArray.push(receivedArray);
                console.log(statementArray);
                statementArray.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
                length = statementArray.length;
                if (length > 8) {
                    statementArray.splice(9, length - 8);
                }
            }
        } else {
            console.log("account number is not present")
        }
    });
}

exports.detailedStatement = function(request, response) {
    user.find({ accountNumber: request.params.id }, function(error, data) {
        if (error) {
            console.log("error while executing the query");
            throw error;
        } else if (data[0] != null) {
            objId = data[0]._id;
            transferredArray = data[0].transfered;
            receivedArray = data[0].received;
            console.log(objId);
            if (transferredArray.toAccountNumber == null && received.fromAccountNumber == null) {
                consol.log("no transactions done yet");
            } else {
                statementArray.push(transferredArray);
                statementArray.push(receivedArray);
                console.log(statementArray);
                statementArray.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
                length = statementArray.length;
                for (var i = 0; i < lenght; i++) {
                    if (sortedStatement[i].date <= request.body.toDate) {
                        if (sortedStatement[i].date >= request.body.fromDate) {
                            resultantStatement.push(sortedStatement[i]);
                        }
                    }
                }
                console.log(resultStatement);
            }
        } else {
            console.log("account number is not present")
        }
    });
}

exports.fundTransfer = function(request, response) {
    var transfered = new data({
        transfered: [{
            toAccountNumber: request.body.toAccountNumber,
            toAccountHolderName: request.body.toAccountHolderName,
            amount: request.body.amount,
            date: request.body.date
        }]
    });
    user.find({ accountNumber: request.params.id }, function(error, data) {
        if (error) {
            console.log("error while executing the query");
            throw error;
        } else if (data[0] != null) {
            objectId = data[0]._id;
            transferedArray = data[0].transfered;

        }
    })
}