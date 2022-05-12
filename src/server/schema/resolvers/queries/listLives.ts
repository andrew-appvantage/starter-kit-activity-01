import { getDatabaseContext, Life } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async () => {
    const { collections } = await getDatabaseContext();
    let lists = []
    try {
        lists = await collections.lives
            .find({})
            .map(life => life)
            .toArray();
    } catch (error) {
        throw error;
    }
    return lists;
};

export default query;
