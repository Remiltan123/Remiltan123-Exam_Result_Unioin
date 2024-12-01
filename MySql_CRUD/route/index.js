const express = require('express');
const router = express.Router();

router.post("/addStudent", (req, res) => {
    try {
        
        const sql = "INSERT INTO STUDENT (sid, sname) VALUES (?, ?)";
        const values = [req.body.sid, req.body.sname];
        
        req.db.query(sql, values, (err) => {
            if (err) {
                console.error("Error executing query: ", err);
                return res.status(500).json({ error: "Database error" });
            }
            res.status(200).json({ message: "Student added successfully" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.get('/GetAllStudent',(req,res)=>{
    const sql = "SELECT * FROM STUDENT";
    req.db.query(sql,(err,result)=>{
        if(err){
            console.error("Error executing query: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({succuess:true, Data:result})
    })

})

// ? mark take the array format input
router.post('/student/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM STUDENT WHERE sid = ?";
    req.db.query(sql, [id], (err,result)=>{
        if(err){
            console.error("Error executing query: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        if(result.length>0){
            res.status(200).json({succuess:true, Data:result})
        }else{
            res.status(200).json({succuess:false, meassage:"Student Not found"})
        }
        
    })

})

//update the student
router.put("/updateStudent/:id", (req, res) => {

    const sql = "UPDATE STUDENT SET sname = '" +
        req.body.sname +
        "' , sid = " +
        req.body.sid +
        " WHERE sid = " +
        req.params.id

        req.db.query(sql,  (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Student Updates fail" });
            }

            // Check if any rows were affected
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Student not found" });
            }
    
            res.status(200).json({ success: true, message: "Student updated successfully" });
        });
})

router.delete("/deleteStudent/:id",(req,res)=>{
    const id = req.params.id
    const sql = "DELETE FROM STUDENT WHERE sid = " + id ;
    req.db.query(sql,(err,result)=>{
        if (err) {
            return res.status(500).json({ error: "Student Updates fail" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ success: true, message: "Student Deleted" });

    })
})






module.exports = router;
