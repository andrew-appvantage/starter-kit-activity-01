import { getDatabaseContext, Life } from '../../../database';
import { ObjectId } from 'mongodb';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (root, { firstName, lastName, title, description, birthday, hobbies }) => {
    const {collections} = await getDatabaseContext();
    
    const document: Life = {
        _id: new ObjectId(),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        title,
        description,
        birthday,
        hobbies: [...hobbies],
    }
    try {
        await collections.lives.insertOne(document);

    } catch(error) {
        throw error;
    }
    return document
};

export default mutation