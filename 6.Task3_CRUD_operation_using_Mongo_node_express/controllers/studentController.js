import studentModel from "../models/Student.js"

class studentController {

    static createDoc = async (req, res) => {
        try {
            // console.log(req.body); // Log the incoming data
            const { name, age, fees } = req.body;
            const doc = new studentModel({
                name: name,
                age: age,
                fees: fees
            })

            // Saving document
            const result = await doc.save()
            // console.log(result);
            res.redirect('/student');
        } catch (error) {
            console.error('Error deleting document:', error);
            res.status(500).send('Internal Server Error');
        }
    };
    
    


    static editDoc = async (req,res)=>{
        // console.log(req.params.id)
        try {
            const result = await studentModel.findById(req.params.id)
            // console.log(result)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error)
        }

        
    }
    
    static updateDocbyId = async (req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
            // console.log(result)
            res.redirect('/student')
        } catch (error) {
            
        }
       
    }
    
    static deleteDocById = async(req,res)=>{
        // console.log(req.params.id)
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
        
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await studentModel.find();
            // console.log(result);
            res.render("index", { result: result });
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching data.");
        }
    };
    
}





export default studentController