const Note = require('../models/Note');

const createNote = async (req,res) =>{
    try{
        const { title,content } = req.body;
        if(!title || !content)
        {
            return res.status(400).json({
                success: false,
                message: "Title and content cannot be empty"
            });
        }
        const note = await Note.create({
            title,
            content
        });
        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: note
        });
    }
    catch(err)
    {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const getAllNotes = async(req,res) =>{
    try{
        const notes = await Note.find().sort({createdAt: -1});
        return res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });
    }
    catch(err)
    {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const getNoteById = async(req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note)
        {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: note
        });
    }
    catch(err)
    {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById
};