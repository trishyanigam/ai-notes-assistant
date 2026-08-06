const { generateResponse,summarizeNote, improveGrammer, generateTitle, convertToBullets, chatWithNotes } = require("../services/aiService");
const Note = require("../models/Note.js");

const testAI = async(req,res)=>{
    try
    {
        const { prompt } = req.body;
        const response = await generateResponse(prompt);
        res.status(200).json({
            success: true,
            response
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const summarize = async(req,res)=>{
    try
    {
        const { content } = req.body;
        if(!content)
        {
            return res.status(400).json({
                success: false,
                message: "Content is required"
            });
        }
        const summary = await summarizeNote(content);
        res.status(200).json({
            success: true,
            summary
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const improve = async(req,res)=>{
    try{
        const {content} = req.body;
        if(!content)
        {
            return res.status(400).json({
                success: false,
                message: "Content required"
            });
        }
        const corrected = await improveGrammer(content);
        res.json({
            success: true,
            corrected
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const title = async(req,res)=>{
    try{
        const {content} = req.body;
        if(!content)
        {
            return res.status(400).json({
                success: false,
                message: "Content is required"
            });
        }
        const generatedTitle = await generateTitle(content);
        res.json({
            success: true,
            title: generatedTitle
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const bullets = async(req,res)=>{
    try{
        const {content} = req.body;
        if(!content)
        {
            return res.status(400).json({
                success: false,
                message: "Content is required"
            });
        }
        const bulletPoints = await convertToBullets(content);
        res.json({
            success: true,
            bulletPoints
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const chat = async(req,res)=>{
    try{
        const {question} = req.body;
        if(!question)
        {
            return res.status(400).json({
                success: false,
                message: "Question is required"
            });
        }
        const notes = await Note.find();
        const notesContent = notes.map(note => `Title: ${note.title} Content: ${note.content}`).join("\n\n");
        const answer = await chatWithNotes(question,notesContent);
        res.status(200).json({
            success: true,
            answer
        });
    }
    catch(err)
    {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { testAI, summarize, improve, title, bullets, chat };