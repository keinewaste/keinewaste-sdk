module.exports = {
    "version": "3.0",
    "metadata": {
        "endpointPrefix": "categories",
        "serviceFullName": "Keine Waste Service"
    },
    "operations": {
        "GetAll": {
            "name": "Categories",
            "http": {
                "method": "GET",
                "requestUri": ""
            },
            "parameters": [],
            "map": "Categories",
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