```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, name: 1 } }).then(user => {
  if (!user) {
    console.log('User not found');
  } else {
    console.log(user.name);
  }
});
```