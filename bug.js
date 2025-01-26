```javascript
const query = {  name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, name: 1 } }).then(user => {
  if (!user) {
    throw new Error('User not found');
  }
  console.log(user.name); // This will throw an error if user is null
});
```