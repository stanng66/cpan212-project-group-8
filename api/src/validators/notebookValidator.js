function validateNotebookEntry(req,res,next){
    const {
        title,
        content
    } = req.body;

// submissions that would be rejected:
// if the title is missing, not a string, or empty
// if the content is missing, not a string, or empty
// if the title or content contains only whitespace

    if (typeof title !== "string"||title.trim()===""){
        return res.status(400).json({
            error:"Add a Title to this Notebook Entry."
        });
    }

    if (typeof content !=="string"||content.trim()===""){
        return res.status(400).json({
            error:"Add Content to this Notebook Entry."
        });
    } 
    next();

}
export { validateNotebookEntry};