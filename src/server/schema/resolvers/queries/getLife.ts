import { getDatabaseContext, Life } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, { _id }) => {
    const { collections } = await getDatabaseContext();
    let life: Life | null;
    try {
        life = await collections.lives.findOne({ _id: _id });
        if (!life) return null;
    } catch (error) {
        throw error;
    }
    return life;
};

export default query;
