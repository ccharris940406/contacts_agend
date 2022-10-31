/**
 * @abstract Controller for contancts model
 * @author Carlos C. Harris Castillo <ccharris94@gmail.com>
 */

const {contactsModel} = require('../models');

/**
 * @abstract Gets contancts collection
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async(req, res) => {
    const data = await contactsModel.find({});
    res.send({data});
}

/**
 * @abstract Gets a item from contacts collection
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}

/**
 * @abstract Creates a contact 
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res) => {

}

/**
 * @abstract Updates a contact 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = {getItems, getItem, createItem, deleteItem}