import path from 'path';
import fs from 'fs';
import { Video } from '../models/video.model.js'; // Import your video model

export const uploadVideo = async (req, res) => {
    try {
        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Path of the uploaded video file
        const videoPath = path.join(__dirname, "../public/temp", req.file.filename);

        // You can also process and save the metadata (e.g., title, description, etc.)
        const { title, description, duration } = req.body;

        if (!title || !description || !duration) {
            // If any required field is missing
            return res.status(400).json({ error: "Title, description, and duration are required" });
        }

        // Create a new Video document
        const newVideo = new Video({
            videoFile: `/public/temp/${req.file.filename}`, // Store the file path in the database
            thumbnail: `/public/temp/${req.file.filename}`, // Assuming the thumbnail is the same as the video file for simplicity
            title,
            description,
            duration,
            views: 0, // Default to 0 views
            isPublished: true, // Assuming the video is published by default
            owner: req.user.id // Assuming the user ID is attached to `req.user` after authentication
        });

        // Save the video to the database
        await newVideo.save();

        // Respond with the uploaded video data
        res.status(201).json({
            message: "Video uploaded successfully",
            video: newVideo
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};
