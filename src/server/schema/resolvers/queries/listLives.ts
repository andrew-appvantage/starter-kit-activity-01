import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async () => {
    const { collections } = await getDatabaseContext();
    let lists = [];

    lists = await collections.lives
        .find({})
        .map(life => life)
        .toArray();

    return lists;
};

export default query;
