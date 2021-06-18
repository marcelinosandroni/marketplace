import {HashComparer} from '../../data/contracts/cryptography/hashComparer'
import {Hasher} from '../../data/contracts/cryptography/hasher'
import {env} from '../../main/config/env'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer {
  rounds = env.bcryptRounds

  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.rounds)
    return bcrypt.hash(password, salt)
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}
