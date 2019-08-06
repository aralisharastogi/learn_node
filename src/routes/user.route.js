const express = require('express');
const router = express.Router();

/*router.get('/', (req, res) => {
    res.send('Hellp World');
}); */                      // '/' is used to represent the root of the website and the second argument is the call back function which will be called when we have an request to the first argument
const users = [
    {
        fname: 'Alisha',
        lname: 'Rastogi',
        address: {
            city: 'Ghaziabad',
            society: 'Amarpali Royal',
        },
        hobbies: ['Chatting', 'Dancing'],
    },
    {
        fname: 'Durgesh',
        lname: 'Pal',
    }
]; 
router.get('/', (req, res) => {
    res.send(users);
});


module.exports = router;