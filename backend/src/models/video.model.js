import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // Cloudinary URL
            required: true,
        },
        thumbnail: {
            type: String, // Assuming it's a URL or file path
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // Duration in seconds or minutes
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt`
    }
);

// Add pagination plugin
videoSchema.plugin(mongooseAggregatePaginate);

// Export the model
export const Video = mongoose.model("Video", videoSchema);
