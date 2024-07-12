const allStudent = (req,res) =>{
    res.send("all student")
}

const deleteStudent = (req,res) => {
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if(id == 10){
        res.send("Ye id delete nhi ho sakti.")
    }
    else{
        res.send(`${id}`)
    }
}

export {allStudent,deleteStudent}