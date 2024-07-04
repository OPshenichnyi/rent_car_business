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
      required: function (this: IUser) {
        if (!this.googleId) return true;
      },
    },
    googleId: {
      type: String,
      required: function (this: IUser) {
        if (!this.password) return true;
      },
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.User ||
  mongoose.model<IUser>('User', userSchema);
