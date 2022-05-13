import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (
    root,
    { createLifeInput: { firstName, lastName, title, description, birthday, hobbies } }
) => {
    const { collections } = await getDatabaseContext();

    const document: Life = {
        _id: new ObjectId(),
        firstName,
        lastName,
        title,
        description,
        birthday,
        hobbies: [...hobbies],
    };
    await collections.lives.insertOne(document);

    return document;
};

export default mutation;
