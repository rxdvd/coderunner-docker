const db = connect("mongodb://localhost:27017/coderunner");

db.posts.drop();

db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "pid", "title", "message", "giphy",
                "comments", "reactions", "tags", "timestamp"
            ],
            properties: {
                pid: {
                    bsonType: "number",
                    minimum: 0,
                    title: "post id",
                    description: "must be a non-negative number and is required"
                },
                title: {
                    bsonType: "string",
                    title: "title of post",
                    description: "must be a string and is required"
                },
                message: {
                    bsonType: "string",
                    title: "post body",
                    description: "must be a string and is required"
                },
                giphy: {
                    bsonType: "string",
                    title: "giphy url",
                    description: "must be a string and is required",
                    pattern: "(^https:\/\/media[0-9]{1}\.giphy\.com\/media\/.+\.gif.+$)|(^$)"
                },
                comments: {
                    bsonType: "array",
                    title: "comments of post",
                    description: "must be an array and is required",
                    uniqueItems: true,
                    additionalItems: false,
                    items: {
                        bsonType: "object",
                        title: "comment",
                        description: "must be an object and is required",
                        required: ["cid", "comment", "timestamp"],
                        properties: {
                            cid: {
                                bsonType: "number",
                                title: "comment id",
                                description: "must be an non-negative number and is required",
                                minimum: 0
                            },
                            comment: {
                                bsonType: "string",
                                title: "comment body",
                                description: "must be a string and is required"
                            },
                            timestamp: {
                                bsonType: "number",
                                title: "comment timestamp",
                                description: "must be an non-negative number and is required",
                                minimum: 0
                            }
                        }
                    }
                },
                reactions: {
                    bsonType: "object",
                    title: "reactions on post",
                    description: "must be an object and is required",
                    required: ["thumbs_up", "thumbs_down", "heart"],
                    properties: {
                        thumbs_up: {
                            bsonType: "array",
                            description: "must be an array and is required",
                            uniqueItems: true,
                            items: {
                                bsonType: "string",
                                description: "must be a string",
                                pattern: "^[0-9]+$"
                            }
                        },
                        thumbs_down: {
                            bsonType: "array",
                            description: "must be an array and is required",
                            uniqueItems: true,
                            items: {
                                bsonType: "string",
                                description: "must be a string",
                                pattern: "^[0-9]+$"
                            }
                        },
                        heart: {
                            bsonType: "array",
                            description: "must be an array and is required",
                            uniqueItems: true,
                            items: {
                                bsonType: "string",
                                description: "must be a string",
                                pattern: "^[0-9]+$"
                            }
                        }
                    }
                },
                tags: {
                    bsonType: "array",
                    uniqueItems: true,
                    title: "search tags for post",
                    description: "must be an array and is required",
                    items: {
                        bsonType: "string",
                        description: "must be a string"
                    }
                },
                timestamp: {
                    bsonType: "number",
                    minimum: 0,
                    title: "post timestamp",
                    description: "must be a non-negative number and is required"
                }
            }
        }
    }
});
