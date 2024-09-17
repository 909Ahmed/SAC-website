const asyncHandler = require("express-async-handler");
const { Event } = require("../models/events");

// to get all Events
const getAllEvents = asyncHandler(async (req, res) => {
  const rows = await Event.findAll();
  if (!rows) {
    return res.status(204).json({
      msg: `No rows in the table`,
    });
  }
  res.json(rows);
});

// to get a Event by id
const getSingleEvent = asyncHandler(async (req, res) => {
  // getting the id from params and storing it as EventID
  const { id: EventID } = req.params;

  const row = await Event.findByPk(EventID);
  if (!row) {
    return res.status(204).json({
      msg: "Requested id not found",
    });
  }

  return res.json(row);
});

const postEvent = asyncHandler(async (req, res) => {
  // assuming the details to put is present in req.body
  const event = await Event.create(req.body);
  res.status(201).json({
    msg: `Event created with ${event}`,
  });
});

const deleteEvent = asyncHandler(async (req, res) => {
  // assuming Event_id is present req.params
  const { id: Event_id } = req.params;
  // finding the Event by id,
  const event = await Event.findByPk(Event_id);
  // if Event not found return success status code with the message nothing to delete
  if (!event) {
    return res.status(200).json({
      msg: `nothing to delete`,
    });
  }
  // destroy method in sequelize
  await event.destroy();
  res.status(200).json({
    msg: `deleted`,
  });
});

module.exports = {
  getAllEvents,
  getSingleEvent,
  postEvent,
  deleteEvent,
};