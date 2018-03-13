const {
    GraphQLEnumType
} = require('graphql');

    
    module.exports = new GraphQLEnumType({
    name: 'ContestStatus',
    values: {
        DRAFT: { value: 'draft' },
        PUBLISHED: { value: 'pusblished' },
        ARCHIVED: { value: 'archived' },
    }
});