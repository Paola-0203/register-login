import express from 'express';
import userSchema from '../models/user.js';
import bcrypt from 'bcrypt';
const router = express.Router();

//crear usuario
router.post('/users', (req, res) => {
    const user = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(() => {
        res.send('Usuario creado');
    }).catch(err => {
        res.status(500).send('Error');
    });
});

//obtener usuarios
router.get('/users', (req, res) => {
    userSchema.find().then(users => {
        res.json(users);
    }).catch(err => {
        res.status(500).send('Error');
    });
});

//obtener usuario por id
router.get('/users/:id', (req, res) => {
    userSchema.findById(req.params.id).then(user => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    }).catch(err => {
        res.status(500).send('Error');
    });
});

//actualizar usuario
router.put('/users/:id', (req, res) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, {new: true}).then(user => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    }).catch(err => {
        res.status(500).send('Error');
    });
});

//eliminar usuario
router.delete('/users/:id', (req, res) => {
    userSchema.findByIdAndDelete(req.params.id).then(user => {
        if(user) {
            res.send('Usuario eliminado');
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    }).catch(err => {
        res.status(500).send('Error');
    });
});

//login
router.post('/users/login', async (req, res) => {

    try {
        const user = await userSchema.findOne({email: req.body.email});   
        if(!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        const valid = await bcrypt.compare(req.body.password, user.password);
        if(!valid) {
            return res.status(400).send('Contraseña incorrecta');
        }

        res.send('Usuario logueado');
    } catch(err) {
        console.log(err);
        res.status(500).send('Error');
    }

    // userSchema.findOne({email: req.body.email, password: req.body.password}).then(user => { 
    //     if(user) {
    //         res.send('Usuario logueado');
    //     } else {
    //         res.status(404).send('Usuario no encontrado');
    //     }
    // }).catch(err => {
    //     res.status(500).send('Error');
    // });
}
);




export default router;