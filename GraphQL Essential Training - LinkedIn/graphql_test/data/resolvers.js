import { Friends, Aliens } from './dbConnectors';
// resolver map
export const resolvers = { 
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase["60b431d8388ad70dbcd7c8a7"]);
        },
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                language: input.language,
                age: input.age,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        },

        updateFriend: (root, { input } ) => {
            return new Promise ((resolve, object) => {
                Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                })
            })
        }
    },
};
