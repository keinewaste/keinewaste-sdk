module.exports = {
    "version": "3.0",
    "metadata": {
        "endpointPrefix": "users",
        "serviceFullName": "Keine Waste Service"
    },
    "operations": {
        "GetUser": {
            "name": "GetUser",
            "http": {
                "method": "GET",
                "requestUri": "/{id}"
            },
            "parameters": [],
            "map": "User",
            "errors": {
                "400": {
                    "shape": "BadRequestException",
                    "exception": true
                },
                "401": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "403": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "404": {
                    "shape": "NotFoundException",
                    "exception": true
                },
                "429": {
                    "shape": "TooManyRequestsException",
                    "exception": true
                },
                "409": {
                    "shape": "ResourceConflictException",
                    "exception": true
                }
            }
        },
        "ModifyUser": {
            "name": "ModifyUser",
            "http": {
                "method": "PUT",
                "requestUri": "/me"
            },
            "parameters": [
                {
                    "name": "type",
                    "location": "body"
                },
                {
                    "name": "address",
                    "location": "body"
                },
                {
                    "name": "companyName",
                    "location": "body"
                }
            ],
            "map": "User",
            "errors": {
                "400": {
                    "shape": "BadRequestException",
                    "exception": true
                },
                "401": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "403": {
                    "shape": "UnauthorizedException",
                    "exception": true
                },
                "404": {
                    "shape": "NotFoundException",
                    "exception": true
                },
                "429": {
                    "shape": "TooManyRequestsException",
                    "exception": true
                },
                "409": {
                    "shape": "ResourceConflictException",
                    "exception": true
                }
            }
        }
    }
};