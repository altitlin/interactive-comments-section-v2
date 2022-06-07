import { User } from './user'

interface CommentCommon {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
}

interface CommentReplyingTo extends CommentCommon {
  replyingTo: string
}

export interface CommentWithReplies extends CommentCommon {
  replies?: CommentReplyingTo[]
}
