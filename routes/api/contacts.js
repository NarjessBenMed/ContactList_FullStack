const express = require("express");
const router = express.Router();

const Contact = require("../../models/Contact");

/// @route  get api/items

router.get("/", (req, res) => {
  Contact.find().then(contacts => res.json(contacts));
});

//// @route Post api/contacts

router.post("/", (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });
  newContact.save().then(contact => res.json(contact));
});

//////  @desc Delete
router.delete("/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => contact.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
///// update

router.put("/:id", (req, res) => {
  Contact.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,

        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      }
    }
  )
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
