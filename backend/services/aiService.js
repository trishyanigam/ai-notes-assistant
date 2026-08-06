const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

const generateResponse = async(prompt) =>{
    try
    {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages:[
            {
                role: "user",
                content: prompt
            }
        ]
        });
    return response.choices[0].message.content;;
    }
    catch(err)
    {
        throw err;
    }
};

const summarizeNote = async(content)=>{
    const prompt = `You are an expert note summarizer. Summarize the following note in less than 80 words. Return plain text only. Note:${content}`;
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages:[
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0].message.content;
};

const improveGrammer = async(content)=>{
    const prompt = `You are an English grammer expert. Improve the grammer of the following note. Do NOT change its meaning. Return only the corrected text. Note:${content}`;
    const response = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0].message.content;
};

const generateTitle = async(content)=>{
    const prompt = `You are an expert content writer.

Generate a short and meaningful title.

Rules:
- Maximum 6 words
- No quotation marks
- Return only the title Note:${content}`;
    const response = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0].message.content;
};

const convertToBullets = async(content)=>{
    const prompt = `You are an expert note formatter.

Convert the following note into clear bullet points.

Rules:

- Keep important information.
- Do not change meaning.
- Return only bullet points.
- Do not add headings. Note:${content}`;
    const response = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0].message.content;
};

const chatWithNotes = async(question,notesContent)=>{
    const prompt = `You are an AI assistant.

Answer ONLY using the notes provided below.

If the answer is not available in the notes,
reply with:

"I couldn't find that information in your notes." Note:${notesContent} Question:${question}`;
    const response = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages:[
            {
                role: "user",
                content: prompt
            }
        ]
    });
    return response.choices[0].message.content;
};

module.exports = { generateResponse,summarizeNote,improveGrammer,generateTitle,convertToBullets,chatWithNotes };