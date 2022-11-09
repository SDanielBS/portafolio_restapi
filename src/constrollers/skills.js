import { pool } from '../db.js'

export const getSkills = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM skills')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: "something was wrong"
    })
  }
}

export const getSkill = async (req, res) => {
  try{  
    const [rows] = await pool.query('SELECT * FROM skills WHERE skillId = ?', [req.params.id])
    if (rows.length > 0) {
      res.json(rows[0])
    } else {
      res.status(404).json({
        message: "Skill not found"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "something was wrong"
    })
  }
}

export const createSkills = async (req, res) => {
  try{  
    const { skillName, skillLevel } = req.body

    const [result] = await pool.query('INSERT INTO skills (skillName, skillLevel) VALUES (?, ?)', [skillName, skillLevel])
    res.send({
        skillId: result.insertId,
        skillName,
        skillLevel
    })
  } catch (error) {
    return res.status(500).json({
      message: "something was wrong"
    })
  }
}

export const updateSkills = async (req, res) => {
  try{  
    const {id} = req.params
    const {skillName, skillLevel} = req.body
    const [result] = await pool.query('UPDATE skills SET skillName = IFNULL(?,skillName), skillLevel = IFNULL(?,skillLevel) WHERE skillId = ?', [skillName, skillLevel, id])
    
    if(result.affectedRows > 0) {
      res.json({
        message: "Skill updated"
      })
    } else {
      res.status(404).json({
        message: "Skill not found"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "something was wrong"
    })
  }
}

export const deleteSkills = async(req, res) => {
  try{  
    const [result] = await pool.query('DELETE FROM skills WHERE skillId = ?', [req.params.id])

    if(result.affectedRows > 0) {
      res.json({
        message: "Skill removed"
      })
    } else {
      res.status(404).json({
        message: "Skill not found"
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "something was wrong"
    })
  }
}