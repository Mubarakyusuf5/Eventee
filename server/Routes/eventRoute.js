const express = require("express")
const router = express.Router()
const { createEvent, displayEvent, displayEventById, updateEvent, deleteEvent } = require("../controllers/eventController")


router.post("/createEvent", createEvent)
router.get("/displayEvent", displayEvent)
router.get("/displayEventById/:id", displayEventById)
router.put("/updateEvent/:id", updateEvent)
router.delete("/deleteEvent/:id", deleteEvent)



module.exports = router;