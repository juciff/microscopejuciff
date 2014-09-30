var postsData = [
  {

    title: 'Introducing Telescope',
    author: 'Sacha greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  },

  {
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },

  {

    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});
