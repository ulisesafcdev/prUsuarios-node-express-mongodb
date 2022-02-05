// invocamos a mongoose
const mongoose =  require('mongoose');

const password = 'ulisesafcdev';
const dbname = 'listado'
const uri = `mongodb+srv://ulisesafcdev:${password}@cluster0.mprdk.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});