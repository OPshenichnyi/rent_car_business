import mongoose, { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
  email: string;
  password?: string;
  googleId?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.User ||
  mongoose.model<IUser>('LoginUser', userSchema);
