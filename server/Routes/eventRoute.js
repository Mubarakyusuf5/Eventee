const express = require("express")
const router = express.Router()
const { createEvent, displayEvent, displayEventById, updateEvent, deleteEvent } = require("../controllers/eventController")


router.post("/createEvent", createEvent)
router.get("/displayEvent", displayEvent)
router.get("/displayEventById", displayEventById)
router.put("/updateEvent", updateEvent)
router.delete("/deleteEvent", deleteEvent)



module.exports = router;