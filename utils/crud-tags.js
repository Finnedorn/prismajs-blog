const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    createTag(tag) {
        return prisma.tag.create({
            data: {
                name: tag 
            },
            skipDuplicates: true
        })
        .then(tag => console.log('Tag creato', tag))
        .catch(err => console.log(err))
    },

    createManyTags(tags) {
        return prisma.tag.createMany({
            data: tags.map(tag => ({ name: tag })),
            skipDuplicates: true
        })
        .then(tags => console.log('Tags create', JSON.stringify(tags, null, 2)))
        .catch(err => console.log(err))
    }
}