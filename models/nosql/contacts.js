const mongoose = require('mongoose')

const ContactsSchema = new mongoose.Schema(
    {
        name:{
            firstName: {
                type: 'String',
            },
            secondName: {
                type: 'String'
            }
        },
        phone:{
            type: 'String'
        },
        mail:{
            type: 'String'
        }
    });

module.exports = mongoose.model('contacts', ContactsSchema);