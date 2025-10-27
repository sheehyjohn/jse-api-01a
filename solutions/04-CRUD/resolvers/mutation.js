module.exports = {
  newNote: async (parent, args, { models }) => {
    return await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    });
  },
deleteNote: async (parent, { id }, { models }) => {
  try {
    const result = await models.Note.findByIdAndDelete(id);
    return !!result;
  } catch (err) {
    return false;
  }
},
  updateNote: async (parent, { content, id }, { models }) => {
    try {
      return await models.Note.findOneAndUpdate(
        {
          _id: id
        },
        {
          $set: {
            content
          }
        },
        {
          new: true
        }
      );
    } catch (err) {
      throw new Error('Error updating note');
    }
  }
};
