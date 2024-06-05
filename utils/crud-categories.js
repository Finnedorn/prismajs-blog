
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    createCategory(category) {
        return prisma.category.create({
            data: {
                name: category
            }
        })
        .then(category => console.log('Categoria creata', category))
        .catch(err => console.log(err))
    },

    createManyCategories(categories) {
        return prisma.category.createMany({
            data: categories.map(category => ({ name: category }))
        })
        .then(categories => console.log('Categorie create', JSON.stringify(categories, null, 2)))
        .catch(err => console.log(err))
    }
}