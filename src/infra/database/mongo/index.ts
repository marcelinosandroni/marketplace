import mongoose from 'mongoose'

export const MongoDatabase = {
  async connect(url: string) {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      ssl: true
    })
  }
}
