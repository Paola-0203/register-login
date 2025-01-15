import mongoose from 'mongoose'; // Importación de módulos CommonJS 
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
//  const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});

export default mongoose.model('User', userSchema); // Exportación de un modelo de mongoose