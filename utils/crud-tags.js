const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    createTag(tag) {
        return prisma.tag.create({
            data: {
                name: tag 
            }
        })
        .then(tag => console.log('Tag creato', tag))
        .catch(err => console.log(err))
    },

    createManyTags(tags) {
        return prisma.tag.createMany({
            data: tags.map(tag => ({ name: tag }))
        })
        .then(tags => console.log('Tags create', JSON.stringify(tags, null, 2)))
        .catch(err => console.log(err))
    }
}