import mongoose from 'mongoose';
import Sequalize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

//mongo connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    Gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelize = new Sequalize('database', null, null, {
    dialect: 'sqlite',
    storage: './alien.sqlite',

})

const Aliens = sequelize.define('aleans', {
    firstName: { type: Sequalize.STRING },
    lastName: { type: Sequalize.STRING },
    planet: { type: Sequalize.STRING }
})

export { Friends, Aliens }