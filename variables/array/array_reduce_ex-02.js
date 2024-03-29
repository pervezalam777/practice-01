/**
 * Input
 */
const data = [
  {
    id:'u001',
    name:'Ram',
    posts: [
      { id:'p001', text:'This is a post on my wall' },
      { id:'p002', text:'this is my second post' }
    ]
  },
  {
    id:'u002',
    name: 'Narender',
    posts: [
      { id:'p003', text:'This a post on javascript' },
      { id:'p004', text:'this is post on react' }
    ]
  }
];

const output = data.reduce((result, currentObject) => {
  const {id: userId, name, posts} = currentObject;
  result.users[userId] = { id: userId, name };

  const updatedResult = posts.reduce((res, curr) => {
    const { id: postId, text } = curr;
    res.posts[postId] = { id: postId, text };
    const ownerPostsIds = res.postOwner[userId] || [];
    ownerPostsIds.push(postId);
    res.postOwner[userId] = ownerPostsIds;

    return res;
  }, result) 

  return updatedResult;
}, {users:{}, posts:{}, postOwner:{}})

console.log('--------------------------');
console.log(output);

/**
 * output 
 * {
 *    users: {
 *      u001: { id:'u001', name:'Ram'}
 *      u002: {id:'u002', name: 'Narender'}
 *    }
 *    posts: {
 *      p001: { id:'p001', text:'This is a post on my wall' },
 *      p002: { id:'p002', text:'this is my second post' },
 *      p003: { id:'p003', text:'This a post on javascript' },
 *      p004: { id:'p004', text:'this is post on react' }
 *    }
 *    postOwner: {
 *      u001: ['p001', 'p002'],
 *      u002: ['p003', 'p004']
 *    }
 * }
 * 
 */


