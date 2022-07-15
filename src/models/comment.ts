import { User } from './user'

interface BasicCommon {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
}

interface CommentReplyingTo extends BasicCommon {
  replyingTo?: string
}

export interface Comment extends CommentReplyingTo {
  replies?: CommentReplyingTo[]
}
