const crudCategories = require('./utils/crud-categories');
const crudTags = require('./utils/crud-tags');
const crudPosts = require('./utils/crud-posts');

// crudCategories.createCategory('Informatica');
// crudCategories.createManyCategories(['Arte', 'Sport', 'Cultura', 'Games']);

// crudTags.createTag('Animazione');
// crudTags.createManyTags(['Hobby', 'Design', 'Cucina']);

// crudPosts.createPost({
//     title: 'Design e tempo libero',
//     slug: 'design-e-tempo-libero',
//     content: 'lorem ipsum',
//     published: true,
//     categoryId: 8,
//     tags: [5,6]
// });

crudPosts.createPost({
    title: 'Videogames e passioni',
    slug: 'videogames-e-passioni',
    content: 'content',
    published: true,
    categoryId: 11,
    tags: [4]
});






// crudPosts.createManyPosts(
//     {
//         title: 'Videogames e passioni',
//         slug: 'videogames-e-passioni',
//         content: 'lorem ipsum',
//         published: true,
//         categoryId: 12,
//     },
//     {
//         title: 'La Cucina nei Cartoni',
//         slug: 'la-cucina-nei-cartoni',
//         content: 'lorem ipsum',
//         published: false,
//         categoryId: 9,
//     }
// );

crudPosts.readAllPosts();
crudPosts.readPostBySlug('design-e-tempo-libero');
crudPosts.readAllPublishedPosts();
crudPosts.readPostByContains('content');

// crudPosts.updatePost(5,{
//     title: 'La Cucina nelle Fiabe',
//     slug: 'la-cucina-nele-fiabe',
//     content: 'lorem ipsum',
//     published: false,
//     categoryId: 10,
//     tags: [7,4]
// });

// crudPosts.deletePost(3);


