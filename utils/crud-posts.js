const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    createPost(post) {
        return prisma.post.create({
            data: {
                title: post.title,
                slug: post.slug,
                content: post.content,
                published: post.published,
                categoryId: post.categoryId,
                tags: {
                    connect: post.tags.map(tag => ({id: tag,})),
                },
            },
        })
        .then(post => console.log('Post creato', post))
        .catch(err => console.log(err))
    },

    createManyPosts(posts) {
        return prisma.post.createMany({ 
            data: posts.map(posts => ({
                title: posts.title,
                slug: posts.slug,
                content: posts.content,
                published: posts.published,
                categoryId: posts.categoryId,
            }))
        }) 
        .then(posts => console.log('Posts create', JSON.stringify(posts, null, 2)))
        .catch(err => console.log(err))
    },

    readPostBySlug(slug) {
        return prisma.post.findUnique({
            where: {
                slug
            },
            include: {
                category: true,
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        })
        .then(post => console.log('Post trovato', post))
        .catch(err => console.log(err))
    },

    readPostByContains(content) {
        return prisma.post.findUnique({
            where: {
                content: {
                    contains: 'content'
                }
            },
            include: {
                category: true,
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        })
        .then(post => console.log('Post trovato', post))
        .catch(err => console.log(err))
    },

    readAllPosts() {
        return prisma.post.findMany({
            include: {
                category: true,
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        })
        .then(posts => console.log('Posts', JSON.stringify(posts, null, 2)))
        .catch(err => console.log(err))
    },

    readAllPublishedPosts() {
        return prisma.post.findMany({
            include: {
                category: true,
                tags: {
                    select: {
                        name: true
                    }
                }
            },
            where: {
                published: true
            }
        })
        .then(posts => console.log('Posts', JSON.stringify(posts, null, 2)))
        .catch(err => console.log(err))
    },

    updatePost(id, newData) {
        return prisma.post.update({
            where: {
                id
            },
            data: {
                title: newData.title,
                slug: newData.slug,
                content: newData.content,
                published: newData.published,
                categoryId: newData.categoryId,
                tags: {
                    set: newData.tags.map(tag => ({id: tag,})),
                },
            },

        })
        .then(post => console.log('Post aggiornato', post))
        .catch(err => console.log(err))
    },

    deletePost(id) {
        return prisma.post.delete({
            where: {
                id
            }
        })
        .then(post => console.log('Post eliminato', post))
        .catch(err => console.log(err))
    }

}