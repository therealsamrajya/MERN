import express from "express";
import { Book } from "../models/BookModel.js";
import mongoose from "mongoose";
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const { title, author, publishYear } = request.body;

    if (!title || !author || !publishYear) {
      return response.status(400).send({
        message: "All fields are required",
      });
    }

    const newBook = { title, author, publishYear };

    const book = await Book.create(newBook);
    return response.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    // Convert the id to an ObjectId using the new keyword
    const bookId = new mongoose.Types.ObjectId(id);
    // Use the converted ObjectId to find the book
    const book = await Book.findById(bookId);
    if (!book) {
      return response.status(404).send({ message: "Book not found" });
    }
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { title, author, publishYear } = request.body;

    if (!title || !author || !publishYear) {
      return response.status(400).send({
        message: "Send all required fields",
      });
    }

    const { id } = request.params;
    // Convert the id to an ObjectId using the new keyword
    const bookId = new mongoose.Types.ObjectId(id);
    // Use the converted ObjectId to update the book
    const result = await Book.findByIdAndUpdate(bookId, request.body, {
      new: true,
    });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response
      .status(200)
      .send({ message: "Book updated successfully", data: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//deleting book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const bookId = new mongoose.Types.ObjectId(id);
    const result = await Book.findByIdAndDelete(bookId);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
